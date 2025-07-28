
import React, { useState, useEffect, useRef } from "react";
import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useSpring, animated, config } from '@react-spring/web';

// Animated orbit avatars component
const OrbitAvatars = () => {
  const center = { x: 160, y: 130 };
  const radius = 100;
  const count = 6;
  const connectedRadius = 70;
  const [phase, setPhase] = useState<'orbit' | 'connect' | 'pm-connect'>('orbit');
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let running = true;
    let last = performance.now();
    function animate(now: number) {
      if (!running) return;
      const dt = (now - last) / 1000;
      last = now;
      if (phase === 'orbit') {
        setRotation((prev) => prev + dt * 40); // degrees per second
      }
      requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
    const timer1 = setTimeout(() => setPhase('connect'), 2000);
    const timer2 = setTimeout(() => setPhase('pm-connect'), 3500);
    return () => { running = false; clearTimeout(timer1); clearTimeout(timer2); };
  }, [phase]);

  // Calculate positions for avatars
  const positions = Array.from({ length: count }).map((_, idx) => {
    // For orbit phase, add rotation to theta
    const baseTheta = (2 * Math.PI * idx) / count;
    const theta = phase === 'orbit' ? baseTheta + (rotation * Math.PI / 180) : baseTheta;
    return {
      orbit: {
        x: center.x + radius * Math.cos(theta) - 28,
        y: center.y + radius * Math.sin(theta) - 28,
      },
      connect: {
        x: center.x + connectedRadius * Math.cos(baseTheta) - 28,
        y: center.y + connectedRadius * Math.sin(baseTheta) - 28,
      },
    };
  });

