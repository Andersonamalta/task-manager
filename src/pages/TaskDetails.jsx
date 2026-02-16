import { Link, useNavigate, useParams } from "react-router-dom"

import Sidebar from "../components/Sidebar"
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  LoaderIcon,
  TrashIcon,
} from "../assets/icons"

import Button from "../components/Button"
import Input from "../components/Input"
import TimeSelect from "../components/TimeSelect"
import { toast } from "sonner"
import { useForm } from "react-hook-form"
import { useUpdateTask } from "../hooks/data/use-update-tasks"
import { useDeleteTasks } from "../hooks/data/use-delete-tasks"
import { useGetTask } from "../hooks/data/use-get-task"

const TaskDetailsPage = () => {
  const { taskId } = useParams()
  const navigate = useNavigate()
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm()

  const { mutate: updateTask, isPending: updateTaskIsLoading } =
    useUpdateTask(taskId)

  const { mutate: deleteTask, isPending: deleteTaskIsLoading } =
    useDeleteTasks(taskId)

  const { data: task } = useGetTask({
    taskId,
    onSuccess: (task) => reset(task),
  })

  const handleBackClick = () => {
    navigate(-1)
  }

  const handleSaveClick = async (data) => {
    updateTask(data, {
      onSuccess: () => {
        toast.success("Tarefa atualizada com sucesso!")
      },
      onError: () =>
        toast.error("Erro ao atualizar a tarefa. Por favor, tente novamente."),
    })
  }

  const handleDeleteClick = async () => {
    deleteTask(undefined, {
      onSuccess: () => {
        toast.success("Tarefa deletada com sucesso!")
        navigate(-1)
      },
      onError: () =>
        toast.error("Erro ao deletar a tarefa. Por favor, tente novamente."),
    })
  }
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full space-y-6 px-8 py-16">
        <div className="flex w-full justify-between">
          <div>
            <button
              className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-[#00ADB5]"
              onClick={handleBackClick}
            >
              <ArrowLeftIcon />
            </button>
            <div className="flex items-center gap-1 text-xs">
              <Link className="cursor-pointer text-[#818181]" to="/">
                Minhas Tarefas
              </Link>
              <ChevronRightIcon className="text-[#818181]" />
              <span className="font-semibold text-[#00ADB5]">
                {task?.title}
              </span>
            </div>
            <h1 className="mt-2 text-xl font-semibold">{task?.title}</h1>
          </div>
          <Button
            className="h-fit self-end"
            color="danger"
            onclick={handleDeleteClick}
          >
            <TrashIcon />
            Deletar tarefa
          </Button>
        </div>
        <form onSubmit={handleSubmit(handleSaveClick)} className="space-y-6">
          <div className="space-y-6 rounded-xl bg-white p-6">
            <div>
              <Input
                id="title"
                label="Título"
                {...register("title", {
                  required: "O título é obrigatório",
                  validate: (value) => {
                    if (value.trim() === "") {
                      return "O título não pode ser vazio"
                    }
                    return true
                  },
                })}
                error={errors?.title?.message}
              />
            </div>
            <div>
              <TimeSelect
                {...register("time", {
                  required: "O horário é obrigatório",
                })}
                error={errors?.time?.message}
              />
            </div>
            <div>
              <Input
                id="description"
                label="Descrição"
                {...register("description", {
                  required: "A descrição é obrigatória",
                  validate: (value) => {
                    if (value.trim() === "") {
                      return "A descrição não pode ser vazia"
                    }
                    return true
                  },
                })}
                error={errors?.description?.message}
              />
            </div>
          </div>
          <div className="flex w-full justify-end gap-3">
            <Button
              size="large"
              color="primary"
              disabled={updateTaskIsLoading || deleteTaskIsLoading}
              type="submit"
            >
              {(updateTaskIsLoading || deleteTaskIsLoading) && (
                <LoaderIcon className="animate-spin" />
              )}
              Salvar
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TaskDetailsPage
