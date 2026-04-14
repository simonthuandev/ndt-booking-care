import { RouterProvider } from "react-router";
import router from "./routes/AppRoute";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
