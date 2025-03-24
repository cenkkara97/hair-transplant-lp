"use client"

import type React from "react"

import { useEffect, useRef, useState, useMemo } from "react"
import { Users, Award, Globe, ThumbsUp } from "lucide-react"

interface StatItem {
  icon: React.ReactNode
  value: number
  label: string
  suffix?: string
}

const GlobalStats = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0])
  const sectionRef = useRef<HTMLDivElement>(null)

  // Wrap stats in useMemo to prevent it from being recreated on every render
  const stats = useMemo<StatItem[]>(() => [
    {
      icon: <Users size={32} className="text-gold" />,
      value: 15000,
      label: "Satisfied Patients",
      suffix: "+",
    },
    {
      icon: <Award size={32} className="text-gold" />,
      value: 98,
      label: "Success Rate",
      suffix: "%",
    },
    {
      icon: <Globe size={32} className="text-gold" />,
      value: 45,
      label: "Countries Served",
    },
    {
      icon: <ThumbsUp size={32} className="text-gold" />,
      value: 12,
      label: "Years Experience",
      suffix: "+",
    },
  ], [])

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

    // Store the current value in a variable to use in cleanup
    const currentRef = sectionRef.current
    
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      // Use the variable in the cleanup function instead of sectionRef.current
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      const intervals = stats.map((stat, index) => {
        return setInterval(() => {
          setCounts((prevCounts) => {
            const newCounts = [...prevCounts]
            if (newCounts[index] < stat.value) {
              const increment = Math.ceil(stat.value / 50)
              newCounts[index] = Math.min(newCounts[index] + increment, stat.value)
            }
            return newCounts
          })
        }, 30)
      })

      return () => {
        intervals.forEach((interval) => clearInterval(interval))
      }
    }
  }, [isVisible, stats])

  return (
    <section className="py-20 gradient-navy text-white" ref={sectionRef}>
      <div className="container-wide mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Global Treatments, Extraordinary Results</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto">
            Our globally trusted hair transplant clinic provides high-quality services with cutting-edge technology and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className={`transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <div className="bg-white bg-opacity-10 p-6 rounded-2xl h-full">
              <h3 className="text-2xl font-bold mb-6 text-white">Patient Profile</h3>

              <div className="chart-container mb-8">
                {["ABD", "İngiltere", "Almanya", "Fransa", "Kanada", "Avustralya"].map((country, index) => {
                  const height = isVisible ? [65, 85, 70, 55, 45, 40][index] : 0
                  const value = [25, 32, 27, 21, 17, 15][index]

                  return (
                    <div
                      key={index}
                      className="chart-bar"
                      style={{
                        height: `${height}%`,
                        left: `${index * 16.6}%`,
                        transitionDelay: `${index * 100}ms`,
                      }}
                    >
                      <div className="chart-value">{value}%</div>
                      <div className="chart-label">{country}</div>
                    </div>
                  )
                })}
              </div>

              <p className="text-center text-sm text-gray-300">
                International Patient Percentage by Country
              </p>
            </div>
          </div>

          <div
            className={`transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="bg-white bg-opacity-10 p-6 rounded-2xl h-full">
              <h3 className="text-2xl font-bold mb-6 text-white">Procedure Distribution</h3>

              <div className="pie-chart mb-4"></div>

              <div className="pie-legend">
                <div className="pie-legend-item">
                  <div className="pie-legend-color" style={{ backgroundColor: "var(--color-gold)" }}></div>
                  <span>FUE (%25)</span>
                </div>
                <div className="pie-legend-item">
                  <div className="pie-legend-color" style={{ backgroundColor: "var(--color-navy)" }}></div>
                  <span>DHI (%30)</span>
                </div>
                <div className="pie-legend-item">
                  <div className="pie-legend-color" style={{ backgroundColor: "#112663" }}></div>
                  <span>Safir FUE (%20)</span>
                </div>
                <div className="pie-legend-item">
                  <div className="pie-legend-color" style={{ backgroundColor: "#F5E7A3" }}></div>
                  <span>Kombine (%25)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-16">
          <div
            className={`transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="bg-white bg-opacity-10 p-6 rounded-2xl h-full">
              <h3 className="text-2xl font-bold mb-6 text-white">Global Reach</h3>

              <div className="world-map mb-4">
                {[
                  { top: "30%", left: "20%" }, // Kuzey Amerika
                  { top: "35%", left: "45%" }, // Avrupa
                  { top: "40%", left: "55%" }, // Orta Doğu
                  { top: "60%", left: "70%" }, // Avustralya
                  { top: "45%", left: "75%" }, // Asya
                  { top: "65%", left: "30%" }, // Güney Amerika
                ].map((position, index) => (
                  <div
                    key={index}
                    className="map-point"
                    style={{
                      top: position.top,
                      left: position.left,
                      animationDelay: `${index * 0.5}s`,
                    }}
                  ></div>
                ))}
              </div>

              <p className="text-center text-sm text-gray-300">
                Our patients come from more than 45 countries around the world
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white bg-opacity-10 rounded-2xl p-6 text-center transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold mb-2">
                {counts[index].toLocaleString()}
                {stat.suffix || ""}
              </div>
              <div className="text-gray-300">
                {index === 0 && "Satisfied Patient"}
                {index === 1 && "Success Rateı"}
                {index === 2 && "Country of Service"}
                {index === 3 && "Years of Experience"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GlobalStats