import React from "react"
import Image from "next/image"
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
  return (
    <header className="py-6 lg:absolute lg:w-full lg:left-0 ">
      <div className="container mx-auto flex flex-col gap-y-6 lg:flex-row h-full justify-between items-center relative">
        {/* logo */}
        <a href="#">
          <Image
            src={"/img/header/logo.svg"}
            height={30}
            width={160}
            alt="pawsome logo"
          />
        </a>
        {/* nav */}
        <nav className="text-xl flex gap-x-4 lg:gap-x-12">
          <NavLink
            page="Services"
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
          />
          <NavLink
            page="About"
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
          />
          <NavLink
            page="Contact"
            selectedSection={selectedSection}
            setSelectedSection={setSelectedSection}
          />
        </nav>
        {/* button */}
        <button className="btn btn-primary min-[1180px]:btn-outline">
          Sign up
        </button>
      </div>
    </header>
  )
}

export default Header
