"use client"

import { useState, useEffect, useRef } from "react"

const BeforeAfter = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeTab, setActiveTab] = useState("all")
  const [selectedCase, setSelectedCase] = useState<number | null>(null)

  const cases = [
    {
      id: 1,
      beforeSrc: "src/assets/images/before-1.png",
      afterSrc: "src/assets/images/after-1.png",
      title: "Michael S., 42",
      description: "FUE Hair Transplant - 3500 grafts",
      months: 12,
      type: "fue",
    },
    {
      id: 2,
      beforeSrc: "src/assets/images/before-1.png",
      afterSrc: "src/assets/images/after-1.png",
      title: "David L., 35",
      description: "DHI Hair Transplant - 2800 grafts",
      months: 10,
      type: "dhi",
    },
    {
      id: 3,
      beforeSrc: "src/assets/images/before-1.png",
      afterSrc: "src/assets/images/after-1.png",
      title: "Robert K., 38",
      description: "Sapphire FUE - 4200 grafts",
      months: 14,
      type: "sapphire",
    },
    {
      id: 4,
      beforeSrc: "src/assets/images/before-1.png",
      afterSrc: "src/assets/images/after-1.png",
      title: "James T., 45",
      description: "Combined Technique - 3800 grafts",
      months: 11,
      type: "combined",
    },
    {
      id: 5,
      beforeSrc: "src/assets/images/before-1.png",
      afterSrc: "src/assets/images/after-1.png",
      title: "Thomas H., 39",
      description: "FUE Hair Transplant - 3200 grafts",
      months: 13,
      type: "fue",
    },
  ]

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

  const filteredCases = activeTab === "all" ? cases : cases.filter((c) => c.type === activeTab)

  // Modal içeriğini kapatmak için ESC tuşu ile kapatma işlevi
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedCase) {
        setSelectedCase(null)
      }
    }
    
    window.addEventListener("keydown", handleEscapeKey)
    
    // Eğer modal açıksa, body'ye overflow hidden ekle
    if (selectedCase !== null) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    
    return () => {
      window.removeEventListener("keydown", handleEscapeKey)
      document.body.style.overflow = "auto"
    }
  }, [selectedCase])

  return (
    <section id="before-after" className="section-padding bg-dark-darker" ref={sectionRef}>
      <div className="container-wide mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat text-white">
            Real <span className="text-gradient">Results</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-white max-w-3xl mx-auto ">
            See the transformative results our European patients have experienced. These are real people with real
            results.
          </p>
        </div>

        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 px-2">
            <button
              className={`px-4 md:px-6 py-2 rounded-full transition-all text-sm md:text-base ${activeTab === "all" ? "bg-primary text-white shadow-glow" : "bg-dark text-gray-light border border-gray-dark"}`}
              onClick={() => setActiveTab("all")}
            >
              All Results
            </button>
            <button
              className={`px-4 md:px-6 py-2 rounded-full transition-all text-sm md:text-base ${activeTab === "fue" ? "bg-primary text-white shadow-glow" : "bg-dark text-gray-light border border-gray-dark"}`}
              onClick={() => setActiveTab("fue")}
            >
              FUE
            </button>
            <button
              className={`px-4 md:px-6 py-2 rounded-full transition-all text-sm md:text-base ${activeTab === "dhi" ? "bg-primary text-white shadow-glow" : "bg-dark text-gray-light border border-gray-dark"}`}
              onClick={() => setActiveTab("dhi")}
            >
              DHI
            </button>
            <button
              className={`px-4 md:px-6 py-2 rounded-full transition-all text-sm md:text-base ${activeTab === "sapphire" ? "bg-primary text-white shadow-glow" : "bg-dark text-gray-light border border-gray-dark"}`}
              onClick={() => setActiveTab("sapphire")}
            >
              Sapphire
            </button>
            <button
              className={`px-4 md:px-6 py-2 rounded-full transition-all text-sm md:text-base ${activeTab === "combined" ? "bg-primary text-white shadow-glow" : "bg-dark text-gray-light border border-gray-dark"}`}
              onClick={() => setActiveTab("combined")}
            >
              Combined
            </button>
          </div>

          {/* Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredCases.map((item) => (
              <div 
                key={item.id} 
                className="rounded-lg overflow-hidden shadow-lg hover:shadow-primary/30 transition-all cursor-pointer transform hover:scale-[1.02] duration-300 bg-dark"
                onClick={() => setSelectedCase(item.id)}
              >
                <div className="relative aspect-[4/3]">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary opacity-30 z-10"></div>
                  <div className="relative h-full">
                    <div className="absolute inset-0 w-1/2 overflow-hidden">
                      <img
                        src={item.beforeSrc || "/placeholder.svg"}
                        alt={`Before - ${item.title}`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-dark-darker/80 text-dark font-semibold px-3 py-1 text-sm rounded-full">
                        Before
                      </div>
                    </div>
                    <div className="absolute inset-0 w-full overflow-hidden">
                      <div className="absolute inset-0 left-1/2 overflow-hidden">
                        <img
                          src={item.afterSrc || "/placeholder.svg"}
                          alt={`After - ${item.title}`}
                          className="absolute inset-0 w-[200%] h-full object-cover object-left"
                        />
                      </div>
                      <div className="absolute top-4 right-4 bg-primary text-white font-semibold px-3 py-1 text-sm rounded-full">
                        After {item.months} months
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-white font-semibold">{item.title}</h4>
                  <p className="text-gray-light text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Modal for selected case - Responsive and scrollable */}
          {selectedCase && (
            <div 
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setSelectedCase(null)
                }
              }}
            >
              <div className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto glass-card p-4 md:p-6 rounded-xl">
                <button
                  className="absolute top-0 right-0 text-white z-10 bg-dark-darker/70 rounded-full p-1"
                  onClick={() => setSelectedCase(null)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>

                {(() => {
                  const caseData = cases.find((c) => c.id === selectedCase)
                  if (!caseData) return null

                  return (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="relative rounded-lg overflow-hidden mb-4 aspect-[4/3]">
                          <img
                            src={caseData.beforeSrc || "/placeholder.svg"}
                            alt={`Before - ${caseData.title}`}
                            className="w-full h-full object-cover object-top"
                          />
                          <div className="absolute top-4 left-4 bg-dark-darker/80 text-dark font-semibold px-3 py-1 text-sm rounded-full">
                            Before
                          </div>
                        </div>
                        <h4 className="text-white font-semibold mb-1">{caseData.title}</h4>
                        <p className="text-gray-light">{caseData.description}</p>
                      </div>
                      <div>
                        <div className="relative rounded-lg overflow-hidden mb-4 aspect-[4/3]">
                          <img
                            src={caseData.afterSrc || "/placeholder.svg"}
                            alt={`After - ${caseData.title}`}
                            className="w-full h-full object-cover object-top"
                          />
                          <div className="absolute top-4 right-4 bg-primary text-white font-semibold px-3 py-1 text-sm rounded-full">
                            After {caseData.months} months
                          </div>
                        </div>
                        <div className="glass-effect p-4 rounded-lg">
                          <h5 className="text-white font-semibold mb-2">Patient Testimonial</h5>
                          <p className="text-gray-light italic">
                            "I couldn't be happier with my results. The procedure was painless and the recovery was
                            quick. The team in Turkey was professional and caring throughout the entire process."
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })()}
              </div>
            </div>
          )}

          <div className="text-center mt-12">
            <button
              onClick={() => document.getElementById("consultation-form")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-gradient-primary text-dark px-8 py-3 rounded-full font-semibold hover:shadow-glow transition-all inline-flex items-center btn-3d"
            >
              Get Your Free Assessment
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BeforeAfter