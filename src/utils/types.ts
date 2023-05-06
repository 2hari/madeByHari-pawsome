import { StaticImageData } from "next/image"

export enum SelectedSection {
  Home = 'home',
  About = "about",
  Services = "services",
  Contact = "contact",
}

export type Pet = {
  id: number
  category: string
  name: string
  image: string
}