import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const stages = [
  {
    prefix: "I'm A",
    title: "Startup.",
    description: "Remarkable ideas often stall without the right team to bring them to life",
    ctaText: "Get Started",
    href: "#"
  },
  {
    prefix: "I'm An",
    title: "Enterprise.",
    description: "Scaling without the right infrastructure and expertise can lead to costly bottlenecks.",
    ctaText: "Explore More",
    href: "#"
  },
  {
    prefix: "I Need A",
    title: "Rescue.",
    description: "A messy codebase and tech debt are suffocating your progress.",
    ctaText: "Need a Fix",
    href: "#"
  }
];

const StageSupport = () => {
  return (
    <section className="py-20 bg-[#F8F9FB]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Backing Your Up At <span className="text-[#1877FF]">Every Stage Of Your Progress</span>
          </h2>
          <p className="text-lg text-[#7a7a7a] max-w-3xl mx-auto">
            From launching startups to expanding enterprises, or recovering from setbacks, we help businesses overcome every challenge on their journey.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {stages.map((stage, index) => (
            <div key={index}
              className={`relative p-8 rounded-3xl border-0 shadow-md overflow-hidden hover:scale-105 transition-transform duration-300 group ${index === 1 ? 'bg-[#1877FF] text-white' : index === 0 ? 'bg-[#E6F0FF]' : 'bg-[#E6F4FF]'} `}
            >
              {/* SVG Backgrounds */}
              {index === 0 && (
                <svg className="absolute bottom-0 left-0 w-3/4 h-2/3 opacity-40" viewBox="0 0 300 180" fill="none">
                  <rect x="0" y="40" width="220" height="80" rx="24" fill="#B3D6FF" />
                  <rect x="40" y="100" width="180" height="60" rx="20" fill="#90C8FF" />
                </svg>
              )}
              {index === 1 && (
                <svg className="absolute bottom-0 left-0 w-full h-full opacity-30" viewBox="0 0 300 300" fill="none">
                  <circle cx="220" cy="220" r="100" fill="#1563D7" />
                  <rect x="0" y="120" width="300" height="80" rx="40" fill="#1563D7" />
                </svg>
              )}
              {index === 2 && (
                <svg className="absolute bottom-0 right-0 w-3/4 h-2/3 opacity-30" viewBox="0 0 300 180" fill="none">
                  <rect x="80" y="40" width="180" height="80" rx="24" fill="#B3D6FF" />
                  <rect x="120" y="100" width="140" height="60" rx="20" fill="#90C8FF" />
                </svg>
              )}
              <div className="space-y-4 relative z-10">
                <div className="space-y-2">
                  <p className={`text-lg ${index === 1 ? 'text-white/80' : 'text-[#1877FF]'}`}>{stage.prefix}</p>
                  <h3 className={`text-3xl font-bold ${index === 1 ? 'text-white' : 'text-[#1877FF]'}`}>{stage.title}</h3>
                </div>
                <p className={`leading-relaxed ${index === 1 ? 'text-white' : 'text-[#222]'}`}>{stage.description}</p>
                <button className={`flex items-center gap-2 px-6 py-2 rounded-full border-2 font-semibold shadow transition-all
                  ${index === 1 ? 'border-white bg-white text-[#1877FF] hover:bg-[#222] hover:text-white' : 'border-[#1877FF] bg-white text-[#1877FF] hover:bg-[#1877FF] hover:text-white'}`}
                >
                  {stage.ctaText}
                  <span className={`inline-block w-6 h-6 rounded-full ${index === 1 ? 'bg-[#222]' : 'bg-[#1877FF]'} text-white flex items-center justify-center ml-2`}><ArrowRight className="w-4 h-4" /></span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-action section after cards */}
      <div className="mt-12">
        <div className="relative rounded-3xl w-full px-10 py-12 flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-[#101C3C] to-[#1746A0] overflow-hidden" style={{minHeight: '180px'}}>
          {/* Abstract wavy SVG background */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 180" fill="none" preserveAspectRatio="none">
            <path d="M0 90 Q300 0 600 90 T1200 90" stroke="#1746A0" strokeWidth="24" opacity="0.22" fill="none" />
            <path d="M0 140 Q300 50 600 140 T1200 140" stroke="#1877FF" strokeWidth="16" opacity="0.16" fill="none" />
            <path d="M0 180 Q300 100 600 180 T1200 180" stroke="#1877FF" strokeWidth="8" opacity="0.12" fill="none" />
          </svg>
          <div className="relative z-10">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">Got An Idea Or Concerns?<br />Let's Discuss.</h2>
          </div>
          <div className="relative z-10 mt-6 md:mt-0 md:ml-auto">
            <button className="flex items-center pl-6 pr-2 py-2 rounded-full border-2 border-white font-semibold text-white bg-transparent hover:bg-white/10 shadow-lg transition-all relative" style={{height: '48px', minWidth: '200px'}}>
              <span className="mr-4 text-lg">Explore More</span>
              <span className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1877FF] flex items-center justify-center border-2 border-white">
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M7 10h6m0 0l-3-3m3 3l-3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StageSupport;