import { redirect } from "next/navigation"

// Redirect from the root to the default locale
export default function Home() {
  redirect("/en")
}
