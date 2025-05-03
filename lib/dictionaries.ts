import "server-only"

const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  "pt-BR": () => import("@/dictionaries/pt-BR.json").then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
  // Default to 'en' if the locale is not supported
  const validLocale = locale in dictionaries ? locale : "en"
  return dictionaries[validLocale as keyof typeof dictionaries]()
}
