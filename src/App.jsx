import { CalendarView } from "./components/CalendarView"
import { Dashboard } from "./components/Dashboard"
import { Navbar } from "./components/Navbar"
import { Orders } from "./components/Orders"
import { Products } from "./components/Products"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard/>,
    },
    {
      path: "/products",
      element: <Products/>,
    },
    {
      path: "/orders",
      element: <Orders/>,
    },
    {
      path: "/calendar",
      element: <CalendarView/>,
    }
    
  ])

  return (
    <>
    <RouterProvider router={appRouter} />
    </>
  )
}

export default App
