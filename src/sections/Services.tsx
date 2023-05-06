import React from "react"
import ServiceSlider from "@/components/ServiceSlider"

const Services = () => {
  return (
    <section id="services" className="bg-cream w-full">
      <div className="bg-services bg-cover bg-no-repeat bg-center min-h-[826px] py-8  max-w-[1440px] mx-auto overflow-hidden">
        <div className="container mx-auto h-[862px]">
          <h2 className="h2 mb-12">Our Service</h2>
          <ServiceSlider />
        </div>
      </div>
    </section>
  )
}

export default Services
