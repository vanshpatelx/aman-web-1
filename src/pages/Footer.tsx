import React from 'react';
import { Facebook, Linkedin, Instagram, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative w-full text-white font-medium overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F2E] via-[#070a24] to-[#00041F] pointer-events-none w-full"></div>
      {/* Spherical gradient layers */}
      <div className="absolute top-64 lg:top-[50%] left-[40%] lg:left-[70%] -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none opacity-60 ">
        {/* Main sphere */}
        <div className="relative w-[400px] h-[300px] lg:w-[800px] lg:h-[600px]">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/25 via-transparent to-blue-400/15 rounded-full blur-[80px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400/15 via-cyan-500/10 to-blue-300/10 rounded-full blur-[60px]" />
        </div>
      </div>
      <div className="relative w-full max-w-7xl px-4 md:px-6 lg:px-6 xl:px-0 mx-auto pt-24 pb-12">
        {/* LOGO  */}
        <div className="lg:col-span-12 space-y-2">
          <img
            src="/Logo.png"
            alt="Company Logo"
            className="w-64 -ml-8 h-auto object-cover object-right"
          />
        </div>

        {/* top BORDER */}
        <div className="border-t border-white/15 pb-10"></div>
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-44">

          {/* Company */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-lg font-normal">{t('footer.company')}</h3>

            {/* 2 Column Layout */}
            <ul className="grid grid-cols-2 gap-y-3 text-[#A7ADBE]">

              <li>
                <a className="hover:text-white font-light">
                  {t('footer.companyLinks.about')}
                </a>
              </li>

              <li>
                <a className="hover:text-white font-light">
                  {t('footer.companyLinks.careers')}
                </a>
              </li>

              <li>
                <a className="hover:text-white font-light">
                  {t('footer.companyLinks.privacy')}
                </a>
              </li>

              <li>
                <a className="hover:text-white font-light">
                  {t('footer.companyLinks.terms')}
                </a>
              </li>

              <li>
                <a className="hover:text-white font-light">
                  Automotive
                </a>
              </li>

              <li>
                <a className="hover:text-white font-light">
                  help
                </a>
              </li>

            </ul>
          </div>


          {/* Industries */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="text-lg font-normal">Industries</h3>

            {/* 2 Column Layout */}
            <ul className="grid grid-cols-2 gap-y-4 text-[#A7ADBE]">

              <li>
                <a className="hover:text-white font-light">
                  Equipment Brokering
                </a>
              </li>

              <li>
                <a className="hover:text-white font-light">
                  Inspection
                </a>
              </li>

              <li>
                <a className="hover:text-white font-light">
                  Disposition
                </a>
              </li>

              <li>
                <a className="hover:text-white font-light">
                  Consignment
                </a>
              </li>

              <li>
                <a className="hover:text-white font-light">
                  Logistics
                </a>
              </li>

              <li>
                <a className="hover:text-white font-light">
                  Forwarding
                </a>
              </li>

            </ul>
          </div>


          {/* products */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-lg font-normal">{t('footer.products')}</h3>
            <ul className="space-y-3 text-[#A7ADBE]">
              <li><a className="hover:text-white font-light">{t('footer.productLinks.event')}</a></li>
              <li><a className="hover:text-white font-light">{t('footer.productLinks.projects')}</a></li>
              <li><a className="hover:text-white font-light">{t('footer.productLinks.services')}</a></li>
              <li><a className="hover:text-white font-light">{t('footer.productLinks.team')}</a></li>
            </ul>
          </div>

          {/* contact */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-lg font-normal">{t('footer.contact')}</h3>
            <ul className="space-y-3 text-[#A7ADBE]">

              <li><a className="hover:text-white font-light">{t('footer.contactInfo.email')}</a></li>
              <li><a className="hover:text-white font-light">{t('footer.contactInfo.phone')}</a></li>
              <li><a className="hover:text-white font-light">{t('footer.contactInfo.address')}</a></li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BORDER */}
        <div className="border-t border-white/15"></div>

        {/*  SOCIAL ICONS */}
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:justify-between pt-8 gap-6">

          <div className="text-[#A7ADBE]/80 text-sm font-normal">
            {t('footer.copyright')}
          </div>

          <div className="flex items-center gap-6">

            <Link to="/" className="p-3 cursor-pointer rounded-full border border-white/10 hover:bg-white/10 transition">
              <Facebook className="w-5 h-5" />
            </Link>

            <Link to="/" className="p-3 cursor-pointer  rounded-full border border-white/10 hover:bg-white/10 transition">
              <Instagram className="w-5 h-5" />
            </Link>

            <Link to="/" className="p-3 cursor-pointer  rounded-full border border-white/10 hover:bg-white/10 transition">
              <Linkedin className="w-5 h-5" />
            </Link>

            <Link to="/" className="p-3 cursor-pointer  rounded-full border border-white/10 hover:bg-white/10 transition">
              <X className="w-5 h-5" />
            </Link>

          </div>

        </div>

      </div>
    </footer>

  );
};

export default Footer;
