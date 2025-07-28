import { Mail, Phone, Linkedin, X, Instagram, Youtube, Star } from "lucide-react";
import { Button } from "@/components/ui/button";


const Footer = () => {
  return (
    <footer className="bg-[#10162F] text-white pt-10 pb-4">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8 justify-between">
          {/* Left Column: Contact, Reviews, Socials */}
          <div className="bg-[#131A2F] rounded-2xl p-7 flex flex-col gap-7 min-w-[320px] max-w-[350px] border border-[#232A45]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#2563eb] rounded-full p-2"><Phone className="w-6 h-6" /></div>
                <span className="font-medium text-base">Direct Call</span>
              </div>
              <span className="text-lg font-semibold">+1 786 753 7752</span>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#2563eb] rounded-full p-2"><Mail className="w-6 h-6" /></div>
                <span className="font-medium text-base">Email Us</span>
              </div>
              <span className="text-lg font-semibold">sales@invozone.com</span>
            </div>
            <div className="border-t border-[#232A45] my-2" />
            <div>
              <span className="font-medium text-base flex items-center gap-2 mb-2"><Star className="w-5 h-5 text-yellow-400" />5 Star Reviews</span>
              <div className="flex gap-3 mt-2">
                {/* Review icons - replace with actual icons/images as needed */}
                <div className="rounded-full p-2 border border-[#232A45] flex items-center justify-center w-10 h-10"><span className="font-bold text-base">C</span></div>
                <div className="rounded-full p-2 border border-[#232A45] flex items-center justify-center w-10 h-10"><span className="font-bold text-base">F</span></div>
                <div className="rounded-full p-2 border border-[#232A45] flex items-center justify-center w-10 h-10"><Star className="w-5 h-5" /></div>
                <div className="rounded-full p-2 border border-[#232A45] flex items-center justify-center w-10 h-10"><span className="font-bold text-base">G2</span></div>
              </div>
            </div>
            <div className="border-t border-[#232A45] my-2" />
            <div>
              <span className="font-medium text-base mb-2 block">Our Socials</span>
              <div className="flex gap-3 mt-2">
                <a href="#" className="rounded-full border border-[#232A45] p-2 flex items-center justify-center w-10 h-10 hover:bg-[#232A45]"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="rounded-full border border-[#232A45] p-2 flex items-center justify-center w-10 h-10 hover:bg-[#232A45]"><X className="w-5 h-5" /></a>
                <a href="#" className="rounded-full border border-[#232A45] p-2 flex items-center justify-center w-10 h-10 hover:bg-[#232A45]"><Instagram className="w-5 h-5" /></a>
                <a href="#" className="rounded-full border border-[#232A45] p-2 flex items-center justify-center w-10 h-10 hover:bg-[#232A45]"><Youtube className="w-5 h-5" /></a>
              </div>
            </div>
          </div>

          {/* Main Columns: Services, Hire Developers, Industry, Company */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-2 text-base font-normal">
                <li>Web App Development</li>
                <li>Mobile App Development</li>
                <li>Enterprise App Development</li>
                <li>AI Development Services</li>
                <li>DevOps Services</li>
                <li>Software Quality Assurance</li>
                <li>UI UX Design Services</li>
                <li>Product Development Services</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Hire Developers</h3>
              <ul className="space-y-2 text-base font-normal">
                <li>Elixir Developer</li>
                <li>MERN Stack Developer</li>
                <li>Node Js Developer</li>
                <li>Python Developer</li>
                <li>ROR Developer</li>
                <li>Flutter Developer</li>
                <li>React Js Developer</li>
                <li>SaaS Developer</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Industry</h3>
              <ul className="space-y-2 text-base font-normal">
                <li>Fintech</li>
                <li>Ecommerce</li>
                <li>On-Demand</li>
                <li>Real Estate</li>
                <li>Healthcare</li>
                <li>Food & Grocery</li>
                <li>Education</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-base font-normal">
                <li>About Us</li>
                <li>Portfolio</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Pricing</li>
                <li>Contact Us</li>
                <li>Events</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Addresses */}
        <div className="flex flex-col md:flex-row gap-8 justify-between items-center mt-8 border-t border-[#232A45] pt-8">
          <div className="flex items-center gap-2">
            <span className="inline-block w-8 h-5 bg-[url('https://flagcdn.com/us.svg')] bg-cover rounded mr-2" />
            <span className="font-normal">130 NW 77th Ave Pembroke Pines, Florida 33024</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-8 h-5 bg-[url('https://flagcdn.com/ca.svg')] bg-cover rounded mr-2" />
            <span className="font-normal">220 Duncan Mill Road, Toronto, Ontario M3B 3J5</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-8 h-5 bg-[url('https://flagcdn.com/my.svg')] bg-cover rounded mr-2" />
            <span className="font-normal">Unit 10, Jalan Kerinchi, Bangsar South, 59200 Kuala Lumpur</span>
          </div>
        </div>
        {/* Blue Bottom Bar */}
        <div className="w-full bg-[#1877FF] rounded-t-2xl mt-8 flex flex-col md:flex-row items-center justify-between px-8 py-5">
          <span className="text-white text-base font-medium">© 2025 All Rights Reserved By InvoZone</span>
          <div className="flex gap-6 text-white text-base mt-2 md:mt-0">
            <a href="#" className="hover:underline">Sitemap</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">IMS Policy</a>
            <a href="#" className="hover:underline">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;