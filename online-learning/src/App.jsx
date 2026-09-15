import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import CoursesDashboard from "./pages/CoursesDashboard";

import SearchCourses from "./pages/SearchCourses";

import CourseList from "./pages/CourseList";



function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Default Redirect */}
        <Route
          path="/"
          element={
            <Navigate to="/courses" />
          }
        />




        {/* Parent Route */}
        <Route
          path="/courses"
          element={<CoursesDashboard />}
        >

          {/* Default Child Redirect */}
          <Route
            index
            element={
              <Navigate to="search" />
            }
          />




          {/* Search Route */}
          <Route
            path="search"
            element={<SearchCourses />}
          />




          {/* List Route */}
          <Route
            path="list"
            element={<CourseList />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;