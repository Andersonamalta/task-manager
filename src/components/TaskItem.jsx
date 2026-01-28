import PropTypes from "prop-types"
import {
  CheckIcon,
  LoaderIcon,
  LoaderIconTrash,
  NotStartedIcon,
  DetailsIcon,
  TrashIcon,
} from "../assets/icons"

import Button from "./Button"
import { useState } from "react"
import { toast } from "sonner"

const TaskIem = ({ task, handleCheckboxClick, onDeleteSuccess }) => {
  const [deleteIsLoading, setDeleteIsLoading] = useState(false)

  const handleDeleteClick = async () => {
    setDeleteIsLoading(true)
    const response = await fetch(`http://localhost:3000/tasks/${task.id}`, {
      method: "DELETE",
    })
    if (!response.ok) {
      setDeleteIsLoading(false)
      return toast.error(
        "Erro ao deletar a tarefa. Por favor, tente novamente."
      )
    }
    onDeleteSuccess(task.id)
    setDeleteIsLoading(false)
  }

  const getStatusClass = () => {
    if (task.status == "done") {
      return "bg-[#00ADB5]/10 text-[#00ADB5]"
    }

    if (task.status == "in_progress") {
      return "bg-[#FFAA04]/10 text-[#FFAA04]"
    }

    if (task.status == "not_started") {
      return "bg-[#35383E]/10 text-[#35383E]"
    }
  }

  return (
    <div
      className={`flex items-center justify-between gap-2 rounded-lg px-4 py-3 text-sm transition ${getStatusClass()}`}
    >
      <div className="flex items-center gap-2">
        <label
          className={`relative flex h-7 cursor-pointer items-center justify-center rounded-lg ${getStatusClass()}`}
        >
          <input
            type="checkbox"
            checked={task.status == "done"}
            className="absolute h-full w-full cursor-pointer opacity-0"
            onChange={() => {
              handleCheckboxClick(task.id)
            }}
          />
          {task.status === "done" && <CheckIcon />}
          {task.status === "in_progress" && (
            <LoaderIcon className="animate-spin" />
          )}
          {task.status === "not_started" && <NotStartedIcon />}
        </label>

        {task.title}
      </div>

      <div className="flex items-center gap-2">
        <Button
          color="ghost"
          onclick={handleDeleteClick}
          disabled={deleteIsLoading}
        >
          {deleteIsLoading ? (
            <LoaderIconTrash className="text-brand-text-gray animate-spin" />
          ) : (
            <TrashIcon className="text-[#9A9C9F]" />
          )}
        </Button>

        <a href="#" className="transition hover:opacity-75">
          <DetailsIcon />
        </a>
      </div>
    </div>
  )
}

TaskIem.prototype = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    time: PropTypes.oneOf(["Manhã", "Tarde", "Noite"]).isRequired,
    status: PropTypes.oneOf(["done", "in_progress", "not_started"]).isRequired,
  }).isRequired,
  handleCheckboxClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
}

export default TaskIem
