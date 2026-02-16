import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { Toaster } from "sonner"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import TaskDetailsPage from "./pages/TaskDetails.jsx"
import TasksPage from "./pages/Tasks.jsx"
import HomePage from "./pages/Home.jsx"

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/tasks",
    element: <TasksPage />,
  },
  {
    path: "/task/:taskId",
    element: <TaskDetailsPage />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Toaster toastOptions={{ style: { color: "#3E383E" } }} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
)
