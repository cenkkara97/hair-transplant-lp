"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, Check, ChevronRight } from "lucide-react"

interface FormStep {
  id: number
  title: string
  question: string
  options: Array<{
    value: string
    label: string
    icon?: React.ReactNode
    image?: string
  }>
}

export default function ConsultationForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [animateDirection, setAnimateDirection] = useState<"next" | "prev">("next")

  const formSteps: FormStep[] = [
    {
      id: 1,
      title: "Gender",
      question: "Please select your gender",
      options: [
        {
          value: "female",
          label: "Female",
          image: "/placeholder.svg?height=200&width=200",
        },
        {
          value: "male",
          label: "Male",
          image: "/placeholder.svg?height=200&width=200",
        },
      ],
    },
    {
      id: 2,
      title: "Hair Loss Type",
      question: "How would you describe your hair loss?",
      options: [
        {
          value: "receding",
          label: "Receding hairline",
          image: "/placeholder.svg?height=120&width=120",
        },
        {
          value: "thinning",
          label: "Thinning on the crown",
          image: "/placeholder.svg?height=120&width=120",
        },
        {
          value: "both",
          label: "Both of the above",
          image: "/placeholder.svg?height=120&width=120",
        },
        {
          value: "general",
          label: "General hair loss",
          image: "/placeholder.svg?height=120&width=120",
        },
      ],
    },
    {
      id: 3,
      title: "Duration",
      question: "How long have you been suffering from hair loss?",
      options: [
        { value: "less-than-1", label: "Less than 1 year" },
        { value: "1-3", label: "1-3 years" },
        { value: "3-5", label: "3-5 years" },
        { value: "more-than-5", label: "More than 5 years" },
      ],
    },
    {
      id: 4,
      title: "Previous Treatment",
      question: "Have you had a hair transplant before?",
      options: [
        { value: "yes", label: "Yes" },
        { value: "no", label: "No" },
      ],
    },
    {
      id: 5,
      title: "Treatment Timing",
      question: "When would you like your treatment?",
      options: [
        { value: "asap", label: "As soon as possible" },
        { value: "1-3-months", label: "Within 1-3 months" },
        { value: "3-6-months", label: "Within 3-6 months" },
        { value: "just-researching", label: "Just researching" },
      ],
    },
  ]

  const handleOptionSelect = (stepId: number, option: string) => {
    setAnswers((prev) => ({ ...prev, [stepId]: option }))

    // Auto-advance to next question after a short delay
    if (currentStep < formSteps.length) {
      setTimeout(() => {
        setAnimateDirection("next")
        setCurrentStep((prev) => prev + 1)
      }, 400)
    }
  }

  const handleNext = () => {
    if (currentStep < formSteps.length) {
      setAnimateDirection("next")
      setCurrentStep((prev) => prev + 1)
    } else {
      setIsSubmitted(true)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setAnimateDirection("prev")
      setCurrentStep((prev) => prev - 1)
    }
  }

  const currentStepData = formSteps.find((step) => step.id === currentStep)

  // Calculate progress percentage
  const progressPercentage = (currentStep / formSteps.length) * 100

  if (isSubmitted) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-[#0a1735] via-[#08122c] to-[#050e24] rounded-3xl p-10 shadow-2xl transform transition-all duration-500 animate-fade-in border border-[#9a806b]/20">
          <div className="text-center">
            <div className="w-24 h-24 bg-[#9a806b] rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
              <Check className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-4xl font-bold mb-6 text-white">Great! Thank You!</h3>
            <p className="text-white/90 mb-10 text-xl max-w-2xl mx-auto leading-relaxed">
              Your form has been successfully submitted. Our expert team will evaluate your information and contact you
              as soon as possible.
            </p>
            <button
              onClick={() => {
                setCurrentStep(1)
                setAnswers({})
                setIsSubmitted(false)
              }}
              className="px-10 py-4 bg-[#9a806b] hover:bg-[#8a7060] text-white rounded-full transition-all duration-300 font-bold text-lg hover:shadow-xl hover:scale-105 transform"
            >
              Fill out a new form
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="section-padding bg-gradient-to-b from-[#08122c] to-[#050e24] min-h-screen flex items-center">
      <div className="container-wide mx-auto">
        <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat text-white">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>

          <p className="text-white/80 max-w-3xl mx-auto text-lg">
            Answer a few questions to find a customized solution for your hair loss.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Main form container */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-[#9a806b]/20 relative z-10">
            {/* Progress bar */}
            <div className="h-1 w-full bg-white/10">
              <div
                className="h-full bg-gradient-to-r from-[#9a806b] to-[#f3e0db] transition-all duration-700 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>

            {/* Step indicators */}
            <div className="flex justify-between px-8 pt-6">
              {formSteps.map((step) => (
                <div
                  key={step.id}
                  className={`relative ${
                    step.id === currentStep ? "text-white" : step.id < currentStep ? "text-white/80" : "text-white/40"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                      step.id === currentStep
                        ? "bg-gradient-to-r from-[#9a806b] to-[#f3e0db] scale-110 shadow-lg shadow-[#9a806b]/30"
                        : step.id < currentStep
                          ? "bg-gradient-to-r from-[#9a806b] to-[#9a806b]"
                          : "bg-white/10"
                    }`}
                  >
                    {step.id < currentStep ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <span className="font-bold">{step.id}</span>
                    )}
                  </div>

                  {/* Connecting line */}
                  {step.id < formSteps.length && (
                    <div
                      className={`absolute top-5 left-10 w-[calc(100%-1.25rem)] h-0.5 ${
                        step.id < currentStep ? "bg-gradient-to-r from-[#9a806b] to-[#9a806b]" : "bg-white/10"
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>

            <div className="p-8">
              {/* Question */}
              {currentStepData && (
                <div
                  className={`transition-all duration-500 transform ${
                    animateDirection === "next" ? "animate-slide-in-right" : "animate-slide-in-left"
                  }`}
                >
                  <h3 className="text-3xl font-bold mb-8 text-center text-white">{currentStepData.question}</h3>

                  {/* Gender selection with images */}
                  {currentStep === 1 && (
                    <div className="grid grid-cols-2 gap-6">
                      {currentStepData.options.map((option) => (
                        <div
                          key={option.value}
                          onClick={() => handleOptionSelect(currentStep, option.value)}
                          className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                            answers[currentStep] === option.value
                              ? "ring-4 ring-[#9a806b] shadow-xl shadow-[#9a806b]/30"
                              : "ring-1 ring-white/20 hover:ring-white/40"
                          }`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                          {option.image && (
                            <img
                              src={option.image || "/placeholder.svg"}
                              alt={option.label}
                              className="w-full h-60 object-cover"
                            />
                          )}
                          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                            <div className="text-2xl font-bold text-white mb-2">{option.label}</div>
                            {answers[currentStep] === option.value && (
                              <div className="inline-flex items-center bg-[#9a806b] px-4 py-2 rounded-full text-white text-sm">
                                <Check className="w-4 h-4 mr-1" /> Selected
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Hair loss type with images */}
                  {currentStep === 2 && (
                    <div className="grid grid-cols-2 gap-4">
                      {currentStepData.options.map((option) => (
                        <div
                          key={option.value}
                          onClick={() => handleOptionSelect(currentStep, option.value)}
                          className={`bg-white/5 backdrop-blur-sm p-6 rounded-2xl cursor-pointer transition-all duration-300 hover:bg-white/10 border ${
                            answers[currentStep] === option.value
                              ? "border-[#9a806b] bg-[#9a806b]/10"
                              : "border-white/10 hover:border-white/30"
                          }`}
                        >
                          <div className="flex flex-col items-center text-center">
                            {option.image && (
                              <img
                                src={option.image || "/placeholder.svg"}
                                alt={option.label}
                                className="w-20 h-20 object-cover mb-4 rounded-full"
                              />
                            )}
                            <div className="text-lg font-medium text-white">{option.label}</div>
                            {answers[currentStep] === option.value && (
                              <div className="mt-3 inline-flex items-center bg-[#9a806b] px-3 py-1 rounded-full text-white text-xs">
                                <Check className="w-3 h-3 mr-1" /> Selected
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Other questions with animated cards */}
                  {currentStep > 2 && (
                    <div className="grid gap-3">
                      {currentStepData.options.map((option, index) => (
                        <div
                          key={option.value}
                          onClick={() => handleOptionSelect(currentStep, option.value)}
                          className={`p-5 rounded-xl cursor-pointer transition-all duration-300 transform hover:translate-x-2 ${
                            answers[currentStep] === option.value
                              ? "bg-gradient-to-r from-[#9a806b] to-[#f3e0db] text-[#08122c] shadow-lg shadow-[#9a806b]/30"
                              : "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/30"
                          }`}
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className="flex items-center justify-between">
                            <div className="font-medium text-lg">{option.label}</div>
                            <div
                              className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                                answers[currentStep] === option.value
                                  ? "bg-[#08122c] text-white"
                                  : "border border-white/30"
                              }`}
                            >
                              {answers[currentStep] === option.value ? (
                                <Check className="w-4 h-4" />
                              ) : (
                                <ChevronRight className="w-4 h-4 opacity-50" />
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between mt-10">
                <button
                  onClick={handlePrev}
                  disabled={currentStep === 1}
                  className={`px-6 py-3 rounded-xl flex items-center transition-all duration-300 ${
                    currentStep === 1 ? "text-white/30 cursor-not-allowed" : "text-white hover:bg-white/10"
                  }`}
                >
                  Back
                </button>
                <button
                  onClick={handleNext}
                  disabled={!answers[currentStep]}
                  className={`px-8 py-3 rounded-xl flex items-center transition-all duration-300 ${
                    !answers[currentStep]
                      ? "bg-white/10 text-white/30 cursor-not-allowed"
                      : "bg-gradient-to-r from-[#9a806b] to-[#f3e0db] text-[#08122c] hover:shadow-lg hover:shadow-[#9a806b]/30 transform hover:-translate-y-1"
                  }`}
                >
                  {currentStep === formSteps.length ? "See Results" : "Next"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>

          {/* Current step indicator */}
          <div className="mt-6 text-center text-white/60">
            <span className="text-white font-medium">{currentStep}</span> / {formSteps.length}
          </div>
        </div>
      </div>
    </div>
  )
}

