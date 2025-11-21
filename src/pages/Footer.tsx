import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#0C3B34] text-white py-16 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12">

        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`relative inline-flex items-end gap-1.5 shrink-0 text-2xl font-light text-white
                }`}
          >
            <span className="logo leading-none cursor-pointer" title='Sumry Finance'>Sumry Finance</span>
            {/* dot */}
            <span
              className={`w-2 h-2 rounded-full mb-1 bg-[#C8F8A9] }`}
            ></span>
          </motion.div>
          <p className="text-white/80 leading-tight max-w-sm mt-2">
            Business clarity, operational excellence, and transformation support for leaders ready to grow with intention.
          </p>
        </div>

        {/* Quick Links*/}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#BFBFBF]">Quick Links</h3>
          <ul className="space-y-2 text-white/80">
            <li><a href="#" className="hover:opacity-70 transition">Home</a></li>
            <li><a href="#blog" className="hover:opacity-70 transition">Blog</a></li>
            <li><a href="#about" className="hover:opacity-70 transition">About</a></li>
            <li><a href="#team" className="hover:opacity-70 transition">Team</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-medium mb-4 text-[#BFBFBF]">Services</h3>
          <ul className="space-y-2 text-white/80">
            <li><a href="#service" className="hover:opacity-70 transition">Business Lending</a></li>
            <li><a href="#service" className="hover:opacity-70 transition">Investment Loans
            </a></li>
            <li><a href="#service" className="hover:opacity-70 transition">Personal Loans
            </a></li>
            <li><a href="#service" className="hover:opacity-70 transition">Strategic Refinancing
            </a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-medium mb-4 text-[#BFBFBF]">Contact us</h3>
          <p className="text-white/80">123 Business Street, Suite 456,<br />City, State, ZIP</p>

          <p className="mt-4 text-[#F7F7F7]"><span className="font-semibold text-[#C8F8A9]">Email :</span><br />info@sumryfinance.com</p>
          <p className="mt-4 font-semibold text-[#C8F8A9]">Phone :<span className=" text-[#F7F7F7] italic font-medium"> <br /> +1 (123) 456-7890</span></p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/20 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-white/70 text-sm max-w-6xl mx-auto">
        <p>Copyright © 2025 <a href="#" className="hover:text-[#C8F8A9] hover:underline">Sumry Finance</a>. All rights reserved.</p>

        {/* Social Links */}
        <div className="flex gap-6 mt-4 sm:mt-0">
          <a href="#" className="hover:opacity-70 transition">Facebook</a>
          <a href="#" className="hover:opacity-70 transition">Twitter</a>
          <a href="#" className="hover:opacity-70 transition">Linkedin</a>
        </div>
      </div>
    </footer>
  );
}