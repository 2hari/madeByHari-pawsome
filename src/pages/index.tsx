import { useState, useEffect } from "react"
import { SelectedSection } from "@/utils/types"
import Hero from "@/sections/Hero"
import Header from "@/components/Header"
import Pets from "@/sections/Pets"
import Services from "@/sections/Services"
import Adoption from "@/sections/Adoption"

export default function Home() {
  const [selectedSection, setSelectedSection] = useState<SelectedSection>(
    SelectedSection.Home
  )
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedSection(SelectedSection.Home)
      }
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <main className={``}>
      <Header
        isTopOfPage={isTopOfPage}
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
      />
      <Hero />
      <Pets />
      <Services />
      <Adoption />
    </main>
  )
}
