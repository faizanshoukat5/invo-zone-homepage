import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const CaseStudies = () => {
  const cases = [
    {
      image: "https://invozone-backend.s3.us-east-1.amazonaws.com/Group_1000007654_b8e7b9380b.webp",
      type: "Development",
      category: "From Analog to Digital",
      title: "Turning Pen & Paper Processes into Agile SaaS Solutions.",
      summary: "Digitized workflows for improved efficiency and scalability.",
      logo: "https://invozone-backend.s3.us-east-1.amazonaws.com/column_logo_396544fd95.png",
      tech: ["React", "Node.js", "AWS"],
      link: "#"
    },
    {
      image: "https://invozone-backend.s3.us-east-1.amazonaws.com/Group_1000007653_d770abba36.webp",
      type: "AI-Powered Precision",
      category: "Real Time Factory Tracker",
      title: "Where Data Drives: Decisions, Efficiency, Downtime, Quality, Visibility, Competitivenes.",
      summary: "AI-powered analytics for real-time manufacturing insights.",
      logo: "https://invozone-backend.s3.us-east-1.amazonaws.com/global_reader_logo_62f45929d7.png",
      tech: ["Python", "TensorFlow", "Azure"],
      link: "#"
    },
    {
      image: "https://invozone-backend.s3.us-east-1.amazonaws.com/freshprep_6300c3130d.webp",
      type: "Resource Augmentation",
      category: "Food Delivery & Retail",
      title: "Quick & effective resource augmentation for agile development",
      summary: "Scaling teams for rapid product delivery in retail.",
      logo: "https://invozone-backend.s3.us-east-1.amazonaws.com/freshprep_Logo_956ab76922.png",
      tech: ["Vue.js", "Firebase", "Docker"],
      link: "#"
    },
    {
      image: "https://invozone-backend.s3.us-east-1.amazonaws.com/nymcard_f49e61a3a3.webp",
      type: "Application Modernisation",
      category: "A Fintech Card Issuer & Service Provider",
      title: "Managed IT Teams For Modernizing Global Payment Platform",
      summary: "Modernized payment infrastructure for global fintech.",
      logo: "https://invozone-backend.s3.us-east-1.amazonaws.com/nymcard_logo_e0308594bb.png",
      tech: ["Java", "Spring", "Kubernetes"],
      link: "#"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 md:mb-0">
            <span className="text-[#1877FF]">Case Study</span><span className="text-foreground">: We Don't Just Talk, We Deliver Results</span>
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#1877FF] text-foreground font-semibold shadow hover:bg-[#1877FF] hover:text-white transition-all ml-auto"
            style={{ minWidth: 140 }}
          >
            <span className="mr-2">View All</span>
            <span className="w-8 h-8 rounded-full bg-[#1877FF] flex items-center justify-center">
              <ArrowRight className="h-4 w-4 text-white" />
            </span>
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cases.map((caseStudy, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(24,119,255,0.12)" }}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => caseStudy.link !== '#' && window.open(caseStudy.link, '_blank')}
            >
              <div className="relative h-80 flex flex-col justify-end">
                <img 
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="absolute inset-0 w-full h-full object-cover z-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                {/* Blue pill for type */}
                <span className="absolute top-5 right-5 z-20 px-4 py-1 rounded-lg bg-[#1877FF] text-white text-xs font-semibold shadow">
                  {caseStudy.type}
                </span>
                {/* Category label */}
                <span className="absolute left-5 bottom-24 z-20 text-white text-sm font-semibold">
                  {caseStudy.category}
                </span>
                {/* Title */}
                <h3 className="relative z-20 text-white text-2xl font-bold leading-tight px-5 mb-12">
                  {caseStudy.title}
                </h3>
                {/* Blue circular button with arrow */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="absolute right-5 bottom-5 z-30 w-10 h-10 rounded-full bg-[#1877FF] flex items-center justify-center shadow-lg"
                >
                  <ArrowRight className="h-5 w-5 text-white" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;