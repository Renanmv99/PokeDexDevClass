import { createBrowserRouter, RouterProvider as RRDRouterProvider } from "react-router-dom";
import { Root } from "./Root.element";
import {  rootloader } from "./Root.loader";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        loader: rootloader
    },
    {
        path: "/pokemon/:id",
        element:<>Pokemon de numero X</>
    }
])

export const RouterProvider = () => 
    <RRDRouterProvider router={router}></RRDRouterProvider> 