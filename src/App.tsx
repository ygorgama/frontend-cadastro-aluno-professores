import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import { action as logoutAction } from "./Pages/Logout";
import { chechAuthLoader as authLoader, loader as tokenLoader } from "./Util/auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: tokenLoader,
    id: 'root',
    children: [
      {path: '/', element: <HomePage/>, loader: authLoader},
      { path: "/login",element: <Login />},
      { path: "/logout", action: logoutAction}
    ]
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
