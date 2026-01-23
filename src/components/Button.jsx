import { tv } from "tailwind-variants"
import PropTypes from "prop-types"

const Button = ({
  children,
  color = "primary",
  size = "small",
  onclick,
  className,
  ...rest
}) => {
  const button = tv({
    base: "flex items-center justify-center gap-1 rounded-md px-3 font-semibold transition hover:opacity-75",
    variants: {
      color: {
        primary: "bg-[#00ADB5] text-white",
        ghost: "bg-transparent text-[#818181]",
        secundary: "bg-[#EEEEEE] text-[#35383E]",
      },
      size: {
        small: "py-1 text-xs",
        large: "py-2 text-sm",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "small",
    },
  })

  /*const getVariantClass = () => {
    if (variant === "primary") {
      return "bg-[#00ADB5] text-white"
    }

    if (variant === "ghost") {
      return "bg-transparent text-[#818181]"
    }
    if (variant === "secundary") {
      return "bg-[#EEEEEE] text-[#35383E]"
    }
  }*/

  /*const getSizeClass = () => {
    if (size === "small") {
      return "py-1 text-xs"
    }

    if (size === "large") {
      return "py-2 text-sm"
    }
  }*/

  return (
    <button
      className={button({ color, size, className })}
      {...rest}
      onClick={onclick}
    >
      {children}
    </button>
  )
}

Button.PropTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["primary", "ghost", "secundary"]),
  size: PropTypes.oneOf(["small", "large"]),
  className: PropTypes.string,
}

export default Button
