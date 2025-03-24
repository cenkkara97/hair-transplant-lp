"use client"

import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-dark pt-16 pb-8">
      <div className="container-wide mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start items-center mb-6">
              <span className="text-2xl font-bold font-montserrat">
                <span className="text-primary">Hair</span>
                <span className="text-light">Turkey</span>
              </span>
            </div>
            <p className="text-gray-light mb-6 text-sm">
              Turkey's premier hair transplant service for European patients. Premium care at affordable prices.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-dark-darker flex items-center justify-center text-gray-light hover:bg-primary hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-dark-darker flex items-center justify-center text-gray-light hover:bg-primary hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-dark-darker flex items-center justify-center text-gray-light hover:bg-primary hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-6 text-light">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start justify-center md:justify-start">
                <Phone size={16} className="text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-light">+90 555 555 5555</span>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <Mail size={16} className="text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-light">info@hairturkey.com</span>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <MapPin size={16} className="text-primary mr-3 flex-shrink-0 mt-1" />
                <span className="text-gray-light">Bağdat Caddesi, Kadıköy, Istanbul</span>
              </li>
            </ul>

            <div className="mt-6 pt-6 border-t border-gray-dark">
              <div className="flex items-center justify-center md:justify-start space-x-2">
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
              <p className="text-center md:text-left text-xs text-gray-light mt-2">Serving patients across Europe</p>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-lg font-bold mb-6 text-light">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <button
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="text-gray-light hover:text-primary transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => document.getElementById("before-after")?.scrollIntoView({ behavior: "smooth" })}
                className="text-gray-light hover:text-primary transition-colors text-left"
              >
                Results
              </button>
              <button
                onClick={() => document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })}
                className="text-gray-light hover:text-primary transition-colors text-left"
              >
                Testimonials
              </button>
              <button
                onClick={() => document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" })}
                className="text-gray-light hover:text-primary transition-colors text-left"
              >
                Packages
              </button>
              <button
                onClick={() => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" })}
                className="text-gray-light hover:text-primary transition-colors text-left"
              >
                FAQ
              </button>
              <a href="tel:+905555555555" className="text-gray-light hover:text-primary transition-colors text-left">
                Contact
              </a>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-dark">
              <h5 className="text-sm font-semibold text-light mb-2">Certifications</h5>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <img
                  src="https://www.freepnglogos.com/uploads/iso-logo-png/international-organization-standardization-iso-logo-3.png"
                  alt="ISO Certification"
                  className="h-10"
                />
                <img
                  src="https://www.freepnglogos.com/uploads/jci-logo-png/jci-jci-accreditation-joint-commission-international-12.png"
                  alt="JCI Accreditation"
                  className="h-10"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-dark pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-light text-xs mb-4 md:mb-0 text-center md:text-left">
              &copy; {new Date().getFullYear()} HairTurkey. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-light hover:text-primary text-xs transition-colors">
                Privacy
              </a>
              <a href="#" className="text-gray-light hover:text-primary text-xs transition-colors">
                Terms
              </a>
              <a href="#" className="text-gray-light hover:text-primary text-xs transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

