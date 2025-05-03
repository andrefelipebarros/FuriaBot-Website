"use client"

import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { locales } from "@/middleware"
import { setCookie } from "cookies-next"

const languageNames: Record<string, string> = {
  en: "English",
  "pt-BR": "Português",
}

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = (locale: string) => {
    // Set cookie for the middleware
    setCookie("NEXT_LOCALE", locale, { maxAge: 60 * 60 * 24 * 365 })

    // Get the path without the locale prefix
    const pathWithoutLocale = pathname.replace(/^\/[^/]+/, "")

    // Navigate to the same page with the new locale
    router.push(`/${locale}${pathWithoutLocale}`)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-black hover:text-gray-600 transition-colors"
      >
        <span>{languageNames[currentLang]}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <ul className="py-1">
            {locales.map((locale) => (
              <li key={locale}>
                <button
                  onClick={() => switchLanguage(locale)}
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    currentLang === locale ? "bg-gray-100 font-medium" : "hover:bg-gray-50"
                  }`}
                >
                  {languageNames[locale]}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
