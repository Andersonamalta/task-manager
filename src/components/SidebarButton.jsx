import PropTypes from "prop-types"
import { tv } from "tailwind-variants"

const SidebarButton = ({ children, color, href }) => {
  const sidebar = tv({
    base: "flex items-center gap-2 rounded-lg px-6 py-3",
    variants: {
      color: {
        unselected: "text-[#35383E]",
        selected: "bg-[#E6F7F8] text-[#00ADB5]",
      },
    },
  })
  return (
    <a href={href} className={sidebar({ color })}>
      {children}
    </a>
  )
}

SidebarButton.prototype = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["selected", "unselected"]).isRequired,
}

export default SidebarButton
