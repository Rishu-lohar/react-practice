import {useState, useEffect} from "react";

// React Router imports
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Bootstrap components
import {Container, Alert} from "react-bootstrap";

// Pages import
import Home from "./pages/Home";
import Students from "./pages/Students";
import Reports from "./pages/Reports";

// Navbar import 
import NavigationBar from "./components/NavigationBar";


function AppContent(){

  const location = useLocation();

  const [username]= useState("Rishu");

  const [count,setCount] = useState(0);

  useEffect(()=>{
    setCount((prev)=>prev+1);
  },[location.pathname])


  return(
    <>

      <NavigationBar/>

      <Container className="mt-4">

        <Alert variant="info">

          <h5>Logged In User:{username}</h5>

          <p>Current Route:{location.pathname}</p>

          <p>Navigation count:{count}</p>

        </Alert>

        <Routes>

          <Route
            path="/"
            element={<Home/>}
         />

          <Route
            path="/students"
            element={<Students/>}
         />

          <Route
            path="/reports"
            element={<Reports/>}
         />

        </Routes>

      </Container>
    </>
  );
}


function App(){

  return(

    <BrowserRouter>
      <AppContent/>
    </BrowserRouter>
  );
}

export default App;