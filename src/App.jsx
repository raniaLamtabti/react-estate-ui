import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'tailwindcss/tailwind.css';

import './index.css';
import LayoutUser from "./layout/userLayout";
import HomePage from "./pages/user/home/homePage";
import NavBar from "./components/navBar";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <LayoutUser />,
  //     children:[
  //       {
  //         path:"/",
  //         element:<HomePage/>
  //       }
  //     ]
  //   }
  // ]);

  return (
    <div className="h-60">
      <NavBar/>
      <HomePage/>
    </div>

    // <RouterProvider router={router}/>
  );
}

export default App