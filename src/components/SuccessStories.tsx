import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const SuccessStories = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const stories = [
    {
      name: "David Smith",
      role: "CEO & Co-Founder - Easyfill",
      testimonial: "InvoZone has been a game-changer for us, offering fresh ideas and genuine support. This wasn't our first outsourcing experience, but it has definitely been the smoothest.",
      videoThumbnail: "https://invozone-backend.s3.us-east-1.amazonaws.com/Rectangle_19829_81dcf601de.webp",
      companyLogo: "https://invozone-backend.s3.us-east-1.amazonaws.com/Easyfill_27b51f4ed8.png",
      caseStudyLink: "#"
    },
    {
      name: "Oliver Wolff",
      role: "Kindle Product Manager",
      testimonial: "We partnered with InvoZone to enhance our Elixir SDK, and the process was seamless. Consistent communication and timely status updates, even with minor estimate shifts, allowed us to adapt efficiently. Their proactive approach kept us informed, and the code quality exceeded our expectations, reducing extensive testing.",
      videoThumbnail: "https://invozone-backend.s3.us-east-1.amazonaws.com/Rectangle_19829_6b12274dee.png",
      companyLogo: "https://invozone-backend.s3.us-east-1.amazonaws.com/kinde_ca9fa25ebc.png",
      caseStudyLink: "#"
    },
    {
      name: "Ron Zabel",
      role: "CEO - Crytool.io",
      testimonial: "InvoZone has been a game-changer for us, bringing fresh ideas and genuine support to our projects. This was not the first time we outsourced, but for sure the smoothest experience we had.",
      videoThumbnail: "https://invozone-backend.s3.us-east-1.amazonaws.com/Rectangle_19829_1_77a08bad66.png",
      companyLogo: "https://invozone-backend.s3.us-east-1.amazonaws.com/image_21_0b4dd18653.png",
      caseStudyLink: "#"
    }
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const currentStoryData = stories[currentStory];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Partner's Success Stories
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-background"
            onClick={prevStory}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-background"
            onClick={nextStory}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Story Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mx-8">
            {/* Video/Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src={currentStoryData.videoThumbnail}
                  alt={currentStoryData.name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <span className="text-sm text-muted-foreground">Play Video</span>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <img 
                src={currentStoryData.companyLogo}
                alt="Company logo"
                className="h-12 object-contain"
              />
              
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {currentStoryData.name}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {currentStoryData.role}
                </p>
              </div>

              <blockquote className="text-lg text-foreground/90 leading-relaxed italic">
                "{currentStoryData.testimonial}"
              </blockquote>

              <Button>
                View Case Study
              </Button>
            </div>
          </div>

          {/* Company Logos Strip */}
          <div className="mt-16 flex items-center justify-center space-x-8 opacity-60">
            <img src="https://invozone-backend.s3.us-east-1.amazonaws.com/Group_2_64c502a23f.png" alt="Company" className="h-8 grayscale hover:grayscale-0 transition-all" />
            <span className="text-muted-foreground">•</span>
            <img src="https://invozone-backend.s3.us-east-1.amazonaws.com/4j_LL_68_1cf139b098.png" alt="Company" className="h-8 grayscale hover:grayscale-0 transition-all" />
            <span className="text-muted-foreground">•</span>
            <img src="https://invozone-backend.s3.us-east-1.amazonaws.com/Group_1720e8c973.png" alt="Company" className="h-8 grayscale hover:grayscale-0 transition-all" />
            <span className="text-muted-foreground">•</span>
            <img src="https://invozone-backend.s3.us-east-1.amazonaws.com/Group_1_d29ba30c66.png" alt="Company" className="h-8 grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;