import PropTypes from "prop-types"
import Button from "./Button"
import { AddIcon, TrashIcon } from "../assets/icons"
import AddTaskDialog from "./AddTaskDialog"
import { useState } from "react"

function Header({ subtitle, title }) {
  const [addTaskDialogIsOpen, setAddTaskDialogIsOpen] = useState(false)
  return (
    <div className="flex w-full justify-between">
      <div>
        <span className="text-xs font-semibold text-[#00ADB5]">{subtitle}</span>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>

      <div className="flex items-center gap-2.5">
        <Button color="ghost">
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
  )
}

Header.prototype = {
  children: PropTypes.node.isRequired,
}

export default Header
