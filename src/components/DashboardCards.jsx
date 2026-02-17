import { LoaderIcon, TaskIcon, Tasks2Icon } from "../assets/icons"
import DashboardCard from "./DashboardCard"
import { useGetTasks } from "../hooks/data/use-get-tasks"

const DashboardCards = () => {
  const { data: tasks } = useGetTasks()
  const notStartedTasks = tasks?.filter(
    (task) => task.status === "not_started"
  ).length
  const inProgressTasks = tasks?.filter(
    (task) => task.status === "in_progress"
  ).length
  const completedTask = tasks?.filter((task) => task.status === "done").length
  return (
    <div className="grid grid-cols-4 gap-9">
      <DashboardCard
        icon={<Tasks2Icon />}
        mainText={tasks?.length}
        secondaryText="Tarefas Totais"
      />
      <DashboardCard
        icon={<LoaderIcon />}
        mainText={notStartedTasks}
        secondaryText="Tarefas não iniciadas"
      />
      <DashboardCard
        icon={<LoaderIcon />}
        mainText={inProgressTasks}
        secondaryText="Tarefas em andamento"
      />
      <DashboardCard
        icon={<TaskIcon />}
        mainText={completedTask}
        secondaryText="Tarefas concluidas"
      />
    </div>
  )
}

export default DashboardCards
