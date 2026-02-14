import { createPortal } from "react-dom"
import { CSSTransition } from "react-transition-group"
import { useEffect, useRef, useState } from "react"
import { v4 } from "uuid"
import PropTypes from "prop-types"

import "./AddTaskDialog.css"

import Input from "./Input"
import Button from "./Button"
import TimeSelect from "./TimeSelect"
import { toast } from "sonner"
import { LoaderIcon } from "../assets/icons"
import { useForm } from "react-hook-form"
import { useMutation, useQueryClient } from "@tanstack/react-query"

const AddTaskDialog = ({ isOpen, handleClose }) => {
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationKey: "addTask",
    mutationFn: async (task) => {
      const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        body: JSON.stringify(task),
      })
      if (!response.ok) {
        throw new Error(
          "Erro ao adicionar a tarefa. Por favor, tente novamente."
        )
      }
      return response.json()
    },
  })
  const nodeRef = useRef()
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm()

  const handleSaveClick = async (data) => {
    const task = {
      time: data.time,
      title: data.title.trim(),
      description: data.description.trim(),
      id: v4(),
      status: "not_started",
    }
    mutate(task, {
      onSuccess: () => {
        queryClient.setQueryData("tasks", (currentTasks) => [
          ...currentTasks,
          task,
        ])
        handleClose()
        reset({
          title: "",
          time: "Manhã",
          description: "",
        })
      },
      onError: () =>
        toast.error(
          "Ocorreu um erro ao adicionar a tarefa. Por favor, tente novamente."
        ),
    })
  }

  const handleCancelClick = () => {
    handleClose()
    reset({
      title: "",
      time: "Manhã",
      description: "",
    })
  }

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isOpen}
      timeout={500}
      classNames="add-task-dialog"
      unmountOnExit
    >
      <div>
        {createPortal(
          <div
            ref={nodeRef}
            className="fixed top-0 bottom-0 left-0 flex h-screen w-screen items-center justify-center backdrop-blur"
          >
            {/*Dialog*/}
            <div className="rounded-xl bg-white p-5 text-center shadow">
              <h2 className="text-xl font-semibold text-[#35383E]">
                Nova Tarefa
              </h2>
              <p className="mt-1 mb-4 text-sm text-[#9A9C9F]">
                insira as informações abaixo
              </p>
              <form
                onSubmit={handleSubmit(handleSaveClick)}
                className="flex w-84 flex-col space-y-4"
              >
                <Input
                  id="title"
                  label="Título"
                  placeholder="Insira o título da tarefa"
                  error={errors?.title?.message}
                  disabled={isSubmitting}
                  {...register("title", {
                    required: "O título é obrigatório.",
                    validate: (value) => {
                      if (!value.trim()) {
                        return "O título não pode ser vazio."
                      }
                      return true
                    },
                  })}
                />

                <TimeSelect
                  error={errors?.time?.message}
                  disabled={isSubmitting}
                  {...register("time", {
                    required: true,
                  })}
                />

                <Input
                  id="description"
                  label="Descrição"
                  placeholder="Descreva a tarefa"
                  error={errors?.description?.message}
                  disabled={isSubmitting}
                  {...register("description", {
                    required: "A descrição é obrigatória.",
                    validate: (value) => {
                      if (!value.trim()) {
                        return "A descrição não pode ser vazia."
                      }
                      return true
                    },
                  })}
                />

                <div className="flex gap-3">
                  <Button
                    color="secundary"
                    size="large"
                    className="w-full"
                    onclick={handleCancelClick}
                    type="button"
                  >
                    Cancelar
                  </Button>
                  <Button
                    size="large"
                    className="w-full"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting && <LoaderIcon className="animate-spin" />}
                    Salvar
                  </Button>
                </div>
              </form>
            </div>
          </div>,
          document.body
        )}
      </div>
    </CSSTransition>
  )
}

AddTaskDialog.PropTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default AddTaskDialog
