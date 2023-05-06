import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

import { SelectedSection } from "@/utils/types"

type Props = {
  setSelectedSection: (value: SelectedSection) => void
}

const Adoption = ({ setSelectedSection }: Props) => {
  return (
    <section id="About" className="bg-teal w-full">
      <motion.div
        onViewportEnter={() => setSelectedSection(SelectedSection.About)}
      >
        <div className="lgbg-adoption bg-cover bg-no-repeat min-h-[760px] py-8 flex  max-w-[1440px] mx-auto overflow-hidden">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-x-16">
            {/* image */}
            <div className="flex-1 mb-6 lg:mb-0">
              <Image
                src={"/img/adoption/img1.png"}
                width={542}
                height={560}
                alt=""
              />
            </div>
            {/* text */}
            <div className="flex-1 text-cream text-center max-w-md lg:text-left lg:max-w-none">
              <h2 className="h2 mb-6 z-40 ">
                Makin pet parenting easy for everyone
              </h2>
              <p className="mb-6 z-40 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis illo nemo fuga sit voluptatibus consequuntur
                doloribus voluptates quaerat esse nam ea odio veniam, dolores,
                laborum illum dicta iusto aspernatur quibusdam?
              </p>
              <ul className="mb-[38px] flex flex-col gap-y-4 lg:list-disc lg:pl-4">
                <li>Adoption</li>
                <li>Frozen Raw</li>
                <li>Next Day Delivery</li>
              </ul>
              <button className="btn btn-primary mx-auto lg:mx-0">
                Explore
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Adoption
