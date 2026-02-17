import PropTypes from "prop-types"
import {
  CheckTaskIcon,
  LoaderIconTrash,
  NotStartedIcon,
  DetailsIcon,
  TrashIcon,
} from "../assets/icons"

import Button from "./Button"
import { toast } from "sonner"
import { Link } from "react-router-dom"
import { useDeleteTasks } from "../hooks/data/use-delete-tasks"
import { useUpdateTask } from "../hooks/data/use-update-tasks"

const TaskIem = ({ task }) => {
  const { mutate: deleteTask, isPending } = useDeleteTasks(task.id)

  const { mutate: updateTask } = useUpdateTask(task.id)

  const getNewStatus = () => {
    if (task.status === "not_started") {
      return "in_progress"
    }
    if (task.status === "in_progress") {
      return "done"
    }
    return "not_started"
  }

  const handleCheckboxClick = () => {
    updateTask(
      { status: getNewStatus() },
      {
        onSuccess: () => {
          toast.success("Tarefa atualizada com sucesso!")
        },
        onError: () => {
          toast.error("Ocorreu um erro ao atualizar a tarefa.")
        },
      }
    )
  }

  const handleDeleteClick = async () => {
    deleteTask(undefined, {
      onSuccess: () => {
        toast.success("Tarefa deletada com sucesso!")
      },
      onError: () => {
        toast.error("Ocorreu um erro ao deletar a tarefa.")
      },
    })
  }

  const getStatusClass = () => {
    if (task.status == "done") {
      return "bg-[#00ADB5]/10 text-[#00ADB5]"
    }

    if (task.status == "in_progress") {
      return "bg-[#FFAA04]/10 text-[#FFAA04]"
    }

    if (task.status == "not_started") {
      return "bg-[#35383E]/5 text-[#35383E]"
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
            onChange={handleCheckboxClick}
          />
          {task.status === "done" && <CheckTaskIcon />}
          {task.status === "in_progress" && (
            <LoaderIconTrash className="animate-spin" />
          )}
          {task.status === "not_started" && <NotStartedIcon />}
        </label>

        {task.title}
      </div>

      <div className="flex items-center gap-2">
        <Button color="ghost" onclick={handleDeleteClick} disabled={isPending}>
          {isPending ? (
            <LoaderIconTrash className="text-brand-text-gray animate-spin" />
          ) : (
            <TrashIcon className="text-[#9A9C9F]" />
          )}
        </Button>

        <Link to={`/task/${task.id}`} className="transition hover:opacity-75">
          <DetailsIcon />
        </Link>
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
