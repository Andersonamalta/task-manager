import InputLabel from "./InputLabel"
import InputErrorMessage from "./InputErrorMessage"
import PropTypes from "prop-types"
import React, { forwardRef } from "react"

const TimeSelect = forwardRef((props, ref) => {
  return (
    <div className="flex flex-col gap-1 text-left">
      <InputLabel htmlFor="time">Horário</InputLabel>
      <select
        id="time"
        ref={ref} // Passando o ref para o select
        className="appearance-none rounded-lg border border-solid border-[#ECECEC] px-4 py-3 placeholder-[#9A9C9F] placeholder:text-sm focus:ring-2 focus:ring-[#00ADB5] focus:outline-none"
        {...props}
      >
        <option value="Manhã">Manhã</option>
        <option value="Tarde">Tarde</option>
        <option value="Noite">Noite</option>
      </select>
      {props.error && (
        <InputErrorMessage>{props.error.message}</InputErrorMessage>
      )}
    </div>
  )
})

TimeSelect.prototype = {
  InputErrorMessage: PropTypes.string,
}

export default TimeSelect
