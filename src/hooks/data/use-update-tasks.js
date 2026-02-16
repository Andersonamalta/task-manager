import { useMutation, useQueryClient } from "@tanstack/react-query"
import { api } from "../../lib/axios"
import { tasksQueryKeys } from "../../keys/queries"

export const useUpdateTask = (taskId) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ["updateTask", taskId],
    mutationFn: async (newTask) => {
      const { data: updatedTask } = await api.patch(`/tasks/${taskId}`, {
        title: newTask.title.trim(),
        description: newTask.description.trim(),
        time: newTask.time,
      })
      queryClient.setQueryData(tasksQueryKeys.getAll(), (oldTask) => {
        return oldTask.map((oldTask) => {
          if (oldTask.id == taskId) {
            return updatedTask
          }
          return oldTask
        })
      })
      queryClient.setQueryData(tasksQueryKeys.getOne(taskId), updatedTask)
    },
  })
}
