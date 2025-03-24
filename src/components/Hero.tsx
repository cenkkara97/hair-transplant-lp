"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useWhatsApp } from "../context/WhatsAppContext"
import { ArrowRight, Check, Calendar } from "lucide-react"

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { name, email, phone, setName, setEmail, setPhone, redirectToWhatsApp } = useWhatsApp()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    redirectToWhatsApp()
  }

  return (
    <section className="min-h-screen pt-20 relative overflow-hidden bg-dark-darker">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src=""
          alt="Hair transplant clinic"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-dark opacity-80"></div>
      </div>

      <div className="container-wide mx-auto py-10 md:py-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0 -translate-x-10"}`}>
            <div className="inline-block px-4 py-1 bg-primary/20 rounded-full text-primary-light text-sm font-medium mb-6">
              #1 Hair Transplant Destination in Europe
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-montserrat text-white">
              Stop Hair Loss. <span className="text-gradient">Regain Confidence.</span>
            </h1>

            <p className="text-xl text-white mb-8 max-w-xl">
              Premium hair transplants in Turkey at <span className="font-bold text-primary-light">70% less</span> than
              UK, Germany & France prices.
              <span className="block mt-2 font-semibold">€1,590 all-inclusive packages.</span>
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={() => document.getElementById("consultation-form")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-gradient-primary text-dark px-8 py-4 rounded-full font-semibold hover:shadow-glow transition-all flex items-center btn-3d text-lg animate-glow"
              >
                Get Free Quote <ArrowRight size={20} className="ml-2" />
              </button>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-secondary bg-opacity-20 flex items-center justify-center mr-3">
                  <Check size={16} className="text-secondary" />
                </div>
                <span className="text-white">Permanent, natural-looking results</span>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-secondary bg-opacity-20 flex items-center justify-center mr-3">
                  <Check size={16} className="text-secondary" />
                </div>
                <span className="text-white">Painless procedure with local anesthesia</span>
              </div>
            </div>
          </div>

          <div
            id="consultation-form"
            className={`glass-card p-6 transition-all duration-1000 shadow-glow edge-light max-w-sm mx-auto lg:ml-auto ${isVisible ? "opacity-100" : "opacity-0 translate-x-10"}`}
          >
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-light">Free Hair Analysis</h3>
                <span className="text-xs bg-secondary text-dark px-2 py-1 rounded-full font-semibold">No obligation</span>
              </div>
              <p className="text-gray-light text-sm">Get your personalized treatment plan & price quote</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="custom-input"
                placeholder="Full Name"
                required
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="custom-input"
                placeholder="Email Address"
                required
              />

              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="custom-input"
                placeholder="Phone Number (WhatsApp)"
                required
              />

              <button
                type="submit"
                className="w-full bg-gradient-primary text-dark py-3 rounded-xl font-semibold hover:shadow-glow transition-all flex items-center justify-center btn-3d"
              >
                Get My Free Quote <ArrowRight size={16} className="ml-2" />
              </button>
            </form>

            <div className="mt-4 flex items-center justify-center text-xs text-gray-light">
              <Calendar size={14} className="mr-2 text-primary-light" />
              <span>Response within 24 hours</span>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-dark">
              <div className="flex items-center justify-center space-x-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1280px-Flag_of_Europe.svg.png"
                  alt="EU Flag"
                  className="h-4"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png"
                  alt="UK Flag"
                  className="h-4"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1280px-Flag_of_Germany.svg.png"
                  alt="Germany Flag"
                  className="h-4"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png"
                  alt="France Flag"
                  className="h-4"
                />
              </div>
              <p className="text-center text-xs text-gray-light mt-2">Trusted by patients across Europe</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

