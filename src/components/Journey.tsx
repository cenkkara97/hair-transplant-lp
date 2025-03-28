"use client"

import { useState, useEffect, useRef } from "react"
import { Calendar, Plane, Hospital, UserCheck, HeartPulse, ArrowRight, Check } from "lucide-react"

const JourneyTabs = () => {
  // İleri/geri butonlarını kaldır, otomatik geçiş ekle ve day butonlarını ortala

  // useState ve useEffect içinde otomatik geçiş için timer ekle
  const [activeTab, setActiveTab] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const tabsRef = useRef<HTMLDivElement>(null)

  const journeySteps = [
    {
      day: "Day 1",
      title: "Free Consultation",
      icon: <Calendar className="w-5 h-5" />,
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Your journey begins with a free, personalized consultation with our hair specialists. We'll assess your hair loss condition, discuss your goals, and create a customized treatment plan tailored to your needs.",
      highlights: [
        "Video consultation with hair specialists",
        "Personalized treatment plan",
        "Detailed cost breakdown",
        "No obligation assessment",
      ],
    },
    {
      day: "Day 2",
      title: "Travel to Istanbul",
      icon: <Plane className="w-5 h-5" />,
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Upon your arrival in Istanbul, our VIP transfer service will meet you at the airport and take you to your luxury hotel. You'll have time to rest and prepare for your procedure the following day.",
      highlights: [
        "VIP airport pickup service",
        "Luxury hotel accommodation",
        "Pre-operative consultation",
        "Translator assistance",
      ],
    },
    {
      day: "Day 3",
      title: "Procedure Day",
      icon: <Hospital className="w-5 h-5" />,
      image: "/placeholder.svg?height=400&width=600",
      description:
        "On the day of your procedure, you'll visit our state-of-the-art clinic where our expert surgeons will perform your hair transplantation using the latest techniques. The procedure is painless and typically takes 6-8 hours.",
      highlights: [
        "State-of-the-art clinic facilities",
        "Painless anesthesia application",
        "FUE or DHI technique as recommended",
        "Lunch and refreshments provided",
      ],
    },
    {
      day: "Day 4",
      title: "Post-Op Care",
      icon: <UserCheck className="w-5 h-5" />,
      image: "/placeholder.svg?height=400&width=600",
      description:
        "The day after your procedure, you'll return to the clinic for your first washing demonstration. Our specialists will provide detailed aftercare instructions and all necessary medications before you return home.",
      highlights: [
        "First washing demonstration",
        "Aftercare kit provided",
        "Detailed recovery instructions",
        "Return transfer to airport",
      ],
    },
    {
      day: "Ongoing",
      title: "Follow-Up Support",
      icon: <HeartPulse className="w-5 h-5" />,
      image: "/placeholder.svg?height=400&width=600",
      description:
        "Our commitment to your satisfaction doesn't end when you leave Istanbul. We provide ongoing support throughout your recovery journey, with regular check-ins to monitor your progress and answer any questions.",
      highlights: [
        "Regular check-in consultations",
        "Progress monitoring",
        "24/7 WhatsApp support",
        "Lifetime guarantee",
      ],
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

  // useEffect içinde otomatik geçiş için timer ekle
  useEffect(() => {
    if (isVisible && !isPaused) {
      const timer = setInterval(() => {
        setActiveTab((prev) => (prev === journeySteps.length - 1 ? 0 : prev + 1))
      }, 3000)

      return () => clearInterval(timer)
    }
  }, [isVisible, isPaused, journeySteps.length])

  const scrollToTab = (index: number) => {
    if (tabsRef.current) {
      const tabElement = tabsRef.current.children[index] as HTMLElement
      if (tabElement) {
        const scrollPosition = tabElement.offsetLeft - tabsRef.current.offsetWidth / 2 + tabElement.offsetWidth / 2
        tabsRef.current.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        })
      }
    }
  }

  // handleTabChange fonksiyonunu güncelle
  const handleTabChange = (index: number) => {
    setActiveTab(index)
    scrollToTab(index)
    // Kullanıcı tıkladığında geçici olarak otomatik geçişi durdur
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 5000) // 5 saniye sonra otomatik geçişi tekrar başlat
  }

  return (
    <section id="journey" className="py-20 bg-[#08122c]" ref={sectionRef}>
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Your Hair Transplant Journey</h2>
          <div className="w-20 h-1 bg-[#9a806b] mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            From consultation to recovery, we provide comprehensive support at every step
          </p>
        </div>

        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {/* Tabs navigation */}
          <div className="relative mb-8">
            <div
              ref={tabsRef}
              className="flex justify-center overflow-x-auto scrollbar-hide py-4 px-4 space-x-2 md:space-x-4 snap-x"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {journeySteps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => handleTabChange(index)}
                  className={`flex-shrink-0 snap-center flex items-center px-4 py-3 rounded-full transition-all duration-300 ${
                    activeTab === index
                      ? "bg-[#9a806b] text-white shadow-lg"
                      : "bg-[#0a1735] text-gray-300 hover:bg-[#0a1735]/80"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${
                      activeTab === index ? "bg-white/20" : "bg-[#9a806b]/10"
                    }`}
                  >
                    {step.icon}
                  </div>
                  <span className="font-medium whitespace-nowrap">{step.day}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content area */}
          <div className="bg-gradient-to-b from-[#0a1735] to-[#050e24] rounded-2xl overflow-hidden shadow-xl border border-[#9a806b]/20">
            {journeySteps.map((step, index) => (
              <div key={index} className={`transition-all duration-500 ${activeTab === index ? "block" : "hidden"}`}>
                <div className="md:flex">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-64 md:h-auto">
                    <img
                      src={step.image || "/placeholder.svg"}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050e24] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#050e24]"></div>

                    {/* Day badge - mobile only */}
                    <div className="absolute top-4 left-4 md:hidden">
                      <div className="bg-[#9a806b] text-white px-4 py-1 rounded-full text-sm font-medium">
                        {step.day}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:w-1/2 p-6 md:p-8">
                    <div className="flex items-center mb-4">
                      <div className="hidden md:flex w-10 h-10 rounded-full bg-[#9a806b] text-white items-center justify-center mr-3">
                        {index + 1}
                      </div>
                      <div>
                        <div className="hidden md:block text-[#9a806b] text-sm font-medium mb-1">{step.day}</div>
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">{step.description}</p>

                    <div>
                      <h4 className="text-[#9a806b] font-medium mb-3 flex items-center">
                        <Check className="w-5 h-5 mr-2" /> What to expect:
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {step.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-5 h-5 rounded-full bg-[#9a806b]/10 flex items-center justify-center mt-0.5 mr-2 flex-shrink-0">
                              <Check className="w-3 h-3 text-[#9a806b]" />
                            </div>
                            <span className="text-gray-300 text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Progress indicator */}
            <div className="flex justify-between px-4 py-3 bg-[#0a1735] border-t border-[#9a806b]/10">
              <div className="text-gray-400 text-sm">
                Step <span className="text-white font-medium">{activeTab + 1}</span> of {journeySteps.length}
              </div>

              <button
                onClick={() => document.getElementById("consultation-form")?.scrollIntoView({ behavior: "smooth" })}
                className="text-[#9a806b] hover:text-[#f3e0db] text-sm font-medium transition-colors duration-300 flex items-center"
              >
                Start Your Journey <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <button
              onClick={() => document.getElementById("consultation-form")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-[#9a806b] hover:bg-[#8a7060] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 flex items-center mx-auto shadow-lg hover:shadow-xl"
            >
              Start Your Journey Today <ArrowRight size={20} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JourneyTabs

