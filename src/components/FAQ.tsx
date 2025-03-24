"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { ChevronDown, ChevronUp, ArrowRight, Check } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  // Use useMemo for faqs array to avoid recreating on every render
  const faqs = useMemo<FAQItem[]>(
    () => [
      {
        question: "How long does a hair transplant procedure take?",
        answer:
          "The procedure typically takes between 6-8 hours depending on the number of grafts being transplanted. Our clinics use the latest techniques to ensure efficiency without compromising quality.",
      },
      {
        question: "Is the procedure painful?",
        answer:
          "No, the procedure is performed under local anesthesia, so you won't feel any pain during the transplant. Some patients may experience mild discomfort during the initial anesthesia injection, but this is brief.",
      },
      {
        question: "How soon will I see results after a hair transplant?",
        answer:
          "Initial results can be seen around 3-4 months after the procedure, with significant improvement at 6-8 months. The final results are typically visible after 12-14 months when the transplanted hair has fully grown and matured.",
      },
      {
        question: "How many grafts will I need for my hair transplant?",
        answer:
          "The number of grafts needed depends on the extent of your hair loss, the density you desire, and the quality of your donor area. During your consultation, our specialists will assess your specific situation and recommend the optimal number of grafts.",
      },
      {
        question: "What is the difference between FUE and DHI techniques?",
        answer:
          "FUE (Follicular Unit Extraction) involves extracting individual hair follicles and implanting them into tiny incisions. DHI (Direct Hair Implantation) uses a specialized tool to extract and implant follicles in one step, allowing for more precise placement and potentially denser results.",
      },
      {
        question: "How long do I need to stay in Turkey for a hair transplant?",
        answer:
          "We recommend staying for 3-4 days. The procedure is done on day 2, with a follow-up and washing demonstration on day 3. This timeline allows for proper initial recovery before traveling home.",
      },
      {
        question: "Are the results permanent?",
        answer:
          "Yes, hair transplantation provides permanent results as the transplanted hair follicles are taken from areas resistant to hair loss (typically the back and sides of the head). These follicles maintain their genetic resistance even when transplanted to balding areas.",
      },
      {
        question: "What is included in your packages?",
        answer:
          "Our all-inclusive packages typically include the procedure, accommodation, airport transfers, translator services, aftercare products, and post-operative support. Premium packages include additional services like PRP treatment, maximum graft count, and luxury accommodation.",
      },
    ],
    [],
  )

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
    <section id="faq" className="section-padding bg-dark" ref={sectionRef}>
      <div className="container-wide mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat text-white">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-white max-w-3xl mx-auto">
            Find answers to common questions about hair transplantation procedures, recovery, and results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-3">
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item mb-4 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  } ${openIndex === index ? "active" : ""}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <button
                    className="faq-question w-full flex justify-between items-center bg-dark-darker rounded-xl shadow-custom text-white"
                    onClick={() => toggleQuestion(index)}
                    aria-expanded={openIndex === index}
                  >
                    <span>{faq.question}</span>
                    {openIndex === index ? (
                      <ChevronUp size={20} className="text-white flex-shrink-0" />
                    ) : (
                      <ChevronDown size={20} className="text-primary flex-shrink-0" />
                    )}
                  </button>

                  <div className="faq-answer rounded-b-xl text-white">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="glass-card p-6 h-full">
              <div className="relative mb-6 rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                  alt="Hair transplant clinic"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-darker to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2">Still Have Questions?</h3>
                  <p className="text-gray-light text-sm">
                    Our specialists are ready to provide personalized answers to all your questions.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <Check size={16} className="text-primary" />
                  </div>
                  <p className="text-gray-light">
                    <span className="text-light font-medium">Free consultation</span> with our hair transplant
                    specialists
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <Check size={16} className="text-primary" />
                  </div>
                  <p className="text-gray-light">
                    <span className="text-light font-medium">Video consultations</span> available for international
                    patients
                  </p>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <Check size={16} className="text-primary" />
                  </div>
                  <p className="text-gray-light">
                    <span className="text-light font-medium">Multilingual support</span> in English, German, French and
                    more
                  </p>
                </div>
              </div>

              <button
                onClick={() => document.getElementById("consultation-form")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full mt-6 bg-gradient-primary text-white px-8 py-3 rounded-xl font-medium hover:shadow-glow transition-all btn-3d flex items-center justify-center"
              >
                Contact Us <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ

