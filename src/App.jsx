import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Main from "./Page/main";
import { menuLoader } from "./Components/MenuCard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Main />} loader={menuLoader} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
