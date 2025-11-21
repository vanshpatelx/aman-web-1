import React from 'react';
import { BarChart3, Shield, Users, CheckCircle2, ArrowDown, ArrowRight, Quote } from 'lucide-react';
import { Button } from '../components/Button';
import { SERVICES, VALUES, PROCESS_STEPS, STATS, TESTIMONIALS } from '../../constants';
import { LeadForm } from '../components/LeadForm';

export const Home: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section id="home" className="relative min-h-screen flex items-center bg-stone-50 border-b border-stone-200 overflow-hidden">
        {/* Desktop Hero Image */}
        <div className="absolute right-0 top-0 w-full lg:w-[45%] h-full hidden lg:block border-l border-stone-200">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Modern architectural structure" 
            className="w-full h-full object-cover grayscale-[20%] opacity-90 animate-fade-in"
          />
          <div className="absolute inset-0 bg-stone-50/10 backdrop-contrast-125 mix-blend-overlay"></div>
        </div>

        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 pointer-events-none z-10">
           <div className="w-full h-full max-w-[90rem] mx-auto border-r border-stone-200/60 border-l border-stone-200/60"></div>
        </div>

        <div className="max-w-[90rem] mx-auto px-6 md:px-12 w-full relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 flex flex-col justify-center pt-20 lg:pt-0">
            <div className="animate-fade-in-up">
              <span className="inline-block py-1.5 px-4 border border-stone-300 bg-stone-50/80 backdrop-blur text-xs uppercase tracking-[0.2em] font-medium text-stone-500 mb-10 w-fit">
                Strategic Finance Partner
              </span>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-medium text-stone-900 tracking-tight leading-[0.92] mb-10 drop-shadow-sm">
                Clarity in <br /> Complexity.
              </h1>
              <p className="text-xl md:text-2xl text-stone-600 max-w-2xl leading-relaxed mb-12 font-light">
                We provide strategic, numbers-driven mortgage partnerships. 
                The smartest loan, not just the cheapest rate. Structure compounds.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button onClick={() => scrollToSection('#contact')}>Access Strategy Session</Button>
                <Button variant="outline" className="bg-white/50 backdrop-blur-sm" onClick={() => scrollToSection('#services')}>View Solutions</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 animate-bounce hidden md:block">
          <ArrowDown className="text-stone-400" size={32} />
        </div>
      </section>

      {/* --- IMPACT STATS STRIP --- */}
      <section className="border-b border-stone-200 bg-white py-12 md:py-16">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
            {STATS.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-3xl md:text-5xl font-display font-semibold text-stone-900 tracking-tight">{stat.value}</span>
                <span className="text-xs uppercase tracking-widest text-stone-500 mt-2 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PHILOSOPHY GRID --- */}
      <section className="py-32 md:py-40 bg-stone-50 border-b border-stone-200 relative">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-200 border border-stone-200 shadow-sm">
            <div className="bg-white p-12 md:p-16 flex flex-col h-full hover:bg-stone-50 transition-colors duration-500 group">
              <div className="w-16 h-16 bg-stone-100 text-stone-900 flex items-center justify-center mb-10 rounded-sm group-hover:bg-stone-900 group-hover:text-stone-50 transition-colors">
                 <BarChart3 size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-display font-medium mb-6 text-stone-900">Accounting-Level Expertise</h3>
              <p className="text-stone-600 text-lg leading-relaxed font-light">
                We analyze tax structures, cash flow, and business performance to find lending pathways others miss.
              </p>
            </div>
            <div className="bg-white p-12 md:p-16 flex flex-col h-full hover:bg-stone-50 transition-colors duration-500 group">
               <div className="w-16 h-16 bg-stone-100 text-stone-900 flex items-center justify-center mb-10 rounded-sm group-hover:bg-stone-900 group-hover:text-stone-50 transition-colors">
                 <Shield size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-display font-medium mb-6 text-stone-900">Structure Over Rate</h3>
              <p className="text-stone-600 text-lg leading-relaxed font-light">
                A low rate on a bad structure costs you more. We design loans that reduce interest and accelerate debt reduction.
              </p>
            </div>
            <div className="bg-white p-12 md:p-16 flex flex-col h-full hover:bg-stone-50 transition-colors duration-500 group">
               <div className="w-16 h-16 bg-stone-100 text-stone-900 flex items-center justify-center mb-10 rounded-sm group-hover:bg-stone-900 group-hover:text-stone-50 transition-colors">
                 <Users size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-3xl font-display font-medium mb-6 text-stone-900">Long-Term Partnership</h3>
              <p className="text-stone-600 text-lg leading-relaxed font-light">
                We aren't transactional. We act as your financial allies, reviewing your strategy as your life evolves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PROCESS ROADMAP --- */}
      <section id="process" className="py-32 md:py-40 bg-stone-50 border-b border-stone-200">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24">
            <div className="max-w-3xl">
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-stone-500 mb-6 block">
                How We Work
              </span>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-medium text-stone-900">
                The Sumry Method
              </h2>
            </div>
            <div className="hidden md:block h-px bg-stone-200 w-full max-w-md mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-10 left-6 right-6 h-px bg-gradient-to-r from-stone-200 via-stone-300 to-stone-200 -z-10"></div>

            {PROCESS_STEPS.map((item, index) => (
              <div key={index} className="relative bg-stone-50 pt-6 group">
                <div className="w-10 h-10 bg-white border border-stone-200 text-stone-900 text-sm font-mono flex items-center justify-center rounded-full mb-8 mx-auto lg:mx-0 relative z-10 group-hover:border-stone-900 group-hover:bg-stone-900 group-hover:text-white transition-all duration-300 shadow-sm">
                  {item.step}
                </div>
                <h3 className="text-2xl font-display font-medium text-stone-900 mb-4 text-center lg:text-left">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-base leading-relaxed text-center lg:text-left max-w-xs mx-auto lg:mx-0">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="bg-white py-32 md:py-40 border-b border-stone-200">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="mb-24 max-w-4xl">
             <span className="text-xs uppercase tracking-[0.2em] font-medium text-stone-500 mb-6 block">
              Specialist Lending Solutions
             </span>
             <h2 className="text-5xl md:text-7xl font-display font-medium text-stone-900 mb-8">
              Built for complexity.
             </h2>
             <p className="text-xl md:text-2xl text-stone-600 font-light leading-relaxed">
               We don't do "cookie-cutter". Every loan structure is bespoke, designed to fit your specific financial landscape and long-term objectives.
             </p>
          </div>

          {/* GRID LAYOUT */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200 border border-stone-200 shadow-sm">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-stone-50 p-12 md:p-14 hover:bg-white hover:shadow-2xl hover:z-10 transition-all duration-300 group flex flex-col h-full relative">
                <div className="flex items-center justify-between mb-12">
                  <div className="w-14 h-14 bg-white border border-stone-200 text-stone-900 flex items-center justify-center rounded-sm group-hover:border-stone-900 transition-colors">
                    <service.icon size={28} strokeWidth={1.5} />
                  </div>
                  <ArrowRight className="text-stone-300 group-hover:text-stone-900 transition-colors opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 duration-300" size={28} />
                </div>
                
                <h3 className="text-3xl font-display font-medium text-stone-900 mb-6">
                  {service.title}
                </h3>
                <p className="text-stone-600 text-lg leading-relaxed mb-12 flex-grow font-light">
                  {service.description}
                </p>
                
                <div className="space-y-4 pt-10 border-t border-stone-100">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle2 className="text-stone-400 mt-1 mr-4 flex-shrink-0 group-hover:text-stone-900 transition-colors" size={18} />
                      <span className="text-stone-500 text-sm group-hover:text-stone-700 transition-colors">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            {/* CTA Card in Grid */}
            <div className="bg-stone-900 p-12 md:p-14 flex flex-col justify-center text-stone-50 relative overflow-hidden group cursor-pointer" onClick={() => scrollToSection('#contact')}>
               <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
               <div className="relative z-10 transition-transform duration-300 group-hover:translate-x-2">
                 <h3 className="text-4xl font-display font-medium mb-6">Need a bespoke solution?</h3>
                 <p className="text-stone-400 text-lg leading-relaxed mb-12">
                   Your situation is unique. Let's build a strategy that fits.
                 </p>
                 <button className="inline-flex items-center text-base uppercase tracking-widest hover:text-stone-300 transition-colors font-medium">
                   Start Conversation <ArrowRight size={20} className="ml-3" />
                 </button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ABOUT / FOUNDER SECTION --- */}
      <section id="about" className="py-32 md:py-40 bg-stone-50 border-b border-stone-200">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-20 lg:gap-32 items-center">
          <div className="w-full lg:w-5/12">
            <div className="relative">
              {/* Larger Image */}
              <div className="aspect-[4/5] bg-stone-200 overflow-hidden relative shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1000&auto=format&fit=crop" 
                  alt="Founder" 
                  className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 border-[1px] border-white/20"></div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-7/12">
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-stone-500 mb-8 block">
              Principal Broker
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-medium text-stone-900 mb-10 leading-tight">
              "We think beyond today's rate."
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <p className="text-stone-600 text-lg font-light leading-relaxed">
                I started Sumry Finance because I saw too many borrowers being placed into generic loan products that didn't fit their long-term goals. They were sold a rate, but they weren't given a strategy.
              </p>
              <p className="text-stone-600 text-lg font-light leading-relaxed">
                Our mission is to bring the rigour of accounting and the foresight of financial planning into the mortgage broking space. We act as your financial allies, reviewing your strategy as your life evolves.
              </p>
            </div>
            
            <div className="mt-16 pt-10 border-t border-stone-200">
               <span className="font-display font-semibold text-stone-900 block mb-2 text-lg">The Sumry Team</span>
               <span className="text-xs text-stone-500 uppercase tracking-widest">Strategic Lending Partners</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- VALUES SECTION --- */}
      <section className="py-32 md:py-40 bg-stone-900 text-stone-50 relative overflow-hidden">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-24 text-center">
            <h2 className="text-5xl md:text-6xl font-display font-medium text-white">Our Core Values</h2>
            <div className="h-px w-32 bg-stone-700 mt-8 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
            {VALUES.map((value, index) => (
              <div key={index} className="group">
                <h3 className="text-2xl font-display font-semibold text-white mb-5 flex items-center">
                  <span className="text-sm font-mono text-stone-500 mr-6">0{index + 1}</span>
                  {value.title}
                </h3>
                <p className="text-stone-400 text-base leading-relaxed pl-10 border-l border-stone-800 group-hover:border-stone-500 transition-colors duration-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* --- TESTIMONIALS --- */}
      <section className="py-32 md:py-40 bg-white border-b border-stone-200">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
           <div className="mb-24 text-center">
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-stone-500 mb-6 block">
                Client Stories
              </span>
              <h2 className="text-5xl md:text-6xl font-display font-medium text-stone-900">
                Outcomes, not just approvals.
              </h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="bg-stone-50 p-10 md:p-12 rounded-sm relative">
                  <Quote className="absolute top-10 right-10 text-stone-200" size={48} />
                  <p className="text-stone-700 text-lg italic leading-relaxed mb-8 relative z-10">"{t.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-px bg-stone-300 mr-5"></div>
                    <div>
                      <span className="block text-base font-display font-bold text-stone-900">{t.author}</span>
                      <span className="block text-xs text-stone-500 uppercase tracking-widest mt-1">{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-32 md:py-40 bg-stone-100">
        <div className="max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-stone-500 mb-6 block">
                Begin Your Journey
              </span>
              <h2 className="text-5xl md:text-7xl font-display font-medium text-stone-900 mb-8">
                Start Your Strategy Session
              </h2>
              <p className="text-stone-600 text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
                Invest 2 minutes now to save years of interest later. Complete the brief form below to get started.
              </p>
            </div>

            {/* Form Container */}
            <div className="bg-white border border-stone-200 shadow-2xl shadow-stone-200/50 rounded-sm overflow-hidden">
               <LeadForm />
            </div>
            
            <div className="mt-10 text-center">
              <p className="text-xs text-stone-400 uppercase tracking-widest flex items-center justify-center gap-2">
                <Shield size={14} />
                Your data is secure and treated with strict confidentiality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};