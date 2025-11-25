import React from 'react';
import { Facebook, Linkedin, Instagram, X } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-800 text-white  pt-16 pb-8 px-6 md:px-16 font-medium">
      <div className=" w-full max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Column 1 */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Logo */}
            <div className="flex  gap-2">
              <img 
                src="/Logo.png" 
                alt="Logo" 
                className="w-40 h-auto object-contain"
              />
            </div>

            <p className=" pl-4 text-gray-300 font-light leading-relaxed max-w-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.
            </p>

            {/* Social Icons */}
            <div className="flex pl-4 items-center gap-4 pt-2">
              <a href="#" className="p-2 hover:bg-white/10 rounded-full transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="p-2 hover:bg-white/10 rounded-full transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="p-2 hover:bg-white/10 rounded-full transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="p-2 hover:bg-white/10 rounded-full transition-colors" aria-label="X">
                <X className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Company Links */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-normal text-white">Company</h3>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Condition</a></li>
            </ul>
          </div>

          {/* Products Links */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-normal text-white">Products</h3>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Event</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Team</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-xl font-normal text-white">Contact</h3>
            <ul className="space-y-4 text-gray-300">
              <li>
                <a href="mailto:Support@poly.com" className="hover:text-white transition-colors">
                  Support@poly.com
                </a>
              </li>
              <li>
                <a href="tel:+986548767554" className="hover:text-white transition-colors">
                  +98 654 876 7554
                </a>
              </li>
             
              <li className="leading-relaxed italic">
                345 Tech Men House, 9th Floor<br />
                Galiva Tork, TV 987 USA
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-6"></div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>Copyright 2024 Vision Semiconductor Solutions LLC. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
