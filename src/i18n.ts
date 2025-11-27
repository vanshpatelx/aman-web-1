import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    lng: "en",
    resources: {
      en: {
        translation: {
          // HERO
          heading: "Engineering a faster, smarter semiconductor future.",
          subheading:
            "Experience a numbers-driven lending approach built on expertise, partnership, and long-term financial clarity—delivering more than just competitive rates.",
          cta1: "Explore solutions",
          cta2: "Schedule a call",

          // NAV
          nav: {
            home: "Home",
            about: "About Us",
            content: "Content",
            solutions: "Solutions",
            shop: "Shop Now"
          },

          // ABOUT SECTION
          about: {
            sectionTitle: "About Vision Semiconductor",
            headline:
              "Powering the Future of Technology Through Unrivaled Innovation and a Global Vision for Semiconductor Progress.",
            features: {
              innovation: "Innovation",
              expertise: "Expertise",
              vision: "Vision"
            },
            cta: "Learn More"
          },

          // SECTION (Stats Section)
          section2: {
            title: "It's like giving every tool in your fab a second life",
            description:
              "Our mission-driven approach reduces cost of ownership, improves reliability, and keeps legacy equipment productive for years longer.",
            cta: "Get started",

            stats: [
              {
                label: "Years of Expertise",
                value: "20+",
                description: "Decades of experience in semiconductor engineering."
              },
              {
                label: "Global Clients",
                value: "150+",
                description: "Trusted by companies across industries and continents."
              },
              {
                label: "Cost Saved",
                value: "$50M+",
                description: "Helping partners reduce operational and upgrade costs."
              },
              {
                label: "Projects Delivered",
                value: "500+",
                description: "Successful projects driven by precision and innovation."
              }
            ]
          },

          // SERVICES SECTION
          services: {
            accessCta: "Access Knowledge Center",
            services: [
              {
                title: "Podcast Episodes",
                description: "Expert discussions on semiconductor manufacturing trends and innovations",
                pattern: "/patterns/Burst.svg",
                link: "/PodcastsPage"
              },
              {
                title: "Trending White Papers",
                description: "In-depth technical analysis and research from industry leaders",
                pattern: "/patterns/Looper-3.svg",
                link: "/WhitePapersPage"
              },
              {
                title: "Market Analysis",
                description: "Real-time insights on market trends and equipment valuations",
                pattern: "/patterns/LooperGroup.svg",
                link: "/BlogPage"
              },
              {
                title: "Educational Resources",
                description: "Comprehensive guides and tutorials for semiconductor processes",
                pattern: "/patterns/Topology-1.svg",
                link: "/EbooksPage"
              },
              {
                title: "Industry News",
                description: "Latest developments and emerging technologies in semiconductor manufacturing",
                pattern: "/patterns/Topology-2.svg",
                link: "/IndustryNewsPage"
              }
            ]
          }
          ,
          // EQUIPMENT SECTION
          equipment: {
            heading: "Engineering pathways to industrial sustainability",
            subheading: "From energy generation to long-term system efficiency, we deliver solutions that cut costs, reduce emissions, and ensure resilient operations.",
            requestAudit: "Request audit",
            learnMore: "Learn more",
            services: [
              {
                id: 'Brokering',
                title: 'Equipment Brokering',
                description: 'Expert management of asset sales, connecting you with qualified buyers for maximum return',
                link: '/Brokering'
              },
              {
                id: 'Inspection',
                title: 'Inspection',
                description: 'Detailed equipment evaluations that verify condition, reduce risk, and support confident decisions.',
                link: '/Inspection'
              },
              {
                id: 'Disposition',
                title: 'Disposition',
                description: 'Strategic removal of surplus assets, optimizing value recovery while minimizing operational burden.',
                link: '/Disposition'
              },
              {
                id: 'Consignment',
                title: 'Consignment',
                description: 'Hands-on sales support that markets your equipment effectively while you retain full ownership.',
                link: '/Consignment'
              },
              {
                id: 'Logistics-Forwarding',
                title: 'Logistics & Forwarding',
                description: 'End-to-end transport coordination ensuring safe, efficient delivery across any distance or border',
                link: '/Logistics'
              }
            ]
          },
          // FOOTER SECTION
          footer: {
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.",
            company: "Company",
            products: "Products",
            contact: "Contact",
            companyLinks: {
              about: "About Us",
              careers: "Careers",
              privacy: "Privacy Policy",
              terms: "Terms & Condition"
            },
            productLinks: {
              event: "Event",
              projects: "Projects",
              services: "Services",
              team: "Team"
            },
            contactInfo: {
              email: "Support@vision.com",
              phone: "+1 234 567 8900",
              address: "345 Tech Park Avenue, 9th Floor Silicon Valley, CA 98765 USA"
            },
            copyright: "Copyright 2024 Vision Semiconductor Solutions LLC. All Rights Reserved."
          },
          // product SECTION
          tabs: {
            learnMore: "Learn More",
            tabsData: [
              {
                id: 'mission',
                label: 'Our Mission',
                number: '01',
                title: 'Driving Semiconductor Innovation Forward',
                description: 'We are committed to advancing semiconductor technology through cutting-edge research, strategic partnerships, and sustainable engineering solutions that power the future of global technology.',
                imageUrl: '/images/mission.jpg'
              },
              {
                id: 'vision',
                label: 'Our Vision',
                number: '02',
                title: 'Shaping the Future of Technology',
                description: 'To be the global leader in semiconductor solutions, creating a smarter, more connected world through innovative technology that transforms industries and enhances human experiences.',
                imageUrl: '/images/vision.jpg'
              },
              {
                id: 'values',
                label: 'Our Values',
                number: '03',
                title: 'Excellence Through Integrity',
                description: 'We operate with unwavering integrity, foster collaborative innovation, and maintain the highest standards of quality in every aspect of our semiconductor solutions and services.',
                imageUrl: '/images/values.jpg'
              }
            ]
          },
          // BROKERING PAGE
          brokering: {
            hero: {
              title: "Global Equipment Brokering",
              subtitle: "Connect with a worldwide network of buyers and sellers. We simplify the complexities of industrial equipment trading with verified listings and secure transactions.",
              ctaText: "Request Access"
            },
            marketplace: {
              title: "Marketplace Overview",
              description: "Access thousands of verified industrial assets across construction, mining, and manufacturing sectors.",
              content: "Our brokering platform bridges the gap between surplus equipment owners and businesses in need of reliable machinery. We handle the heavy lifting of negotiations, verification, and documentation.",
              stats: [
                "30,000+ Active buyers in our database.",
                "$500M+ In completed equipment transactions.",
                "Transparent fee structures with no hidden costs."
              ]
            },
            workflow: {
              title: "Sourcing Workflow",
              description: "How we connect you with the right machinery.",
              steps: [
                {
                  step: '01',
                  title: 'Request',
                  desc: 'Submit your equipment requirements or list your asset for sale.'
                },
                {
                  step: '02',
                  title: 'Match',
                  desc: 'Our AI-driven engine matches assets with qualified buyers instantly.'
                },
                {
                  step: '03',
                  title: 'Verify',
                  desc: 'Inspectors verify condition and documentation before proceeding.'
                },
                {
                  step: '04',
                  title: 'Close',
                  desc: 'Secure payment processing and logistics coordination finalize the deal.'
                }
              ]
            },
            features: {
              title: "Why Choose Our Brokerage",
              items: [
                {
                  title: "Global Reach",
                  description: "Access markets in over 50 countries. We handle cross-border trade complexities, including customs and compliance."
                },
                {
                  title: "Fraud Protection",
                  description: "Every transaction is secured via escrow services. We verify every buyer and seller to prevent fraud."
                },
                {
                  title: "Market Intelligence",
                  description: "Leverage our proprietary data to price your equipment competitively or ensure you aren't overpaying."
                }
              ]
            },
            trusted: {
              title: "Trusted by Industry Leaders"
            },
            cta: {
              title: "Ready to Buy or Sell?",
              subtitle: "Join thousands of businesses optimizing their asset management today.",
              buttons: {
                browse: "Browse Inventory",
                contact: "Contact a Broker"
              }
            },
            modal: {
              title: "Brokerage Inquiry",
              form: {
                firstName: "First Name",
                lastName: "Last Name",
                email: "Email Address",
                inquiryType: "Inquiry Type",
                company: "Company",
                phone: "Phone",
                equipment: "Equipment / Requirements",
                submit: "Submit Inquiry",
                agreement: "By submitting, you agree to share your contact details with our brokerage team."
              },
              options: {
                buy: "I want to Buy Equipment",
                sell: "I want to Sell Equipment",
                general: "General Inquiry"
              }
            },
            successMessage: "Inquiry submitted successfully! A broker will contact you shortly."
          },
          // INSPECTION PAGE
          inspection: {
            hero: {
              title: "Certified Equipment Inspections",
              subtitle: "Unbiased, detailed, and rapid inspection reports. Know exactly what you are buying or selling with our standardized assessment protocols.",
              ctaText: "Schedule Inspection"
            },
            whyMatter: {
              title: "Why Inspections Matter",
              description: "Mitigate risk and ensure fair value with our comprehensive reporting.",
              heading: "A Deep Dive into Machine Health",
              content: "Our inspectors don't just kick the tires. We perform rigorous operational tests, fluid analysis, and undercarriage measurements. A typical report includes over 100 data points and 50+ high-resolution photos.",
              features: [
                {
                  title: "Standardized Checklists",
                  description: "Consistent evaluation criteria across all equipment categories."
                },
                {
                  title: "Visual Evidence",
                  description: "Detailed photo and video documentation of wear and tear."
                },
                {
                  title: "Digital Reports",
                  description: "Instant access to reports via our secure cloud portal."
                }
              ]
            },
            qualityProcess: {
              title: "Quality Assurance Process",
              steps: [
                {
                  title: "Booking & Dispatch",
                  desc: "Inspector assigned based on equipment type and location expertise.",
                  side: "left"
                },
                {
                  title: "On-Site Evaluation",
                  desc: "Visual check, operational testing, and fluid sampling performed.",
                  side: "right"
                },
                {
                  title: "Data Review",
                  desc: "Senior technical leads review raw data for anomalies.",
                  side: "left"
                },
                {
                  title: "Report Publication",
                  desc: "Final report generated with valuation estimates (optional).",
                  side: "right"
                }
              ]
            },
            evaluators: {
              title: "Evaluator Highlights",
              inspectors: [
                {
                  name: "Mike T.",
                  role: "Senior Heavy Machinery Specialist",
                  quote: "\"I've inspected over 2,000 excavators. I know exactly where stress fractures hide.\""
                },
                {
                  name: "Sarah L.",
                  role: "Cranes & Lifting Equipment",
                  quote: "\"Safety is the priority. My reports ensure compliance with OSHA and ISO standards.\""
                },
                {
                  name: "David R.",
                  role: "Trucks & Fleet",
                  quote: "\"Engine diagnostics tell the real story. We don't guess, we measure.\""
                }
              ]
            },
            cta: {
              title: "Don't risk a bad deal.",
              subtitle: "Get the facts before you sign the check.",
              button: "Request a Sample Report"
            },
            modal: {
              title: "Request Inspection",
              form: {
                firstName: "First Name",
                lastName: "Last Name",
                email: "Email Address",
                equipment: "Equipment Details",
                location: "Asset Location",
                phone: "Phone",
                submit: "Submit Request",
                responseTime: "Standard response time is under 4 hours during business days."
              },
              placeholders: {
                firstName: "John",
                lastName: "Doe",
                email: "john@company.com",
                equipment: "Year, Make, Model, Serial # (if available)",
                location: "City, State",
                phone: "+1 (555) 000-0000"
              }
            },
            successMessage: "Inspection request received! We will contact you to schedule."
          },
          // DISPOSITION PAGE
          disposition: {
            hero: {
              title: "Strategic Asset Disposition",
              subtitle: "Maximize recovery value from surplus assets. We offer environmentally compliant, profitable solutions for end-of-life or surplus equipment.",
              ctaText: "Start Recovery"
            },
            recoveryProcess: {
              title: "The Asset Recovery Process",
              description: "Turn idle machinery into working capital securely and efficiently.",
              steps: [
                {
                  title: "Assessment",
                  description: "We catalog your surplus inventory and determine the best disposition channel: resale, refurbishment, or recycling."
                },
                {
                  title: "Compliance",
                  description: "Hazardous fluids removal, data destruction, and e-waste compliance are handled according to EPA regulations."
                },
                {
                  title: "Liquidation",
                  description: "Assets are sold via private treaty, auction, or scrap markets to maximize return on investment."
                }
              ],
              caseStudy: {
                title: "Case Study: Construction Fleet Liquidation",
                content: "A major infrastructure firm needed to offload 50+ units of aging earthmoving equipment. Our team managed the logistics, refurbishment, and auctioning process.",
                metrics: [
                  {
                    value: "120%",
                    label: "Recovery vs Book Value"
                  },
                  {
                    value: "30 Days",
                    label: "Project Timeline"
                  }
                ]
              }
            },
            workflow: {
              title: "Resale & Recycling Workflow",
              features: [
                {
                  title: "Logistics & Removal",
                  description: "We arrange heavy haul transport and site clearance."
                },
                {
                  title: "Title Transfer",
                  description: "Handling all lien releases and ownership documentation."
                },
                {
                  title: "Multi-Channel Sales",
                  description: "Listing on global marketplaces and exclusive networks."
                },
                {
                  title: "Green Disposal",
                  description: "Certified recycling for non-salvageable components."
                }
              ]
            },
            cta: {
              title: "Turn Liability into Liquidity",
              button: "Get a Free Valuation"
            },
            modal: {
              title: "Asset Disposition Inquiry",
              form: {
                firstName: "First Name",
                lastName: "Last Name",
                email: "Email Address",
                assets: "List of Assets / Inventory",
                location: "Location of Assets",
                company: "Company",
                submit: "Submit for Valuation",
                responseTime: "Our team typically provides preliminary valuations within 2 business days."
              },
              placeholders: {
                firstName: "John",
                lastName: "Doe",
                email: "john@company.com",
                assets: "Please list major items or provide a summary of the lot...",
                location: "City, State",
                company: "Company Name"
              }
            },
            successMessage: "Disposition request submitted. A recovery specialist will review your assets."
          },
          // CONSIGNMENT PAGE
          consignment: {
            hero: {
              title: "Equipment Consignment Services",
              subtitle: "Secure storage and professional sales management for your heavy equipment. You maintain ownership while we handle the sale.",
              ctaText: "Consign Your Equipment"
            },
            hassleFree: {
              title: "Hassle-Free Selling",
              description: "We store, maintain, and sell your assets from our secure yards.",
              revenueModel: {
                title: "Revenue Sharing Model",
                content: "Unlike auctions where you lose control of the price, our consignment model puts you in the driver's seat. We agree on a net price or a commission percentage.",
                features: [
                  { label: "Marketing & Listing", value: "Included" },
                  { label: "Storage (90 Days)", value: "Free" },
                  { label: "Maintenance Wash", value: "Included" },
                  { label: "Commission", value: "8-12%" }
                ]
              },
              benefits: [
                {
                  title: "Prime Locations",
                  description: "Our consignment yards are located near major ports and highways for easy buyer access and logistics."
                },
                {
                  title: "Maximum Visibility",
                  description: "Walk-in traffic combined with premium digital placement ensures your asset gets seen by serious buyers."
                },
                {
                  title: "Secure Facilities",
                  description: "24/7 security monitoring, fenced yards, and regular battery/fluid maintenance checks while in storage."
                }
              ]
            },
            tracking: {
              title: "Tracking & Transparency",
              features: [
                {
                  title: "Real-time Inventory",
                  description: "View your consigned assets in our portal. Check status, view listing hits, and manage offers."
                },
                {
                  title: "Dynamic Pricing",
                  description: "We provide data-driven price adjustments based on market interest to ensure a timely sale."
                },
                {
                  title: "Performance Reports",
                  description: "Weekly updates on leads, inquiries, and physical inspections conducted on your equipment."
                }
              ]
            },
            cta: {
              title: "Space is limited in our prime yards.",
              subtitle: "Reserve your spot today and get your equipment in front of verified buyers.",
              button: "Reserve Space"
            },
            modal: {
              title: "Consignment Request",
              form: {
                firstName: "First Name",
                lastName: "Last Name",
                email: "Email Address",
                equipment: "Equipment Description",
                location: "Current Location",
                phone: "Phone",
                submit: "Submit Request",
                agreement: "By submitting, you agree to our consignment terms and privacy policy."
              },
              placeholders: {
                firstName: "John",
                lastName: "Doe",
                email: "john@company.com",
                equipment: "E.g., 2018 CAT 320 Excavator...",
                location: "City, State",
                phone: "+1 (555) 000-0000"
              }
            },
            successMessage: "Consignment space reserved! We will contact you to finalize details."
          },
          // LOGISTICS PAGE
          logistics: {
            hero: {
              title: "Heavy Equipment Logistics",
              subtitle: "Door-to-door transport solutions for oversized cargo. We handle dismantling, packing, freight forwarding, and customs clearance.",
              ctaText: "Get a Shipping Quote"
            },
            forwarding: {
              title: "Global Forwarding Network",
              description: "Seamlessly moving heavy machinery across borders and oceans.",
              globe: {
                title: "Connecting 150+ Ports Worldwide",
                subtitle: "Live tracking available for all ocean and air freight."
              },
              services: [
                {
                  title: "Inland Heavy Haul",
                  description: "Specialized low-boys and RGN trailers for oversized loads. We handle all permitting and escort vehicle requirements."
                },
                {
                  title: "RoRo & Container",
                  description: "Flexible ocean freight options. Roll-on/Roll-off for drivable units or containerization for dismantled parts."
                },
                {
                  title: "Dismantling & Packing",
                  description: "Professional dismantling services to fit large machinery into standard containers, reducing shipping costs significantly."
                }
              ]
            },
            workflow: {
              title: "Shipping Workflow",
              steps: [
                { title: "Quote & Planning", text: "Route analysis and cost estimation based on dimensions and weight." },
                { title: "Prep & Pickup", text: "Washing (for quarantine compliance) and loading onto transport." },
                { title: "Export Customs", text: "Documentation filing (AES, Commercial Invoice, Packing List)." },
                { title: "Ocean Freight", text: "Vessel departure and transit monitoring." },
                { title: "Import & Delivery", text: "Customs clearance at destination and final mile delivery." }
              ]
            },
            cta: {
              title: "Need to move big iron?",
              subtitle: "Our logistics experts are ready to plan your route.",
              buttons: {
                quote: "Request Quote",
                track: "Track Shipment"
              }
            },
            modal: {
              title: "Request Shipping Quote",
              form: {
                firstName: "First Name",
                lastName: "Last Name",
                email: "Email Address",
                equipment: "Equipment Details",
                origin: "Origin City",
                destination: "Destination City",
                submit: "Submit Request",
                agreement: "By submitting, you agree to our privacy policy. Estimates are valid for 7 days."
              },
              placeholders: {
                firstName: "John",
                lastName: "Doe",
                email: "john@company.com",
                equipment: "E.g., 2018 CAT 320 Excavator, approx 45,000 lbs",
                origin: "City, Country",
                destination: "City, Country"
              }
            },
            successMessage: "Quote request submitted successfully! A logistics coordinator will contact you shortly."
          },



          ///<------ about page ------->
          // BRAND STORY SECTION
          brandStory: {
            sectionTitle: "Section 01 — Brand Story",
            heading: "Our Story",
            title: "Vision Semiconductor Solutions LLC was founded with a clear purpose to power the future of technology.",
            content: [
              "Vision Semiconductor Solutions (VSS) supports the global semiconductor manufacturing industry with precision, innovation, and transparency. What began as a source for surplus and spare equipment has evolved into a platform for knowledge, engineering excellence, and global collaboration.",
              "Rooted in technical expertise, VSS aims to become a trusted hub for solutions, education, and industry influence within the semiconductor ecosystem."
            ],
            founder: {
              name: "Vision Semiconductor Solutions",
              role: "Global Leadership Team",
              quote: "\"We hold ourselves responsible first, then our team, our customers, and our community.\""
            }
          },
          // MISSION VISION SECTION
          missionVision: {
            intro: "Driving the Industry Forward",
            mission: {
              section: "Section 02",
              title: "Mission",
              heading: "Empowering the Future of Semiconductor Solutions",
              content: "Our mission is to deliver reliable semiconductor equipment and knowledge to engineers, manufacturers, and innovators worldwide. We make high-performance solutions accessible, efficient, and scalable—empowering the next generation of technology and manufacturing excellence."
            },
            vision: {
              section: "Section 03",
              title: "Vision",
              heading: "Shaping Tomorrow, Today",
              content: "We envision becoming a global center for semiconductor solutions, education, and industry leadership. Through clarity, innovation, and long-term commitment, we aim to influence the future of the semiconductor ecosystem and elevate technological progress around the world."
            }
          },
          // TEAM SECTION
          team: {
            title: "Our team has over 100 years of combined experience!",
            subtitle: "Our team brings experience, innovation, and creativity to the semiconductor industry to ensure your plans are in good hands.",
            members: [
              {
                name: "Mike Simorangkir",
                role: "Founder & CEO",
                bio: "Mike, MBA, has 15+ years of experience in semiconductor commercial strategies and mixed-use equipment development."
              },
              {
                name: "Stanley George",
                role: "Retired EVP & CCO",
                bio: "Stanley was a partner at Heenan Blaikie LLP until September 2005, specializing in global tech compliance."
              },
              {
                name: "Eliza Baker",
                role: "VP, Operations",
                bio: "Eliza, MBA, has 12+ years of experience in commercial logistics and semiconductor supply chain management."
              },
              {
                name: "Sally Cruz",
                role: "Chief Marketing Officer",
                bio: "Sally has 10+ years of experience in both the Canadian and Asia Pacific tech markets."
              }
            ]
          },
          // CTA SECTION
          cta: {
            title: "Partner with Vision Semiconductor Solutions",
            subtitle: "Discover how our precision and innovation can power your next technological breakthrough.",
            button: "Contact Us Today"
          },
          // ACCESS CTA PAGE
          accessCTA: {
            hero: {
              badge: "Exclusive Access",
              title: "Unlock the Ultimate <1>Knowledge Base</1>",
              subtitle: "Full access to semiconductor reports, white papers, deep-tech insights, and expert-curated resources.",
              buttons: {
                trial: "Start Free Trial",
                explore: "Explore Library"
              }
            },
            valueProposition: {
              title: "Why Professionals Choose Us",
              subtitle: "Trusted semiconductor intelligence built for engineers, analysts, and decision-makers.",
              cards: [
                {
                  title: "Real-time Insights",
                  description: "Stay ahead with continuously updated semiconductor market and technology intelligence."
                },
                {
                  title: "Verified Sources",
                  description: "Every resource is validated by industry experts for technical accuracy and relevance."
                },
                {
                  title: "Global Community",
                  description: "Join a network of engineers, researchers, and leaders shaping the future of technology."
                }
              ]
            }
          },
          // PODCASTS PAGE
          podcasts: {
            hero: {
              title: "Engineering a faster, smarter podcast <1>future.</1>",
              subtitle: "Experience a numbers-driven approach built on expertise, partnership, and long-term clarity—delivering more than just audio.",
              buttons: {
                explore: "Explore episodes",
                schedule: "Schedule a call"
              }
            },
            featured: {
              title: "Latest Episodes",
              featuredBadge: "FEATURED",
              featuredEpisode: {
                title: "Ep 100: A Century of Silicon",
                description: "We look back at the history of semiconductors and look forward to the quantum leap awaiting us in the next decade.",
                button: "Listen Now"
              }
            },
            episodes: {
              categories: ["Technology", "Business", "Health", "Design", "Marketing", "Science"],
              episode: {
                showNotes: "Show Notes",
                duration: "{{duration}}"
              }
            },
            sidebar: {
              newsletter: {
                title: "Stay in the loop",
                subtitle: "Join 10,000+ engineers receiving our weekly industry breakdowns.",
                placeholder: "Enter your email",
                button: "Subscribe Free"
              },
              about: {
                title: "About Vision",
                content: "Vision Semiconductor Solutions LLC provides cutting-edge insights into the hardware that powers our world. From silicon to systems.",
                link: "Learn more →"
              }
            }
          },
          // WHITE PAPERS PAGE
          whitePapers: {
            hero: {
              title: "Research & White Papers",
              subtitle: "Semiconductor market insights, fabrication trends, and advanced technology briefs."
            },
            featured: {
              editorsPick: "Editor's Pick",
              title: "The State of Global Chip Innovation 2024",
              description: "Analysis of fab expansions, supply chain resilience, lithography breakthroughs, and competitive dynamics shaping next-gen semiconductor ecosystems.",
              buttons: {
                download: "Download PDF",
                summary: "Read Summary"
              }
            },
            recent: {
              title: "Recent Publications",
              papers: [
                {
                  title: "Strategic Insights Vol. 1",
                  summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
                },
                {
                  title: "Strategic Insights Vol. 2",
                  summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
                },
                {
                  title: "Strategic Insights Vol. 3",
                  summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
                }
              ],
              button: "View"
            }
          },
          // BLOG PAGE
          blog: {
            latestNews: {
              title: "Latest News",
              featured: {
                category: "SEMICONDUCTOR INSIGHTS",
                title: "Global fabs struggle to scale advanced packaging as AI chip demand accelerates",
                summary: "Chip manufacturers worldwide are racing to expand advanced packaging capacity, but supply constraints in lithography tools and materials hinder production scale."
              },
              smallArticles: [
                {
                  category: "FAB TECHNOLOGY",
                  title: "New breakthroughs in EUV lithography promise higher yield at 2nm nodes..."
                },
                {
                  category: "SUPPLY CHAIN",
                  title: "Global silicon wafer shortage expected to continue through 2026..."
                },
                {
                  category: "EQUIPMENT INNOVATION",
                  title: "Etching equipment vendors push new plasma technologies for sub-3nm geometries..."
                }
              ]
            },
            gridSection: {
              title: "Operating, Reserve, and<br/>Vault accounts",
              articles: [
                {
                  category: "MANUFACTURING",
                  title: "Chipmakers invest billions to expand global fabrication capacity",
                  summary: "Leading semiconductor companies are accelerating fab expansion to meet demand for AI, EVs, and next-gen consumer electronics."
                },
                {
                  category: "EQUIPMENT",
                  title: "New wafer metrology systems enhance precision at atomic scales",
                  summary: "Advanced inspection tools continue to evolve as semiconductor features shrink into the angstrom era."
                },
                {
                  category: "R&D INNOVATION",
                  title: "Researchers explore 3D silicon stacking to boost computational density",
                  summary: "Innovations in thermal dissipation and interconnect technologies are key to scaling 3D stacked semiconductor architectures."
                }
              ],
              button: "View All Article"
            },
            common: {
              author: "Dr. Ethan Park",
              date: "25 Jan 2025"
            }
          },
          // EBOOKS PAGE
          ebooks: {
            hero: {
              title: "Knowledge Library",
              subtitle: "Technical eBooks, semiconductor insights, and premium engineering guides — free for all professionals."
            },
            books: [
              {
                title: "Mastering Digital Transformation",
                author: "Dr. Sarah Connor",
                description: "A curated guide offering technical insights, best practices, and industry-ready knowledge."
              },
              {
                title: "The Agile Leadership Guide",
                author: "James Cameron",
                description: "A curated guide offering technical insights, best practices, and industry-ready knowledge."
              },
              {
                title: "Data Science for Executives",
                author: "Ellen Ripley",
                description: "A curated guide offering technical insights, best practices, and industry-ready knowledge."
              },
              {
                title: "Cybersecurity Essentials",
                author: "Neo Anderson",
                description: "A curated guide offering technical insights, best practices, and industry-ready knowledge."
              }
            ],
            buttons: {
              readOnline: "Read Online",
              download: "Download"
            },
            common: {
              by: "by",
              pages: "{{count}} pages"
            }
          },
          // INDUSTRY NEWS PAGE
          industryNews: {
            pageTitle: "Semiconductor Industry News",
            featured: {
              badge: "Breaking",
              title: "Major Breakthrough in Quantum Chip Efficiency Announced Today"
            },
            categories: ["All", "Chip Manufacturing", "Regulations", "Startups", "Corporate", "R&D"],
            newsItems: [
              {
                title: "Global Chip Markets Rally as AI Demand Hits Record High",
                excerpt: "Cutting-edge fabs, new lithography breakthroughs, and geopolitical regulations continue shaping the semiconductor ecosystem.",
                category: "Chip Manufacturing"
              },
              {
                title: "New Semiconductor Export Rules Create Industry Uncertainty",
                excerpt: "Cutting-edge fabs, new lithography breakthroughs, and geopolitical regulations continue shaping the semiconductor ecosystem.",
                category: "Regulations"
              }
            ],
            sidebar: {
              trending: {
                title: "Trending Topics",
                tags: ['#EUVLithography', '#ChipFabrication', '#AIChips', '#3DNAND', '#QuantumComputing']
              },
              subscribe: {
                title: "Daily Semiconductor Digest",
                description: "Get top chip-industry headlines delivered every morning.",
                placeholder: "Email Address",
                button: "Sign Up"
              }
            },
            common: {
              readFullStory: "Read Full Story",
              author: "Dr. Jane Doe",
              featuredAuthor: "Dr. John Smith",
              date: "Jan {{day}}, 2025"
            }
          },
          // PRODUCTS PAGE
          products: {
            tabsData: [
              {
                id: 'Modular architecture',
                label: 'Modular architecture',
                number: '01',
                title: 'Modular architecture',
                description: 'Explore equipment from leading OEMs including ASML, Applied Materials, Lam Research, TEL, and KLA.',
                cta: 'Learn More'
              },
              {
                id: 'Opportunities',
                label: 'Opportunities',
                number: '02',
                title: 'Featured Opportunities',
                description: 'Access exclusive high-value listings, rare systems, and competitively priced, in-demand semiconductor tools.',
                cta: 'Learn More'
              },
              {
                id: 'New Inventory',
                label: 'New Inventory',
                number: '03',
                title: 'New Arrivals',
                description: 'Discover the latest additions, from cutting-edge wafer tools to refurbished production-ready systems.',
                cta: 'Learn More'
              },
              {
                id: 'Portal',
                label: 'Portal',
                number: '04',
                title: 'Customer Portal',
                description: 'Request quotes, manage POs, and streamline procurement with a unified customer workspace.',
                cta: 'Learn More'
              }
            ]
          },

        }
      },

      hi: {
        translation: {
          // HERO
          heading: "एक तेज़, स्मार्ट सेमीकंडक्टर भविष्य की इंजीनियरिंग।",
          subheading:
            "विशेषज्ञता, साझेदारी और दीर्घकालिक वित्तीय स्पष्टता पर आधारित एक संख्या-चालित लेंडिंग दृष्टिकोण का अनुभव करें—जो केवल प्रतिस्पर्धी दरों से कहीं अधिक प्रदान करता है।",
          cta1: "समाधान देखें",
          cta2: "कॉल शेड्यूल करें",

          // NAV
          nav: {
            home: "होम",
            about: "हमारे बारे में",
            content: "कंटेंट",
            solutions: "सॉल्यूशन्स",
            shop: "अभी खरीदें"
          },

          // ABOUT SECTION
          about: {
            sectionTitle: "विजन सेमीकंडक्टर के बारे में",
            headline:
              "अद्वितीय नवाचार और वैश्विक दृष्टिकोण के साथ तकनीक के भविष्य को आगे बढ़ाना—सेमीकंडक्टर प्रगति के लिए हमारी प्रतिबद्धता।",
            features: {
              innovation: "नवाचार",
              expertise: "विशेषज्ञता",
              vision: "दृष्टि"
            },
            cta: "और जानें"
          },

          section2: {
            title: "यह आपके फैब के हर टूल को दूसरा जीवन देने जैसा है",
            description:
              "हमारा मिशन-चालित दृष्टिकोण स्वामित्व की लागत कम करता है, विश्वसनीयता बढ़ाता है और लेगेसी उपकरणों को वर्षों तक उत्पादक बनाए रखता है।",
            cta: "शुरू करें",

            stats: [
              {
                label: "अनुभव के वर्ष",
                value: "20+",
                description: "सेमीकंडक्टर इंजीनियरिंग में दशकों का अनुभव।"
              },
              {
                label: "वैश्विक ग्राहक",
                value: "150+",
                description: "दुनिया भर के उद्योगों का विश्वास।"
              },
              {
                label: "बचाई गई लागत",
                value: "$50M+",
                description: "संचालन और अपग्रेड लागत में बहुमूल्य बचत।"
              },
              {
                label: "प्रोजेक्ट पूरे",
                value: "500+",
                description: "सटीकता और नवाचार द्वारा संचालित सफल प्रोजेक्ट।"
              }
            ]
          },

          // SERVICES SECTION
          services: {
            accessCta: "ज्ञान केंद्र तक पहुंचें",
            services: [
              {
                title: "पॉडकास्ट एपिसोड",
                description: "सेमीकंडक्टर विनिर्माण रुझानों और नवाचारों पर विशेषज्ञ चर्चाएं",
                pattern: "/patterns/Burst.svg",
                link: "/PodcastsPage"
              },
              {
                title: "ट्रेंडिंग व्हाइट पेपर्स",
                description: "उद्योग के नेताओं से गहन तकनीकी विश्लेषण और शोध",
                pattern: "/patterns/Looper-3.svg",
                link: "/WhitePapersPage"
              },
              {
                title: "बाजार विश्लेषण",
                description: "बाजार के रुझानों और उपकरण मूल्यांकन पर रीयल-टाइम अंतर्दृष्टि",
                pattern: "/patterns/LooperGroup.svg",
                link: "/BlogPage"
              },
              {
                title: "शैक्षिक संसाधन",
                description: "सेमीकंडक्टर प्रक्रियाओं के लिए व्यापक गाइड और ट्यूटोरियल",
                pattern: "/patterns/Topology-1.svg",
                link: "/EbooksPage"
              },
              {
                title: "उद्योग समाचार",
                description: "सेमीकंडक्टर विनिर्माण में नवीनतम विकास और उभरती प्रौद्योगिकियां",
                pattern: "/patterns/Topology-2.svg",
                link: "/IndustryNewsPage"
              }
            ]
          },
          // EQUIPMENT SECTION
          equipment: {
            heading: "औद्योगिक स्थिरता के लिए इंजीनियरिंग मार्ग",
            subheading: "ऊर्जा उत्पादन से लेकर दीर्घकालिक सिस्टम दक्षता तक, हम ऐसे समाधान प्रदान करते हैं जो लागत कम करते हैं, उत्सर्जन घटाते हैं और लचीले संचालन सुनिश्चित करते हैं।",
            requestAudit: "ऑडिट अनुरोध करें",
            learnMore: "और जानें",
            services: [
              {
                id: 'Brokering',
                title: 'उपकरण ब्रोकरिंग',
                description: 'संपत्ति बिक्री का विशेषज्ञ प्रबंधन, अधिकतम रिटर्न के लिए आपको योग्य खरीदारों से जोड़ना',
                link: '/Brokering'
              },
              {
                id: 'Inspection',
                title: 'निरीक्षण',
                description: 'विस्तृत उपकरण मूल्यांकन जो स्थिति सत्यापित करते हैं, जोखिम कम करते हैं और आत्मविश्वासपूर्ण निर्णयों का समर्थन करते हैं।',
                link: '/Inspection'
              },
              {
                id: 'Disposition',
                title: 'निपटान',
                description: 'अधिशेष संपत्तियों का रणनीतिक निष्कासन, परिचालन बोझ को कम करते हुए मूल्य वसूली को अनुकूलित करना।',
                link: '/Disposition'
              },
              {
                id: 'Consignment',
                title: 'कंसाइनमेंट',
                description: 'व्यावहारिक बिक्री समर्थन जो आपके उपकरणों को प्रभावी ढंग से बाजार में लाता है जबकि आप पूर्ण स्वामित्व बनाए रखते हैं।',
                link: '/Consignment'
              },
              {
                id: 'Logistics-Forwarding',
                title: 'लॉजिस्टिक्स और फॉरवर्डिंग',
                description: 'एंड-टू-एंड परिवहन समन्वय जो किसी भी दूरी या सीमा पर सुरक्षित, कुशल डिलीवरी सुनिश्चित करता है',
                link: '/Logistics'
              }
            ]
          },
          // FOOTER SECTION
          footer: {
            description: "लोरेम इप्सम मुद्रण और टाइपसेटिंग उद्योग का एक साधारण डमी टेक्स्ट है। लोरेम इप्सम।",
            company: "कंपनी",
            products: "उत्पाद",
            contact: "संपर्क",
            companyLinks: {
              about: "हमारे बारे में",
              careers: "करियर",
              privacy: "गोपनीयता नीति",
              terms: "नियम और शर्तें"
            },
            productLinks: {
              event: "इवेंट",
              projects: "प्रोजेक्ट",
              services: "सेवाएं",
              team: "टीम"
            },
            contactInfo: {
              email: "Support@vision.com",
              phone: "+1 234 567 8900",
              address: "345 टेक पार्क एवेन्यू, 9वीं मंजिल सिलिकॉन वैली, सीए 98765 यूएसए"
            },
            copyright: "कॉपीराइट 2024 विजन सेमीकंडक्टर सॉल्यूशंस एलएलसी। सर्वाधिकार सुरक्षित।"
          },
          // product SECTION
          tabs: {
            learnMore: "और जानें",
            tabsData: [
              {
                id: 'mission',
                label: 'हमारा मिशन',
                number: '01',
                title: 'सेमीकंडक्टर नवाचार को आगे बढ़ाना',
                description: 'हम अत्याधुनिक शोध, रणनीतिक साझेदारी और स्थायी इंजीनियरिंग समाधानों के माध्यम से सेमीकंडक्टर प्रौद्योगिकी को आगे बढ़ाने के लिए प्रतिबद्ध हैं, जो वैश्विक प्रौद्योगिकी के भविष्य को शक्ति प्रदान करते हैं।',
                imageUrl: '/images/mission.jpg'
              },
              {
                id: 'vision',
                label: 'हमारी दृष्टि',
                number: '02',
                title: 'प्रौद्योगिकी के भविष्य को आकार देना',
                description: 'सेमीकंडक्टर समाधानों में वैश्विक नेता बनना, अभिनव प्रौद्योगिकी के माध्यम से एक स्मार्ट, अधिक जुड़ी हुई दुनिया बनाना जो उद्योगों को रूपांतरित करती है और मानव अनुभवों को बढ़ाती है।',
                imageUrl: '/images/vision.jpg'
              },
              {
                id: 'values',
                label: 'हमारे मूल्य',
                number: '03',
                title: 'ईमानदारी के माध्यम से उत्कृष्टता',
                description: 'हम अटूट ईमानदारी के साथ काम करते हैं, सहयोगात्मक नवाचार को बढ़ावा देते हैं, और हमारे सेमीकंडक्टर समाधानों और सेवाओं के हर पहलू में गुणवत्ता के उच्चतम मानकों को बनाए रखते हैं।',
                imageUrl: '/images/values.jpg'
              }
            ]
          },
          // BROKERING PAGE - Hindi
          brokering: {
            hero: {
              title: "वैश्विक उपकरण ब्रोकरिंग",
              subtitle: "खरीदारों और विक्रेताओं के विश्वव्यापी नेटवर्क से जुड़ें। हम सत्यापित लिस्टिंग और सुरक्षित लेनदेन के साथ औद्योगिक उपकरण व्यापार की जटिलताओं को सरल बनाते हैं।",
              ctaText: "एक्सेस अनुरोध करें"
            },
            marketplace: {
              title: "मार्केटप्लेस अवलोकन",
              description: "निर्माण, खनन और विनिर्माण क्षेत्रों में हजारों सत्यापित औद्योगिक संपत्तियों तक पहुंचें।",
              content: "हमारा ब्रोकरिंग प्लेटफॉर्म अधिशेष उपकरण मालिकों और विश्वसनीय मशीनरी की आवश्यकता वाले व्यवसायों के बीच की खाई को पाटता है। हम बातचीत, सत्यापन और दस्तावेज़ीकरण की जिम्मेदारी संभालते हैं।",
              stats: [
                "हमारे डेटाबेस में 30,000+ सक्रिय खरीदार।",
                "$500M+ पूर्ण उपकरण लेनदेन में।",
                "कोई छिपी लागत नहीं के साथ पारदर्शी फीस संरचना।"
              ]
            },
            workflow: {
              title: "सोर्सिंग वर्कफ्लो",
              description: "हम आपको सही मशीनरी से कैसे जोड़ते हैं।",
              steps: [
                {
                  step: '01',
                  title: 'अनुरोध',
                  desc: 'अपनी उपकरण आवश्यकताएं जमा करें या अपनी संपत्ति बिक्री के लिए सूचीबद्ध करें।'
                },
                {
                  step: '02',
                  title: 'मिलान',
                  desc: 'हमारा एआई-चालित इंजन तुरंत योग्य खरीदारों के साथ संपत्तियों का मिलान करता है।'
                },
                {
                  step: '03',
                  title: 'सत्यापन',
                  desc: 'इंस्पेक्टर आगे बढ़ने से पहले स्थिति और दस्तावेज़ीकरण सत्यापित करते हैं।'
                },
                {
                  step: '04',
                  title: 'समापन',
                  desc: 'सुरक्षित भुगतान प्रसंस्करण और लॉजिस्टिक्स समन्वय सौदे को अंतिम रूप देते हैं।'
                }
              ]
            },
            features: {
              title: "हमारी ब्रोकरेज क्यों चुनें?",
              items: [
                {
                  title: "वैश्विक पहुंच",
                  description: "50 से अधिक देशों में बाजारों तक पहुंचें। हम सीमा पार व्यापार की जटिलताओं, सीमा शुल्क और अनुपालन सहित संभालते हैं।"
                },
                {
                  title: "धोखाधड़ी सुरक्षा",
                  description: "प्रत्येक लेनदेन एस्क्रो सेवाओं के माध्यम से सुरक्षित है। हम धोखाधड़ी को रोकने के लिए प्रत्येक खरीदार और विक्रेता को सत्यापित करते हैं।"
                },
                {
                  title: "बाजार बुद्धिमत्ता",
                  description: "अपने उपकरणों को प्रतिस्पर्धी रूप से मूल्य निर्धारित करने या सुनिश्चित करने के लिए कि आप अधिक भुगतान नहीं कर रहे हैं, हमारे स्वामित्व वाले डेटा का लाभ उठाएं।"
                }
              ]
            },
            trusted: {
              title: "उद्योग के नेताओं द्वारा विश्वसनीय"
            },
            cta: {
              title: "खरीदने या बेचने के लिए तैयार?",
              subtitle: "आज ही हजारों व्यवसायों में शामिल हों जो अपने संपत्ति प्रबंधन को अनुकूलित कर रहे हैं।",
              buttons: {
                browse: "इन्वेंटरी ब्राउज़ करें",
                contact: "ब्रोकर से संपर्क करें"
              }
            },
            modal: {
              title: "ब्रोकरेज जांच",
              form: {
                firstName: "पहला नाम",
                lastName: "अंतिम नाम",
                email: "ईमेल पता",
                inquiryType: "जांच प्रकार",
                company: "कंपनी",
                phone: "फोन",
                equipment: "उपकरण / आवश्यकताएं",
                submit: "जांच जमा करें",
                agreement: "जमा करके, आप हमारी ब्रोकरेज टीम के साथ अपने संपर्क विवरण साझा करने के लिए सहमत होते हैं।"
              },
              options: {
                buy: "मैं उपकरण खरीदना चाहता हूं",
                sell: "मैं उपकरण बेचना चाहता हूं",
                general: "सामान्य जांच"
              }
            },
            successMessage: "जांच सफलतापूर्वक जमा! एक ब्रोकर जल्द ही आपसे संपर्क करेगा।"
          },
          // INSPECTION PAGE - Hindi
          inspection: {
            hero: {
              title: "प्रमाणित उपकरण निरीक्षण",
              subtitle: "निष्पक्ष, विस्तृत और त्वरित निरीक्षण रिपोर्ट। हमारे मानकीकृत मूल्यांकन प्रोटोकॉल के साथ जानें कि आप वास्तव में क्या खरीद या बेच रहे हैं।",
              ctaText: "निरीक्षण शेड्यूल करें"
            },
            whyMatter: {
              title: "निरीक्षण क्यों महत्वपूर्ण हैं",
              description: "हमारी व्यापक रिपोर्टिंग के साथ जोखिम कम करें और उचित मूल्य सुनिश्चित करें।",
              heading: "मशीन स्वास्थ्य में गहन जांच",
              content: "हमारे निरीक्षक सिर्फ टायर नहीं देखते। हम कठोर परिचालन परीक्षण, तरल विश्लेषण और अंडरकैरिज मापन करते हैं। एक विशिष्ट रिपोर्ट में 100+ डेटा पॉइंट और 50+ हाई-रिज़ॉल्यूशन तस्वीरें शामिल होती हैं।",
              features: [
                {
                  title: "मानकीकृत चेकलिस्ट",
                  description: "सभी उपकरण श्रेणियों में सुसंगत मूल्यांकन मानदंड।"
                },
                {
                  title: "विजुअल साक्ष्य",
                  description: "वियर और टियर की विस्तृत फोटो और वीडियो डॉक्यूमेंटेशन।"
                },
                {
                  title: "डिजिटल रिपोर्ट",
                  description: "हमारे सुरक्षित क्लाउड पोर्टल के माध्यम से रिपोर्ट तक तत्काल पहुंच।"
                }
              ]
            },
            qualityProcess: {
              title: "गुणवत्ता आश्वासन प्रक्रिया",
              steps: [
                {
                  title: "बुकिंग और डिस्पैच",
                  desc: "उपकरण प्रकार और स्थान विशेषज्ञता के आधार पर निरीक्षक नियुक्त।",
                  side: "left"
                },
                {
                  title: "ऑन-साइट मूल्यांकन",
                  desc: "विजुअल चेक, परिचालन परीक्षण और फ्लुइड सैंपलिंग किया गया।",
                  side: "right"
                },
                {
                  title: "डेटा समीक्षा",
                  desc: "सीनियर तकनीकी लीड विसंगतियों के लिए रॉ डेटा की समीक्षा करते हैं।",
                  side: "left"
                },
                {
                  title: "रिपोर्ट प्रकाशन",
                  desc: "मूल्यांकन अनुमानों के साथ अंतिम रिपोर्ट जनरेट (वैकल्पिक)।",
                  side: "right"
                }
              ]
            },
            evaluators: {
              title: "मूल्यांकनकर्ता हाइलाइट्स",
              inspectors: [
                {
                  name: "माइक टी.",
                  role: "सीनियर हेवी मशीनरी विशेषज्ञ",
                  quote: "\"मैंने 2,000+ एक्सकेवेटरों का निरीक्षण किया है। मुझे पता है कि स्ट्रेस फ्रैक्चर कहां छिपे होते हैं।\""
                },
                {
                  name: "सारा एल.",
                  role: "क्रेन और लिफ्टिंग उपकरण",
                  quote: "\"सुरक्षा प्राथमिकता है। मेरी रिपोर्ट OSHA और ISO मानकों के अनुपालन को सुनिश्चित करती हैं।\""
                },
                {
                  name: "डेविड आर.",
                  role: "ट्रक और फ्लीट",
                  quote: "\"इंजन डायग्नोस्टिक्स असली कहानी बताते हैं। हम अंदाजा नहीं लगाते, हम मापते हैं।\""
                }
              ]
            },
            cta: {
              title: "खराब डील का जोखिम न लें।",
              subtitle: "चेक साइन करने से पहले तथ्य जानें।",
              button: "नमूना रिपोर्ट अनुरोध करें"
            },
            modal: {
              title: "निरीक्षण अनुरोध",
              form: {
                firstName: "पहला नाम",
                lastName: "अंतिम नाम",
                email: "ईमेल पता",
                equipment: "उपकरण विवरण",
                location: "संपत्ति स्थान",
                phone: "फोन",
                submit: "अनुरोध जमा करें",
                responseTime: "व्यावसायिक दिनों में मानक प्रतिक्रिया समय 4 घंटे से कम है।"
              },
              placeholders: {
                firstName: "जॉन",
                lastName: "डो",
                email: "john@company.com",
                equipment: "वर्ष, निर्माता, मॉडल, सीरियल # (यदि उपलब्ध)",
                location: "शहर, राज्य",
                phone: "+1 (555) 000-0000"
              }
            },
            successMessage: "निरीक्षण अनुरोध प्राप्त! हम शेड्यूल करने के लिए आपसे संपर्क करेंगे।"
          },
          // DISPOSITION PAGE - Hindi
          disposition: {
            hero: {
              title: "रणनीतिक संपत्ति निपटान",
              subtitle: "अधिशेष संपत्तियों से वसूली मूल्य को अधिकतम करें। हम अंत-जीवन या अधिशेष उपकरणों के लिए पर्यावरण अनुपालन, लाभदायक समाधान प्रदान करते हैं।",
              ctaText: "वसूली शुरू करें"
            },
            recoveryProcess: {
              title: "संपत्ति वसूली प्रक्रिया",
              description: "निष्क्रिय मशीनरी को सुरक्षित और कुशलता से कार्यशील पूंजी में बदलें।",
              steps: [
                {
                  title: "मूल्यांकन",
                  description: "हम आपकी अधिशेष इन्वेंटरी को सूचीबद्ध करते हैं और सर्वोत्तम निपटान चैनल निर्धारित करते हैं: पुनर्विक्रय, नवीनीकरण, या रीसाइक्लिंग।"
                },
                {
                  title: "अनुपालन",
                  description: "हानिकारक तरल पदार्थ निष्कासन, डेटा विनाश, और ई-कचरा अनुपालन EPA विनियमों के अनुसार संभाला जाता है।"
                },
                {
                  title: "दिवालिया निपटान",
                  description: "निवेश पर रिटर्न को अधिकतम करने के लिए संपत्तियों को निजी संधि, नीलामी, या स्क्रैप बाजारों के माध्यम से बेचा जाता है।"
                }
              ],
              caseStudy: {
                title: "केस स्टडी: कंस्ट्रक्शन फ्लीट लिक्विडेशन",
                content: "एक प्रमुख इंफ्रास्ट्रक्चर फर्म को 50+ यूनिट्स एजिंग अर्थमूविंग उपकरणों को ऑफलोड करने की आवश्यकता थी। हमारी टीम ने लॉजिस्टिक्स, नवीनीकरण और नीलामी प्रक्रिया प्रबंधित की।",
                metrics: [
                  {
                    value: "120%",
                    label: "बुक वैल्यू बनाम वसूली"
                  },
                  {
                    value: "30 दिन",
                    label: "प्रोजेक्ट टाइमलाइन"
                  }
                ]
              }
            },
            workflow: {
              title: "पुनर्विक्रय और रीसाइक्लिंग वर्कफ्लो",
              features: [
                {
                  title: "लॉजिस्टिक्स और हटाना",
                  description: "हम भारी ढुलाई परिवहन और साइट क्लीयरेंस की व्यवस्था करते हैं।"
                },
                {
                  title: "टाइटल ट्रांसफर",
                  description: "सभी लिएन रिलीज और स्वामित्व दस्तावेज़ीकरण संभालना।"
                },
                {
                  title: "मल्टी-चैनल बिक्री",
                  description: "वैश्विक मार्केटप्लेस और विशेष नेटवर्क पर लिस्टिंग।"
                },
                {
                  title: "ग्रीन डिस्पोजल",
                  description: "गैर-बचाए जाने योग्य घटकों के लिए प्रमाणित रीसाइक्लिंग।"
                }
              ]
            },
            cta: {
              title: "देयता को तरलता में बदलें",
              button: "मुफ्त मूल्यांकन प्राप्त करें"
            },
            modal: {
              title: "संपत्ति निपटान जांच",
              form: {
                firstName: "पहला नाम",
                lastName: "अंतिम नाम",
                email: "ईमेल पता",
                assets: "संपत्तियों / इन्वेंटरी की सूची",
                location: "संपत्तियों का स्थान",
                company: "कंपनी",
                submit: "मूल्यांकन के लिए जमा करें",
                responseTime: "हमारी टीम आमतौर पर 2 व्यावसायिक दिनों के भीतर प्रारंभिक मूल्यांकन प्रदान करती है।"
              },
              placeholders: {
                firstName: "जॉन",
                lastName: "डो",
                email: "john@company.com",
                assets: "कृपया प्रमुख आइटम सूचीबद्ध करें या लॉट का सारांश प्रदान करें...",
                location: "शहर, राज्य",
                company: "कंपनी का नाम"
              }
            },
            successMessage: "निपटान अनुरोध जमा। एक वसूली विशेषज्ञ आपकी संपत्तियों की समीक्षा करेगा।"
          },
          // CONSIGNMENT PAGE - Hindi
          consignment: {
            hero: {
              title: "उपकरण कंसाइनमेंट सेवाएं",
              subtitle: "आपके भारी उपकरणों के लिए सुरक्षित भंडारण और पेशेवर बिक्री प्रबंधन। आप स्वामित्व बनाए रखते हैं जबकि हम बिक्री संभालते हैं।",
              ctaText: "अपना उपकरण कंसाइन करें"
            },
            hassleFree: {
              title: "परेशानी मुक्त बिक्री",
              description: "हम आपकी संपत्तियों को हमारे सुरक्षित यार्ड से स्टोर, मेंटेन और बेचते हैं।",
              revenueModel: {
                title: "रेवेन्यू शेयरिंग मॉडल",
                content: "नीलामी के विपरीत जहां आप कीमत पर नियंत्रण खो देते हैं, हमारा कंसाइनमेंट मॉडल आपको ड्राइवर सीट पर रखता है। हम एक शुद्ध मूल्य या कमीशन प्रतिशत पर सहमत होते हैं।",
                features: [
                  { label: "मार्केटिंग और लिस्टिंग", value: "शामिल" },
                  { label: "भंडारण (90 दिन)", value: "मुफ्त" },
                  { label: "रखरखाव वॉश", value: "शामिल" },
                  { label: "कमीशन", value: "8-12%" }
                ]
              },
              benefits: [
                {
                  title: "प्राइम लोकेशन",
                  description: "हमारे कंसाइनमेंट यार्ड प्रमुख बंदरगाहों और राजमार्गों के पास स्थित हैं, जिससे खरीदारों की आसान पहुंच और लॉजिस्टिक्स संभव होती है।"
                },
                {
                  title: "अधिकतम दृश्यता",
                  description: "वॉक-इन ट्रैफिक प्रीमियम डिजिटल प्लेसमेंट के साथ मिलकर यह सुनिश्चित करता है कि आपकी संपत्ति गंभीर खरीदारों द्वारा देखी जाए।"
                },
                {
                  title: "सुरक्षित सुविधाएं",
                  description: "24/7 सुरक्षा निगरानी, फेंस्ड यार्ड, और स्टोरेज के दौरान नियमित बैटरी/फ्लुइड रखरखाव जांच।"
                }
              ]
            },
            tracking: {
              title: "ट्रैकिंग और पारदर्शिता",
              features: [
                {
                  title: "रीयल-टाइम इन्वेंटरी",
                  description: "हमारे पोर्टल में अपनी कंसाइन की गई संपत्तियां देखें। स्टेटस चेक करें, लिस्टिंग हिट्स देखें, और ऑफर मैनेज करें।"
                },
                {
                  title: "डायनेमिक प्राइसिंग",
                  description: "समय पर बिक्री सुनिश्चित करने के लिए हम बाजार की रुचि के आधार पर डेटा-संचालित मूल्य समायोजन प्रदान करते हैं।"
                },
                {
                  title: "परफॉर्मेंस रिपोर्ट",
                  description: "लीड्स, पूछताछ, और आपके उपकरण पर किए गए भौतिक निरीक्षणों पर साप्ताहिक अपडेट।"
                }
              ]
            },
            cta: {
              title: "हमारे प्राइम यार्ड में स्थान सीमित है।",
              subtitle: "आज ही अपनी जगह रिजर्व करें और अपने उपकरण को सत्यापित खरीदारों के सामने लाएं।",
              button: "स्थान रिजर्व करें"
            },
            modal: {
              title: "कंसाइनमेंट अनुरोध",
              form: {
                firstName: "पहला नाम",
                lastName: "अंतिम नाम",
                email: "ईमेल पता",
                equipment: "उपकरण विवरण",
                location: "वर्तमान स्थान",
                phone: "फोन",
                submit: "अनुरोध जमा करें",
                agreement: "जमा करके, आप हमारी कंसाइनमेंट शर्तों और गोपनीयता नीति से सहमत होते हैं।"
              },
              placeholders: {
                firstName: "जॉन",
                lastName: "डो",
                email: "john@company.com",
                equipment: "उदा., 2018 CAT 320 एक्सकेवेटर...",
                location: "शहर, राज्य",
                phone: "+1 (555) 000-0000"
              }
            },
            successMessage: "कंसाइनमेंट स्थान आरक्षित! विवरण अंतिम रूप देने के लिए हम आपसे संपर्क करेंगे।"
          },
          // LOGISTICS PAGE - Hindi
          logistics: {
            hero: {
              title: "भारी उपकरण लॉजिस्टिक्स",
              subtitle: "ओवरसाइज्ड कार्गो के लिए डोर-टू-डोर ट्रांसपोर्ट समाधान। हम डिसमेंटलिंग, पैकिंग, फ्रेट फॉरवर्डिंग और कस्टम क्लीयरेंस संभालते हैं।",
              ctaText: "शिपिंग कोट प्राप्त करें"
            },
            forwarding: {
              title: "ग्लोबल फॉरवर्डिंग नेटवर्क",
              description: "सीमाओं और महासागरों के पार भारी मशीनरी को सीमलेसली मूव करना।",
              globe: {
                title: "विश्व भर में 150+ बंदरगाहों से जुड़े",
                subtitle: "सभी ओशन और एयर फ्रेट के लिए लाइव ट्रैकिंग उपलब्ध।"
              },
              services: [
                {
                  title: "इनलैंड हेवी हॉल",
                  description: "ओवरसाइज्ड लोड के लिए विशेष लो-बॉय और आरजीएन ट्रेलर। हम सभी परमिटिंग और एस्कॉर्ट वाहन आवश्यकताओं को संभालते हैं।"
                },
                {
                  title: "रोरो और कंटेनर",
                  description: "लचीले ओशन फ्रेट विकल्प। ड्राइवेबल यूनिट्स के लिए रोल-ऑन/रोल-ऑफ या डिसमेंटल्ड पार्ट्स के लिए कंटेनराइजेशन।"
                },
                {
                  title: "डिसमेंटलिंग और पैकिंग",
                  description: "बड़ी मशीनरी को स्टैंडर्ड कंटेनर में फिट करने के लिए पेशेवर डिसमेंटलिंग सेवाएं, शिपिंग लागत को काफी कम करती हैं।"
                }
              ]
            },
            workflow: {
              title: "शिपिंग वर्कफ्लो",
              steps: [
                { title: "कोट और प्लानिंग", text: "डायमेंशन और वजन के आधार पर रूट एनालिसिस और कॉस्ट एस्टीमेशन।" },
                { title: "प्रीप और पिकअप", text: "वॉशिंग (क्वारंटाइन अनुपालन के लिए) और ट्रांसपोर्ट पर लोडिंग।" },
                { title: "एक्सपोर्ट कस्टम्स", text: "डॉक्यूमेंटेशन फाइलिंग (एईएस, कमर्शियल इनवॉइस, पैकिंग लिस्ट)।" },
                { title: "ओशन फ्रेट", text: "वेसल डिपार्चर और ट्रांजिट मॉनिटरिंग।" },
                { title: "इम्पोर्ट और डिलीवरी", text: "डेस्टिनेशन पर कस्टम क्लीयरेंस और फाइनल माइल डिलीवरी।" }
              ]
            },
            cta: {
              title: "बड़ा आयरन मूव करने की जरूरत है?",
              subtitle: "हमारे लॉजिस्टिक्स विशेषज्ञ आपके रूट की योजना बनाने के लिए तैयार हैं।",
              buttons: {
                quote: "कोट अनुरोध करें",
                track: "शिपमेंट ट्रैक करें"
              }
            },
            modal: {
              title: "शिपिंग कोट अनुरोध",
              form: {
                firstName: "पहला नाम",
                lastName: "अंतिम नाम",
                email: "ईमेल पता",
                equipment: "उपकरण विवरण",
                origin: "मूल शहर",
                destination: "गंतव्य शहर",
                submit: "अनुरोध जमा करें",
                agreement: "जमा करके, आप हमारी गोपनीयता नीति से सहमत होते हैं। अनुमान 7 दिनों के लिए मान्य हैं।"
              },
              placeholders: {
                firstName: "जॉन",
                lastName: "डो",
                email: "john@company.com",
                equipment: "उदा., 2018 CAT 320 एक्सकेवेटर, लगभग 45,000 lbs",
                origin: "शहर, देश",
                destination: "शहर, देश"
              }
            },
            successMessage: "कोट अनुरोध सफलतापूर्वक जमा! एक लॉजिस्टिक्स समन्वयक जल्द ही आपसे संपर्क करेगा।"
          },

          //<----- about page ------->///

          // BRAND STORY SECTION - Hindi
          brandStory: {
            sectionTitle: "सेक्शन 01 — ब्रांड स्टोरी",
            heading: "हमारी कहानी",
            title: "विजन सेमीकंडक्टर सॉल्यूशंस एलएलसी की स्थापना प्रौद्योगिकी के भविष्य को शक्ति प्रदान करने के स्पष्ट उद्देश्य के साथ की गई थी।",
            content: [
              "विजन सेमीकंडक्टर सॉल्यूशंस (वीएसएस) सटीकता, नवाचार और पारदर्शिता के साथ वैश्विक सेमीकंडक्टर विनिर्माण उद्योग का समर्थन करता है। जो अधिशेष और अतिरिक्त उपकरणों के स्रोत के रूप में शुरू हुआ, वह ज्ञान, इंजीनियरिंग उत्कृष्टता और वैश्विक सहयोग के प्लेटफॉर्म में विकसित हो गया है।",
              "तकनीकी विशेषज्ञता में निहित, वीएसएस का लक्ष्य सेमीकंडक्टर इकोसिस्टम के भीतर समाधान, शिक्षा और उद्योग प्रभाव के लिए एक विश्वसनीय केंद्र बनना है।"
            ],
            founder: {
              name: "विजन सेमीकंडक्टर सॉल्यूशंस",
              role: "वैश्विक नेतृत्व टीम",
              quote: "\"हम पहले खुद को जिम्मेदार ठहराते हैं, फिर अपनी टीम, अपने ग्राहकों और अपने समुदाय को।\""
            }
          },
          // MISSION VISION SECTION - Hindi
          missionVision: {
            intro: "उद्योग को आगे बढ़ाना",
            mission: {
              section: "सेक्शन 02",
              title: "मिशन",
              heading: "सेमीकंडक्टर समाधानों के भविष्य को सशक्त बनाना",
              content: "हमारा मिशन दुनिया भर के इंजीनियरों, निर्माताओं और नवप्रवर्तकों को विश्वसनीय सेमीकंडक्टर उपकरण और ज्ञान प्रदान करना है। हम उच्च-प्रदर्शन समाधानों को सुलभ, कुशल और स्केलेबल बनाते हैं—प्रौद्योगिकी और विनिर्माण उत्कृष्टता की अगली पीढ़ी को सशक्त बनाते हैं।"
            },
            vision: {
              section: "सेक्शन 03",
              title: "विजन",
              heading: "कल को आज आकार देना",
              content: "हम सेमीकंडक्टर समाधानों, शिक्षा और उद्योग नेतृत्व के लिए एक वैश्विक केंद्र बनने की कल्पना करते हैं। स्पष्टता, नवाचार और दीर्घकालिक प्रतिबद्धता के माध्यम से, हम सेमीकंडक्टर इकोसिस्टम के भविष्य को प्रभावित करने और दुनिया भर में तकनीकी प्रगति को ऊपर उठाने का लक्ष्य रखते हैं।"
            }
          },
          // TEAM SECTION - Hindi
          team: {
            title: "हमारी टीम के पास 100 वर्षों से अधिक का संयुक्त अनुभव है!",
            subtitle: "हमारी टीम सेमीकंडक्टर उद्योग में अनुभव, नवाचार और रचनात्मकता लाती है ताकि यह सुनिश्चित किया जा सके कि आपकी योजनाएं अच्छे हाथों में हैं।",
            members: [
              {
                name: "माइक सिमोरांगकिर",
                role: "संस्थापक और सीईओ",
                bio: "माइक, एमबीए, के पास सेमीकंडक्टर वाणिज्यिक रणनीतियों और मिश्रित-उपयोग उपकरण विकास में 15+ वर्षों का अनुभव है।"
              },
              {
                name: "स्टेनली जॉर्ज",
                role: "सेवानिवृत्त ईवीपी और सीसीओ",
                bio: "स्टेनली सितंबर 2005 तक हीनन ब्लाइकी एलएलपी में एक पार्टनर थे, जो वैश्विक तकनीकी अनुपालन में विशेषज्ञता रखते थे।"
              },
              {
                name: "एलिजा बेकर",
                role: "वीपी, ऑपरेशंस",
                bio: "एलिजा, एमबीए, के पास वाणिज्यिक लॉजिस्टिक्स और सेमीकंडक्टर आपूर्ति श्रृंखला प्रबंधन में 12+ वर्षों का अनुभव है।"
              },
              {
                name: "सैली क्रूज़",
                role: "चीफ मार्केटिंग ऑफिसर",
                bio: "सैली के पास कनाडाई और एशिया प्रशांत दोनों तकनीकी बाजारों में 10+ वर्षों का अनुभव है।"
              }
            ]
          },
          // CTA SECTION - Hindi
          cta: {
            title: "विजन सेमीकंडक्टर सॉल्यूशंस के साथ साझेदारी करें",
            subtitle: "जानें कि कैसे हमारी सटीकता और नवाचार आपकी अगली तकनीकी सफलता को शक्ति प्रदान कर सकते हैं।",
            button: "आज ही संपर्क करें"
          },
          // ACCESS CTA PAGE - Hindi
          accessCTA: {
            hero: {
              badge: "विशेष पहुंच",
              title: "अंतिम <1>ज्ञान आधार</1> अनलॉक करें",
              subtitle: "सेमीकंडक्टर रिपोर्ट, व्हाइट पेपर, डीप-टेक अंतर्दृष्टि और विशेषज्ञ-क्यूरेटेड संसाधनों की पूर्ण पहुंच।",
              buttons: {
                trial: "मुफ्त ट्रायल शुरू करें",
                explore: "लाइब्रेरी एक्सप्लोर करें"
              }
            },
            valueProposition: {
              title: "पेशेवर हमें क्यों चुनते हैं",
              subtitle: "इंजीनियरों, विश्लेषकों और निर्णय लेने वालों के लिए निर्मित विश्वसनीय सेमीकंडक्टर इंटेलिजेंस।",
              cards: [
                {
                  title: "रीयल-टाइम अंतर्दृष्टि",
                  description: "लगातार अपडेट की जाने वाली सेमीकंडक्टर मार्केट और टेक्नोलॉजी इंटेलिजेंस के साथ आगे रहें।"
                },
                {
                  title: "सत्यापित स्रोत",
                  description: "प्रत्येक संसाधन को तकनीकी सटीकता और प्रासंगिकता के लिए उद्योग विशेषज्ञों द्वारा मान्य किया जाता है।"
                },
                {
                  title: "वैश्विक समुदाय",
                  description: "इंजीनियरों, शोधकर्ताओं और नेताओं के नेटवर्क में शामिल हों जो प्रौद्योगिकी के भविष्य को आकार दे रहे हैं।"
                }
              ]
            }
          },
          // PODCASTS PAGE - Hindi
          podcasts: {
            hero: {
              title: "एक तेज़, स्मार्ट पॉडकास्ट <1>भविष्य</1> की इंजीनियरिंग।",
              subtitle: "विशेषज्ञता, साझेदारी और दीर्घकालिक स्पष्टता पर आधारित एक संख्या-चालित दृष्टिकोण का अनुभव करें—जो केवल ऑडियो से कहीं अधिक प्रदान करता है।",
              buttons: {
                explore: "एपिसोड एक्सप्लोर करें",
                schedule: "कॉल शेड्यूल करें"
              }
            },
            featured: {
              title: "नवीनतम एपिसोड",
              featuredBadge: "फीचर्ड",
              featuredEpisode: {
                title: "एपिसोड 100: सिलिकॉन की एक सदी",
                description: "हम सेमीकंडक्टर के इतिहास पर नज़र डालते हैं और अगले दशक में हमारी प्रतीक्षा कर रही क्वांटम छलांग की ओर देखते हैं।",
                button: "अब सुनें"
              }
            },
            episodes: {
              categories: ["टेक्नोलॉजी", "बिजनेस", "हेल्थ", "डिजाइन", "मार्केटिंग", "साइंस"],
              episode: {
                showNotes: "शो नोट्स",
                duration: "{{duration}}"
              }
            },
            sidebar: {
              newsletter: {
                title: "लूप में बने रहें",
                subtitle: "10,000+ इंजीनियरों में शामिल हों जो हमारे साप्ताहिक उद्योग विश्लेषण प्राप्त कर रहे हैं।",
                placeholder: "अपना ईमेल दर्ज करें",
                button: "मुफ्त सब्सक्राइब करें"
              },
              about: {
                title: "विजन के बारे में",
                content: "विजन सेमीकंडक्टर सॉल्यूशंस एलएलसी उस हार्डवेयर में कटिंग-एज अंतर्दृष्टि प्रदान करता है जो हमारी दुनिया को शक्ति प्रदान करता है। सिलिकॉन से सिस्टम तक।",
                link: "और जानें →"
              }
            }
          },
          // WHITE PAPERS PAGE - Hindi
          whitePapers: {
            hero: {
              title: "रिसर्च और व्हाइट पेपर्स",
              subtitle: "सेमीकंडक्टर मार्केट अंतर्दृष्टि, फैब्रिकेशन ट्रेंड्स और एडवांस्ड टेक्नोलॉजी ब्रीफ्स।"
            },
            featured: {
              editorsPick: "एडिटर की पसंद",
              title: "ग्लोबल चिप इनोवेशन 2024 की स्थिति",
              description: "फैब विस्तार, सप्लाई चेन लचीलापन, लिथोग्राफी सफलताओं और प्रतिस्पर्धी गतिशीलता का विश्लेषण जो अगली पीढ़ी के सेमीकंडक्टर इकोसिस्टम को आकार दे रहा है।",
              buttons: {
                download: "PDF डाउनलोड करें",
                summary: "सारांश पढ़ें"
              }
            },
            recent: {
              title: "हाल की प्रकाशन",
              papers: [
                {
                  title: "रणनीतिक अंतर्दृष्टि वॉल्यूम 1",
                  summary: "लोरेम इप्सम डोलोर सिट अमेट, कंसेक्टेटुर एडिपिस्किंग एलिट। इंटेजर नेक ओडियो। प्रेसेंट लिबेरो। सेड कर्सस एंटे डेपिबस डायम।"
                },
                {
                  title: "रणनीतिक अंतर्दृष्टि वॉल्यूम 2",
                  summary: "लोरेम इप्सम डोलोर सिट अमेट, कंसेक्टेटुर एडिपिस्किंग एलिट। इंटेजर नेक ओडियो। प्रेसेंट लिबेरो। सेड कर्सस एंटे डेपिबस डायम।"
                },
                {
                  title: "रणनीतिक अंतर्दृष्टि वॉल्यूम 3",
                  summary: "लोरेम इप्सम डोलोर सिट अमेट, कंसेक्टेटुर एडिपिस्किंग एलिट। इंटेजर नेक ओडियो। प्रेसेंट लिबेरो। सेड कर्सस एंटे डेपिबस डायम।"
                }
              ],
              button: "देखें"
            }
          },
          // BLOG PAGE - Hindi
          blog: {
            latestNews: {
              title: "नवीनतम समाचार",
              featured: {
                category: "सेमीकंडक्टर अंतर्दृष्टि",
                title: "एआई चिप मांग तेज होने के साथ ग्लोबल फैब्स उन्नत पैकेजिंग को स्केल करने के लिए संघर्ष कर रहे हैं",
                summary: "दुनिया भर के चिप निर्माता उन्नत पैकेजिंग क्षमता का विस्तार करने की दौड़ में हैं, लेकिन लिथोग्राफी टूल और सामग्रियों में आपूर्ति की कमी उत्पादन स्केल में बाधा डालती है।"
              },
              smallArticles: [
                {
                  category: "फैब टेक्नोलॉजी",
                  title: "2nm नोड्स पर उच्च उपज का वादा करने वाली EUV लिथोग्राफी में नई सफलताएं..."
                },
                {
                  category: "सप्लाई चेन",
                  title: "2026 तक ग्लोबल सिलिकॉन वेफर की कमी जारी रहने की उम्मीद..."
                },
                {
                  category: "उपकरण नवाचार",
                  title: "सब-3nm ज्योमेट्री के लिए एचिंग उपकरण विक्रेता नई प्लाज्मा तकनीकों को आगे बढ़ाते हैं..."
                }
              ]
            },
            gridSection: {
              title: "ऑपरेटिंग, रिजर्व, और<br/>वॉल्ट खाते",
              articles: [
                {
                  category: "विनिर्माण",
                  title: "चिपमेकर्स ग्लोबल फैब्रिकेशन क्षमता का विस्तार करने के लिए अरबों का निवेश करते हैं",
                  summary: "एआई, ईवी और अगली पीढ़ी के उपभोक्ता इलेक्ट्रॉनिक्स की मांग को पूरा करने के लिए प्रमुख सेमीकंडक्टर कंपनियां फैब विस्तार में तेजी ला रही हैं।"
                },
                {
                  category: "उपकरण",
                  title: "नई वेफर मेट्रोलॉजी सिस्टम परमाणु स्केल पर सटीकता बढ़ाते हैं",
                  summary: "उन्नत निरीक्षण उपकरण विकसित होते रहते हैं क्योंकि सेमीकंडक्टर फीचर्स एंगस्ट्रॉम युग में सिकुड़ते हैं।"
                },
                {
                  category: "आरएंडडी नवाचार",
                  title: "शोधकर्ता कम्प्यूटेशनल घनत्व को बढ़ाने के लिए 3D सिलिकॉन स्टैकिंग का अन्वेषण करते हैं",
                  summary: "थर्मल डिसिपेशन और इंटरकनेक्ट टेक्नोलॉजी में नवाचार 3D स्टैक्ड सेमीकंडक्टर आर्किटेक्चर को स्केल करने के लिए महत्वपूर्ण हैं।"
                }
              ],
              button: "सभी लेख देखें"
            },
            common: {
              author: "डॉ. एथन पार्क",
              date: "25 जनवरी 2025"
            }
          },
          // EBOOKS PAGE - Hindi
          ebooks: {
            hero: {
              title: "ज्ञान लाइब्रेरी",
              subtitle: "तकनीकी ईबुक, सेमीकंडक्टर अंतर्दृष्टि और प्रीमियम इंजीनियरिंग गाइड — सभी पेशेवरों के लिए मुफ्त।"
            },
            books: [
              {
                title: "डिजिटल ट्रांसफॉर्मेशन में महारत",
                author: "डॉ. साराह कॉनर",
                description: "तकनीकी अंतर्दृष्टि, सर्वोत्तम प्रथाओं और उद्योग-तैयार ज्ञान प्रदान करने वाला एक क्यूरेटेड गाइड।"
              },
              {
                title: "एजाइल लीडरशिप गाइड",
                author: "जेम्स कैमरून",
                description: "तकनीकी अंतर्दृष्टि, सर्वोत्तम प्रथाओं और उद्योग-तैयार ज्ञान प्रदान करने वाला एक क्यूरेटेड गाइड।"
              },
              {
                title: "कार्यपालकों के लिए डेटा साइंस",
                author: "एलेन रिप्ले",
                description: "तकनीकी अंतर्दृष्टि, सर्वोत्तम प्रथाओं और उद्योग-तैयार ज्ञान प्रदान करने वाला एक क्यूरेटेड गाइड।"
              },
              {
                title: "साइबरसिक्योरिटी एसेंशियल्स",
                author: "नियो एंडरसन",
                description: "तकनीकी अंतर्दृष्टि, सर्वोत्तम प्रथाओं और उद्योग-तैयार ज्ञान प्रदान करने वाला एक क्यूरेटेड गाइड।"
              }
            ],
            buttons: {
              readOnline: "ऑनलाइन पढ़ें",
              download: "डाउनलोड"
            },
            common: {
              by: "द्वारा",
              pages: "{{count}} पेज"
            }
          },
          // INDUSTRY NEWS PAGE - Hindi
          industryNews: {
            pageTitle: "सेमीकंडक्टर उद्योग समाचार",
            featured: {
              badge: "ब्रेकिंग",
              title: "क्वांटम चिप दक्षता में बड़ी सफलता आज घोषित"
            },
            categories: ["सभी", "चिप विनिर्माण", "नियम", "स्टार्टअप", "कॉर्पोरेट", "आरएंडडी"],
            newsItems: [
              {
                title: "एआई मांग रिकॉर्ड उच्च स्तर पर पहुंचने पर ग्लोबल चिप बाजारों में तेजी",
                excerpt: "कटिंग-एज फैब्स, नई लिथोग्राफी सफलताएं और भू-राजनीतिक नियम सेमीकंडक्टर इकोसिस्टम को आकार देते रहते हैं।",
                category: "चिप विनिर्माण"
              },
              {
                title: "नए सेमीकंडक्टर एक्सपोर्ट नियम उद्योग में अनिश्चितता पैदा करते हैं",
                excerpt: "कटिंग-एज फैब्स, नई लिथोग्राफी सफलताएं और भू-राजनीतिक नियम सेमीकंडक्टर इकोसिस्टम को आकार देते रहते हैं।",
                category: "नियम"
              }
            ],
            sidebar: {
              trending: {
                title: "ट्रेंडिंग टॉपिक्स",
                tags: ['#EUVLithography', '#ChipFabrication', '#AIChips', '#3DNAND', '#QuantumComputing']
              },
              subscribe: {
                title: "दैनिक सेमीकंडक्टर डाइजेस्ट",
                description: "हर सुबह टॉप चिप-इंडस्ट्री हेडलाइन्स प्राप्त करें।",
                placeholder: "ईमेल पता",
                button: "साइन अप"
              }
            },
            common: {
              readFullStory: "पूरी कहानी पढ़ें",
              author: "डॉ. जेन डो",
              featuredAuthor: "डॉ. जॉन स्मिथ",
              date: "{{day}} जन 2025"
            }
          },
          // PRODUCTS PAGE - Hindi
          products: {
            tabsData: [
              {
                id: 'Modular architecture',
                label: 'मॉड्यूलर आर्किटेक्चर',
                number: '01',
                title: 'मॉड्यूलर आर्किटेक्चर',
                description: 'एएसएमएल, एप्लाइड मैटेरियल्स, लैम रिसर्च, टीईएल, और केएलए सहित प्रमुख ओईएम से उपकरण एक्सप्लोर करें।',
                cta: 'और जानें'
              },
              {
                id: 'Opportunities',
                label: 'अवसर',
                number: '02',
                title: 'विशेष अवसर',
                description: 'एक्सक्लूसिव हाई-वैल्यू लिस्टिंग, दुर्लभ सिस्टम और प्रतिस्पर्धी कीमत वाले, मांग वाले सेमीकंडक्टर टूल्स तक पहुंचें।',
                cta: 'और जानें'
              },
              {
                id: 'New Inventory',
                label: 'नई इन्वेंटरी',
                number: '03',
                title: 'नए आगमन',
                description: 'कटिंग-एज वेफर टूल्स से लेकर रिफर्बिश्ड प्रोडक्शन-रेडी सिस्टम तक की नवीनतम एडिशन खोजें।',
                cta: 'और जानें'
              },
              {
                id: 'Portal',
                label: 'पोर्टल',
                number: '04',
                title: 'ग्राहक पोर्टल',
                description: 'क्वोट्स रिक्वेस्ट करें, पीओ मैनेज करें, और एकीकृत ग्राहक वर्कस्पेस के साथ प्रोक्योरमेंट स्ट्रीमलाइन करें।',
                cta: 'और जानें'
              }
            ]
          },

        }
      },

      fr: {
        translation: {
          // HERO
          heading:
            "C'est comme donner une seconde vie à chaque outil de votre atelier.",
          subheading:
            "Découvrez une approche de prêt fondée sur les chiffres, l'expertise, le partenariat et une vision financière à long terme — offrant bien plus que de simples taux compétitifs.",
          cta1: "Explorer les solutions",
          cta2: "Planifier un appel",

          // NAV
          nav: {
            home: "Accueil",
            about: "À propos",
            content: "Contenu",
            solutions: "Solutions",
            shop: "Acheter"
          },

          // ABOUT SECTION
          about: {
            sectionTitle: "À propos de Vision Semiconductor",
            headline:
              "Propulser l'avenir de la technologie grâce à une innovation inégalée et une vision mondiale pour le progrès des semi-conducteurs.",
            features: {
              innovation: "Innovation",
              expertise: "Expertise",
              vision: "Vision"
            },
            cta: "En savoir plus"
          },

          section2: {
            title: "Améliorer la performance, la fiabilité et la valeur des semi-conducteurs.",
            description:
              "Notre approche axée sur la mission réduit les coûts, améliore la fiabilité et prolonge la durée de vie des équipements.",
            cta: "Commencer",

            stats: [
              {
                label: "Années d'expérience",
                value: "20+",
                description: "Des décennies d'expertise en ingénierie des semi-conducteurs."
              },
              {
                label: "Clients mondiaux",
                value: "150+",
                description: "Des entreprises du monde entier nous font confiance."
              },
              {
                label: "Coûts économisés",
                value: "$50M+",
                description: "Une réduction significative des coûts d'exploitation."
              },
              {
                label: "Projets réalisés",
                value: "500+",
                description: "Des projets menés avec précision et innovation."
              }
            ]
          },

          // SERVICES SECTION
          services: {
            accessCta: "Accéder au Centre de Connaissance",
            services: [
              {
                title: "Épisodes de Podcast",
                description: "Discussions d'experts sur les tendances et innovations de fabrication de semi-conducteurs",
                pattern: "/patterns/Burst.svg",
                link: "/PodcastsPage"
              },
              {
                title: "Livres Blancs Tendances",
                description: "Analyse technique approfondie et recherche des leaders de l'industrie",
                pattern: "/patterns/Looper-3.svg",
                link: "/WhitePapersPage"
              },
              {
                title: "Analyse de Marché",
                description: "Informations en temps réel sur les tendances du marché et l'évaluation des équipements",
                pattern: "/patterns/LooperGroup.svg",
                link: "/BlogPage"
              },
              {
                title: "Ressources Éducatives",
                description: "Guides complets et tutoriels pour les processus des semi-conducteurs",
                pattern: "/patterns/Topology-1.svg",
                link: "/EbooksPage"
              },
              {
                title: "Actualités de l'Industrie",
                description: "Derniers développements et technologies émergentes dans la fabrication de semi-conducteurs",
                pattern: "/patterns/Topology-2.svg",
                link: "/IndustryNewsPage"
              }
            ]
          },

          // EQUIPMENT SECTION
          equipment: {
            heading: "Concevoir des voies vers la durabilité industrielle",
            subheading: "De la production d'énergie à l'efficacité systémique à long terme, nous fournissons des solutions qui réduisent les coûts, diminuent les émissions et assurent des opérations résilientes.",
            requestAudit: "Demander un audit",
            learnMore: "En savoir plus",
            services: [
              {
                id: 'Brokering',
                title: 'Courtage en Équipement',
                description: 'Gestion experte des ventes d\'actifs, vous connectant avec des acheteurs qualifiés pour un retour maximal',
                link: '/Brokering'
              },
              {
                id: 'Inspection',
                title: 'Inspection',
                description: 'Évaluations détaillées des équipements qui vérifient l\'état, réduisent les risques et soutiennent des décisions en confiance.',
                link: '/Inspection'
              },
              {
                id: 'Disposition',
                title: 'Disposition',
                description: 'Retrait stratégique des actifs excédentaires, optimisant la récupération de valeur tout en minimisant la charge opérationnelle.',
                link: '/Disposition'
              },
              {
                id: 'Consignment',
                title: 'Consignation',
                description: 'Support de vente pratique qui commercialise efficacement votre équipement tandis que vous conservez la pleine propriété.',
                link: '/Consignment'
              },
              {
                id: 'Logistics-Forwarding',
                title: 'Logistique & Transit',
                description: 'Coordination de transport de bout en bout assurant une livraison sûre et efficace sur toute distance ou frontière',
                link: '/Logistics'
              }
            ]
          },
          // FOOTER SECTION
          footer: {
            description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.",
            company: "Entreprise",
            products: "Produits",
            contact: "Contact",
            companyLinks: {
              about: "À propos",
              careers: "Carrières",
              privacy: "Politique de confidentialité",
              terms: "Conditions générales"
            },
            productLinks: {
              event: "Événement",
              projects: "Projets",
              services: "Services",
              team: "Équipe"
            },
            contactInfo: {
              email: "Support@vision.com",
              phone: "+1 234 567 8900",
              address: "345 Tech Park Avenue, 9ème étage Silicon Valley, CA 98765 USA"
            },
            copyright: "Copyright 2024 Vision Semiconductor Solutions LLC. Tous droits réservés."
          },
          // TABS SECTION
          tabs: {
            learnMore: "En savoir plus",
            tabsData: [
              {
                id: 'mission',
                label: 'Notre Mission',
                number: '01',
                title: 'Propulser l\'Innovation des Semi-conducteurs',
                description: 'Nous nous engageons à faire progresser la technologie des semi-conducteurs grâce à une recherche de pointe, des partenariats stratégiques et des solutions d\'ingénierie durables qui alimentent l\'avenir de la technologie mondiale.',
                imageUrl: '/images/mission.jpg'
              },
              {
                id: 'vision',
                label: 'Notre Vision',
                number: '02',
                title: 'Façonner l\'Avenir de la Technologie',
                description: 'Être le leader mondial des solutions semi-conductrices, créant un monde plus intelligent et plus connecté grâce à une technologie innovante qui transforme les industries et améliore les expériences humaines.',
                imageUrl: '/images/vision.jpg'
              },
              {
                id: 'values',
                label: 'Nos Valeurs',
                number: '03',
                title: 'Excellence par l\'Intégrité',
                description: 'Nous opérons avec une intégrité inébranlable, favorisons l\'innovation collaborative et maintenons les normes de qualité les plus élevées dans chaque aspect de nos solutions et services de semi-conducteurs.',
                imageUrl: '/images/values.jpg'
              }
            ]
          },
          // BROKERING PAGE - French
          brokering: {
            hero: {
              title: "Courtage d'Équipement Mondial",
              subtitle: "Connectez-vous avec un réseau mondial d'acheteurs et de vendeurs. Nous simplifions les complexités du commerce d'équipements industriels avec des annonces vérifiées et des transactions sécurisées.",
              ctaText: "Demander l'Accès"
            },
            marketplace: {
              title: "Aperçu du Marché",
              description: "Accédez à des milliers d'actifs industriels vérifiés dans les secteurs de la construction, des mines et de la fabrication.",
              content: "Notre plateforme de courtage comble le fossé entre les propriétaires d'équipements excédentaires et les entreprises ayant besoin de machines fiables. Nous gérons les négociations, la vérification et la documentation.",
              stats: [
                "30 000+ Acheteurs actifs dans notre base de données.",
                "500M$+ De transactions d'équipement réalisées.",
                "Structures de frais transparentes sans coûts cachés."
              ]
            },
            workflow: {
              title: "Processus d'Approvisionnement",
              description: "Comment nous vous connectons avec la bonne machinerie.",
              steps: [
                {
                  step: '01',
                  title: 'Demande',
                  desc: 'Soumettez vos besoins en équipement ou listez votre actif à vendre.'
                },
                {
                  step: '02',
                  title: 'Correspondance',
                  desc: 'Notre moteur alimenté par IA associe les actifs avec des acheteurs qualifiés instantanément.'
                },
                {
                  step: '03',
                  title: 'Vérification',
                  desc: 'Les inspecteurs vérifient l\'état et la documentation avant de procéder.'
                },
                {
                  step: '04',
                  title: 'Clôture',
                  desc: 'Le traitement sécurisé des paiements et la coordination logistique finalisent l\'accord.'
                }
              ]
            },
            features: {
              title: "Pourquoi Choisir Notre Courtage",
              items: [
                {
                  title: "Portée Mondiale",
                  description: "Accédez aux marchés de plus de 50 pays. Nous gérons les complexités du commerce transfrontalier, y compris les douanes et la conformité."
                },
                {
                  title: "Protection contre la Fraude",
                  description: "Chaque transaction est sécurisée via des services d'escrow. Nous vérifions chaque acheteur et vendeur pour prévenir la fraude."
                },
                {
                  title: "Intelligence de Marché",
                  description: "Tirez parti de nos données exclusives pour prixer votre équipement de manière compétitive ou vous assurer de ne pas surpayer."
                }
              ]
            },
            trusted: {
              title: "Reconnu par les Leaders de l'Industrie"
            },
            cta: {
              title: "Prêt à Acheter ou Vendre?",
              subtitle: "Rejoignez des milliers d'entreprises optimisant leur gestion d'actifs aujourd'hui.",
              buttons: {
                browse: "Parcourir l'Inventaire",
                contact: "Contacter un Courtier"
              }
            },
            modal: {
              title: "Demande de Courtage",
              form: {
                firstName: "Prénom",
                lastName: "Nom",
                email: "Adresse Email",
                inquiryType: "Type de Demande",
                company: "Entreprise",
                phone: "Téléphone",
                equipment: "Équipement / Exigences",
                submit: "Soumettre la Demande",
                agreement: "En soumettant, vous acceptez de partager vos coordonnées avec notre équipe de courtage."
              },
              options: {
                buy: "Je veux Acheter de l'Équipement",
                sell: "Je veux Vendre de l'Équipement",
                general: "Demande Générale"
              }
            },
            successMessage: "Demande soumise avec succès! Un courtier vous contactera sous peu."
          },
          // INSPECTION PAGE - French
          inspection: {
            hero: {
              title: "Inspections d'Équipement Certifiées",
              subtitle: "Rapports d'inspection impartiaux, détaillés et rapides. Sachez exactement ce que vous achetez ou vendez avec nos protocoles d'évaluation standardisés.",
              ctaText: "Planifier l'Inspection"
            },
            whyMatter: {
              title: "Pourquoi les Inspections Comptent",
              description: "Atténuez les risques et assurez une valeur équitable avec notre reporting complet.",
              heading: "Une Analyse Approfondie de la Santé des Machines",
              content: "Nos inspecteurs ne font pas que vérifier les pneus. Nous effectuons des tests opérationnels rigoureux, des analyses de fluides et des mesures de train de roulement. Un rapport typique comprend plus de 100 points de données et 50+ photos haute résolution.",
              features: [
                {
                  title: "Listes de Contrôle Standardisées",
                  description: "Critères d'évaluation cohérents dans toutes les catégories d'équipement."
                },
                {
                  title: "Preuves Visuelles",
                  description: "Documentation photo et vidéo détaillée de l'usure."
                },
                {
                  title: "Rapports Numériques",
                  description: "Accès instantané aux rapports via notre portail cloud sécurisé."
                }
              ]
            },
            qualityProcess: {
              title: "Processus d'Assurance Qualité",
              steps: [
                {
                  title: "Réservation & Envoi",
                  desc: "Inspecteur assigné selon le type d'équipement et l'expertise de localisation.",
                  side: "left"
                },
                {
                  title: "Évaluation sur Site",
                  desc: "Vérification visuelle, tests opérationnels et échantillonnage de fluides effectués.",
                  side: "right"
                },
                {
                  title: "Revue des Données",
                  desc: "Les responsables techniques seniors examinent les données brutes pour anomalies.",
                  side: "left"
                },
                {
                  title: "Publication du Rapport",
                  desc: "Rapport final généré avec estimations de valorisation (optionnel).",
                  side: "right"
                }
              ]
            },
            evaluators: {
              title: "Points Forts des Évaluateurs",
              inspectors: [
                {
                  name: "Mike T.",
                  role: "Spécialiste Senior en Machinerie Lourde",
                  quote: "\"J'ai inspecté plus de 2 000 excavatrices. Je sais exactement où se cachent les fissures de fatigue.\""
                },
                {
                  name: "Sarah L.",
                  role: "Grues & Équipements de Levage",
                  quote: "\"La sécurité est la priorité. Mes rapports assurent la conformité avec les normes OSHA et ISO.\""
                },
                {
                  name: "David R.",
                  role: "Camions & Parc Automobile",
                  quote: "\"Les diagnostics moteur racontent la vraie histoire. Nous ne devinons pas, nous mesurons.\""
                }
              ]
            },
            cta: {
              title: "Ne risquez pas une mauvaise affaire.",
              subtitle: "Obtenez les faits avant de signer le chèque.",
              button: "Demander un Échantillon de Rapport"
            },
            modal: {
              title: "Demande d'Inspection",
              form: {
                firstName: "Prénom",
                lastName: "Nom",
                email: "Adresse Email",
                equipment: "Détails de l'Équipement",
                location: "Localisation de l'Actif",
                phone: "Téléphone",
                submit: "Soumettre la Demande",
                responseTime: "Le temps de réponse standard est inférieur à 4 heures pendant les jours ouvrables."
              },
              placeholders: {
                firstName: "Jean",
                lastName: "Dupont",
                email: "jean@entreprise.com",
                equipment: "Année, Marque, Modèle, Numéro de série (si disponible)",
                location: "Ville, État",
                phone: "+1 (555) 000-0000"
              }
            },
            successMessage: "Demande d'inspection reçue! Nous vous contacterons pour planifier."
          },
          // DISPOSITION PAGE - French
          disposition: {
            hero: {
              title: "Disposition Stratégique d'Actifs",
              subtitle: "Maximisez la valeur de récupération des actifs excédentaires. Nous offrons des solutions rentables et conformes à l'environnement pour les équipements en fin de vie ou excédentaires.",
              ctaText: "Démarrer la Récupération"
            },
            recoveryProcess: {
              title: "Le Processus de Récupération d'Actifs",
              description: "Transformez les machines inactives en capital de travail de manière sécurisée et efficace.",
              steps: [
                {
                  title: "Évaluation",
                  description: "Nous cataloguons votre inventaire excédentaire et déterminons le meilleur canal de disposition: revente, reconditionnement ou recyclage."
                },
                {
                  title: "Conformité",
                  description: "L'élimination des fluides dangereux, la destruction des données et la conformité des déchets électroniques sont gérées selon les réglementations EPA."
                },
                {
                  title: "Liquidation",
                  description: "Les actifs sont vendus via traité privé, enchères ou marchés de ferraille pour maximiser le retour sur investissement."
                }
              ],
              caseStudy: {
                title: "Étude de Cas: Liquidation de Parc de Construction",
                content: "Une entreprise d'infrastructure majeure devait se défaire de 50+ unités de matériel de terrassement vieillissant. Notre équipe a géré la logistique, le reconditionnement et le processus d'enchères.",
                metrics: [
                  {
                    value: "120%",
                    label: "Récupération vs Valeur Comptable"
                  },
                  {
                    value: "30 Jours",
                    label: "Délai du Projet"
                  }
                ]
              }
            },
            workflow: {
              title: "Flux de Travail de Revente et Recyclage",
              features: [
                {
                  title: "Logistique & Enlèvement",
                  description: "Nous organisons le transport lourd et le dégagement du site."
                },
                {
                  title: "Transfert de Titre",
                  description: "Gestion de toutes les libérations de privilège et de la documentation de propriété."
                },
                {
                  title: "Ventes Multi-Canaux",
                  description: "Listage sur les marchés mondiaux et réseaux exclusifs."
                },
                {
                  title: "Disposition Écologique",
                  description: "Recyclage certifié pour les composants non récupérables."
                }
              ]
            },
            cta: {
              title: "Transformez le Passif en Liquidité",
              button: "Obtenir une Évaluation Gratuite"
            },
            modal: {
              title: "Demande de Disposition d'Actifs",
              form: {
                firstName: "Prénom",
                lastName: "Nom",
                email: "Adresse Email",
                assets: "Liste des Actifs / Inventaire",
                location: "Localisation des Actifs",
                company: "Entreprise",
                submit: "Soumettre pour Évaluation",
                responseTime: "Notre équipe fournit généralement des évaluations préliminaires sous 2 jours ouvrables."
              },
              placeholders: {
                firstName: "Jean",
                lastName: "Dupont",
                email: "jean@entreprise.com",
                assets: "Veuillez lister les articles principaux ou fournir un résumé du lot...",
                location: "Ville, État",
                company: "Nom de l'Entreprise"
              }
            },
            successMessage: "Demande de disposition soumise. Un spécialiste en récupération examinera vos actifs."
          },
          // CONSIGNMENT PAGE - French
          consignment: {
            hero: {
              title: "Services de Consignation d'Équipement",
              subtitle: "Stockage sécurisé et gestion professionnelle des ventes pour vos équipements lourds. Vous conservez la propriété tandis que nous gérons la vente.",
              ctaText: "Consigner Votre Équipement"
            },
            hassleFree: {
              title: "Vente Sans Tracas",
              description: "Nous stockons, entretenons et vendons vos actifs depuis nos cours sécurisées.",
              revenueModel: {
                title: "Modèle de Partage des Revenus",
                content: "Contrairement aux enchères où vous perdez le contrôle du prix, notre modèle de consignation vous place aux commandes. Nous convenons d'un prix net ou d'un pourcentage de commission.",
                features: [
                  { label: "Marketing & Annonce", value: "Inclus" },
                  { label: "Stockage (90 Jours)", value: "Gratuit" },
                  { label: "Lavage d'Entretien", value: "Inclus" },
                  { label: "Commission", value: "8-12%" }
                ]
              },
              benefits: [
                {
                  title: "Emplacements Privilégiés",
                  description: "Nos cours de consignation sont situées près des principaux ports et autoroutes pour un accès facile aux acheteurs et une logistique simplifiée."
                },
                {
                  title: "Visibilité Maximale",
                  description: "Le trafic piétonnier combiné à un placement numérique premium garantit que votre actif est vu par des acheteurs sérieux."
                },
                {
                  title: "Installations Sécurisées",
                  description: "Surveillance de sécurité 24/7, cours clôturées et vérifications régulières de la batterie/des fluides pendant le stockage."
                }
              ]
            },
            tracking: {
              title: "Suivi & Transparence",
              features: [
                {
                  title: "Inventaire en Temps Réel",
                  description: "Visualisez vos actifs consignés dans notre portail. Vérifiez le statut, consultez les vues d'annonce et gérez les offres."
                },
                {
                  title: "Tarification Dynamique",
                  description: "Nous fournissons des ajustements de prix basés sur les données en fonction de l'intérêt du marché pour assurer une vente rapide."
                },
                {
                  title: "Rapports de Performance",
                  description: "Mises à jour hebdomadaires sur les leads, les demandes et les inspections physiques effectuées sur votre équipement."
                }
              ]
            },
            cta: {
              title: "L'espace est limité dans nos cours privilégiées.",
              subtitle: "Réservez votre place dès aujourd'hui et présentez votre équipement à des acheteurs vérifiés.",
              button: "Réserver un Espace"
            },
            modal: {
              title: "Demande de Consignation",
              form: {
                firstName: "Prénom",
                lastName: "Nom",
                email: "Adresse Email",
                equipment: "Description de l'Équipement",
                location: "Localisation Actuelle",
                phone: "Téléphone",
                submit: "Soumettre la Demande",
                agreement: "En soumettant, vous acceptez nos conditions de consignation et notre politique de confidentialité."
              },
              placeholders: {
                firstName: "Jean",
                lastName: "Dupont",
                email: "jean@entreprise.com",
                equipment: "Ex., 2018 CAT 320 Excavatrice...",
                location: "Ville, État",
                phone: "+1 (555) 000-0000"
              }
            },
            successMessage: "Espace de consignation réservé! Nous vous contacterons pour finaliser les détails."
          },
          // LOGISTICS PAGE - French
          logistics: {
            hero: {
              title: "Logistique d'Équipement Lourd",
              subtitle: "Solutions de transport porte-à-porte pour cargaisons hors gabarit. Nous gérons le démontage, l'emballage, le fret et le dédouanement.",
              ctaText: "Obtenir un Devis d'Expédition"
            },
            forwarding: {
              title: "Réseau Mondial de Fret",
              description: "Déplacement transparent de machines lourdes à travers les frontières et les océans.",
              globe: {
                title: "Connectant 150+ Ports dans le Monde",
                subtitle: "Suivi en direct disponible pour tout le fret maritime et aérien."
              },
              services: [
                {
                  title: "Transport Terrestre Lourd",
                  description: "Remorques spécialisées low-boy et RGN pour charges hors gabarit. Nous gérons tous les permis et exigences de véhicule d'escorte."
                },
                {
                  title: "RoRo & Conteneur",
                  description: "Options de fret maritime flexibles. Roll-on/Roll-off pour unités roulantes ou conteneurisation pour pièces démontées."
                },
                {
                  title: "Démontage & Emballage",
                  description: "Services de démontage professionnel pour adapter les grandes machines dans des conteneurs standards, réduisant considérablement les coûts d'expédition."
                }
              ]
            },
            workflow: {
              title: "Processus d'Expédition",
              steps: [
                { title: "Devis & Planification", text: "Analyse d'itinéraire et estimation des coûts basée sur les dimensions et le poids." },
                { title: "Préparation & Enlèvement", text: "Nettoyage (pour conformité en quarantaine) et chargement sur le transport." },
                { title: "Douane d'Exportation", text: "Dépôt de documentation (AES, Facture Commerciale, Liste de Colisage)." },
                { title: "Fret Maritime", text: "Départ du navire et surveillance du transit." },
                { title: "Importation & Livraison", text: "Dédouanement à destination et livraison dernier kilomètre." }
              ]
            },
            cta: {
              title: "Besoin de déplacer du gros matériel?",
              subtitle: "Nos experts en logistique sont prêts à planifier votre itinéraire.",
              buttons: {
                quote: "Demander un Devis",
                track: "Suivre l'Expédition"
              }
            },
            modal: {
              title: "Demande de Devis d'Expédition",
              form: {
                firstName: "Prénom",
                lastName: "Nom",
                email: "Adresse Email",
                equipment: "Détails de l'Équipement",
                origin: "Ville d'Origine",
                destination: "Ville de Destination",
                submit: "Soumettre la Demande",
                agreement: "En soumettant, vous acceptez notre politique de confidentialité. Les estimations sont valables 7 jours."
              },
              placeholders: {
                firstName: "Jean",
                lastName: "Dupont",
                email: "jean@entreprise.com",
                equipment: "Ex., 2018 CAT 320 Excavatrice, environ 45 000 lbs",
                origin: "Ville, Pays",
                destination: "Ville, Pays"
              }
            },
            successMessage: "Demande de devis soumise avec succès! Un coordinateur logistique vous contactera sous peu."
          },

          ///<---- about page ---->/////

          // BRAND STORY SECTION - French
          brandStory: {
            sectionTitle: "Section 01 — Histoire de la Marque",
            heading: "Notre Histoire",
            title: "Vision Semiconductor Solutions LLC a été fondée avec un objectif clair : alimenter l'avenir de la technologie.",
            content: [
              "Vision Semiconductor Solutions (VSS) soutient l'industrie mondiale de fabrication de semi-conducteurs avec précision, innovation et transparence. Ce qui a commencé comme une source d'équipements excédentaires et de pièces de rechange a évolué vers une plateforme de connaissances, d'excellence technique et de collaboration mondiale.",
              "Enracinée dans l'expertise technique, VSS vise à devenir un centre de confiance pour les solutions, l'éducation et l'influence industrielle au sein de l'écosystème des semi-conducteurs."
            ],
            founder: {
              name: "Vision Semiconductor Solutions",
              role: "Équipe de Direction Mondiale",
              quote: "\"Nous nous tenons responsables d'abord, puis notre équipe, nos clients et notre communauté.\""
            }
          },
          // MISSION VISION SECTION - French
          missionVision: {
            intro: "Propulser l'Industrie Vers l'Avenir",
            mission: {
              section: "Section 02",
              title: "Mission",
              heading: "Autonomiser l'Avenir des Solutions Semi-conductrices",
              content: "Notre mission est de fournir des équipements et des connaissances fiables en semi-conducteurs aux ingénieurs, fabricants et innovateurs du monde entier. Nous rendons les solutions haute performance accessibles, efficaces et évolutives—autonomisant la prochaine génération de technologie et d'excellence manufacturière."
            },
            vision: {
              section: "Section 03",
              title: "Vision",
              heading: "Façonner Demain, Aujourd'hui",
              content: "Nous envisageons de devenir un centre mondial pour les solutions semi-conductrices, l'éducation et le leadership industriel. Grâce à la clarté, l'innovation et l'engagement à long terme, nous visons à influencer l'avenir de l'écosystème des semi-conducteurs et à élever le progrès technologique dans le monde entier."
            }
          },
          // TEAM SECTION - French
          team: {
            title: "Notre équipe a plus de 100 ans d'expérience combinée!",
            subtitle: "Notre équipe apporte expérience, innovation et créativité à l'industrie des semi-conducteurs pour garantir que vos projets sont entre de bonnes mains.",
            members: [
              {
                name: "Mike Simorangkir",
                role: "Fondateur & PDG",
                bio: "Mike, MBA, a 15+ ans d'expérience dans les stratégies commerciales de semi-conducteurs et le développement d'équipements à usage mixte."
              },
              {
                name: "Stanley George",
                role: "EVP & CCO Retraité",
                bio: "Stanley était associé chez Heenan Blaikie LLP jusqu'en septembre 2005, spécialisé dans la conformité technologique mondiale."
              },
              {
                name: "Eliza Baker",
                role: "VP, Opérations",
                bio: "Eliza, MBA, a 12+ ans d'expérience en logistique commerciale et gestion de la chaîne d'approvisionnement des semi-conducteurs."
              },
              {
                name: "Sally Cruz",
                role: "Directrice du Marketing",
                bio: "Sally a 10+ ans d'expérience sur les marchés technologiques canadiens et asiatiques."
              }
            ]
          },
          // CTA SECTION - French
          cta: {
            title: "Partenariat avec Vision Semiconductor Solutions",
            subtitle: "Découvrez comment notre précision et notre innovation peuvent alimenter votre prochaine percée technologique.",
            button: "Contactez-Nous Aujourd'hui"
          },
          // ACCESS CTA PAGE - French
          accessCTA: {
            hero: {
              badge: "Accès Exclusif",
              title: "Débloquez l'Ultime <1>Base de Connaissances</1>",
              subtitle: "Accès complet aux rapports sur les semi-conducteurs, livres blancs, insights deep-tech et ressources expertes.",
              buttons: {
                trial: "Commencer l'Essai Gratuit",
                explore: "Explorer la Bibliothèque"
              }
            },
            valueProposition: {
              title: "Pourquoi les Professionnels Nous Choisissent",
              subtitle: "Intelligence fiable sur les semi-conducteurs conçue pour les ingénieurs, analystes et décideurs.",
              cards: [
                {
                  title: "Insights en Temps Réel",
                  description: "Restez en avance avec une intelligence continue du marché et de la technologie des semi-conducteurs."
                },
                {
                  title: "Sources Vérifiées",
                  description: "Chaque ressource est validée par des experts de l'industrie pour sa précision technique et sa pertinence."
                },
                {
                  title: "Communauté Mondiale",
                  description: "Rejoignez un réseau d'ingénieurs, chercheurs et leaders façonnant l'avenir de la technologie."
                }
              ]
            }
          },
          // PODCASTS PAGE - French
          podcasts: {
            hero: {
              title: "Construire un futur des podcasts plus rapide et plus <1>intelligent.</1>",
              subtitle: "Découvrez une approche fondée sur les chiffres, l'expertise, le partenariat et une vision à long terme — offrant bien plus que de l'audio.",
              buttons: {
                explore: "Explorer les épisodes",
                schedule: "Planifier un appel"
              }
            },
            featured: {
              title: "Derniers Épisodes",
              featuredBadge: "EN VEDETTE",
              featuredEpisode: {
                title: "Ép 100: Un Siècle de Silicium",
                description: "Nous revenons sur l'histoire des semi-conducteurs et anticipons le saut quantique qui nous attend dans la prochaine décennie.",
                button: "Écouter Maintenant"
              }
            },
            episodes: {
              categories: ["Technologie", "Entreprise", "Santé", "Design", "Marketing", "Science"],
              episode: {
                showNotes: "Notes de l'Émission",
                duration: "{{duration}}"
              }
            },
            sidebar: {
              newsletter: {
                title: "Restez Informé",
                subtitle: "Rejoignez 10 000+ ingénieurs recevant nos analyses hebdomadaires de l'industrie.",
                placeholder: "Entrez votre email",
                button: "S'abonner Gratuitement"
              },
              about: {
                title: "À Propos de Vision",
                content: "Vision Semiconductor Solutions LLC fournit des insights de pointe sur le matériel qui alimente notre monde. Du silicium aux systèmes.",
                link: "En savoir plus →"
              }
            }
          },
          // WHITE PAPERS PAGE - French
          whitePapers: {
            hero: {
              title: "Recherche & Livres Blancs",
              subtitle: "Aperçus du marché des semi-conducteurs, tendances de fabrication et notes technologiques avancées."
            },
            featured: {
              editorsPick: "Choix de l'Éditeur",
              title: "L'État de l'Innovation Mondiale des Puce 2024",
              description: "Analyse des expansions de fabs, de la résilience de la chaîne d'approvisionnement, des percées en lithographie et de la dynamique concurrentielle façonnant les écosystèmes de semi-conducteurs de nouvelle génération.",
              buttons: {
                download: "Télécharger PDF",
                summary: "Lire le Résumé"
              }
            },
            recent: {
              title: "Publications Récentes",
              papers: [
                {
                  title: "Insights Stratégiques Vol. 1",
                  summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
                },
                {
                  title: "Insights Stratégiques Vol. 2",
                  summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
                },
                {
                  title: "Insights Stratégiques Vol. 3",
                  summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam."
                }
              ],
              button: "Voir"
            }
          },
          // BLOG PAGE - French
          blog: {
            latestNews: {
              title: "Dernières Nouvelles",
              featured: {
                category: "PERSPECTIVES SEMI-CONDUCTEURS",
                title: "Les usines mondiales peinent à développer l'emballage avancé alors que la demande de puces IA s'accélère",
                summary: "Les fabricants de puces du monde entier se précipitent pour développer la capacité d'emballage avancé, mais les contraintes d'approvisionnement en outils de lithographie et matériaux entravent la production."
              },
              smallArticles: [
                {
                  category: "TECHNOLOGIE D'USINE",
                  title: "De nouvelles percées en lithographie EUV promettent un meilleur rendement aux nœuds 2nm..."
                },
                {
                  category: "CHAÎNE D'APPROVISIONNEMENT",
                  title: "La pénurie mondiale de plaquettes de silicium devrait se poursuivre jusqu'en 2026..."
                },
                {
                  category: "INNOVATION ÉQUIPEMENT",
                  title: "Les fournisseurs d'équipements de gravure poussent de nouvelles technologies plasma pour géométries sub-3nm..."
                }
              ]
            },
            gridSection: {
              title: "Comptes d'Exploitation, de Réserve<br/>et de Coffre",
              articles: [
                {
                  category: "FABRICATION",
                  title: "Les fabricants de puces investissent des milliards pour développer la capacité de fabrication mondiale",
                  summary: "Les principales entreprises de semi-conducteurs accélèrent l'expansion des usines pour répondre à la demande d'IA, de véhicules électriques et d'électronique grand public de nouvelle génération."
                },
                {
                  category: "ÉQUIPEMENT",
                  title: "Les nouveaux systèmes de métrologie de plaquettes améliorent la précision aux échelles atomiques",
                  summary: "Les outils d'inspection avancés continuent d'évoluer alors que les caractéristiques des semi-conducteurs se réduisent à l'ère de l'angstrom."
                },
                {
                  category: "INNOVATION R&D",
                  title: "Les chercheurs explorent l'empilement 3D du silicium pour booster la densité computationnelle",
                  summary: "Les innovations en dissipation thermique et technologies d'interconnexion sont clés pour mettre à l'échelle les architectures de semi-conducteurs empilés 3D."
                }
              ],
              button: "Voir Tous les Articles"
            },
            common: {
              author: "Dr. Ethan Park",
              date: "25 Jan 2025"
            }
          },
          // EBOOKS PAGE - French
          ebooks: {
            hero: {
              title: "Bibliothèque de Connaissances",
              subtitle: "eBooks techniques, insights sur les semi-conducteurs et guides d'ingénierie premium — gratuits pour tous les professionnels."
            },
            books: [
              {
                title: "Maîtriser la Transformation Digitale",
                author: "Dr. Sarah Connor",
                description: "Un guide organisé offrant des insights techniques, des meilleures pratiques et des connaissances prêtes pour l'industrie."
              },
              {
                title: "Le Guide du Leadership Agile",
                author: "James Cameron",
                description: "Un guide organisé offrant des insights techniques, des meilleures pratiques et des connaissances prêtes pour l'industrie."
              },
              {
                title: "Science des Données pour les Cadres",
                author: "Ellen Ripley",
                description: "Un guide organisé offrant des insights techniques, des meilleures pratiques et des connaissances prêtes pour l'industrie."
              },
              {
                title: "Essentiels de la Cybersécurité",
                author: "Neo Anderson",
                description: "Un guide organisé offrant des insights techniques, des meilleures pratiques et des connaissances prêtes pour l'industrie."
              }
            ],
            buttons: {
              readOnline: "Lire en Ligne",
              download: "Télécharger"
            },
            common: {
              by: "par",
              pages: "{{count}} pages"
            }
          },
          // INDUSTRY NEWS PAGE - French
          industryNews: {
            pageTitle: "Actualités de l'Industrie des Semi-conducteurs",
            featured: {
              badge: "Urgent",
              title: "Percée Majeure dans l'Efficacité des Puce Quantiques Annoncée Aujourd'hui"
            },
            categories: ["Tous", "Fabrication de Puce", "Régulations", "Startups", "Entreprise", "R&D"],
            newsItems: [
              {
                title: "Les Marchés Mondiaux des Puce Redémarrent alors que la Demande d'IA Atteint un Record",
                excerpt: "Les usines de pointe, les nouvelles percées en lithographie et les régulations géopolitiques continuent de façonner l'écosystème des semi-conducteurs.",
                category: "Fabrication de Puce"
              },
              {
                title: "Nouvelles Règles d'Exportation de Semi-conducteurs Créent une Incertitude dans l'Industrie",
                excerpt: "Les usines de pointe, les nouvelles percées en lithographie et les régulations géopolitiques continuent de façonner l'écosystème des semi-conducteurs.",
                category: "Régulations"
              }
            ],
            sidebar: {
              trending: {
                title: "Sujets Tendances",
                tags: ['#EUVLithography', '#ChipFabrication', '#AIChips', '#3DNAND', '#QuantumComputing']
              },
              subscribe: {
                title: "Digest Quotidien des Semi-conducteurs",
                description: "Recevez les principaux titres de l'industrie des puces chaque matin.",
                placeholder: "Adresse Email",
                button: "S'inscrire"
              }
            },
            common: {
              readFullStory: "Lire l'Article Complet",
              author: "Dr. Jane Doe",
              featuredAuthor: "Dr. John Smith",
              date: "{{day}} jan 2025"
            }
          },
          // PRODUCTS PAGE - French
          products: {
            tabsData: [
              {
                id: 'Modular architecture',
                label: 'Architecture modulaire',
                number: '01',
                title: 'Architecture modulaire',
                description: 'Explorez les équipements des principaux OEM incluant ASML, Applied Materials, Lam Research, TEL et KLA.',
                cta: 'En savoir plus'
              },
              {
                id: 'Opportunities',
                label: 'Opportunités',
                number: '02',
                title: 'Opportunités en Vedette',
                description: 'Accédez à des annonces exclusives à haute valeur, des systèmes rares et des outils semi-conducteurs demandés à prix compétitifs.',
                cta: 'En savoir plus'
              },
              {
                id: 'New Inventory',
                label: 'Nouvel Inventaire',
                number: '03',
                title: 'Nouvelles Arrivées',
                description: 'Découvrez les derniers ajouts, des outils de pointe pour wafers aux systèmes reconditionnés prêts pour la production.',
                cta: 'En savoir plus'
              },
              {
                id: 'Portal',
                label: 'Portail',
                number: '04',
                title: 'Portail Client',
                description: 'Demandez des devis, gérez les bons de commande et rationalisez les achats avec un espace de travail client unifié.',
                cta: 'En savoir plus'
              }
            ]
          },

        }
      }
    }
  });

export default i18n;
