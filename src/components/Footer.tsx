import React from "react"
import Link from "next/link"
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs"

const Footer = () => {
  return (
    <footer className="bg-primary w-full">
      <div className="bg-footer bg-cover bg-center bg-no-repeat min-h-[263px] flex items-center py-8 max-w-[1440px] mx-auto overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row justify-between">
            {/* Logo */}
            <div className="flex-1 text-orange text-4xl text-center lg:text-left flex items-center justify-center lg:justify-start mb-6">
              Pet First
            </div>

            <div className="text-white flex-1">
              {/* Links */}
              <ul className="flex flex-col gap-y-6 items-center lg:flex-row lg:gap-x-4 text-base font-semibold mb-8">
                <li>
                  <Link href="#Service">Service</Link>
                </li>
                <li>
                  <Link href="#About">About</Link>
                </li>
                <li>
                  <Link href="#Contact">Contact</Link>
                </li>
              </ul>
              {/* socials */}
              <div className="flex justify-center lg:justify-start">
                <div className="mr-6">Follow</div>
                <ul className="flex gap-x-4 ">
                  <li>
                    <a href="#">
                      <BsFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <BsInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <BsTwitter />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
