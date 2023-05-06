import { SelectedSection } from "@/utils/types"
import AnchorLink from "react-anchor-link-smooth-scroll"

type LinkProps = {
  page: string
  selectedSection: SelectedSection
  setSelectedSection: (value: SelectedSection) => void
}

const Link = ({ page, selectedSection, setSelectedSection }: LinkProps) => {
  const lowerCasePage = page
    .toLowerCase()
    .replace(/ /g, "") as typeof selectedSection

  return (
    <AnchorLink
      className={`${selectedSection === lowerCasePage ? "text-primary-500" : ""}
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
