"use client"

import { useState, useEffect, useRef } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    {
      id: 1,
      name: "James Wilson",
      age: 42,
      country: "United Kingdom",
      image: "src/assets/images/user-avatar.webp",
      rating: 5,
      text: "I researched for months before choosing a clinic in Turkey. The entire experience exceeded my expectations. From the moment I landed in Istanbul to my final check-up, everything was perfectly organized. The results are incredible - my hairline looks completely natural and no one can tell I've had a transplant.",
      procedure: "FUE Hair Transplant",
    },
    {
      id: 2,
      name: "Robert Johnson",
      age: 38,
      country: "United States",
      image: "src/assets/images/user-avatar.webp",
      rating: 5,
      text: "After years of feeling self-conscious about my hair loss, I finally decided to do something about it. The team in Istanbul was professional, caring, and highly skilled. The procedure was painless and the recovery was much easier than I expected. I'm now 12 months post-op and couldn't be happier with my results.",
      procedure: "DHI Hair Transplant",
    },
    {
      id: 3,
      name: "Michael Brown",
      age: 45,
      country: "Australia",
      image: "src/assets/images/user-avatar.webp",
      rating: 5,
      text: "The value for money is incredible. I was quoted over $20,000 in Australia for the same procedure that cost me less than $3,000 in Turkey, including accommodation and transfers. The quality of care was world-class and the results speak for themselves. My only regret is not doing this sooner!",
      procedure: "Sapphire FUE",
    },
    {
      id: 4,
      name: "David Miller",
      age: 36,
      country: "Canada",
      image: "src/assets/images/user-avatar.webp",
      rating: 5,
      text: "From start to finish, my experience was fantastic. The clinic was modern and immaculate, the staff were friendly and professional, and the surgeon took time to explain everything in detail. The aftercare support has been excellent, and I'm thrilled with how my new hair looks and feels.",
      procedure: "Combined FUE & PRP",
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

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="section-padding bg-dark" ref={sectionRef}>
      <div className="container-wide mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat text-white">
            What Our <span className="text-gradient">Patients Say</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-white max-w-3xl mx-auto">
            Hear from our satisfied patients who have experienced life-changing results with our premium hair
            transplantation services.
          </p>
        </div>

        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="glass-card p-8 md:p-12 relative">
                      <Quote size={60} className="text-white opacity-20 absolute top-6 right-8" />

                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/3 flex flex-col items-center">
                          <div className="relative mb-4">
                            <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-full blur-xl"></div>
                            <img
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              className="relative z-10 w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary shadow-glow"
                            />
                          </div>

                          <div className="text-center">
                            <div className="flex justify-center mb-2">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                              ))}
                            </div>
                            <h4 className="text-xl font-bold text-light">{testimonial.name}</h4>
                            <p className="text-gray-light">
                              {testimonial.age}, {testimonial.country}
                            </p>
                            <div className="mt-2 inline-block px-3 py-1 rounded-full bg-primary/20 text-primary-light text-sm">
                              {testimonial.procedure}
                            </div>
                          </div>
                        </div>

                        <div className="md:w-2/3 flex items-center">
                          <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-glow rounded-xl opacity-10 blur-xl"></div>
                            <p className="text-gray-light text-lg italic leading-relaxed relative z-10">
                              "{testimonial.text}"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 bg-dark text-primary-light w-12 h-12 rounded-full flex items-center justify-center shadow-glow hover:bg-primary hover:text-white transition-all border border-primary"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 bg-dark text-primary-light w-12 h-12 rounded-full flex items-center justify-center shadow-glow hover:bg-primary hover:text-white transition-all border border-primary"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? "bg-primary w-6" : "bg-gray-dark"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => document.getElementById("consultation-form")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-gradient-primary text-dark px-8 py-3 rounded-full font-semibold hover:shadow-glow transition-all btn-3d"
            >
              Get Your Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

