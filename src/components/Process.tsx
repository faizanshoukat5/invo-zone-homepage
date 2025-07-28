import { Lightbulb, FileText, Code, Rocket } from "lucide-react";

const Process = () => {
  const steps = [
    {
      step: "01",
      icon: Lightbulb,
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, requirements, and challenges to create a comprehensive project roadmap."
    },
    {
      step: "02", 
      icon: FileText,
      title: "Design & Prototyping",
      description: "Our design team creates wireframes, mockups, and interactive prototypes to visualize your solution before development."
    },
    {
      step: "03",
      icon: Code,
      title: "Development & Testing",
      description: "Our expert developers build your solution using agile methodologies with continuous testing and quality assurance."
    },
    {
      step: "04",
      icon: Rocket,
      title: "Launch & Support",
      description: "We deploy your solution and provide ongoing maintenance, updates, and 24/7 technical support."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Process
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How We Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our proven 4-step process ensures successful project delivery from 
            initial concept to final deployment and beyond.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Step Number */}
              <div className="text-6xl font-bold text-primary/20 mb-4">{step.step}</div>
              
              {/* Icon */}
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <step.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              
              {/* Connector Line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 left-full w-full h-px bg-border transform translate-x-4 -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;