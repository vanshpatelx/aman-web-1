import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Phone, MapPin, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function ContactSection() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        // Step 1 - Personal Information
        firstName: '',
        lastName: '',
        email: '',
        phone: '',

        // Step 2 - Professional Details
        company: '',
        jobTitle: '',
        loanType: '',

        // Step 3 - Financial Goals
        message: '',
        timeline: '',
        investmentExperience: ''
    });

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    const [submitted, setSubmitted] = useState(false);


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    const nextStep = () => {
        setCurrentStep(prev => Math.min(prev + 1, 3));
    };

    const prevStep = () => {
        setCurrentStep(prev => Math.max(prev - 1, 1));
    };

    // Progress bar calculation
    const progress = (currentStep / 3) * 100;

    // Animation variants
    const stepVariants = {
        enter: { x: 300, opacity: 0 },
        center: { x: 0, opacity: 1 },
        exit: { x: -300, opacity: 0 }
    };


    const slideInFromLeft: Variants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    };

    const slideInFromRight: Variants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    };

    return (
        <section id="contact" className="relative w-full h-full bg-[#F7F7F7] py-12 md:py-24 md:pb-48 px-4 md:px-8 lg:px-10 xl:px-0 overflow-hidden">
            {/* Header */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="max-w-6xl mx-auto mb-12 md:mb-24"
            >
                <motion.div variants={itemVariants}>
                    <span className="px-3 py-1 text-sm bg-[#EBEBEB] text-[#0F3D3A] rounded-full">
                        Get in touch
                    </span>
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="heading font-medium text-3xl sm:text-4xl md:text-5xl font-serif mt-4 leading-tight md:leading-tighter tracking-wide text-[#0F3D3A]"
                >
                    Ready to move your business <br className="hidden sm:block" /> forward? Let's talk.
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-gray-600 max-w-2xl text-base md:text-lg mt-2"
                >
                    Whether you're seeking clarity, growth, or transformation, we're here
                    to help. Reach out to start the conversation — no pressure, no
                    obligation.
                </motion.p>
            </motion.div>

            <div className="relative max-w-6xl mx-auto h-fit">
                {/* BACKGROUND IMAGE */}
                <div className="relative inset-0 w-full h-[180vh] sm:h-[90vh] md:h-[120vh] lg:h-[70vh] 2xl:h-[40vh] max-w-6xl">
                    <img
                        src="/contact.jpg"
                        className="w-full h-full object-cover object-left opacity-100 z-10 rounded-[10px]"
                        alt="bg"
                    />
                </div>


                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 absolute -top-8 md:-top-13.5 left-0 right-0 px-4 md:px-8 lg:px-10 xl:px-0">
                    {/* Left Column  */}
                    <motion.div
                        variants={slideInFromLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex flex-col items-center justify-end gap-6 z-30 order-2 md:order-1"
                    >
                        <motion.div
                            className="relative rounded-[8px] overflow-hidden shadow-lg h-fit w-full max-w-[420px]"
                            whileHover={{ scale: 1.01 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="inset-0 flex flex-col justify-end p-4 sm:p-6 text-#0F3D3A] space-y-6 sm:space-y-12 bg-[#F2F5F1]"
                            >
                                <div>
                                    <h3 className="heading text-lg sm:text-xl md:text-2xl mb-2">
                                        Have a Challenge or an Idea?
                                    </h3>
                                    <p className="text-sm text-black leading-tight">
                                        Fill out the form, and let's talk about how we can support
                                        your business with tailored solutions.
                                    </p>
                                </div>

                                {/* Contact Info */}
                                <div className="space-y-2.5 bg-[#F2F5F1]">
                                    <motion.div
                                        variants={itemVariants}
                                        className="group flex items-center gap-3 sm:gap-4 p-2 cursor-pointer hover:bg-white rounded-[8px] transition-colors"
                                    >
                                        {/* Phone Icon Box */}
                                        <div className="bg-white group-hover:bg-[#F2F5F1] p-2 sm:p-3 px-2.5 sm:px-3.5 rounded-[4px] transition-colors shrink-0">
                                            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#0F3D3A] mt-1" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-xs text-gray-500 font-medium mb-1">
                                                Call us at:
                                            </p>
                                            <p className="text-gray-900 font-medium text-sm sm:text-base">+1 (222) 555-7890</p>
                                        </div>

                                        {/* Arrow Icon */}
                                        <ArrowRight
                                            className="w-4 h-4 text-[#0F3D3A] ml-2 sm:ml-auto mt-1 mr-1 transition-transform group-hover:translate-x-1 shrink-0"
                                        />
                                    </motion.div>

                                    <div className="h-[0.2px] w-full bg-black/20 rounded-full" />

                                    <motion.div
                                        variants={itemVariants}
                                        className="group flex items-center gap-3 sm:gap-4 p-2 cursor-pointer hover:bg-white rounded-[8px] transition-colors"
                                    >
                                        {/* Map Icon Box */}
                                        <div className="bg-white group-hover:bg-[#F2F5F1] p-2 sm:p-3 px-2.5 sm:px-3.5 rounded-[4px] transition-colors shrink-0">
                                            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 mt-1" />
                                        </div>

                                        {/* Text */}
                                        <div className="flex-1 min-w-0">
                                            <p className="text-xs text-gray-500 font-medium mb-1">Visit us at:</p>
                                            <p className="text-gray-900 font-medium text-sm sm:text-base">
                                                323 Business Street, Suite 456, City, State, ZIP
                                            </p>
                                        </div>

                                        {/* Arrow Icon */}
                                        <ArrowRight
                                            className="w-4 h-4 text-[#0F3D3A] ml-2 sm:ml-auto mt-1 mr-1 transition-transform group-hover:translate-x-1 shrink-0"
                                        />
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        variants={slideInFromRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-white rounded-[8px] overflow-hidden z-30 w-full lg:max-w-[520px] mx-auto lg:mx-0 order-1 lg:order-2 mt-34 h-[682px] sm:h-[700px] lg:h-[682px] sm:mt-0"
                    >
                        {/* Header */}
                        <div className="bg-[#0F3D3A] px-4 sm:px-6 md:px-8 py-4 flex items-center justify-between">
                            <div className="inline-flex items-end gap-1.5 text-white text-lg sm:text-xl md:text-2xl font-light">
                                <span className="logo leading-none">Sumry Finance</span>
                                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#C8F8A9] mb-0.5 sm:mb-1"></span>
                            </div>

                            <motion.div whileHover={{ x: 5 }} className="hidden sm:flex items-center gap-2 text-[#C8F8A9] cursor-pointer">
                                <span className="text-xs sm:text-sm font-medium">Book a free consultation</span>
                                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                            </motion.div>
                        </div>

                        {/* Progress Bar */}
                        <div className="px-4 sm:px-6 md:px-8 pt-4">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-xs text-gray-600 font-medium">Step {currentStep} of 3</span>
                                <span className="text-xs text-gray-600 font-medium">{Math.round(progress)}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <motion.div
                                    className="bg-[#0F3D3A] h-2 rounded-full transition-all duration-500"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                />
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-8">
                            <AnimatePresence mode="wait">
                                {/* Step 1: Personal Information */}
                                {currentStep === 1 && (
                                    <motion.div
                                        key="step1"
                                        variants={stepVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{ duration: 0.3 }}
                                        className="space-y-4 mb-6"
                                    >
                                        <div className="mb-6">
                                            <h3 className="text-lg font-semibold text-[#0F3D3A] mb-2">Personal Information</h3>
                                            <p className="text-sm text-gray-600">Let's start with your basic details</p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <motion.div variants={itemVariants} className="space-y-2">
                                                <label className="text-xs text-gray-600 font-medium tracking-wide">
                                                    First name *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    placeholder="John"
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-[6px] bg-[#F2F5F1] focus:outline-none focus:ring-[1px] focus:ring-[#0F3D3A] transition text-sm sm:text-base"
                                                    required
                                                />
                                            </motion.div>

                                            <motion.div variants={itemVariants} className="space-y-2">
                                                <label className="text-xs text-gray-600 font-medium tracking-wide">
                                                    Last name *
                                                </label>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    placeholder="Smith"
                                                    className="w-full px-3 py-2 border border-gray-300 bg-[#F2F5F1] rounded-[6px] focus:outline-none focus:ring-[1px] focus:ring-[#0F3D3A] transition text-sm sm:text-base"
                                                    required
                                                />
                                            </motion.div>
                                        </div>

                                        <motion.div variants={itemVariants} className="space-y-2">
                                            <label className="text-xs text-gray-600 font-medium tracking-wide">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="john@email.com"
                                                className="w-full px-3 py-2 border border-gray-300 bg-[#F2F5F1] rounded-[6px] focus:outline-none focus:ring-[1px] focus:ring-[#0F3D3A] transition text-sm sm:text-base"
                                                required
                                            />
                                        </motion.div>

                                        <motion.div variants={itemVariants} className="space-y-2">
                                            <label className="text-xs text-gray-600 font-medium tracking-wide">
                                                Phone *
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="+1 (222) 555-7890"
                                                className="w-full px-3 py-2 border border-gray-300 bg-[#F2F5F1] rounded-[6px] focus:outline-none focus:ring-[1px] focus:ring-[#0F3D3A] transition text-sm sm:text-base"
                                                required
                                            />
                                        </motion.div>
                                    </motion.div>
                                )}

                                {/* Step 2: Professional Details & Loan Type */}
                                {currentStep === 2 && (
                                    <motion.div
                                        key="step2"
                                        variants={stepVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{ duration: 0.3 }}
                                        className="space-y-4 mb-6"
                                    >
                                        <div className="mb-6">
                                            <h3 className="text-lg font-semibold text-[#0F3D3A] mb-2">Professional Details</h3>
                                            <p className="text-sm text-gray-600">Tell us about your professional background</p>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <motion.div variants={itemVariants} className="space-y-2">
                                                <label className="text-xs text-gray-600 font-medium tracking-wide">
                                                    Company
                                                </label>
                                                <input
                                                    type="text"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                    placeholder="Lamnotech"
                                                    className="w-full px-3 py-2 border bg-[#F2F5F1] border-gray-300 rounded-[6px] focus:outline-none focus:ring-[1px] focus:ring-[#0F3D3A] transition text-sm sm:text-base"
                                                />
                                            </motion.div>

                                           <motion.div variants={itemVariants} className="space-y-2">
                                                <label className="text-xs text-gray-600 font-medium tracking-wide">
                                                    Job Title
                                                </label>
                                                <input
                                                    type="text"
                                                    name="jobTitle"
                                                    value={formData.jobTitle}
                                                    onChange={handleChange}
                                                    placeholder="Merchandise Manager"
                                                    className="w-full px-3 py-2 border border-gray-300 bg-[#F2F5F1] rounded-[6px] focus:outline-none focus:ring-[1px] focus:ring-[#0F3D3A] transition text-sm sm:text-base"
                                                />
                                            </motion.div>
                                        </div>

                                        <motion.div variants={itemVariants} className="space-y-2">
                                            <label className="text-xs text-gray-600 font-medium tracking-wide">
                                               Preferred Timeline *
                                            </label>
                                            <select
                                                name="timeline"
                                                aria-label="timeline"
                                                value={formData.timeline}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border border-gray-300 bg-[#F2F5F1] rounded-[6px] focus:outline-none focus:ring-[1px] focus:ring-[#0F3D3A] transition text-sm sm:text-base"
                                                required
                                            >
                                                <option value="">Select timeline</option>
                                                <option value="immediate">Immediate (0-3 months)</option>
                                                <option value="short-term">Short-term (3-6 months)</option>
                                                <option value="medium-term">Medium-term (6-12 months)</option>
                                                <option value="planning">Just planning for future</option>
                                            </select>
                                        </motion.div>
                                        <motion.div variants={itemVariants} className="space-y-2">
                                            <label className="text-xs text-gray-600 font-medium tracking-wide">
                                                I'm interested in *
                                            </label>
                                            <select
                                                name="loanType"
                                                aria-label="Loan Type"
                                                value={formData.loanType}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border border-gray-300 bg-[#F2F5F1] rounded-[6px] focus:outline-none focus:ring-[1px] focus:ring-[#0F3D3A] transition text-sm sm:text-base"
                                                required
                                            >
                                                <option value="">Select loan type</option>
                                                <option value="self-employed">Self-Employed & Business Owner Lending</option>
                                                <option value="owner-occupied">Owner-Occupied Home Loans</option>
                                                <option value="investment">Investment Loans</option>
                                                <option value="refinancing">Strategic Refinancing</option>
                                                <option value="multiple">Multiple Services</option>
                                            </select>
                                        </motion.div>
                                    </motion.div>
                                )}

                                {/* Step 3: Financial Goals */}
                                {currentStep === 3 && (
                                    <motion.div
                                        key="step3"
                                        variants={stepVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{ duration: 0.3 }}
                                        className="space-y-4 mb-6"
                                    >
                                        <div className="mb-6">
                                            <h3 className="text-lg font-semibold text-[#0F3D3A] mb-2">Financial Goals</h3>
                                            <p className="text-sm text-gray-600">Help us understand your financial objectives</p>
                                        </div>

                                        <motion.div variants={itemVariants} className="space-y-2">
                                            <label className="text-xs text-gray-600 font-medium tracking-wide">
                                                Investment Experience
                                            </label>
                                            <select
                                                name="investmentExperience"
                                                aria-label="Investment Experience"
                                                value={formData.investmentExperience}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border border-gray-300 bg-[#F2F5F1] rounded-[6px] focus:outline-none focus:ring-[1px] focus:ring-[#0F3D3A] transition text-sm sm:text-base"
                                            >
                                                <option value="">Select your experience level</option>
                                                <option value="first-time">First-time investor</option>
                                                <option value="experienced">Experienced investor</option>
                                                <option value="business-owner">Business owner</option>
                                                <option value="seasoned">Seasoned investor</option>
                                            </select>
                                        </motion.div>

                                        <motion.div variants={itemVariants} className="space-y-2">
                                            <label className="text-xs text-gray-600 font-medium tracking-wide">
                                                Tell us about your financial goals *
                                            </label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Hi Sumry Finance, I'm interested in discussing how strategic lending can help me achieve..."
                                                rows={4}
                                                className="w-full px-3 py-2 border border-gray-300 bg-[#F2F5F1] rounded-[6px] focus:outline-none focus:ring-[1px] focus:ring-[#0F3D3A] transition resize-none text-sm sm:text-base"
                                                required
                                            />
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Navigation Buttons */}
                            <div className="flex justify-between items-center mt-8">
                                {/* Back Button */}
                                {currentStep > 1 && (
                                    <motion.button
                                        type="button"
                                        onClick={prevStep}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex items-center gap-2 px-4 py-3 text-[#0F3D3A] hover:bg-[#F2F5F1] rounded-[6px] transition-colors font-medium text-sm"
                                    >
                                        <ChevronLeft className="w-4 h-4" />
                                        Back
                                    </motion.button>
                                )}

                                {/* Next/Submit Button */}
                                <motion.button
                                    type={currentStep === 3 ? "submit" : "button"}
                                    onClick={currentStep === 3 ? null : nextStep}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`group flex items-center gap-3 ml-auto px-6 py-3 cursor-pointer rounded-[6px] font-medium text-sm transition ${submitted
                                        ? "bg-[#C8F8A9] text-[#0F3D3A] hover:text-white hover:bg-[#0F3D3A]"
                                        : "bg-[#C8F8A9] text-[#0F3D3A] hover:text-white hover:bg-[#0F3D3A]"
                                        }`}
                                >
                                    <span>
                                        {currentStep === 3 ? (submitted ? "Message Sent!" : "Submit Application") : "Next Step"}
                                    </span>
                                    {currentStep !== 3 && (
                                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    )}
                                </motion.button>
                            </div>

                            {/* Privacy Notice */}
                            <motion.p
                                variants={itemVariants}
                                className="text-xs text-gray-500 mt-6 text-left"
                            >
                                By submitting this form you agree to our{" "}
                                <a href="#" className="underline hover:text-gray-700">
                                    Privacy Policy
                                </a>
                                . Sumry Finance may contact you via email or phone for scheduling or
                                marketing purposes.
                            </motion.p>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
