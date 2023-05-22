import { useState, useEffect } from "react"
import Head from "next/head"

import { SelectedSection } from "@/utils/types"
import Hero from "@/sections/Hero"
import Header from "@/components/Header"
import Pets from "@/sections/Pets"
import Services from "@/sections/Services"
import Adoption from "@/sections/Adoption"
import Newsletter from "@/sections/Newsletter"
import Footer from "@/components/Footer"
import Hari from "@/components/Hari"

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
  console.log(selectedSection)
  return (
    <>
      <Head>
        <title>Pawesome | Hari-devign</title>
        <meta name="description" content="Figma to Next-tailwind UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={``}>
        <Header
          isTopOfPage={isTopOfPage}
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
        />
        <Hero />
        <Pets />
        <Services setSelectedSection={setSelectedSection} />
        <Adoption setSelectedSection={setSelectedSection} />
        <Newsletter setSelectedSection={setSelectedSection} />
        <Footer />
        <Hari />
      </main>
    </>
  )
}
