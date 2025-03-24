"use client"

import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <nav
      className={`top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-dark/90 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container-wide mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold font-montserrat">
            <span className="text-primary">Hair</span>
            <span className="text-light">Turkey</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-light hover:text-primary transition-colors text-sm"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("before-after")}
            className="text-gray-light hover:text-primary transition-colors text-sm"
          >
            Results
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-gray-light hover:text-primary transition-colors text-sm"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection("packages")}
            className="text-gray-light hover:text-primary transition-colors text-sm"
          >
            Packages
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className="text-gray-light hover:text-primary transition-colors text-sm"
          >
            FAQ
          </button>
          <a
            href="tel:+905555555555"
            className="flex items-center bg-gradient-primary text-white px-4 py-2 rounded-full hover:shadow-glow transition-all text-sm ml-2"
          >
            <Phone size={14} className="mr-2" />
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-light" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark/95 backdrop-blur-md shadow-lg absolute top-full left-0 w-full py-4 animate-fade-in">
          <div className="container mx-auto flex flex-col space-y-3">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-light hover:text-primary transition-colors py-2 text-sm"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("before-after")}
              className="text-gray-light hover:text-primary transition-colors py-2 text-sm"
            >
              Results
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-light hover:text-primary transition-colors py-2 text-sm"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("packages")}
              className="text-gray-light hover:text-primary transition-colors py-2 text-sm"
            >
              Packages
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-gray-light hover:text-primary transition-colors py-2 text-sm"
            >
              FAQ
            </button>
            <a
              href="tel:+905555555555"
              className="flex items-center justify-center bg-gradient-primary text-white px-4 py-2 rounded-full hover:shadow-glow transition-all text-sm"
            >
              <Phone size={14} className="mr-2" />
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

