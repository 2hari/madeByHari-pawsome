import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className="bg-cream w-full ">
      <div className=" min-[1180px]:bg-hero lg:bg-right  z-30 lg:bg-no-repeat min-h-[400px] lg:min-h-[805px] lg:max-w-[1440px] mx-auto overflow-hidden">
        <div className="container mx-auto flex justify-start items-center min-h-[450px] lg:h-[805px]">
          <div className="lg:max-w-[650px] text-center mx-auto lg:text-left lg:mx-0 ">
            <div className="hidden xl:flex mb-6 ml-5 relative w-full h-auto">
              <Image src={"/img/hero/pretitle-img.svg"} fill alt="" />
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h1 className="text-5xl lg:text-8xl uppercase font-bold -tracking-[0.05em] mb-10">
                A pet first <br />{" "}
                <span className="text-orange font-normal">aproach to</span>
                <br />
                wellness
              </h1>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <button className="btn btn-orange mx-auto lg:mx-0">
                Learn more
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
