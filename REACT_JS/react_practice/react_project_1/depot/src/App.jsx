import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Pages from "./pages/Pages";
import Elements from "./pages/Elements";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import About_Us from "./components/About_Us";
import Contact_Us from "./components/Contact_Us";
import { createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Shop",
        element: <Shop />,
      },
      {
        path: "/Pages",
        element: <Pages />,
      },
      {
        path: "/Faq",
        element: <Faq />,
      },
      {
        path: "/About_Us",
        element: <About_Us />,
      },
      {
        path: "/Contact_Us",
        element: <Contact_Us />,
      },
      {
        path: "/Elements",
        element: <Elements />,
      },
    ],
  },
]);

function App() {
  return (
    <>
    
    <RouterProvider router={router}>
      {/* <Outlet /> */}
    </RouterProvider>
      <Footer />
    </>
  );
}

export default App;