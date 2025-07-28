import { Shield, Clock, Trophy, Headphones } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Proven Expertise",
      description: "15+ years of experience delivering high-quality software solutions across various industries."
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "We pride ourselves on meeting deadlines and delivering projects on schedule without compromising quality."
    },
    {
      icon: Trophy,
      title: "Award-Winning Team",
      description: "Our developers are certified professionals with expertise in cutting-edge technologies and frameworks."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance to ensure your applications run smoothly."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Why Choose InvoZone
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Partner With Us?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We combine technical excellence with business acumen to deliver solutions that 
            not only meet your requirements but exceed your expectations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="group">
              <div className="bg-card p-8 rounded-2xl border shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-2 text-center h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <reason.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;