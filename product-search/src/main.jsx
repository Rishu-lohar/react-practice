import ReactDom from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const root = ReactDom.createRoot(
  document.getElementById("root")
);

root.render(
  <App/>
);