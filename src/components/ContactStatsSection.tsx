import React from "react";
import { useState, useEffect } from "react";

const ContactStatsSection = () => {
  // Award logo URLs
  const awardLogos = [
    "https://invozone.com/static/superb_company_in_2023-46c0b277a82d8f2079ec135b287577c7.svg",
    "https://invozone.com/static/selected_firms_top_ecommerce_development_company-7b6f23046d5a69342336c8c123021606.svg",
    "https://invozone-backend.s3.us-east-1.amazonaws.com/Tawk_to_partner_2_ddfb96b759.webp",
    "https://invozone.com/static/design_rush_best_ar_vr_agency-9dafbc7d12a5020f1e21c448e6dc75fe.svg",
    "https://invozone.com/static/good_firms_top_web_development_company-d8afdd3bf52e7c99198027728e6f7981.svg",
    "https://invozone.com/static/top_developers_2021-dd23c99461906b1c45b32e53a654c846.svg",
    "https://invozone.com/static/fastest_growing_app_development_company_2021-988b8e06a4ca171178eb147dc7aa5a67.svg",
    "https://invozone.com/static/featured_on_upcity-4f67e820876fba8ecad1a7712b52782f.svg",
    "https://invozone.com/static/tech_reviewer_top_software_developers_2020-562eec793e356113a009f4aed5e48ded.svg"
  ];

  // Slider state
  const [startIdx, setStartIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIdx(prev => (prev + 1) % awardLogos.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [awardLogos.length]);

  return (
    <section className="bg-white rounded-2xl shadow-lg p-8 max-w-5xl mx-auto mt-16 border border-[#1877FF]">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Contact Form */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-2">Your Vision, Our Expertise</h2>
          <p className="font-semibold mb-6">Submit your information to drive success forward.</p>
          <form className="space-y-4">
            <div className="flex gap-4 mb-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="engagement" className="accent-[#1877FF]" /> Staff Augmentation <span className="text-gray-400">?</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="engagement" className="accent-[#1877FF]" /> Dedicated Teams <span className="text-gray-400">?</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="engagement" className="accent-[#1877FF]" /> Fixed Gigs <span className="text-gray-400">?</span>
              </label>
            </div>
            <div className="flex gap-4">
              <input type="text" placeholder="Full name*" className="border rounded-lg px-4 py-2 w-full" />
              <input type="text" placeholder="Contact Number" className="border rounded-lg px-4 py-2 w-full" />
            </div>
            <input type="email" placeholder="Email*" className="border rounded-lg px-4 py-2 w-full" />
            <input type="text" placeholder="Enter your preferred tech stack..." className="border rounded-lg px-4 py-2 w-full" />
            <textarea placeholder="Tell us how we can help.*" className="border rounded-lg px-4 py-2 w-full min-h-[80px]" />
            <div className="flex gap-4 items-center">
              <label className="flex items-center gap-2">
                <input type="checkbox" /> Get NDA
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" /> I agree with <a href="#" className="text-[#1877FF] underline">T&Cs</a>
              </label>
            </div>
            <button type="submit" className="flex items-center gap-2 bg-[#1877FF] text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-[#1456b8] transition-all">
              Send Message <span className="text-xl">→</span>
            </button>
          </form>
        </div>
        {/* Stats */}
        <div className="flex-1 bg-[#F8F9FB] rounded-2xl p-8 flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-6">Company’s Stats</h3>
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="flex flex-col items-center">
              <img src="/icons/projects.svg" alt="Projects" className="w-12 h-12 mb-2" />
              <span className="text-2xl font-bold">300+</span>
              <span className="text-gray-600 text-sm">Successful Projects</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/icons/success.svg" alt="Success Rate" className="w-12 h-12 mb-2" />
              <span className="text-2xl font-bold">97%</span>
              <span className="text-gray-600 text-sm">Success Rate</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/icons/team.svg" alt="Developers & Engineers" className="w-12 h-12 mb-2" />
              <span className="text-2xl font-bold">500+</span>
              <span className="text-gray-600 text-sm">Developers & Engineers</span>
            </div>
            <div className="flex flex-col items-center">
              <img src="/icons/experience.svg" alt="Years of Experience" className="w-12 h-12 mb-2" />
              <span className="text-2xl font-bold">10+</span>
              <span className="text-gray-600 text-sm">Years of Experience</span>
            </div>
          </div>
          <div className="relative h-20 flex items-center justify-center mt-4 overflow-hidden">
            <div
              className="flex gap-4 w-full"
              style={{
                transform: `translateX(-${startIdx * 33.33}%)`,
                transition: 'transform 0.7s cubic-bezier(0.4,0,0.2,1)'
              }}
            >
              {awardLogos.concat(awardLogos).map((logo, idx) => (
                <div
                  key={logo + idx}
                  className="flex flex-col items-center"
                  style={{
                    minWidth: '33.33%',
                    opacity: idx >= startIdx && idx < startIdx + 3 ? 1 : 0.3,
                    transition: 'opacity 0.7s'
                  }}
                >
                  <img
                    src={logo}
                    alt={`Award ${idx + 1}`}
                    className="h-24 w-24 object-contain drop-shadow-lg rounded-2xl bg-white"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactStatsSection;
