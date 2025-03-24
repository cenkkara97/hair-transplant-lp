"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface WhatsAppContextType {
  name: string
  email: string
  phone: string
  hairLossLevel: string
  setName: (name: string) => void
  setEmail: (email: string) => void
  setPhone: (phone: string) => void
  setHairLossLevel: (level: string) => void
  redirectToWhatsApp: () => void
}

const WhatsAppContext = createContext<WhatsAppContextType | undefined>(undefined)

export const WhatsAppProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [hairLossLevel, setHairLossLevel] = useState("")

  const redirectToWhatsApp = () => {
    const whatsappNumber = "+905555555555" // Replace with your actual WhatsApp number
    const text = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AHair Loss Level: ${hairLossLevel}`
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank")
  }

  return (
    <WhatsAppContext.Provider
      value={{
        name,
        email,
        phone,
        hairLossLevel,
        setName,
        setEmail,
        setPhone,
        setHairLossLevel,
        redirectToWhatsApp,
      }}
    >
      {children}
    </WhatsAppContext.Provider>
  )
}

export const useWhatsApp = () => {
  const context = useContext(WhatsAppContext)
  if (context === undefined) {
    throw new Error("useWhatsApp must be used within a WhatsAppProvider")
  }
  return context
}

