"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, Plane, Hospital, UserCheck, HeartPulse, ArrowRight } from "lucide-react"

const Journey = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  const journeySteps = [
    {
      icon: <Calendar size={24} className="text-primary" />,
      title: "Free Consultation",
      description: "Connect with our specialists for a personalized assessment of your hair loss condition.",
    },
    {
      icon: <Plane size={24} className="text-primary" />,
      title: "Travel to Istanbul",
      description: "Enjoy VIP airport pickup and transfer to your luxury hotel. Rest and prepare for your procedure.",
    },
    {
      icon: <Hospital size={24} className="text-primary" />,
      title: "Procedure Day",
      description: "Experience painless hair transplantation performed by expert surgeons using the latest techniques.",
    },
    {
      icon: <UserCheck size={24} className="text-primary" />,
      title: "Post-Op Care",
      description:
        "Receive detailed aftercare instructions and your first washing demonstration before returning home.",
    },
    {
      icon: <HeartPulse size={24} className="text-primary" />,
      title: "Follow-Up Support",
      description: "Benefit from ongoing support throughout your recovery journey as your new hair grows naturally.",
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

  useEffect(() => {
    if (isVisible) {
      // Animate steps sequentially
      const interval = setInterval(() => {
        setActiveStep((prev) => {
          if (prev < journeySteps.length - 1) {
            return prev + 1
          }
          clearInterval(interval)
          return prev
        })
      }, 700)

      return () => clearInterval(interval)
    }
  }, [isVisible, journeySteps.length])

  return (
    <section id="journey" className="section-padding bg-dark-darker" ref={sectionRef}>
      <div className="container-wide mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat text-white">
            Your <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-white max-w-3xl mx-auto">
            From consultation to recovery, we provide comprehensive support at every step
          </p>
        </div>

        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="relative max-w-4xl mx-auto">
            {/* SVG Path */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2">
              <svg width="2" height="100%" viewBox="0 0 2 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 0V800"
                  stroke="url(#paint0_linear)"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                  className="journey-path"
                />
                <defs>
                  <linearGradient id="paint0_linear" x1="1.5" y1="0" x2="1.5" y2="800" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#9A806B" />
                    <stop offset="0.5" stopColor="#F3E0DB" />
                    <stop offset="1" stopColor="#9B816C" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Journey Steps */}
            <div className="space-y-16 md:space-y-24 relative z-10">
              {journeySteps.map((step, index) => (
                <div
                  key={index}
                  className={`journey-step ${index <= activeStep ? "active" : ""}`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <div
                    className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                  >
                    <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
                      <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-glow rounded-full opacity-30 blur-xl"></div>
                        <div className="w-16 h-16 rounded-full bg-dark flex items-center justify-center border-2 border-primary relative z-10">
                          {step.icon}
                        </div>
                      </div>
                    </div>

                    <div className="md:w-1/2 text-center md:text-left">
                      <div className={`glass-card p-6 ${index % 2 === 0 ? "md:mr-12" : "md:ml-12"}`}>
                        <h3 className="text-xl font-bold mb-3 text-light">{step.title}</h3>
                        <p className="text-gray-light">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Final CTA */}
            <div
              className={`journey-step text-center mt-16 ${journeySteps.length <= activeStep ? "active" : ""}`}
              style={{ animationDelay: `${journeySteps.length * 0.3}s` }}
            >
              <button
                onClick={() => document.getElementById("consultation-form")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-gradient-primary text-white px-8 py-3 rounded-full font-medium hover:shadow-glow transition-all mt-8 btn-3d flex items-center mx-auto"
              >
                Start Your Journey Today <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Journey

