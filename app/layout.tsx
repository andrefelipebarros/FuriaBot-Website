import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FURIA CS:GO Bots | Telegram & Discord",
  description:
    "Stay connected with FURIA Esports' CS:GO program through our Telegram and Discord bots. Get real-time updates, match notifications, and player stats.",
  keywords: "FURIA, CS:GO, esports, Telegram bot, Discord bot, Counter-Strike, gaming",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
