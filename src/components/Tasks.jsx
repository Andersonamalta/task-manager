import { toast } from "sonner"
import { useState } from "react"

import { SunIcon, CloudSunIcon, MoonIcon } from "../assets/icons"

import TaskSeparator from "./TasksSeparator"
import TaskIem from "./TaskItem"
import { useQueryClient } from "@tanstack/react-query"
import { useGetTasks } from "../hooks/data/use-get-tasks"
import Header from "./Header"
import { tasksQueryKeys } from "../keys/queries"

const Tasks = () => {
  const queryClient = useQueryClient()
  const { data: tasks } = useGetTasks()

  // Pega todas as tarefas com o time igual a morning e armazena nessa variavel
  const morningTasks = tasks?.filter((task) => task.time == "Manhã")
  const aftrnoonTasks = tasks?.filter((task) => task.time == "Tarde")
  const eveningTasks = tasks?.filter((task) => task.time == "Noite")

  const handleTaskCheckboxClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id != taskId) {
        return task
      }
      if (task.status === "not_started") {
        toast.success("Tarefa iniciada com sucesso")
        return { ...task, status: "in_progress" }
      }
      if (task.status === "in_progress") {
        toast.success("Tarefa concluida com sucesso")
        return { ...task, status: "done" }
      }
      if (task.status === "done") {
        toast.success("Tarefa reiniciada com sucesso")
        return { ...task, status: "not_started" }
      }
      return task
    })
    queryClient.setQueryData(tasksQueryKeys.getAll(), newTasks)
  }

  return (
    <div className="w-full space-y-6 px-8 py-16">
      <Header subtitle="Minhas Tarefas" title="Minhas Tarefas" />
      {/* Lista de tarefas */}
      <div className="rounded-xl bg-white p-6">
        {/* Manhã */}
        <div className="space-y-3">
          <TaskSeparator title="Manhã" icon={<SunIcon />} />
          {morningTasks?.length === 0 && (
            <p className="text-sm text-gray-500">
              Nenhuma tarefa cadastrada para o período da manhã.
            </p>
          )}
          {/* Lista todas as tarefas */}
          {morningTasks?.map((task) => (
            <TaskIem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
            />
          ))}
        </div>

        {/* Tarde */}
        <div className="my-6 space-y-3">
          <TaskSeparator title="Tarde" icon={<CloudSunIcon />} />
          {aftrnoonTasks?.length === 0 && (
            <p className="text-sm text-gray-500">
              Nenhuma tarefa cadastrada para o período da tarde.
            </p>
          )}
          {/* Lista todas as tarefas */}
          {aftrnoonTasks?.map((task) => (
            <TaskIem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
            />
          ))}
        </div>

        {/* Noite */}
        <div className="space-y-3">
          <TaskSeparator title="Noite" icon={<MoonIcon />} />
          {eveningTasks?.length === 0 && (
            <p className="text-sm text-gray-500">
              Nenhuma tarefa cadastrada para o período da noite.
            </p>
          )}
          {/* Lista todas as tarefas */}
          {eveningTasks?.map((task) => (
            <TaskIem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tasks
