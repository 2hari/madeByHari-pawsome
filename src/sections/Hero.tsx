import React from "react"
import Image from "next/image"

const Hero = () => {
  return (
    <section className="bg-cream w-full ">
      <div className=" min-[1180px]:bg-hero lg:bg-right  z-30 lg:bg-no-repeat min-h-[400px] lg:min-h-[805px] lg:max-w-[1440px] mx-auto overflow-hidden">
        <div className="container mx-auto flex justify-start items-center min-h-[400px] lg:h-[805px]">
          <div className="lg:max-w-[650px] text-center mx-auto lg:text-left lg:mx-0 ">
            <div className="hidden xl:flex mb-6 ml-5 relative w-full h-auto">
              <Image src={"/img/hero/pretitle-img.svg"} fill alt="" />
            </div>
            <h1 className="text-5xl lg:text-8xl uppercase font-bold -tracking-[0.05em] mb-10">
              A pet first <br />{" "}
              <span className="text-orange font-normal">aproach to</span>
              <br />
              wellness
            </h1>
            <button className="btn btn-orange mx-auto lg:mx-0">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
