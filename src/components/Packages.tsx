"use client"

import { useEffect, useRef, useState } from "react"
import { Check, X, ArrowRight, Crown, Shield, Sparkles, Euro } from "lucide-react"

const Packages = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredPackage, setHoveredPackage] = useState<string | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <section id="packages" className="section-padding bg-dark-darker" ref={sectionRef}>
      <div className="container-wide mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat text-white">
            All-Inclusive <span className="text-gradient">Packages</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-white max-w-3xl mx-auto">
            One fixed price, no hidden costs. Everything you need for your hair transplant journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div
            className={`glass-card overflow-hidden transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            } ${hoveredPackage === "standard" ? "transform scale-105 z-10" : ""}`}
            onMouseEnter={() => setHoveredPackage("standard")}
            onMouseLeave={() => setHoveredPackage(null)}
          >
            <div className="relative overflow-hidden">
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2 text-light">Standard Package</h3>
                <div className="flex items-center justify-center">
                  <Euro size={24} className="text-primary mr-2" />
                  <div className="text-4xl font-bold text-light">1,590</div>
                </div>
                <p className="text-gray-light">Save €5,000+ vs. European prices</p>
              </div>

              <div className="px-6 pb-6">
                <div className="flex flex-wrap mb-4">
                  <span className="feature-tag">FUE Technique</span>
                  <span className="feature-tag">Up to 3000 Grafts</span>
                  <span className="feature-tag">3 Nights Hotel</span>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <Check size={20} className="text-primary" />
                    </div>
                    <span className="text-light">FUE Hair Transplant</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <Check size={20} className="text-primary" />
                    </div>
                    <span className="text-light">Up to 3000 Grafts</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <Check size={20} className="text-primary" />
                    </div>
                    <span className="text-light">Airport Transfers</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <Check size={20} className="text-primary" />
                    </div>
                    <span className="text-light">3 Nights Hotel Accommodation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <Check size={20} className="text-primary" />
                    </div>
                    <span className="text-light">Translator Service</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <Check size={20} className="text-primary" />
                    </div>
                    <span className="text-light">Aftercare Kit</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <X size={20} className="text-red-500" />
                    </div>
                    <span className="text-gray-400">PRP Treatment</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <X size={20} className="text-red-500" />
                    </div>
                    <span className="text-gray-400">Luxury 5-Star Hotel</span>
                  </li>
                </ul>

                <button
                  onClick={() => document.getElementById("consultation-form")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full mt-8 bg-dark border border-primary text-primary py-3 rounded-xl font-medium hover:bg-primary hover:text-white transition-all flex items-center justify-center"
                >
                  Book Consultation <ArrowRight size={20} className="ml-2" />
                </button>
              </div>
            </div>
          </div>

          <div
            className={`glass-card overflow-hidden transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            } ${hoveredPackage === "premium" ? "transform scale-105 z-10" : ""}`}
            onMouseEnter={() => setHoveredPackage("premium")}
            onMouseLeave={() => setHoveredPackage(null)}
          >
            <div className="absolute top-0 right-0 w-32 h-32">
              <div className="absolute top-0 right-0 w-full h-full overflow-hidden">
                <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45 bg-secondary w-24 h-24"></div>
              </div>
              <div className="absolute top-6 right-4 text-dark">
                <Crown size={20} />
              </div>
            </div>

            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-glow opacity-20 blur-xl"></div>
              <div className="bg-gradient-primary p-6 text-center relative z-10">
                <h3 className="text-2xl font-bold mb-2 text-dark">Elite Premium Package</h3>
                <div className="flex items-center justify-center">
                  <Euro size={24} className="text-dark mr-2" />
                  <div className="text-4xl font-bold text-dark">2,790</div>
                </div>
                <p className="text-dark text-opacity-90">Save €8,000+ vs. European prices</p>
              </div>

              <div className="px-6 pb-6 relative z-10">
                <div className="flex flex-wrap mb-4">
                  <span className="feature-tag">FUE/DHI Technique</span>
                  <span className="feature-tag">Unlimited Grafts</span>
                  <span className="feature-tag">5-Star Hotel</span>
                  <span className="feature-tag">PRP Included</span>
                </div>

                <ul className="space-y-4">
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <Sparkles size={20} className="text-primary" />
                    </div>
                    <span className="text-light">Advanced FUE/DHI Technique</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <Sparkles size={20} className="text-primary" />
                    </div>
                    <span className="text-light">Unlimited Grafts</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <Sparkles size={20} className="text-primary" />
                    </div>
                    <span className="text-light">PRP Treatment Included</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <Sparkles size={20} className="text-primary" />
                    </div>
                    <span className="text-light">VIP Airport Transfers</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <Sparkles size={20} className="text-primary" />
                    </div>
                    <span className="text-light">4 Nights Luxury 5-Star Hotel</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <Sparkles size={20} className="text-primary" />
                    </div>
                    <span className="text-light">Private Translator Service</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <Sparkles size={20} className="text-primary" />
                    </div>
                    <span className="text-light">Premium Aftercare Kit</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                      <Sparkles size={20} className="text-primary" />
                    </div>
                    <span className="text-light">Istanbul City Tour</span>
                  </li>
                </ul>

                <button
                  onClick={() => document.getElementById("consultation-form")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full mt-8 bg-gradient-primary text-dark py-3 rounded-xl font-semibold hover:shadow-glow transition-all flex items-center justify-center btn-3d animate-glow"
                >
                  Book Elite Experience <ArrowRight size={20} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="glass-card p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Shield size={24} className="text-primary mr-2" />
              <h3 className="text-xl font-bold text-light">European Patient Guarantee</h3>
            </div>
            <p className="text-gray-light mb-6">
              We guarantee your results or we'll provide a complimentary touch-up procedure. All packages include
              English-speaking staff, EU-approved medications, and lifetime support.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="flex items-center bg-dark-darker/50 px-4 py-2 rounded-full">
                <Check size={16} className="text-primary mr-2" />
                <span className="text-sm text-gray-light">Lifetime Support</span>
              </div>
              <div className="flex items-center bg-dark-darker/50 px-4 py-2 rounded-full">
                <Check size={16} className="text-primary mr-2" />
                <span className="text-sm text-gray-light">Free Touch-ups</span>
              </div>
              <div className="flex items-center bg-dark-darker/50 px-4 py-2 rounded-full">
                <Check size={16} className="text-primary mr-2" />
                <span className="text-sm text-gray-light">EU-Approved Materials</span>
              </div>
            </div>
            <button
              onClick={() => document.getElementById("consultation-form")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-gradient-primary text-dark px-8 py-3 rounded-full font-semibold hover:shadow-glow transition-all btn-3d"
            >
              Get Your Personalized Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Packages

