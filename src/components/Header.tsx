import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { HiMenu, HiX } from "react-icons/hi"
import { SelectedSection } from "@/utils/types"
import NavLink from "./NavLink"

type HeaderProps = {
  isTopOfPage: boolean
  selectedSection: SelectedSection
  setSelectedSection: (value: SelectedSection) => void
}

const Header = ({
  isTopOfPage,
  selectedSection,
  setSelectedSection,
}: HeaderProps) => {
  const [showSidebar, setShowSidebar] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!sidebarRef.current!.contains(e.target as Node)) {
        setShowSidebar(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => {
      document.removeEventListener("mousedown", handler)
    }
  })

  const navbarBackground = isTopOfPage ? "" : "bg-primary drop-shadow"
  return (
    <header className={`${navbarBackground} z-40 fixed py-3  w-full `}>
      <div
        className={`z-40 container mx-auto flex  gap-y-6 h-full justify-between items-center relative`}
      >
        {/* logo */}
        <a href="#">
          <Image
            src={isTopOfPage ? "/img/header/logo.svg" : "/img/footer/logo2.svg"}
            height={30}
            width={160}
            alt="pawsome logo"
          />
        </a>
        {/* nav */}
        <nav className={`hidden text-xl lg:flex gap-x-4 lg:gap-x-12`}>
          <NavLink
            page="Services"
            showSidebar={showSidebar}
            isTopOfPage={isTopOfPage}
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
          />
          <NavLink
            page="About"
            showSidebar={showSidebar}
            isTopOfPage={isTopOfPage}
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
          />
          <NavLink
            page="Contact"
            showSidebar={showSidebar}
            isTopOfPage={isTopOfPage}
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
          />
        </nav>
        {/* button */}
        <div className="flex gap-4">
          <button
            className={`btn btn-primary ${
              isTopOfPage ? "" : "btn-outline"
            } min-[1180px]:btn-outline`}
          >
            Sign up
          </button>
          <button
            onClick={() => setShowSidebar(true)}
            className={`lg:hidden ${isTopOfPage ? "" : "text-white"}`}
          >
            <HiMenu className="h-10 w-10" />
          </button>
        </div>
      </div>
      <div
        className={`z-50 fixed top-0 ${
          showSidebar ? "right-0" : "-right-96"
        } lg:hidden h-screen w-3/5  sm:w-72 bg-primary shadow-2xl ease-out delay-150 duration-200`}
        ref={sidebarRef}
      >
        <nav role="admin" className="px-6 py-4">
          <div className="relative overflow-y-auto overflow-x-hidden h-[95vh] flex flex-col items-end">
            <button
              className="mb-16 text-white"
              onClick={() => setShowSidebar(false)}
            >
              <HiX className="h-10 w-10" />
            </button>
            <ul className="space-y-8 text-center w-full">
              <li>
                <NavLink
                  page="Services"
                  showSidebar={showSidebar}
                  isTopOfPage={isTopOfPage}
                  selectedSection={selectedSection}
                  setSelectedSection={setSelectedSection}
                />
              </li>
              <li>
                <NavLink
                  page="About"
                  showSidebar={showSidebar}
                  isTopOfPage={isTopOfPage}
                  selectedSection={selectedSection}
                  setSelectedSection={setSelectedSection}
                />
              </li>
              <li>
                <NavLink
                  page="Contact"
                  showSidebar={showSidebar}
                  isTopOfPage={isTopOfPage}
                  selectedSection={selectedSection}
                  setSelectedSection={setSelectedSection}
                />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
