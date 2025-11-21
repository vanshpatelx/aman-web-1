import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import React, { useState } from 'react'

function About() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section id='about' className="relative w-full bg-[#F7F7F7] text-black py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-4 md:px-8 lg:px-10 xl:px-0">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6 order-1 lg:order-0"
          >
            {/* Badge */}
            <span className="px-4 py-1 bg-[#EBEBEB] text-[#0F3D3A] rounded-full text-sm w-fit inline-block tracking-wide">
              About Sumry Finance
            </span>

            {/* Heading */}
            <h2 className="heading text-4xl sm:text-5xl md:text-6xl leading-tighter font-medium tracking-wide text-[#0F3D3A]">
              Clarity in Every Decision
            </h2>

            {/* Description */}
            <p className="text-[16px] sm:text-[18px] md:text-[20px] text-gray-600 max-w-xl leading-relaxed">
              At Sumry Finance, we combine accounting-level rigour with strategic lending expertise to help clients make smarter, long-term decisions. We go beyond rates — we build structures that align with your financial goals, protect you, and compound over time.
            </p>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-4"
            >
              <button 
                onClick={() => setIsModalOpen(true)}
                type='button' 
                className="px-3.5 py-2 rounded-[8px] bg-[#C8F8A9] text-[#0F3D3A] hover:text-[#F7F7F7] hover:bg-[#0F3D3A] cursor-pointer transition-colors text-sm flex items-center gap-3 font-medium group"
              >
                Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4">
              {['Clarity', 'Strategy', 'Education', 'Integrity', 'Precision', 'Partnership'].map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 text-lg font-medium text-black/90"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-black/70"></span>
                  {value}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-80 sm:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl sm:order-1"
          >
            <img
              src="/about.jpg"
              alt="About Sumry Finance"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/10" />
          </motion.div>

        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-[#F7F7F7] rounded-2xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div>
                  <span className="px-3 py-1 bg-[#EBEBEB] text-[#0F3D3A] rounded-full text-sm">
                    About Sumry Finance
                  </span>
                  <h2 className="heading text-3xl sm:text-4xl font-medium text-[#0F3D3A] mt-2">
                    Clarity in Every Decision
                  </h2>
                </div>
                <button type='button' title='close'
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-gray-200 rounded-[8px] transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Main Content */}
                  <div className="space-y-4">
                    <p className="text-lg text-gray-600 leading-relaxed">
                      At Sumry Finance, we combine accounting-level rigour with strategic lending expertise to help clients make smarter, long-term decisions. We go beyond rates — we build structures that align with your financial goals, protect you, and compound over time.
                    </p>
                    
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-[#0F3D3A]">Our Approach</h3>
                      <p className="text-gray-600">
                        We believe in transparent, data-driven financial solutions that empower our clients to make informed decisions about their future.
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-[#0F3D3A]">Why Choose Us</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• Personalized financial strategies tailored to your goals</li>
                        <li>• Expert guidance from industry professionals</li>
                        <li>• Transparent pricing with no hidden fees</li>
                        <li>• Long-term partnership focused on your success</li>
                      </ul>
                    </div>
                  </div>

                  {/* Values & Image */}
                  <div className="space-y-6">
                    <div className="relative h-48 rounded-xl overflow-hidden">
                      <img
                        src="/about.jpg"
                        alt="About Sumry Finance"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-[#0F3D3A] mb-4">Our Values</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {['Clarity', 'Strategy', 'Education', 'Integrity', 'Precision', 'Partnership'].map((value, i) => (
                          <div key={i} className="flex items-center gap-2 text-gray-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0F3D3A]"></span>
                            {value}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="bg-[#EBEBEB] rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-[#0F3D3A] mb-3">Get Started Today</h3>
                  <p className="text-gray-600 mb-4">
                    Ready to take control of your financial future? Contact us for a free consultation and discover how we can help you achieve your goals.
                  </p>
                  <button type='button' className="px-4 py-2 rounded-[8px] bg-[#0F3D3A] text-[#F7F7F7] hover:bg-[#0f3d3adc] transition-colors">
                    Call now
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default About