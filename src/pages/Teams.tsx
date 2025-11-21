import { motion, Variants } from 'framer-motion';

export default function Team() {
    const team = [
        {
            name: "Sophia Bennett",
            role: "Estate & Legacy Planner",
            img: "team1.png",
        },
        {
            name: "Isabelle Moreau",
            role: "Senior Tax Advisor",
            img: "team2.png",
        },
        {
            name: "Emily Ross",
            role: "Client Success Lead",
            img: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=800&q=80",
        },
        {
            name: "David Miller",
            role: "Lead Financial Consultant",
            img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=800&q=80",
        },
    ];

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

  const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

    return (
        <section id="team" className="relative w-full h-full bg-[#F7F7F7] py-12 md:py-24 md:pb-0 px-4 md:px-8 lg:px-10 xl:px-0 overflow-hidden">
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
                        Our teams
                    </span>
                </motion.div>

                <motion.h1
                    variants={itemVariants}
                    className="heading text-3xl sm:text-4xl md:text-5xl mt-4 leading-tighter md:leading-tighter tracking-wide text-[#0F3D3A] font-medium"
                >
                    Experts Who Think Strategically <br className="hidden sm:block" />
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-gray-600 max-w-2xl text-base md:text-lg mt-2"
                >
                    We bring together sharp business thinking, real-world leadership, and a hands-on approach to help our clients achieve measurable results.
                </motion.p>
            </motion.div>

            <div className="w-full">
                {/* Mobile horizontal scroll */}
                <div className="flex overflow-x-auto pb-4 space-x-4 md:hidden scrollbar-hide">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            className="group shrink-0 w-64"
                            whileHover={{ y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Image Container */}
                            <div className="overflow-hidden rounded-xl">
                                <motion.img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-full cursor-pointer h-80 object-cover object-top grayscale-[75%] group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                                    whileHover={{
                                        scale: 1.1,
                                        transition: {
                                            duration: 0.1,
                                            ease: "easeOut"
                                        }
                                    }}
                                />
                            </div>

                            {/* Info */}
                            <div className='flex items-center justify-between'>
                                <div className="mt-4">
                                    <h3 className="heading text-2xl font-normal text-[#0F3D3A]">{member.name}</h3>
                                    <p className="text-sm text-gray-600 mt-1">{member.role}</p>
                                </div>
                                <a href="/" className="w-9 h-9 bg-[#0F3D3A] hover:bg-[#0f3d3adc] rounded-full flex items-center justify-center">
                                    <img
                                        src="/linkedin.svg"
                                        alt="linkedin-icon"
                                        className="w-5 h-5 object-contain"
                                    />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Original grid for larger screens */}
                <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            className="group"
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Image Container */}
                            <div className="overflow-hidden rounded-xl">
                                <motion.img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-full cursor-pointer h-80 object-cover object-top grayscale-[75%] group-hover:grayscale-0 transition-all duration-500 ease-in-out"
                                    whileHover={{
                                        scale: 1.1,
                                        transition: {
                                            duration: 0.1,
                                            ease: "easeOut"
                                        }
                                    }}
                                />
                            </div>

                            {/* Info */}
                            <div className='flex items-center justify-between'>
                                <div className="mt-4">
                                    <h3 className="heading text-2xl font-normal text-[#0F3D3A]">{member.name}</h3>
                                    <p className="text-sm text-gray-600 mt-1">{member.role}</p>
                                </div>
                                <a href="/" className="w-9 h-9 bg-[#0F3D3A] hover:bg-[#0f3d3adc] rounded-full flex items-center justify-center">
                                    <img
                                        src="/linkedin.svg"
                                        alt="linkedin-icon"
                                        className="w-5 h-5 object-contain"
                                    />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}