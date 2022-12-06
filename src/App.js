import './App.css';
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage';
import SignInPage from './pages/FirstPage/SignInPage';
import SignUpPage from './pages/FirstPage/SignUpPage';
import Blog from './pages/SecondPage/Blog';
import Learn from './pages/SecondPage/Learn';
import Bookmarks from './pages/SecondPage/Bookmarks';
import UiKit from './pages/SecondPage/UiKit';
import LainNya from './pages/SecondPage/LainNya';
// ajkgha
// sjdhjakd

const router = createBrowserRouter([
  {
    path: "/",
    element:<SignInPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/blogs",
    element:<Blog />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/signup",
    element: <SignUpPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/learn",
    element: <Learn />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/bookmarks",
    element: <Bookmarks />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/uikit",
    element: <UiKit />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/lainnya",
    element: <LainNya />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
