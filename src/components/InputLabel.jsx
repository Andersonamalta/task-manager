import PropTypes from "prop-types"

const InputLabel = (props) => {
  return (
    <label className="text-sm font-semibold text-[#35383E]" {...props}>
      {props.children}
    </label>
  )
}

InputLabel.prototype = {
  children: PropTypes.node.isRequired,
}

export default InputLabel
