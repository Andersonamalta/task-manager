import PropTypes from "prop-types"

const InputErrorMessage = ({ children }) => {
  return <span className="text-left text-xs text-red-500">{children}</span>
}

InputErrorMessage.prototype = {
  children: PropTypes.string.isRequired,
}

export default InputErrorMessage
