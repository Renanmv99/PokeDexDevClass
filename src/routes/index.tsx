import { createBrowserRouter, RouterProvider as RRDRouterProvider } from "react-router-dom";
import { Header } from "../components/Header"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Header title = "Pokedex"/>
    },
    {
        path: "/pokemon/:id",
        element:<>Pokemon de numero X</>
    }
])

export const RouterProvider = () => 
    <RRDRouterProvider router={router}></RRDRouterProvider> 