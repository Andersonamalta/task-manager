import { SunIcon, CloudSunIcon, MoonIcon } from "../assets/icons"

import TaskSeparator from "./TasksSeparator"
import TaskIem from "./TaskItem"
import { useGetTasks } from "../hooks/data/use-get-tasks"
import Header from "./Header"

const Tasks = () => {
  const { data: tasks } = useGetTasks()

  // Pega todas as tarefas com o time igual a morning e armazena nessa variavel
  const morningTasks = tasks?.filter((task) => task.time == "Manhã")
  const aftrnoonTasks = tasks?.filter((task) => task.time == "Tarde")
  const eveningTasks = tasks?.filter((task) => task.time == "Noite")

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
            <TaskIem key={task.id} task={task} />
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
            <TaskIem key={task.id} task={task} />
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
            <TaskIem key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tasks
