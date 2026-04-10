import { createBrowserRouter } from "react-router";
import Books from "../pages/Books/Books";
import Homepage from "../pages/Homepage/Homepage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MainLayout from "../layout/MainLayout/Mainlayout";
import BookDetails from "../pages/bookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <Homepage/>,
      },
      {
        path: "/books",
        element: <Books/>,
      },
      {
        path: "/bookDetails/:bookId",
        Component: BookDetails,
        loader: () => fetch("/booksData.json"),
      }
    ],
    errorElement: <ErrorPage/>
  },
 
]);