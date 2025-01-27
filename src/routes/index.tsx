import { createBrowserRouter, RouterProvider as RRDRouterProvider } from "react-router-dom";
import { Root } from "./Home.page";
import {  rootloader } from "./HomePage.loader";
import { pokemonDetailsPageLoader } from "./PokemonDetailsPage.loader";
import { PokemonDetailsPage } from "./PokemonDetails.page";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        loader: rootloader
    },
    {
        path: "/pokemon/:id",
        element:<PokemonDetailsPage />,
        loader: pokemonDetailsPageLoader
    }
])

export const RouterProvider = () => 
    <RRDRouterProvider router={router}></RRDRouterProvider> 