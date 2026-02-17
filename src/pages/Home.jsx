import DashboardCards from "../components/DashboardCards"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import { useGetTasks } from "../hooks/data/use-get-tasks"
import TaskItem from "../components/TaskItem"

const HomePage = () => {
  const { data: tasks } = useGetTasks()
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full space-y-6 px-8 py-16">
        <Header subtitle="Dashboard" title="Dashboard" />
        <DashboardCards />
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-6 rounded-[10px] bg-white p-6">
            <div>
              <h3 className="text-xl font-semibold">Tarefas</h3>
              <span className="text-sm text-[#9A9C9F]">
                Resumo das tarefas disponíveis
              </span>
            </div>
            <div className="space-y-3">
              {tasks?.map((task) => (
                <TaskItem key={task.id} task={task} />
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center space-y-6 rounded-[10px] bg-white p-6">
            <p className="text-[#9A9C9F]">
              Cumprir tarefas diárias não é sobre motivação momentânea, é sobre
              compromisso com a vida que você quer construir. Cada pequena ação
              concluída, mesmo aquelas que parecem simples ou repetitivas, está
              moldando sua disciplina, fortalecendo sua constância e aproximando
              você dos seus objetivos.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
