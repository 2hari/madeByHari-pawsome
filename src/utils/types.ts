import { StaticImageData } from "next/image"

export enum SelectedSection {
  Home = 'home',
  About = "about",
  Service = "service",
  Contact = "contact",
}

export type Pet = {
  id: number
  category: string
  name: string
  image: string
}