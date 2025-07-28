import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";

const HireDeveloper = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const categories = [
    "All", "Front-End", "Back-End", "Low/No Code", "Database", "DevOps", "Mobile", "AI & ML"
  ];

  const technologies = [
    { name: "HTML", category: "Front-End", icon: "https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_17_ad882713c2.svg" },
    { name: "CSS", category: "Front-End", icon: "https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_6_0da85377ce.svg" },
    { name: "Javascript", category: "Front-End", icon: "https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_24_64f1e0fa79.svg" },
    { name: "React JS", category: "Front-End", icon: "https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_50_c93c4841d2.svg" },
    { name: "Vue JS", category: "Front-End", icon: "https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_63_d9105ea78f.svg" },
    { name: "Angular", category: "Front-End", icon: "https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_2_df8f915dc8.svg" },
    { name: "Node.js", category: "Back-End", icon: "https://invozone-backend.s3.us-east-1.amazonaws.com/node_js_ba6f19e132.svg" },
    { name: "Python", category: "Back-End", icon: "https://invozone-backend.s3.us-east-1.amazonaws.com/python_9828a276c4.svg" },
    { name: "Java", category: "Back-End", icon: "https://invozone-backend.s3.us-east-1.amazonaws.com/java_af6208f7f7.svg" },
    { name: "C#", category: "Back-End", icon: "https://invozone-backend.s3.us-east-1.amazonaws.com/c_e3bc66767f.svg" },
    { name: "MongoDB", category: "Database", icon: "https://invozone-backend.s3.us-east-1.amazonaws.com/mangodb_0b552dbfc4.svg" },
    { name: "PostgreSQL", category: "Database", icon: "https://invozone-backend.s3.us-east-1.amazonaws.com/postgresql_018ca56509.svg" },
    { name: "MySQL", category: "Database", icon: "https://invozone-backend.s3.us-east-1.amazonaws.com/mysql_99960cd0a3.svg" },
    { name: "AWS", category: "DevOps", icon: "https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_1_716b4e2e92.svg" },
    { name: "Docker", category: "DevOps", icon: "https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_10_1be6abb5a3.svg" },
    { name: "Kubernetes", category: "DevOps", icon: "https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_28_9cb2e449f5.svg" },
    { name: "React Native", category: "Mobile", icon: "https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_51_b75d5583be.svg" },
    { name: "Flutter", category: "Mobile", icon: "https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_14_a2da91a4de.svg" },
    { name: "Swift", category: "Mobile", icon: "https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_60_e37f871f35.svg" },
    { name: "TensorFlow", category: "AI & ML", icon: "https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_61_5a8a59d7bb.svg" },
    { name: "PyTorch", category: "AI & ML", icon: "https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_49_73c670d284.svg" },
    { name: "OpenAI", category: "AI & ML", icon: "https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_40_6029de2f93.svg" },
    { name: "Shopify", category: "Low/No Code", icon: "https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_57_a25c1b4ea5.svg" },
    { name: "WordPress", category: "Low/No Code", icon: "https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_67_8bd99d404b.svg" },
    { name: "Webflow", category: "Low/No Code", icon: "https://invozone-backend.s3.us-east-1.amazonaws.com/Mask_group_64_f72b309b77.svg" }
  ];

  const filteredTechnologies = technologies.filter(tech => {
    const matchesCat = activeCategory === "All" || tech.category === activeCategory;
    const matchesSearch = tech.name.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Build Your Own Team - Hire Developer
          </h2>
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Search className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
            </div>
          </div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl sm:max-w-3xl mx-auto">
            We've built our business by assembling a team of skilled developers, experts in the 
            frameworks and technologies driving modern solutions.
          </p>
        </div>

        {/* Search and Category Filter */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 sm:mb-8 gap-4">
          <div className="overflow-x-auto w-full md:w-auto custom-scrollbar">
            <div className="flex gap-2 whitespace-nowrap min-w-max">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 sm:px-6 py-2 rounded-full font-semibold border transition ${activeCategory === category ? 'bg-[#1877FF] text-white' : 'bg-white text-[#222]'}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <style>{`
            .custom-scrollbar::-webkit-scrollbar {
              height: 14px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: #1877FF;
              border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: #f3f6fa;
              border-radius: 10px;
            }
          `}</style>
          <div className="relative w-full md:w-72 lg:w-80">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="border rounded-full px-4 sm:px-5 py-2 w-full shadow focus:outline-none text-base sm:text-lg"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <span className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-[#1877FF]">
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </span>
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 sm:gap-6">
          {filteredTechnologies.map((tech, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <img 
                    src={tech.icon}
                    alt={tech.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-foreground text-xs sm:text-sm">{tech.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Highlight removed as requested */}
      </div>
    </section>
  );
}

export default HireDeveloper;