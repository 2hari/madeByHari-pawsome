import { SelectedSection } from "@/utils/types"
import AnchorLink from "react-anchor-link-smooth-scroll"

type LinkProps = {
  page: string
  isTopOfPage: boolean
  showSidebar: boolean
  selectedSection: SelectedSection
  setSelectedSection: (value: SelectedSection) => void
}

const Link = ({
  page,
  isTopOfPage,
  selectedSection,
  setSelectedSection,
  showSidebar,
}: LinkProps) => {
  const lowerCasePage = page
    .toLowerCase()
    .replace(/ /g, "") as typeof selectedSection

  return (
    <AnchorLink
      className={` ${
        selectedSection === lowerCasePage
          ? "text-orange"
          : isTopOfPage
          ? showSidebar
            ? "text-white"
            : ""
          : "text-white"
      } 
        transition duration-500 hover:text-primary-300
      `}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedSection(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  )
}

export default Link
