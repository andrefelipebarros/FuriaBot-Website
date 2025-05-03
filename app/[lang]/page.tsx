import Navbar from "../components/Navbar"
import Image from "next/image"
import Link from "next/link"
import { TextIcon as Telegram, MessageSquare, ArrowRight } from "lucide-react"
import { getDictionary } from "@/lib/dictionaries"

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const dict = await getDictionary(lang)

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <Navbar lang={lang} dict={dict} />

      <main className="flex-grow">
        {/* Hero Section with FURIA icon in the middle and phones on the right */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left side content */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{dict.hero.title}</h1>
                <p className="text-xl text-gray-700 mb-8">{dict.hero.description}</p>
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    href="https://t.me/FuriaEsports_bot"
                    target="_blank"
                    className="bg-black hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    <Telegram size={20} />
                    {dict.hero.telegramButton}
                  </Link>
                  <Link
                    href="https://discord.com/oauth2/authorize?client_id=1368187160427102330&permissions=8&integration_type=0&scope=bot"
                    target="_blank"
                    className="bg-black hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageSquare size={20} />
                    {dict.hero.discordButton}
                  </Link>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-sm text-gray-700">{dict.hero.testimonial.quote}</p>
                  <p className="text-sm font-bold mt-2">{dict.hero.testimonial.author}</p>
                </div>
              </div>

              {/* Right side with phone mockups */}
              <div className="relative h-[600px]">
                {/* Phone 1 - Telegram */}
                <div className="absolute left-0 top-0 md:left-10 md:top-10 w-[220px] h-[440px] bg-black rounded-[36px] p-3 shadow-xl transform rotate-[-5deg]">
                  <div className="bg-white h-full w-full rounded-[28px] overflow-hidden">
                    <Image
                      src="/furia-bot-interface.png"
                      alt="Telegram Bot Preview"
                      width={400}
                      height={800}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>

                {/* Phone 2 - Discord */}
                <div className="absolute right-0 bottom-0 md:right-10 md:bottom-10 w-[220px] h-[440px] bg-black rounded-[36px] p-3 shadow-xl transform rotate-[5deg]">
                  <div className="bg-white h-full w-full rounded-[28px] overflow-hidden">
                    <Image
                      src="/furia-discord-stats.png"
                      alt="Discord Bot Preview"
                      width={400}
                      height={800}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{dict.features.title}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="bg-black text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">{dict.features.matchAlerts.title}</h3>
                <p className="text-gray-700">{dict.features.matchAlerts.description}</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="bg-black text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">{dict.features.playerStats.title}</h3>
                <p className="text-gray-700">{dict.features.playerStats.description}</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="bg-black text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">{dict.features.liveResults.title}</h3>
                <p className="text-gray-700">{dict.features.liveResults.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section id="platforms" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{dict.platforms.title}</h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Telegram */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-[#0088cc] rounded-full p-3">
                    <Telegram size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{dict.platforms.telegram.title}</h3>
                </div>
                <p className="text-gray-700 mb-6">{dict.platforms.telegram.description}</p>
                <ul className="space-y-3 mb-6">
                  {dict.platforms.telegram.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M20 6L9 17L4 12"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="https://t.me/FuriaEsports_bot"
                  target="_blank"
                  className="bg-black hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg inline-flex items-center gap-2 transition-colors"
                >
                  {dict.platforms.telegram.button}
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Discord */}
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-[#5865F2] rounded-full p-3">
                    <MessageSquare size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{dict.platforms.discord.title}</h3>
                </div>
                <p className="text-gray-700 mb-6">{dict.platforms.discord.description}</p>
                <ul className="space-y-3 mb-6">
                  {dict.platforms.discord.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M20 6L9 17L4 12"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="https://discord.com/oauth2/authorize?client_id=1368187160427102330&permissions=8&integration_type=0&scope=bot"
                  target="_blank"
                  className="bg-black hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg inline-flex items-center gap-2 transition-colors"
                >
                  {dict.platforms.discord.button}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{dict.about.title}</h2>

            <div className="max-w-3xl mx-auto">
              {dict.about.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-700 mb-6">
                  {paragraph}
                </p>
              ))}

              <div className="flex justify-center">
                <Link
                  href="#"
                  className="bg-black hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg inline-flex items-center gap-2 transition-colors"
                >
                  {dict.about.button}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{dict.cta.title}</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">{dict.cta.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://t.me/FuriaEsports_bot"
                target="_blank"
                className="bg-black hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <Telegram size={20} />
                {dict.cta.telegramButton}
              </Link>
              <Link
                href="https://discord.com/oauth2/authorize?client_id=1368187160427102330&permissions=8&integration_type=0&scope=bot"
                target="_blank"
                className="bg-black hover:bg-gray-800 text-white font-medium py-3 px-8 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare size={20} />
                {dict.cta.discordButton}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 py-8 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Image
                src="/stylized-furia-logo.png"
                alt="FURIA Esports Logo"
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="font-bold">FURIA CS:GO Bot</span>
            </div>
            <div className="text-gray-600 text-sm">{dict.footer.disclaimer}</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
