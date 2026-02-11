import InputLabel from "./InputLabel"
import InputErrorMessage from "./InputErrorMessage"
import PropTypes from "prop-types"
import React, { forwardRef } from "react"

const Input = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <div className="flex flex-col space-y-1 text-left">
      <InputLabel htmlFor={rest.id}>{label}</InputLabel>
      <input
        ref={ref} // Passando o ref para o input
        {...rest}
        className="rounded-lg border border-solid border-[#ECECEC] px-4 py-3 placeholder-[#9A9C9F] placeholder:text-sm focus:ring-2 focus:ring-[#00ADB5] focus:outline-none"
      />
      {error && <InputErrorMessage>{error}</InputErrorMessage>}
    </div>
  )
})

Input.protoType = {
  label: PropTypes.string.isRequired,
  InputErrorMessage: PropTypes.string,
  id: PropTypes.string.isRequired,
}

export default Input
