import PropTypes from "prop-types"

const TaskSeparator = ({ title, icon }) => {
  return (
    <div className="flex gap-2 border-b border-solid border-[#F4F4F5] pb-1">
      {icon}
      <p className="text-sm text-[#9A9C9F]">{title}</p>
    </div>
  )
}

TaskSeparator.prototype = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
}

export default TaskSeparator
