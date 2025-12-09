import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';


export const Equipment: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('energy-audits');
  const { t } = useTranslation();
  const SERVICE_ITEMS = t('equipment.services', { returnObjects: true }) as ServiceItem[];
  const [activeImage, setActiveImage] = useState(SERVICE_ITEMS.image);
  const [isSectionActive, setIsSectionActive] = useState(false);
  const [isLeftContentFinished, setIsLeftContentFinished] = useState(false);

  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionContainerRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);
  const lastLeftItemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsSectionActive(true);
          } else {
            setIsSectionActive(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionContainerRef.current) {
      sectionObserver.observe(sectionContainerRef.current);
    }

    return () => sectionObserver.disconnect();
  }, []);

  useEffect(() => {
    const lastItemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Last item viewport main hai, matlab left content abhi baki hai
            setIsLeftContentFinished(false);
          } else {
            // Last item viewport se bahar hai (scroll ho gaya)
            const rect = entry.boundingClientRect;
            if (rect.top < 0) {
              // Last item upar scroll ho gaya, matlab sab content scroll ho gaya
              setIsLeftContentFinished(true);
            }
          }
        });
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (lastLeftItemRef.current) {
      lastItemObserver.observe(lastLeftItemRef.current);
    }

    return () => lastItemObserver.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setActiveImage(SERVICE_ITEMS[index].image);
            }
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-20% 0px -20% 0px'
      }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const toggleItem = (id: string) => {
    setActiveId(activeId === id ? '' : id);
  };

  const shouldRightSideBeSticky = isSectionActive && !isLeftContentFinished;

  return (
    <div className="h-full w-full bg-[#00020F] pt-16 pb-24 relative">

      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-16 px-4 relative">
        {/* Spherical gradient layers */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none opacity-60">
          {/* Main sphere */}
          <div className="relative w-full lg:w-[500px] h-[300px]">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/25 via-transparent to-blue-400/15 rounded-full blur-[80px]" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/15 via-cyan-500/10 to-blue-300/10 rounded-full blur-[60px]" />
          </div>
        </div>

        <h1 id='heading' className="text-4xl md:text-5xl max-w-4xl lg:text-6xl font-medium leading-relaxed tracking-tight mb-8 text-white relative z-10">
          <Trans
            i18nKey="equipment.heading"
            components={{
              1: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200" />
            }} />
        </h1>
        <p className="text-[#A7ADBE] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          {t('equipment.subheading')}
        </p>
      </div>

      {/* Main Content Section */}
      <section
        ref={sectionContainerRef}
        className="hidden lg:block w-full py-20 bg-[#00020F] text-white max-w-7xl px-4 md:px-6 lg:px-6 xl:px-0 mx-auto"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 px-4 sm:px-0 relative">

          {/* right SIDE  */}
          <div
            ref={leftContentRef}
            className="lg:col-span-4 space-y-20 order-2"
          >
            {SERVICE_ITEMS.map((item, index) => (
              <div
                key={item.id}
                ref={(el) => {
                  sectionRefs.current[index] = el;
                  if (index === SERVICE_ITEMS.length - 1) {
                    lastLeftItemRef.current = el;
                  }
                }}
                className="space-y-5 min-h-[60vh] flex flex-col justify-start mt-10"
              >
                <h3 className="text-4xl font-normal leading-snug">
                  {item.title}
                </h3>
                <p className="text-[#A7ADBE] leading-relaxed text-xl">
                  {item.description}
                </p>
                <Link
                  to={item.link}
                  className="inline-flex underline-offset-4 items-center text-blue-400 hover:text-blue-500 transition text-lg"
                >
                  Learn more
                  <ChevronRight size={18} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>

          {/* left SIDE  */}
          <div className="lg:col-span-8 relative order-1">
            <div className={`${shouldRightSideBeSticky ? 'min-h-[345vh]' : ''}`}>

              <div
                ref={rightImageRef}
                className={`transition-all duration-300 ${shouldRightSideBeSticky
                  ? 'sticky top-6'
                  : 'relative'
                  }`}
                style={{
                  top: shouldRightSideBeSticky ? '6rem' : 'auto'
                }}
              >
                <div className="h-[350px] sm:h-[450px] w-full">
                  {/* Smooth image transition */}
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    {SERVICE_ITEMS.map((item, index) => (
                      <img
                        key={item.id}
                        src={item.image}
                        alt={item.title}
                        className={`absolute inset-0 w-full h-full object-cover rounded-xl transition-all duration-500 ${activeImage === item.image
                          ? 'opacity-100 scale-100'
                          : 'opacity-0 scale-105'
                          }`}
                      />
                    ))}


                    {/* Progress Dots */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                      {SERVICE_ITEMS.map((_, idx) => (
                        <div
                          key={idx}
                          className={`w-2 h-2 rounded-full transition-all ${activeImage === SERVICE_ITEMS[idx].image
                            ? 'bg-[#1D4ED8] scale-125'
                            : 'bg-gray-600'
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* MOBILE VERSION */}
      <section className="block lg:hidden w-full py-20 bg-[#00020F] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-12 px-4">

          {SERVICE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="space-y-5 rounded-xl overflow-hidden"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover rounded-xl"
              />

              {/* Heading */}
              <h3 className="text-3xl font-normal leading-snug">
                {item.title}
              </h3>

              {/* Subheading */}
              <p className="text-[#A7ADBE] leading-relaxed text-lg">
                {item.description}
              </p>

              {/* Learn more link */}
              <Link
                to={item.link}
                className="inline-flex underline-offset-4 items-center text-blue-400 hover:text-blue-500 transition text-lg"
              >
                Learn more
                <ChevronRight size={18} className="ml-1" />
              </Link>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  link: string;
  image: string;
}