"use client"

import { MessageCircle } from "lucide-react"
import { useWhatsApp } from "../context/WhatsAppContext"

const WhatsAppFloat = () => {
  const { redirectToWhatsApp } = useWhatsApp()

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button onClick={redirectToWhatsApp} className="whatsapp-float" aria-label="Chat on WhatsApp">
        <MessageCircle size={30} />
      </button>
    </div>
  )
}

export default WhatsAppFloat
