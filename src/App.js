import { RouterProvider } from "react-router-dom";
import ManageRoute from "./Router/main";
import Header from "./Model/Header";

function App() {
  return (
    <>
      <RouterProvider router={ManageRoute}></RouterProvider>
    </>
  );
}

export default App;
