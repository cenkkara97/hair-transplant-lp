"use client"

import { useState, useRef, useEffect } from "react"
import { Star, ThumbsUp, Quote, ChevronLeft, ChevronRight } from "lucide-react"

interface Review {
  id: string
  name: string
  date: string
  rating: number
  content: string
  avatar: string
  helpful?: number
}

export default function ReviewTabs() {
  const [activeTab, setActiveTab] = useState("trustpilot")
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const trustpilotReviews: Review[] = [
    {
      id: "tp1",
      name: "Ahmet Y.",
      date: "15 Mart 2025",
      rating: 5,
      content:
        "Türkiye'de saç ekimi için en iyi klinik! Doktorlar ve personel çok profesyonel. Sonuçlardan çok memnunum ve fiyat olarak da Avrupa'daki kliniklere göre çok daha uygundu.",
      avatar: "/placeholder.svg?height=100&width=100",
      helpful: 24,
    },
    {
      id: "tp2",
      name: "Michael S.",
      date: "3 Şubat 2025",
      rating: 5,
      content:
        "İngiltere'den geldim ve bu kliniği tercih ettiğim için çok mutluyum. Tüm süreç boyunca mükemmel bir hizmet aldım. Sonuçlar beklediğimden çok daha iyi!",
      avatar: "/placeholder.svg?height=100&width=100",
      helpful: 18,
    },
    {
      id: "tp3",
      name: "Sophie L.",
      date: "27 Ocak 2025",
      rating: 4,
      content:
        "Fransa'dan geldim ve deneyimim genel olarak çok olumluydu. Doktorlar çok bilgili ve sonuçlar harika. Tek eksik havaalanından transferde küçük bir gecikme yaşadık.",
      avatar: "/placeholder.svg?height=100&width=100",
      helpful: 12,
    },
  ]

  const googleReviews: Review[] = [
    {
      id: "g1",
      name: "David K.",
      date: "20 Şubat 2025",
      rating: 5,
      content:
        "Almanya'dan geldim ve bu klinik beklentilerimi aştı. Doktorlar son derece profesyonel ve sonuçlar inanılmaz. Kesinlikle tavsiye ederim!",
      avatar: "/placeholder.svg?height=100&width=100",
      helpful: 31,
    },
    {
      id: "g2",
      name: "Maria C.",
      date: "5 Ocak 2025",
      rating: 5,
      content:
        "İspanya'dan geldim ve tüm deneyimim mükemmeldi. Klinik çok modern, personel çok ilgili ve sonuçlar harika. Fiyat-performans açısından kesinlikle değer!",
      avatar: "/placeholder.svg?height=100&width=100",
      helpful: 27,
    },
    {
      id: "g3",
      name: "John B.",
      date: "12 Aralık 2024",
      rating: 4,
      content:
        "ABD'den geldim ve genel olarak çok memnun kaldım. Doktorlar çok profesyonel ve sonuçlar beklediğimden daha iyi. Tek sorun dil bariyeriydi ama tercümanlar yardımcı oldu.",
      avatar: "/placeholder.svg?height=100&width=100",
      helpful: 15,
    },
  ]

  const reviews = activeTab === "trustpilot" ? trustpilotReviews : googleReviews

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1))
  }

  useEffect(() => {
    setCurrentIndex(0)
  }, [activeTab])

  return (
    <section id="testimonials" className="section-padding bg-dark-darker">
    <div className="container-wide mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat text-white">
        Why Europeans Choose <span className="text-gradient">Turkey</span>
      </h2>
      <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>

      <p className="text-white max-w-3xl mx-auto">
            Watch testimonials from our patients and learn more about our premium hair transplantation procedures.
          </p>
    </div>
      {/* Tabs */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex bg-[#050e24] rounded-full p-1 border border-[#9a806b]/30">
          <button
            className={`py-2 px-6 rounded-full font-medium transition-all duration-300 ${
              activeTab === "trustpilot" ? "bg-[#9a806b] text-white shadow-lg" : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab("trustpilot")}
          >
            Trustpilot
          </button>
          <button
            className={`py-2 px-6 rounded-full font-medium transition-all duration-300 ${
              activeTab === "google" ? "bg-[#9a806b] text-white shadow-lg" : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab("google")}
          >
            Google
          </button>
        </div>
      </div>

      {/* Reviews Carousel */}
      <div className="relative">
        <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 z-10">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-[#050e24] border border-[#9a806b]/30 flex items-center justify-center hover:bg-[#9a806b]/20 transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>

        <div ref={carouselRef} className="overflow-hidden px-8">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviews.map((review) => (
              <div key={review.id} className="w-full flex-shrink-0">
                <div className="bg-gradient-to-br from-[#08122c] to-[#050e24] rounded-xl p-8 border border-[#9a806b]/20 shadow-xl max-w-3xl mx-auto">
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-[#9a806b]/30">
                      <img
                        src={review.avatar || "/placeholder.svg"}
                        alt={review.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-xl font-semibold text-white">{review.name}</div>
                      <div className="text-[#9a806b] text-sm">{review.date}</div>
                      <div className="flex mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative mb-6">
                    <Quote className="w-10 h-10 text-[#9a806b]/20 absolute -top-4 -left-2" />
                    <p className="text-gray-300 text-lg leading-relaxed pl-6">{review.content}</p>
                  </div>

                  {review.helpful && (
                    <div className="flex items-center text-gray-400 text-sm">
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      <span>{review.helpful} kişi faydalı buldu</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-[#050e24] border border-[#9a806b]/30 flex items-center justify-center hover:bg-[#9a806b]/20 transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "w-8 bg-[#9a806b]" : "bg-gray-600"
            }`}
            aria-label={`Go to review ${index + 1}`}
          />
        ))}
      </div>
    </div>
    </section>
  )
}

