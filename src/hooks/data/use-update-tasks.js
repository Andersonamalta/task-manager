import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

export const useUpdateTask = (taskId) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationKey: ["updateTask", taskId],
    mutationFn: async (newTask) => {
      const { data: updatedTask } = await axios.patch(
        `http://localhost:3000/tasks/${taskId}`,
        {
          title: newTask.title.trim(),
          description: newTask.description.trim(),
          time: newTask.time,
        }
      )
      queryClient.setQueryData("tasks", (oldTask) => {
        return oldTask.map((oldTask) => {
          if (oldTask.id == taskId) {
            return updatedTask
          }
          return oldTask
        })
      })
      queryClient.setQueryData(["task", taskId], updatedTask)
    },
  })
}
