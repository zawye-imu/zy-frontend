import './App.css';
import Base from './pages/Base';
import { Test } from './pages/Test';
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
      path: "about",
      element: <Test></Test>,
    },
  ]);


  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
