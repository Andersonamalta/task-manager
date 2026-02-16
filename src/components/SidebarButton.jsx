import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"
import { tv } from "tailwind-variants"

const SidebarButton = ({ children, to }) => {
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
    <NavLink
      to={to}
      className={({ isActive }) =>
        sidebar({ color: isActive ? "selected" : "unselected" })
      }
    >
      {children}
    </NavLink>
  )
}

SidebarButton.prototype = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["selected", "unselected"]).isRequired,
}

export default SidebarButton
