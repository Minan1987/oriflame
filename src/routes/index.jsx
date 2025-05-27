import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layoutes/MainLayout";
import NotFound from "../components/NotFound";
import App from "../App";
import { Cosmetics, Hair, Skin, WomenHygiene, MenHygiene, KidsHygiene, CartPage, ProductsList, ProductPage, Hygiene, SearchResult } from "./pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            { path: "/", element: <App /> },
            { path: "/products", element: <ProductsList /> },
            { path: "/product/:productId", element: <ProductPage /> },
            { path: "/cosmetics", element: <Cosmetics /> },
            { path: "/hair", element: <Hair /> },
            { path: "/skin", element: <Skin /> },
            { path: "/hygiene", element: <Hygiene /> },
            { path: "/women-hygiene", element: <WomenHygiene /> },
            { path: "/men-hygiene", element: <MenHygiene /> },
            { path: "/kids-hygiene", element: <KidsHygiene /> },
            { path: "/search", element: <SearchResult /> },
            { path: "/cart", element: <CartPage /> },
        ]
    }
])