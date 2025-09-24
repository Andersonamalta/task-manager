import Button from "./Button"
import TrashIcon from "../assets/icons/trash.svg?react"
import AddIcon from "../assets/icons/add.svg?react"
import SunIcon from "../assets/icons/sun.svg?react"
import CloudSunIcon from "../assets/icons/cloud-sun.svg?react"
import MoonIcon from "../assets/icons/moon.svg?react"
import TaskSeparator from "./TasksSeparator"
import { useState } from "react"
import TASKS from "../constants/tasks"
import TaskIem from "./TaskItem"

const Tasks = () => {
  const [tasks, setTasks] = useState(TASKS)

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
        return { ...task, status: "in_progress" }
      }

      if (task.status === "in_progress") {
        return { ...task, status: "done" }
      }

      if (task.status === "done") {
        return { ...task, status: "not_started" }
      }

      return task
    })

    setTasks(newTasks)
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
          <Button>
            {" "}
            Nova tarefa <AddIcon />
          </Button>
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
              handleTaskCheckboxClick={handleTaskCheckboxClick}
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
              handleTaskCheckboxClick={handleTaskCheckboxClick}
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
              handleTaskCheckboxClick={handleTaskCheckboxClick}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tasks
