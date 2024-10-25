import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Login";
import { action as logoutAction } from "./Pages/Logout";
import { chechAuthLoader as authLoader, loader as tokenLoader } from "./Util/auth";
import RoomPage from "./Pages/RoomPage";
import RoomCreatePage from "./Pages/RoomCreatePage";
import {action as createRoomAction} from './Pages/SubmitRoom';
import {action as registerTeacherAction} from './Pages/SubmitTeacher';
import {action as registerStudensAction} from './Pages/SubmitStudent';
import TeacherPage from "./Pages/TeacherPage";
import CreateTeacherPage from "./Pages/CreateTeacherPage";
import StudentsPage from "./Pages/StudentsPage";
import CreateStudentPage from "./Pages/CreateStudentsPage";
import StudentPage from "./Pages/StudentPage";
import {action as updateStudend} from "./Pages/UpdateStudent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    loader: tokenLoader,
    id: 'root',
    children: [
      {path: '/', element: <HomePage/>, loader: authLoader},
      { path: "/login",element: <Login />},
      { path: "/rooms",element: <RoomPage />, loader: authLoader},
      { path: "/rooms/create",element: <RoomCreatePage />, loader: authLoader, action: createRoomAction},
      { path: "/logout", action: logoutAction},
      { path: "/teachers", loader: authLoader, children: [
          {path: '', element: <TeacherPage />},
          {path: 'create', element: <CreateTeacherPage />, action: registerTeacherAction}
        ]
      },
      {path: "/students", loader: authLoader, children: [
        {path: '', element: <StudentsPage />},
        {path: 'create', element: <CreateStudentPage />, action: registerStudensAction},
        {path: ':id', element: <StudentPage />, action: updateStudend}
      ]},
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
