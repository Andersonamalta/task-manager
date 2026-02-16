import { useMutation, useQueryClient } from "@tanstack/react-query"
import { api } from "../../lib/axios"
import { tasksQueryKeys } from "../../keys/queries"
import { taskMutationKeys } from "../../keys/mutations"

export const useDeleteTasks = (taskId) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: taskMutationKeys.delete(taskId),
    mutationFn: async () => {
      const { data: deletedTask } = await api.delete(`/tasks/${taskId}`)
      return deletedTask
    },
    onSuccess: (deletedTask) => {
      queryClient.setQueryData(tasksQueryKeys.getAll(), (currentTasks) =>
        currentTasks.filter((currentTasks) => currentTasks.id != deletedTask.id)
      )
    },
  })
}