// SVG avatars for orbiting members
  const avatars = [
    // Male with beard
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" key="beard"><circle cx="16" cy="16" r="16" fill="#1877FF"/><ellipse cx="16" cy="20" rx="7" ry="6" fill="#fff"/><ellipse cx="16" cy="15" rx="5" ry="5" fill="#fff"/><ellipse cx="16" cy="15" rx="4" ry="4" fill="#1A2A3A"/><rect x="12" y="22" width="8" height="3" rx="1.5" fill="#1A2A3A"/></svg>,
    // Female with glasses
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" key="glasses"><circle cx="16" cy="16" r="16" fill="#1877FF"/><ellipse cx="16" cy="20" rx="7" ry="6" fill="#fff"/><ellipse cx="12" cy="15" rx="3" ry="3" fill="#fff"/><ellipse cx="20" cy="15" rx="3" ry="3" fill="#fff"/><ellipse cx="12" cy="15" rx="2" ry="2" fill="#1A2A3A"/><ellipse cx="20" cy="15" rx="2" ry="2" fill="#1A2A3A"/><rect x="14" y="22" width="4" height="2" rx="1" fill="#1A2A3A"/><rect x="10" y="15" width="12" height="1" fill="#1A2A3A"/></svg>,
    // Male with mustache
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" key="mustache"><circle cx="16" cy="16" r="16" fill="#1877FF"/><ellipse cx="16" cy="20" rx="7" ry="6" fill="#fff"/><ellipse cx="16" cy="15" rx="5" ry="5" fill="#fff"/><ellipse cx="16" cy="15" rx="4" ry="4" fill="#1A2A3A"/><rect x="13" y="22" width="6" height="2" rx="1" fill="#1A2A3A"/></svg>,
    // Male with glasses
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" key="male-glasses"><circle cx="16" cy="16" r="16" fill="#1877FF"/><ellipse cx="16" cy="20" rx="7" ry="6" fill="#fff"/><ellipse cx="12" cy="15" rx="3" ry="3" fill="#fff"/><ellipse cx="20" cy="15" rx="3" ry="3" fill="#fff"/><ellipse cx="12" cy="15" rx="2" ry="2" fill="#1A2A3A"/><ellipse cx="20" cy="15" rx="2" ry="2" fill="#1A2A3A"/><rect x="14" y="22" width="4" height="2" rx="1" fill="#1A2A3A"/><rect x="10" y="15" width="12" height="1" fill="#1A2A3A"/></svg>,
    // Female
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" key="female"><circle cx="16" cy="16" r="16" fill="#1877FF"/><ellipse cx="16" cy="20" rx="7" ry="6" fill="#fff"/><ellipse cx="16" cy="15" rx="5" ry="5" fill="#fff"/><ellipse cx="16" cy="15" rx="4" ry="4" fill="#1A2A3A"/><rect x="14" y="22" width="4" height="2" rx="1" fill="#1A2A3A"/></svg>,
    // Male
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" key="male"><circle cx="16" cy="16" r="16" fill="#1877FF"/><ellipse cx="16" cy="20" rx="7" ry="6" fill="#fff"/><ellipse cx="16" cy="15" rx="5" ry="5" fill="#fff"/><ellipse cx="16" cy="15" rx="4" ry="4" fill="#1A2A3A"/><rect x="14" y="22" width="4" height="2" rx="1" fill="#1A2A3A"/></svg>
  ];

  // PM avatar initial position (below avatars, then animates to center)
  const pmStart = { x: center.x + radius + 40, y: center.y + 40 };
  const pmEnd = { x: center.x - 48, y: center.y - 48 };

  return (
    <>
      {/* Connecting lines */}
      <svg className="absolute left-0 top-0 w-full h-full pointer-events-none" viewBox="0 0 320 260" fill="none">
        {/* Lines from PM to avatars, animate as PM moves to center */}
        {positions.map((pos, idx) => {
          const avatarPos = phase === 'orbit' ? pos.orbit : pos.connect;
          // PM position for line start
          const pmPos = phase === 'pm-connect'
            ? { x: pmEnd.x + 48, y: pmEnd.y + 48 }
            : { x: pmStart.x + 48, y: pmStart.y + 48 };
          return (
            <motion.line
              key={`pm-line-${idx}`}
              initial={false}
              animate={{
                x1: pmPos.x,
                y1: pmPos.y,
                x2: avatarPos.x + 28,
                y2: avatarPos.y + 28,
                opacity: phase === 'pm-connect' ? 1 : 0.7,
              }}
              transition={{ type: 'spring', stiffness: 120, damping: 18, delay: phase === 'pm-connect' ? 0.1 + idx * 0.08 : 0 }}
              stroke="#1877FF"
              strokeWidth="2.5"
            />
          );
        })}
      </svg>
      {/* Avatars */}
      <motion.div
        className="absolute left-0 top-0 w-full h-full"
        animate={phase === 'orbit' ? { rotate: rotation } : { rotate: 0 }}
        style={{ transformOrigin: `${center.x}px ${center.y}px` }}
      >
        {positions.map((pos, idx) => {
          const avatarPos = phase === 'orbit' ? pos.orbit : pos.connect;
          return (
            <motion.div
              key={idx}
              initial={false}
              animate={{
                x: avatarPos.x,
                y: avatarPos.y,
                scale: phase === 'orbit' ? 1 : 1.1,
              }}
              transition={{ type: 'spring', stiffness: 80, damping: 20 }}
              style={{ position: 'absolute', left: 0, top: 0 }}
            >
              <div className="w-12 h-12 rounded-full border-4 border-[#1877FF] bg-white flex items-center justify-center shadow-md overflow-hidden">
                {avatars[idx % avatars.length]}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
      {/* PM avatar, animates to center */}
      <motion.div
        className="absolute"
        initial={false}
        animate={phase === 'pm-connect'
          ? { x: pmEnd.x, y: pmEnd.y, scale: 1 }
          : { x: pmStart.x, y: pmStart.y, scale: 0.8 }}
        transition={{ type: 'spring', stiffness: 120, damping: 18 }}
        style={{ left: 0, top: 0, zIndex: 10 }}
      >
        <div className="w-24 h-24 rounded-full border-4 border-[#1877FF] bg-white shadow-lg flex flex-col items-center justify-center">
          {/* PM SVG avatar, more humanized style */}
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
            <circle cx="28" cy="28" r="28" fill="#1877FF" />
            <ellipse cx="28" cy="36" rx="14" ry="12" fill="#fff" />
            <ellipse cx="28" cy="24" rx="10" ry="10" fill="#fff" />
            <ellipse cx="28" cy="24" rx="8" ry="8" fill="#1A2A3A" />
            <rect x="20" y="40" width="16" height="5" rx="2.5" fill="#1A2A3A" />
            {/* Face details for PM */}
            <ellipse cx="24" cy="24" rx="2" ry="2" fill="#fff" />
            <ellipse cx="32" cy="24" rx="2" ry="2" fill="#fff" />
            <rect x="26" y="28" width="4" height="2" rx="1" fill="#fff" />
          </svg>
          <span className="text-xs font-semibold text-[#1877FF] mt-1">Your PM</span>
        </div>
      </motion.div>
    </>
  );
};


// Custom tab button to measure label width and position for underline
type TabButtonProps = {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

const TabButton: React.FC<TabButtonProps> = ({ active, onClick, children }) => {
  const labelRef = React.useRef<HTMLSpanElement>(null);
  const [underlineStyle, setUnderlineStyle] = React.useState<{ left: number; width: number }>({ left: 0, width: 0 });

  React.useEffect(() => {
    if (active && labelRef.current) {
      const rect = labelRef.current.getBoundingClientRect();
      const parentRect = labelRef.current.parentElement?.getBoundingClientRect();
      if (parentRect) {
        setUnderlineStyle({ left: rect.left - parentRect.left, width: rect.width });
      }
    }
  }, [active, children]);

  return (
    <button
      onClick={onClick}
      className={`relative px-6 py-3 rounded-xl flex-1 text-center font-semibold focus:outline-none ${
        active ? 'text-[#1877FF]' : 'text-muted-foreground hover:text-[#1877FF]'
      }`}
      style={{ background: 'none', border: 'none' }}
    >
      <span ref={labelRef}>{children}</span>
      {active && (
        <motion.span
          layout
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, left: underlineStyle.left, width: underlineStyle.width }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          className="absolute bottom-0 h-1 bg-[#1877FF] rounded-full"
          style={{ left: underlineStyle.left, width: underlineStyle.width }}
        />
      )}
    </button>
  );
};

const EngagementModels = () => {
  const [activeModel, setActiveModel] = useState(0);

  const models = [
    {
      title: "Product Development",
      subtitle: "Transforming your ideas into ready-to-launch products.",
      features: [
        "Early Growth Stage or Stealth Startup.",
        "Product Development Roadmap",
        "MVP Development",
        "Prototypes / POC"
      ]
    },
    {
      title: "Managed IT Systems",
      subtitle: "Streamlined IT management for smooth operations.",
      features: [
        "Scale and ongoing or live products.",
        "Refining Product Roadmaps for scalability.",
        "Completing Backlogs or Features",
        "Defined Technology Stacks"
      ]
    },
    {
      title: "Team Augmentation",
      subtitle: "Upgrade your team with specialized skills & expertise.",
      features: [
        "Operational team efficiency is high and nimble.",
        "Quick Turn-around times",
        "Access to the global talent pool",
        "Collaborate with in-house & Outsourced Teams"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Custom heading and subtitle to match screenshot */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Engagement </span>
            <span className="text-[#1877FF]">Models</span>
          </h2>
          <p className="text-lg text-[#5A6A85] max-w-2xl mx-auto font-medium" style={{lineHeight: '1.6'}}>Choose from flexible engagement models tailored to your needs, ensuring<br className="hidden md:block"/>seamless collaboration with time &amp; material or dedicated teams.</p>
        </div>

        {/* Tab Navigation with animated underline */}
        <div className="flex flex-col sm:flex-row justify-center mb-12 bg-muted/50 rounded-2xl p-2 max-w-2xl mx-auto relative">
          {/* Track tab label refs for underline positioning */}
          {models.map((model, index) => (
            <TabButton
              key={index}
              active={activeModel === index}
              onClick={() => setActiveModel(index)}
            >
              {model.title}
            </TabButton>
          ))}
        </div>

        {/* Active Model Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          {/* Left: Details */}
          <Card className="p-8 border-2 border-primary/20">
            <CardContent className="space-y-6 p-0">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {models[activeModel].title}
                </h3>
                <p className="text-muted-foreground">
                  {models[activeModel].subtitle}
                </p>
              </div>

              <div className="space-y-4">
                <AnimatePresence>
                  {models[activeModel].features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, y: 20, scale: 0.8 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 20, scale: 0.8 }}
                      transition={{ delay: index * 0.12 + 0.2, type: "spring", stiffness: 400, damping: 30 }}
                      className="flex items-center space-x-3"
                    >
                      <motion.span
                        initial={{ scale: 0.7 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="flex-shrink-0 w-7 h-7 bg-[#1877FF] rounded-full flex items-center justify-center shadow-md"
                      >
                        <Check className="w-4 h-4 text-white" />
                      </motion.span>
                      <span className="text-foreground font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="pt-6">
                <Button size="lg" className="flex items-center gap-2 px-6 py-2 rounded-full border-2 border-[#1877FF] text-[#1877FF] bg-white font-semibold shadow hover:bg-[#1877FF] hover:text-white transition-all">
                  View Details
                  <span className="inline-block w-8 h-8 rounded-full bg-[#1877FF] text-white flex items-center justify-center ml-2">
                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 10h6m0 0l-3-3m3 3l-3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Right: Network Diagram with live animation */}
          <div className="flex items-center justify-center">
            <motion.div className="relative w-[320px] h-[260px]" initial="hidden" animate="visible" variants={{hidden: {}, visible: {}}}>
              {/* Animated outer avatars in a circular orbit and animated PM avatar */}
              <OrbitAvatars />
            </motion.div>
          </div>
        </div>
{/* Add keyframes for fade-in and bounce-in animations globally */}
<style>{`
@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes bounce-in {
  0% { transform: scale(0.7); }
  60% { transform: scale(1.1); }
  100% { transform: scale(1); }
}
.animate-fade-in { animation: fade-in 0.6s cubic-bezier(.4,0,.2,1) both; }
.animate-bounce-in { animation: bounce-in 0.5s cubic-bezier(.4,0,.2,1) both; }
`}</style>
      </div>
    </section>
  );
};

export default EngagementModels;