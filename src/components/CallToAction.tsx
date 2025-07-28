import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your 
            <br />
            <span className="text-white/90">Digital Vision?</span>
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto">
            Let's discuss your project and explore how InvoZone can help you 
            build innovative solutions that drive growth and success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="group bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="group border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
            >
              View Our Portfolio
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mt-12 pt-8 border-t border-white/20">
            <div className="flex items-center space-x-2 text-white/90">
              <span className="text-2xl font-bold">99%</span>
              <span>Client Satisfaction</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <span className="text-2xl font-bold">24/7</span>
              <span>Support Available</span>
            </div>
            <div className="flex items-center space-x-2 text-white/90">
              <span className="text-2xl font-bold">15+</span>
              <span>Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;