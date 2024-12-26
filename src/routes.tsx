import { createBrowserRouter } from "react-router";
import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage";
import GameDetailPage from "./pages/GameDetailPage";
import ErrorPage from "./pages/ErrorPage";

const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Homepage />},
      { path: "games/:id", element: <GameDetailPage />}
    ]
  }
])

export default browserRouter;