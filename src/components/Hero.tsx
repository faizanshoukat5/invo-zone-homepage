import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { motion, useScroll, useTransform, useMotionTemplate, useSpring } from "framer-motion";


const Hero = () => {
  const ref = useRef(null);
  const nextSectionRef = useRef(null);
  // Scroll progress for sling animation
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // Animate the wave divider's Y position and curve as user scrolls
  const waveY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  // Use a spring for the wave curve for elastic/magnetic effect
  const rawCurve = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const waveCurve = useSpring(rawCurve, {
    stiffness: 180,
    damping: 16,
    mass: 0.6,
    restDelta: 0.5,
  });
  // Use motion template for reactive SVG path
  const wavePath = useMotionTemplate(
    `M0 0C480 ${waveCurve} 1440 0 1920 ${waveCurve}V100H0V0Z`
  );

  // Auto-scroll to next section when user scrolls down in hero
  // Only triggers once per entry
  React.useEffect(() => {
    const triggeredRef = { current: false };
    const unsubscribe = scrollYProgress.on("change", (v) => {
      // Move down if user scrolls past 70%
      if (!triggeredRef.current && v > 0.7) {
        triggeredRef.current = true;
        if (nextSectionRef.current) {
          nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }
      // Move up if user scrolls up past 30%
      if (!triggeredRef.current && v < 0.3) {
        triggeredRef.current = true;
        if (ref.current) {
          ref.current.scrollIntoView({ behavior: "smooth" });
        }
      }
      // Reset trigger if user is between 30% and 70%
      if (v >= 0.3 && v <= 0.7) {
        triggeredRef.current = false;
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, ref, nextSectionRef]);

  return (
    <>
      <section ref={ref} className="relative min-h-screen flex items-center justify-start overflow-hidden">
        {/* Video Background */}
        <video
          src="/hero-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        {/* Content - align left, vertical center, max-w-xl */}
        <div className="relative z-20 container mx-auto px-6 flex flex-col items-start justify-center min-h-screen text-white font-sans">
          {/* Badge */}
          <div className="mb-8">
            <span className="inline-block px-6 py-2 bg-transparent border border-white/60 rounded-full text-base font-medium tracking-tight shadow-none text-white/90" style={{letterSpacing: '0.01em'}}>
              Software Development Consulting
            </span>
          </div>
          {/* Main Heading */}
          <h1 className="text-left font-semibold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 max-w-xl" style={{fontFamily: 'Inter, Poppins, Arial, sans-serif', fontWeight: 600, letterSpacing: '-0.01em'}}>
            Future–Driven<br />Innovations.
          </h1>
          {/* Subheading */}
          <p className="text-left text-sm sm:text-base md:text-lg text-white/70 mb-6 max-w-md font-light tracking-tight" style={{fontFamily: 'Inter, Poppins, Arial, sans-serif', fontWeight: 300, letterSpacing: '0'}}>
            Fostering Growth For Startups, Enterprises, And Innovators.
          </p>
          {/* CTA Button */}
          <Button 
            size="lg" 
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/50 text-white bg-white/5 font-normal shadow-none hover:bg-white/15 hover:text-white transition-all text-xs md:text-sm"
            style={{ fontFamily: 'Inter, Poppins, Arial, sans-serif', fontWeight: 400, letterSpacing: '0.01em', backdropFilter: 'blur(2px)' }}
          >
            <Calendar className="mr-2 h-4 w-4" />
            Book a 15 min Call
          </Button>
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
        {/* Animated SVG Sling/Wave Divider for smooth transition */}
        <motion.div
          style={{ y: waveY }}
          className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-30 pointer-events-none"
        >
          <svg viewBox="0 0 1920 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-24">
            <motion.path
              d={wavePath}
              fill="#fff"
            />
          </svg>
        </motion.div>
      </section>
      {/* Next section placeholder for scroll target */}
      <div ref={nextSectionRef}></div>
    </>
  );
};

export default Hero;