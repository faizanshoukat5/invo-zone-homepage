import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, Globe } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Users,
      number: "250+",
      label: "Expert Developers"
    },
    {
      icon: Award,
      number: "15+",
      label: "Years Experience"
    },
    {
      icon: Globe,
      number: "120+",
      label: "Countries Served"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                About InvoZone
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Transforming Ideas Into 
                <span className="text-primary"> Digital Reality</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                InvoZone is a leading software development company with over 15 years of experience 
                in delivering cutting-edge digital solutions. We specialize in custom software 
                development, mobile applications, and enterprise solutions that drive business growth.
              </p>
              <p className="text-muted-foreground">
                Our team of 250+ expert developers has successfully delivered 400+ products for 
                clients across 120+ countries, making us a trusted partner for startups, 
                enterprises, and Fortune 500 companies.
              </p>
            </div>
            
            <Button className="group">
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center space-x-6 p-6 bg-card rounded-2xl border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <highlight.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">{highlight.number}</div>
                  <div className="text-muted-foreground font-medium">{highlight.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;