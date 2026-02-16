import { HomeIcon, TaskIcon } from "../assets/icons"

import SidebarButton from "./SidebarButton"

const Sidebar = () => {
  return (
    <div className="h-screen w-72 min-w-72 bg-white">
      <div className="space-y-4 px-8 py-6">
        <h1 className="text-xl font-semibold text-[#00ADB5]">
          Gerenciador de Tarferas
        </h1>
        <p>
          Um simples{" "}
          <span className="text-[#00ADB5]">organizador de tarefas</span>
        </p>
      </div>

      <div className="flex flex-col gap-2 p-2">
        <SidebarButton to="/">
          <HomeIcon />
          Início
        </SidebarButton>

        <SidebarButton to="/tasks">
          {" "}
          <TaskIcon /> Minhas Tarefas
        </SidebarButton>
      </div>
    </div>
  )
}

export default Sidebar
