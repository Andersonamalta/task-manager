import { useMutation, useQueryClient } from "@tanstack/react-query"
import { api } from "../../lib/axios"
import { tasksQueryKeys } from "../../keys/queries"

export const useAddTasks = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: "addTask",
    mutationFn: async (task) => {
      const { data: createdTask } = await api.post("/tasks", task)
      return createdTask
    },
    onSuccess: (createdTask) => {
      queryClient.setQueryData(tasksQueryKeys.getAll(), (currentTasks) => [
        ...currentTasks,
        createdTask,
      ])
    },
  })
}
