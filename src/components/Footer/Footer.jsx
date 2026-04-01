import React from 'react';
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#071328] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12 lg:py-16">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <h2 className="text-3xl font-bold">DigiTools</h2>
            <p className="text-gray-400 text-sm leading-7">
              Premium digital tools for creators,
              professionals, and businesses. Work smarter
              with our suite of powerful tools.
            </p>
          </div>

          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Product</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
              <li>Integrations</li>
            </ul>
          </div>

          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Company</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Resources</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>Community</li>
              <li>Contact</li>
            </ul>
          </div>

          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Social Links</h3>
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-white text-[#071328] flex items-center justify-center cursor-pointer">
                <FaYoutube />
              </span>
              <span className="w-10 h-10 rounded-full bg-white text-[#071328] flex items-center justify-center cursor-pointer">
                <FaFacebookF />
              </span>
              <span className="w-10 h-10 rounded-full bg-white text-[#071328] flex items-center justify-center cursor-pointer">
                <FaXTwitter />
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-col lg:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2026 Digitools. All rights reserved.</p>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <span className="cursor-pointer">Privacy Policy</span>
            <span className="cursor-pointer">Terms of Service</span>
            <span className="cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;