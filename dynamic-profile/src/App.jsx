import{BrowserRouter, Routes, Route} from "react-router-dom";

import NavigationBar from "./components/NavigationBar";

import Home from "./pages/Home";
import StudentProfile from "./pages/StudentProfile";;

function App(){

  return(

    <BrowserRouter>
    
      <NavigationBar/>

      <Routes>

        <Route
          path="/"
          element={<Home/>}
        />
        <Route
          path="/student/:id"
          element={<StudentProfile/>}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;