import { toast } from "sonner"
import { useState } from "react"

import {
  TrashIcon,
  AddIcon,
  SunIcon,
  CloudSunIcon,
  MoonIcon,
} from "../assets/icons"

import TaskSeparator from "./TasksSeparator"
import Button from "./Button"
import TASKS from "../constants/tasks"
import TaskIem from "./TaskItem"
import AddTaskDialog from "./AddTaskDialog"

const Tasks = () => {
  const [tasks, setTasks] = useState(TASKS)
  const [addTaskDialogIsOpen, setAddTaskDialogIsOpen] = useState(false)

  // Pega todas as tarefas com o time igual a morning e armazena nessa variavel
  const morningTasks = tasks.filter((task) => task.time == "Manhã")
  const aftrnoonTasks = tasks.filter((task) => task.time == "Tarde")
  const eveningTasks = tasks.filter((task) => task.time == "Noite")

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

    setTasks(newTasks)
  }

  const handleTaskDeleteClick = (taskId) => {
    const newTasks = tasks.filter((task) => task.id != taskId)
    setTasks(newTasks)
    toast.success("Tarefa deletada com sucesso!")
  }

  return (
    <div className="w-full space-y-6 px-8 py-16">
      <div className="flex w-full justify-between">
        <div>
          <span className="text-xs font-semibold text-[#00ADB5]">
            Minhas Tarefas
          </span>
          <h2 className="text-xl font-semibold">Minhas Tarefas</h2>
        </div>

        <div className="flex items-center gap-2.5">
          <Button variant="ghost">
            {" "}
            Limpar tarefas <TrashIcon />
          </Button>
          <Button
            onclick={() => {
              setAddTaskDialogIsOpen(true)
            }}
          >
            {" "}
            Nova tarefa <AddIcon />
          </Button>
          <AddTaskDialog
            handleClose={() => setAddTaskDialogIsOpen(false)}
            isOpen={addTaskDialogIsOpen}
          />
        </div>
      </div>

      {/* Lista de tarefas */}

      <div className="rounded-xl bg-white p-6">
        {/* Manhã */}
        <div className="space-y-3">
          <TaskSeparator title="Manhã" icon={<SunIcon />} />

          {/* Lista todas as tarefas */}
          {morningTasks.map((task) => (
            <TaskIem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
              handleDeleteClick={handleTaskDeleteClick}
            />
          ))}
        </div>

        {/* Tarde */}
        <div className="my-6 space-y-3">
          <TaskSeparator title="Tarde" icon={<CloudSunIcon />} />

          {/* Lista todas as tarefas */}
          {aftrnoonTasks.map((task) => (
            <TaskIem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
              handleDeleteClick={handleTaskDeleteClick}
            />
          ))}
        </div>

        {/* Noite */}
        <div className="space-y-3">
          <TaskSeparator title="Noite" icon={<MoonIcon />} />

          {/* Lista todas as tarefas */}
          {eveningTasks.map((task) => (
            <TaskIem
              key={task.id}
              task={task}
              handleCheckboxClick={handleTaskCheckboxClick}
              handleDeleteClick={handleTaskDeleteClick}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tasks
