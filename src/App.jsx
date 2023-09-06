import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Main from "./Page/main";
import Detail from "./Page/Detail";
import { menuLoader } from "./Components/MenuCard";
import Checkout from "./Page/Checkout";
import Recipe from "./Page/Recipe";
import Offer from "./Page/Offer";
import Contact from "./Page/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route path="/Checkout" element={<Checkout />} />
        <Route index element={<Main />} loader={menuLoader} />
        <Route path="/Detail" element={<Detail />} />
        <Route path="/Recipe" element={<Recipe />} />
        <Route path="/Offer" element={<Offer />} />
        <Route path="/Contact" element={<Contact />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
