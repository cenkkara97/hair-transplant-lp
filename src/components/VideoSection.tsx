"use client"

import { useState, useEffect, useRef } from "react"
import { Play } from "lucide-react"

const VideoSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeVideo, setActiveVideo] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  const videos = [
    {
      id: 1,
      title: "John's Transformation Journey",
      description: "Watch John's incredible 12-month transformation after his FUE procedure.",
      thumbnail: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop",
      videoId: "dQw4w9WgXcQ",
    },
    {
      id: 2,
      title: "DHI Success Story: Mark's Experience",
      description: "Mark shares his experience with DHI technique and his amazing results.",
      thumbnail: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?q=80&w=1885&auto=format&fit=crop",
      videoId: "dQw4w9WgXcQ",
    },
    {
      id: 3,
      title: "Behind the Scenes: Hair Transplant Procedure",
      description: "See what happens during a state-of-the-art hair transplant procedure.",
      thumbnail: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1780&auto=format&fit=crop",
      videoId: "dQw4w9WgXcQ",
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

  const playVideo = () => {
    setIsPlaying(true)
  }

  return (
    <section id="video-section" className="section-padding bg-dark" ref={sectionRef}>
      <div className="container-wide mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat">
            Success <span className="text-gradient">Stories</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-gray-light max-w-3xl mx-auto">
            Watch testimonials from our patients and learn more about our premium hair transplantation procedures.
          </p>
        </div>

        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <div className="video-container">
                {!isPlaying ? (
                  <>
                    <img
                      src={videos[activeVideo].thumbnail || "/placeholder.svg"}
                      alt={videos[activeVideo].title}
                      className="absolute inset-0 w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-dark-darker/40 backdrop-blur-sm"></div>
                    <div className="play-button cursor-pointer" onClick={playVideo} aria-label="Play video">
                      <Play size={30} className="text-white ml-2" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark-darker to-transparent">
                      <h3 className="text-xl font-bold text-white mb-2">{videos[activeVideo].title}</h3>
                      <p className="text-gray-light">{videos[activeVideo].description}</p>
                    </div>
                  </>
                ) : (
                  <iframe
                    src={`https://www.youtube.com/embed/${videos[activeVideo].videoId}?autoplay=1`}
                    title={videos[activeVideo].title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="glass-card p-6 mb-6">
                <h3 className="text-xl font-bold mb-4 text-light">More Success Stories</h3>

                <div className="space-y-4">
                  {videos.map((video, index) => (
                    <div
                      key={video.id}
                      className={`flex gap-4 p-3 rounded-lg cursor-pointer transition-all ${
                        activeVideo === index ? "bg-primary/20 border border-primary" : "hover:bg-dark-darker"
                      }`}
                      onClick={() => {
                        setActiveVideo(index)
                        setIsPlaying(false)
                      }}
                    >
                      <div className="relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden">
                        <img
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-dark-darker/40">
                          <Play size={16} className="text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-light font-medium text-sm">{video.title}</h4>
                        <p className="text-gray-light text-xs mt-1 line-clamp-2">{video.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => document.getElementById("consultation-form")?.scrollIntoView({ behavior: "smooth" })}
                  className="w-full bg-gradient-primary text-white py-3 rounded-xl font-medium hover:shadow-glow transition-all mt-6 btn-3d"
                >
                  Get Your Free Assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoSection

