"use client"

import { Suspense, lazy, useState, useEffect } from "react"
import { WhatsAppProvider } from "./context/WhatsAppContext"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Loading from "./components/Loading"
import WhatsAppFloat from "./components/WhatsAppFloat"

// Lazy loaded components for better performance
const About = lazy(() => import("./components/About"))
const BeforeAfter = lazy(() => import("./components/BeforeAfter"))
const Testimonials = lazy(() => import("./components/Testimonials"))
const Journey = lazy(() => import("./components/Journey"))
const Packages = lazy(() => import("./components/Packages"))
const FAQ = lazy(() => import("./components/FAQ"))
const Footer = lazy(() => import("./components/Footer"))
const CallToAction = lazy(() => import("./components/CallToAction"))

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate faster initial loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500) // Reduced from 1000ms to 500ms

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="fast-loading">
        <div className="loading-spinner"></div>
        <p className="mt-4 text-primary-light">Preparing your experience...</p>
      </div>
    )
  }

  return (
    <WhatsAppProvider>
      <div className="font-poppins bg-dark text-gray-800">
        <Navbar />
        <Hero />
        <Suspense
          fallback={
            <div className="py-4">
              <Loading />
            </div>
          }
        >
          <About />
        </Suspense>
        <Suspense
          fallback={
            <div className="py-4">
              <Loading />
            </div>
          }
        >
          <BeforeAfter />
        </Suspense>
        <Suspense
          fallback={
            <div className="py-4">
              <Loading />
            </div>
          }
        >
          <Testimonials />
        </Suspense>
        <Suspense
          fallback={
            <div className="py-4">
              <Loading />
            </div>
          }
        >
          <Journey />
        </Suspense>
        <Suspense
          fallback={
            <div className="py-4">
              <Loading />
            </div>
          }
        >
          <Packages />
        </Suspense>
        <Suspense
          fallback={
            <div className="py-4">
              <Loading />
            </div>
          }
        >
          <CallToAction />
        </Suspense>
        <Suspense
          fallback={
            <div className="py-4">
              <Loading />
            </div>
          }
        >
          <FAQ />
        </Suspense>
        <Suspense
          fallback={
            <div className="py-4">
              <Loading />
            </div>
          }
        >
          <Footer />
        </Suspense>
        <WhatsAppFloat />
      </div>
    </WhatsAppProvider>
  )
}

export default App

