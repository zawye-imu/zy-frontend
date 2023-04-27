import './App.css';
import Base from './pages/Base';
import { Test } from './pages/Test';
import { Contacts } from './pages/Contact';
import { Aboutme } from './pages/Aboutme';
import { Projects } from './pages/Projects';
import { Landing } from './pages/Landing';
import {Login } from './pages/Login';
import  Scroll  from './pages/Scroll';
import  Animate1  from './pages/Animate1';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Base></Base>,
      children: [
        {
          path: "home",
          element: <Landing />
        },
        {
          path: "about",
          element: <div>About</div>,
        },
        {
          path: "test",
          element: <Test></Test>,
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "contacts",
          element: <Contacts />,
        },
        {
          path: "aboutme",
          element: <Aboutme />,
        },
        {
          path: "testScroll",
          element: <Scroll />,
        },
        {
          path: "animate1",
          element: <Animate1 />,
        },
      ]
    },
    {
      path: "login",
      element: <Login />,
    }
  ]);


  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
