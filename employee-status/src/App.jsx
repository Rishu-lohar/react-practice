import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Employees from "./pages/Employees";


function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Employees />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;