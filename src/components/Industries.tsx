import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Circle } from "lucide-react";
import { useState } from "react";

const Industries = () => {
  const [currentIndustry, setCurrentIndustry] = useState(0);

  const industries = [
    {
      title: "Travel & Tourism",
      image: "https://invozone-backend.s3.us-east-1.amazonaws.com/travel_5213ff55c0.webp",
      services: [
        "Travel Booking Apps",
        "Flight and Hotel Comparison Tools",
        "Trip Planning Apps",
        "Travel Guides and Itinerary Apps"
      ],
      link: "#"
    },
    {
      title: "Real Estate",
      image: "https://invozone-backend.s3.us-east-1.amazonaws.com/realestate_544e623be9.webp",
      services: [
        "Property Listing Apps",
        "Real Estate Marketplaces",
        "Rental Management Apps",
        "Real Estate Investment Platforms"
      ],
      link: "#"
    },
    {
      title: "PropTech",
      image: "https://invozone-backend.s3.us-east-1.amazonaws.com/Group_1000007680_1_19d09f6f39.webp",
      services: [
        "Property Management Software",
        "Smart Building Technologies",
        "Virtual And Augmented Reality Apps",
        "Tenant Communication Platforms"
      ],
      link: "#"
    },
    {
      title: "On-demand",
      image: "https://invozone-backend.s3.us-east-1.amazonaws.com/Group_1000007681_1_f617eaaae0.webp",
      services: [
        "SuperApps",
        "Food Delivery Services",
        "Ride-Hailing Apps",
        "Home Services"
      ],
      link: "#"
    },
    {
      title: "Healthcare",
      image: "https://invozone-backend.s3.us-east-1.amazonaws.com/healthcare_b27e93b03c.webp",
      services: [
        "Telemedicine Platforms",
        "Healthcare CRM",
        "Medical Billing Applications",
        "Patient Portals"
      ],
      link: "#"
    },
    {
      title: "Fintech",
      image: "https://invozone-backend.s3.us-east-1.amazonaws.com/fintech_883a1cfb59.webp",
      services: [
        "Payment Gateways",
        "Digital Banking",
        "Lending Platforms",
        "Personal Finance Management"
      ],
      link: "#"
    },
    {
      title: "Food & Grocery",
      image: "https://invozone-backend.s3.us-east-1.amazonaws.com/food_and_groery_4a8bedd606.webp",
      services: [
        "Grocery Delivery Apps",
        "Meal Kit Delivery Services",
        "Recipe And Cooking Apps",
        "Food Waste Management Apps"
      ],
      link: "#"
    },
    {
      title: "E-commerce",
      image: "https://invozone-backend.s3.us-east-1.amazonaws.com/ecommerce_a8c373431e.webp",
      services: [
        "Social Commerce",
        "Subscription-Based E-commerce",
        "Marketplace Platforms",
        "Digital Goods E-commerce"
      ],
      link: "#"
    },
    {
      title: "Education",
      image: "https://invozone-backend.s3.us-east-1.amazonaws.com/education_592ecc3d5c.webp",
      services: [
        "Learning Management Systems",
        "Online Course Platforms",
        "Massive Open Online Courses",
        "Tutoring and Homework Help Apps"
      ],
      link: "#"
    }
  ];

  const nextIndustry = () => {
    setCurrentIndustry((prev) => (prev + 1) % industries.length);
  };

  const prevIndustry = () => {
    setCurrentIndustry((prev) => (prev - 1 + industries.length) % industries.length);
  };

  const currentData = industries[currentIndustry];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Expertise in Software Development Across Multiple Industries
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-background"
            onClick={prevIndustry}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-background"
            onClick={nextIndustry}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Industry Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mx-8">
            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src={currentData.image}
                  alt={currentData.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                {currentData.title}
              </h3>

              <div className="space-y-3">
                {currentData.services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Circle className="w-2 h-2 fill-primary text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>

              <Button>
                Explore More
              </Button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {industries.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndustry(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndustry ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;