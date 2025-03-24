"use client"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"

type QuestionType = {
  id: number
  question: string
  type: "radio" | "checkbox"
  options: string[]
}

const questions: QuestionType[] = [
  {
    id: 1,
    question: "Ne kadar süredir saç dökülmesi yaşıyorsunuz?",
    type: "radio",
    options: [
      "1 yıldan az",
      "1-3 yıl arası",
      "3-5 yıl arası",
      "5 yıldan fazla",
    ],
  },
  {
    id: 2,
    question: "Hangi bölge(ler) en çok etkilendi?",
    type: "checkbox",
    options: [
      "Ön / Alın çizgisi",
      "Tepe (Crown) bölgesi",
      "Yanlar / Şakaklar",
      "Tüm saçlı deri",
    ],
  },
  {
    id: 3,
    question: "Daha önce saç ekimi veya tedavi denediniz mi?",
    type: "radio",
    options: [
      "Hayır, ilk kez deneyeceğim",
      "Evet, ilaç tedavisi kullandım",
      "Evet, kozmetik ürünler kullandım",
      "Evet, saç ekimi yaptırdım",
    ],
  },
]

export default function ElegantMultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0)
  // Her adımın cevaplarını saklamak için
  const [answers, setAnswers] = useState<Record<number, string[]>>({})

  const totalSteps = questions.length
  const { question, options, type } = questions[currentStep]

  // Seçenek seçildiğinde (checkbox/radio farkı)
  const handleOptionChange = (option: string) => {
    setAnswers((prev) => {
      const currentAnswers = prev[currentStep] || []

      if (type === "checkbox") {
        // Checkbox: Birden fazla seçime izin ver
        if (currentAnswers.includes(option)) {
          // Seçiliyse çıkar
          return {
            ...prev,
            [currentStep]: currentAnswers.filter((item) => item !== option),
          }
        } else {
          // Seçili değilse ekle
          return {
            ...prev,
            [currentStep]: [...currentAnswers, option],
          }
        }
      } else {
        // Radio: Tek seçim
        return {
          ...prev,
          [currentStep]: [option],
        }
      }
    })
  }

  // Sonraki adıma geç
  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1)
    } else {
      // Son adımdaysak
      alert("Form tamamlandı: " + JSON.stringify(answers, null, 2))
    }
  }

  // Önceki adıma geç
  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1)
    }
  }

  // Geçerli adımın cevapları
  const selectedAnswers = answers[currentStep] || []

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
      {/* Başlık ve Açıklama */}
      <div className="max-w-2xl text-center mb-8 text-white">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 drop-shadow-md">
          Türkiye’de Saç Ekimi Analizi
        </h1>
        <p className="text-base sm:text-lg text-white/90">
          Kişisel değerlendirme formumuzu doldurun, uzman ekibimizle 
          saç dökülmenize en uygun çözümü birlikte bulalım.
        </p>
      </div>

      {/* Kart & İlerleme */}
      <div className="relative max-w-xl w-full bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
        {/* Dairesel İlerleme Göstergesi */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
          <CircularStepIndicator currentStep={currentStep} totalSteps={totalSteps} />
        </div>

        {/* Soru ve Seçenekler */}
        <div className="mt-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 text-center">
            {question}
          </h2>

          <div className="flex flex-col space-y-3 mb-6">
            {options.map((opt) => {
              const isSelected = selectedAnswers.includes(opt)
              return (
                <label
                  key={opt}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-md border cursor-pointer transition
                    ${
                      isSelected
                        ? "border-purple-500 bg-purple-50"
                        : "border-gray-300 hover:border-purple-300"
                    }`}
                >
                  <input
                    type={type === "checkbox" ? "checkbox" : "radio"}
                    checked={isSelected}
                    onChange={() => handleOptionChange(opt)}
                    className="form-checkbox h-5 w-5 text-purple-500 focus:ring-purple-400 transition"
                  />
                  <span className="text-gray-700">{opt}</span>
                </label>
              )
            })}
          </div>

          {/* Butonlar */}
          <div className="flex justify-between items-center">
            {currentStep > 0 ? (
              <button
                onClick={handlePrev}
                className="px-5 py-2 rounded-md bg-gray-200 text-gray-600 hover:bg-gray-300 transition"
              >
                Geri
              </button>
            ) : (
              <div />
            )}

            <button
              onClick={handleNext}
              className="px-6 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700 transition"
            >
              {currentStep === totalSteps - 1 ? "Bitir" : "İleri"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// --- Dairesel (Radial) Adım Göstergesi ---
type CircularProps = {
  currentStep: number
  totalSteps: number
}

function CircularStepIndicator({ currentStep, totalSteps }: CircularProps) {
  // Daire çapı, çizgi kalınlığı
  const radius = 40
  const strokeWidth = 6
  const circumference = 2 * Math.PI * radius
  const progress = ((currentStep + 1) / totalSteps) * 100
  const offset = circumference - (progress / 100) * circumference

  return (
    <div className="relative w-24 h-24">
      <svg className="w-full h-full transform -rotate-90">
        {/* Arka plan çemberi */}
        <circle
          className="text-gray-200"
          strokeWidth={strokeWidth}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="50%"
          cy="50%"
        />
        {/* İlerleme çemberi */}
        <circle
          className="text-purple-500 transition-all duration-300 ease-out"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="50%"
          cy="50%"
          style={{ strokeDasharray: circumference, strokeDashoffset: offset }}
        />
      </svg>
      {/* Ortadaki yazı */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {currentStep === totalSteps - 1 ? (
          <CheckCircle2 className="text-purple-500 w-10 h-10" />
        ) : (
          <span className="text-sm text-gray-700 font-bold">
            {currentStep + 1} / {totalSteps}
          </span>
        )}
      </div>
    </div>
  )
}
