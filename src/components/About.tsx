"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Users, ThumbsUp } from "lucide-react"

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
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
    <section id="about" className="section-padding bg-dark" ref={sectionRef}>
      <div className="container-wide mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat text-white">
            Why Europeans Choose <span className="text-gradient">Turkey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div
            className={`glass-card p-6 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <Award size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-light">70% Cost Savings</h3>
            <p className="text-gray-light text-sm">
              Save €5,000-€10,000 compared to UK, German and French clinics while receiving the same or better quality
              treatment.
            </p>
          </div>

          <div
            className={`glass-card p-6 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <Users size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-light">World-Class Surgeons</h3>
            <p className="text-gray-light text-sm">
              Turkish specialists perform 10x more transplants annually than European doctors, making them the most
              experienced in the world.
            </p>
          </div>

          <div
            className={`glass-card p-6 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: "0.4s" }}
          >
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
              <ThumbsUp size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-light">All-Inclusive Packages</h3>
            <p className="text-gray-light text-sm">
              One fixed price covers everything: procedure, hotel, transfers, translator, and aftercare. No hidden
              costs.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div className="glass-card p-6">
              <h3 className="text-2xl font-bold mb-6 text-light">The European's Choice for Hair Restoration</h3>

              <p className="text-gray-light mb-6">
                Every year, thousands of men from the UK, Germany, France, and across Europe choose Turkey for their
                hair transplant. Here's why:
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex flex-col items-center text-center p-4 glass-effect rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-1">98%</div>
                  <div className="text-gray-light text-sm">Success Rate</div>
                </div>

                <div className="flex flex-col items-center text-center p-4 glass-effect rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-1">15k+</div>
                  <div className="text-gray-light text-sm">European Patients</div>
                </div>

                <div className="flex flex-col items-center text-center p-4 glass-effect rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-1">€8k</div>
                  <div className="text-gray-light text-sm">Average Savings</div>
                </div>

                <div className="flex flex-col items-center text-center p-4 glass-effect rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-1">3-4</div>
                  <div className="text-gray-light text-sm">Days in Turkey</div>
                </div>
              </div>

              <button
                onClick={() => document.getElementById("consultation-form")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-gradient-primary text-dark px-6 py-3 rounded-full font-semibold hover:shadow-glow transition-all btn-3d w-full"
              >
                Calculate Your Savings
              </button>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="absolute -inset-4 bg-gradient-glow rounded-xl opacity-30 blur-xl"></div>
            <div className="glass-card p-4 relative z-10">
              <div className="grid grid-cols-2 gap-2">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1780&auto=format&fit=crop"
                    alt="Modern clinic"
                    className="w-full h-full object-cover transition-all hover:scale-110 duration-500"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1770&auto=format&fit=crop"
                    alt="Hair transplant procedure"
                    className="w-full h-full object-cover transition-all hover:scale-110 duration-500"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop"
                    alt="Patient consultation"
                    className="w-full h-full object-cover transition-all hover:scale-110 duration-500"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=1885&auto=format&fit=crop"
                    alt="Istanbul view"
                    className="w-full h-full object-cover transition-all hover:scale-110 duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

