import React, { useState } from "react"
import Image from "next/image"
import { Pet } from "@/utils/types"

const pets: Pet[] = [
  {
    id: 1,
    category: "cat",
    name: "kyba",
    image: "/img/pets/1.png",
  },
  {
    id: 2,
    category: "bird",
    name: "rotty",
    image: "/img/pets/2.png",
  },
  {
    id: 3,
    category: "fox",
    name: "fexxie",
    image: "/img/pets/3.png",
  },
  {
    id: 4,
    category: "cat",
    name: "kirra",
    image: "/img/pets/4.png",
  },
  {
    id: 5,
    category: "hamster",
    name: "dinno",
    image: "/img/pets/5.png",
  },
  {
    id: 6,
    category: "parrot",
    name: "paco",
    image: "/img/pets/6.png",
  },
  {
    id: 7,
    category: "parrot",
    name: "pavo",
    image: "/img/pets/7.png",
  },
  {
    id: 8,
    category: "cat",
    name: "ynna",
    image: "/img/pets/8.png",
  },
  {
    id: 9,
    category: "lion",
    name: "hera",
    image: "/img/pets/9.png",
  },
  {
    id: 10,
    category: "bird",
    name: "dimmy",
    image: "/img/pets/10.png",
  },
  {
    id: 11,
    category: "dog",
    name: "jasper",
    image: "/img/pets/11.png",
  },
  {
    id: 12,
    category: "hamster",
    name: "syu",
    image: "/img/pets/1.png",
  },
]

const Pets = () => {
  const [petDetails, setPetDetails] = useState(pets[10])
  const [petIndex, setPetIndex] = useState(10)

  const getPetDetails = (id: number) => {
    const pet = pets.find((pet) => {
      return pet.id === id
    })
    setPetDetails(pet!)
  }

  return (
    <section className="bg-orange w-full">
      <div className="bg-pets bg-center py-6 overflow-x-hidden max-w-[1440px] mx-auto ">
        <div className="flex flex-col lg:flex-row">
          {/* badge */}
          <div className="hidden xl:flex xl:w-[30%] xl:pl-[160px]">
            <Image
              src={"/img/pets/badge.svg"}
              width={230}
              height={227}
              alt=""
            />
          </div>

          {/* pets */}
          <div className="flex-1 flex flex-col lg:flex-row">
            {/* pet details */}
            <div className="lg:w-[30%] flex flex-col justify-center items-end pb-6 lg:py-2 mx-auto lg:mx-0">
              <div className="text-center text-white">
                <div className="text-[32px] capitalize">
                  ({petDetails.category})
                </div>
                <div className="text-[17px] uppercase mb-1">
                  {petDetails.name}
                </div>
                <div className="w-[150px] h-[150px] mx-auto lg:mx-0 border-4 border-white rounded-full">
                  <Image
                    src={petDetails.image}
                    width={150}
                    height={150}
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* pet list */}
            <div className="relative lg:w-[60%] flex-1 flex items-center">
              <div className="flex flex-wrap gap-4 justify-center lg:justify-end lg:-mr-6">
                {pets.map((pet, index) => {
                  return (
                    <div
                      onClick={() => {
                        getPetDetails(pet.id)
                        setPetIndex(index)
                      }}
                      className="cursor-pointer relative"
                      key={index}
                    >
                      {/* overlay */}
                      <div
                        className={`w-full h-full absolute rounded-full 
                          ${
                            petIndex === index
                              ? "border-2 border-white"
                              : "bg-black/40"
                          }`}
                      ></div>
                      <Image src={pet.image} width={95} height={95} alt="" />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pets
