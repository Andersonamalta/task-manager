const Button = ({
  children,
  variant = "primary",
  size = "small",
  onclick,
  className,
  ...rest
}) => {
  const getVariantClass = () => {
    if (variant === "primary") {
      return "bg-[#00ADB5] text-white"
    }

    if (variant === "ghost") {
      return "bg-transparent text-[#818181]"
    }
    if (variant === "secundary") {
      return "bg-[#EEEEEE] text-[#35383E]"
    }
  }

  const getSizeClass = () => {
    if (size === "small") {
      return "py-1 text-xs"
    }

    if (size === "large") {
      return "py-2 text-sm"
    }
  }
  return (
    <button
      className={`flex items-center justify-center gap-1 rounded-md px-3 font-semibold transition hover:opacity-65 ${getVariantClass()} ${getSizeClass()} ${className}`}
      {...rest}
      onClick={onclick}
    >
      {children}
    </button>
  )
}

export default Button
