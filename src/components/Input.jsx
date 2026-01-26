import InputLabel from "./InputLabel"
import InputErrorMessage from "./InputErrorMessage"
import PropTypes from "prop-types"

const Input = ({ label, error, ...rest }) => {
  return (
    <div className="flex flex-col space-y-1 text-left">
      <InputLabel htmlFor={rest.id}>{label}</InputLabel>
      <input
        {...rest}
        className="rounded-lg border border-solid border-[#ECECEC] px-4 py-3 placeholder-[#9A9C9F] placeholder:text-sm focus:ring-2 focus:ring-[#00ADB5] focus:outline-none"
      />
      {error && <InputErrorMessage>{error.message}</InputErrorMessage>}
    </div>
  )
}

Input.prototype = {
  label: PropTypes.string.isRequired,
  InputErrorMessage: PropTypes.string,
  id: PropTypes.string.isRequired,
}

export default Input
