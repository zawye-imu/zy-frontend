import './App.css';
import Base from './pages/Base';
import { Test } from './pages/Test';
import { Contacts } from './pages/Contact';
import { Aboutme } from './pages/Aboutme';
import { Projects } from './pages/Projects';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Base />
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
  ]);


  return (
    <div className="App">
      <Base></Base>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
