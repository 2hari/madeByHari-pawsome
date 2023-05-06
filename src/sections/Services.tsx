import React from "react"
import { motion } from "framer-motion"

import ServiceSlider from "@/components/ServiceSlider"
import { SelectedSection } from "@/utils/types"

type Props = {
  setSelectedSection: (value: SelectedSection) => void
}

const Services = ({ setSelectedSection }: Props) => {
  return (
    <section id="Services" className="bg-cream w-full">
      <motion.div
        onViewportEnter={() => setSelectedSection(SelectedSection.Services)}
      >
        <div className="bg-services bg-cover bg-no-repeat bg-center min-h-[826px] py-8  max-w-[1440px] mx-auto overflow-hidden">
          <div className="container mx-auto h-[862px]">
            <h2 className="h2 mb-12">Our Service</h2>
            <ServiceSlider />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Services
