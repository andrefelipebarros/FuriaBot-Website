import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import { getDictionary } from "@/lib/dictionaries"
import { locales } from "@/middleware"

const inter = Inter({ subsets: ["latin"] })

// Await params in generateMetadata
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    keywords: dict.metadata.keywords,
  }
}

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

// RootLayout now awaits params
export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  return (
    <html lang={lang} className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}