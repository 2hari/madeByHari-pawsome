import React from "react"
import Image from "next/image"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { motion } from "framer-motion"

import { SelectedSection } from "@/utils/types"

type Props = {
  setSelectedSection: (value: SelectedSection) => void
}

const Newsletter = ({ setSelectedSection }: Props) => {
  return (
    <section>
      <motion.div
        onViewportEnter={() => setSelectedSection(SelectedSection.Contact)}
      >
        <div className="h-[800px] flex flex-1 flex-col lg:h-[324px] lg:flex-row">
          {/* input div */}
          <div className="bg-newsletterOrange h-full bg-center bg-cover bg-no-repeat flex-1 flex flex-col justify-center items-center px-8 lg:px-0">
            <div>
              <h2 className="h2 mb-12">
                Subscribe & Get Pet <br /> Upadtenews
              </h2>
              {/* input */}
              <div className="flex relative">
                <input
                  className="bg-transparent border-b-2 placerholder:text-white text-white outline-none absolute w-full pr-12"
                  type="text"
                  placeholder="Mail"
                />
                <HiOutlineArrowNarrowRight className="absolute top-0 right-0 text-white text-3xl cursor-pointer" />
              </div>
            </div>
          </div>
          {/* image div */}
          <div className="bg-newsletterYellow h-full bg-center bg-no-repeat bg-cover flex-1 flex justify-center items-end">
            <Image
              src={"/img/newsletter/dog.png"}
              alt="dog"
              width={300}
              height={380}
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Newsletter
