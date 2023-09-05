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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/Checkout" element={<Checkout />} />
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Main />} loader={menuLoader} />
        <Route path="/Detail" element={<Detail />} />
      </Route>
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
