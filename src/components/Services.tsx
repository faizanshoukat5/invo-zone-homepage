import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Smartphone, Cloud, Shield, Database, Zap, Cpu, Eye, Lock, Layers, BarChart2 } from "lucide-react";

import React, { useState } from "react";

const services = [
  {
    icon: Code,
    title: "Product Engineering",
    description: "Our Product Engineering Services cover product management, design, development, DevOps, testing, security & more.",
    features: [
      "Discovery Workshop",
      "Custom Software Development",
      "Web App Development",
      "Mobile App Development"
    ],
    tech: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg", alt: "Laravel" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg", alt: "Swift" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg", alt: "Kotlin" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", alt: "C#" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elixir/elixir-original.svg", alt: "Elixir" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-original.svg", alt: "Gatsby" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", alt: "Angular" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg", alt: "Go" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg", alt: ".NET" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB" }
    ]
  },
  {
    icon: Cpu,
    title: "Data & Artificial Intelligence",
    description: "AI, ML, Data Science, and analytics for smarter business decisions.",
    features: ["AI Consulting", "Machine Learning", "Data Analytics", "Big Data Solutions"],
    tech: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", alt: "TensorFlow" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg", alt: "R" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB" }
    ]
  },
  {
    icon: Smartphone,
    title: "Hire Dev",
    description: "Hire top developers for your next project or dedicated teams.",
    features: ["Dedicated Teams", "Staff Augmentation", "Project Outsourcing"],
    tech: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg", alt: "Angular" }
    ]
  },
  {
    icon: Cloud,
    title: "DevOps & CloudOps",
    description: "Cloud infrastructure, automation, and DevOps best practices.",
    features: ["Cloud Migration", "CI/CD Automation", "Infrastructure as Code"],
    tech: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg", alt: "AWS" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", alt: "Docker" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", alt: "Kubernetes" }
    ]
  },
  {
    icon: Layers,
    title: "Emerging Technologies",
    description: "Metaverse, AR/VR, Apple Vision Pro, Blockchain, and more.",
    features: ["Metaverse", "AR/VR", "Apple Vision Pro", "Blockchain"],
    tech: [
      { src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Unreal_Engine_Logo.svg", alt: "Unreal" },
      { src: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Unity_Technologies_logo.svg", alt: "Unity" },
      { src: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Blender_logo_no_text.svg", alt: "Blender" },
      { src: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Meta_Platforms_Inc._logo.svg", alt: "Meta" }
    ]
  },
  {
    icon: Lock,
    title: "Cyber Security",
    description: "Comprehensive security solutions for your digital assets.",
    features: ["Penetration Testing", "Security Audits", "Compliance"],
    tech: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", alt: "Linux" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg", alt: "Windows" }
    ]
  }
];

const Services = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeService = services[activeIdx];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Service Cards */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const IconComponent = service.icon;
              const isActive = idx === activeIdx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`rounded-2xl border border-[#e5e7eb] p-8 flex flex-col items-center shadow-sm transition-all duration-300 focus:outline-none ${isActive ? 'bg-[#1877FF] text-white border-[#1877FF]' : 'bg-[#F5F7FA] text-[#222] hover:border-[#1877FF] hover:shadow-lg'}`}
                  style={{ cursor: "pointer" }}
                >
                  <div className={`w-14 h-14 flex items-center justify-center mb-4 ${isActive ? 'bg-white/20' : 'bg-white'} rounded-xl`}>
                    <IconComponent className={`w-8 h-8 ${isActive ? 'text-white' : 'text-[#1877FF]'}`} />
                  </div>
                  <h3 className={`text-lg font-bold mb-2 ${isActive ? 'text-white' : 'text-[#222]'}`}>{service.title}</h3>
                </button>
              );
            })}
          </div>
          {/* Right: Active Service Details */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-3xl font-bold text-[#222] mb-2">{activeService.title}</h2>
                <p className="text-lg text-[#7a7a7a] mb-4">{activeService.description}</p>
              </div>
              <Button className="bg-white border border-[#1877FF] text-[#1877FF] rounded-full px-6 py-2 font-semibold shadow hover:bg-[#1877FF] hover:text-white transition-all">
                View All <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              {activeService.features && activeService.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#1877FF] inline-block" />
                  <span className="font-semibold text-[#222]">{feature}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 items-center mb-6">
              {activeService.tech && activeService.tech.map((logo, idx) => (
                <img key={idx} src={logo.src} alt={logo.alt} className="h-8 w-8 object-contain" />
              ))}
            </div>
            <Button className="bg-[#1877FF] text-white rounded-full px-6 py-2 font-semibold shadow hover:bg-[#1456b8] transition-all w-fit self-start">
              View More <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;