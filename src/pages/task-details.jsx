import { useEffect, useRef, useState } from "react"
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

const TaskDetailsPage = () => {
  const { taskId } = useParams()
  const [task, setTask] = useState()
  const navigate = useNavigate()
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm()

  const handleBackClick = () => {
    navigate(-1)
  }

  useEffect(() => {
    const fetchTask = async () => {
      const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: "GET",
      })
      const data = await response.json()
      setTask(data)
      reset(data)
    }
    fetchTask()
  }, [taskId, reset])

  const handleSaveClick = async (data) => {
    // Chamar a API para adicionar a tarefa
    const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: data.title.trim(),
        description: data.description.trim(),
        time: data.time,
      }),
    })
    if (!response.ok) {
      return toast.error("Erro ao salvar a tarefa. Por favor, tente novamente.")
    }
    const newTask = await response.json()
    setTask(newTask)
    toast.success("Tarefa salva com sucesso!")
  }

  const handleDeleteClick = async () => {
    const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
      method: "DELETE",
    })
    if (!response.ok) {
      return toast.error(
        "Erro ao deletar a tarefa. Por favor, tente novamente."
      )
    }
    toast.success("Tarefa deletada com sucesso!")
    navigate(-1)
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
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting && <LoaderIcon className="animate-spin" />}
              Salvar
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TaskDetailsPage
