import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "@/components/language-switcher"

interface NavbarProps {
  lang: string;
  dict: {
    navigation: {
      features: string;
      platforms: string;
      about: string;
    };
  };
}

export default function Navbar({ lang, dict }: NavbarProps) {
  return (
    <header className="border-b border-gray-200 py-4">
      <div className="container mx-auto px-4 flex items-center">
        {/* LEFT */}
        <div className="flex-1 flex items-center space-x-2">
          <Image
            src="/stylized-furia-logo.png"
            alt="FURIA Esports Logo"
            width={50}
            height={50}
          />
          <Link href={`/${lang}`} className="text-black font-bold text-xl">
            CS:GO Bot
          </Link>
        </div>

        {/* CENTER */}
        <div className="flex-1 flex justify-center">
          <Image
            src="https://furiagg.fbitsstatic.net/sf/img/logo-furia.svg?theme=main&v=202503171541"
            alt="FURIA Esports Logo"
            width={70}
            height={70}
          />
        </div>

        {/* RIGHT */}
        <div className="flex-1 flex justify-end items-center gap-6">
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href={`/${lang}#features`}
              className="text-black hover:text-gray-600 transition-colors"
            >
              {dict.navigation.features}
            </Link>
            <Link
              href={`/${lang}#platforms`}
              className="text-black hover:text-gray-600 transition-colors"
            >
              {dict.navigation.platforms}
            </Link>
            <Link
              href={`/${lang}#about`}
              className="text-black hover:text-gray-600 transition-colors"
            >
              {dict.navigation.about}
            </Link>
          </nav>
          <LanguageSwitcher currentLang={lang} />
        </div>
      </div>
    </header>
  );
}
