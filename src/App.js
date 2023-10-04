import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
// External Routes
import Homepage from "./External/homepage/Index";
import Login from "./External/login/Index";
import Register from "./External/register/Index";
import ExternalLayout from "./components/layouts/ExternalLayout";
function App() {
  return (
    <Routes>
      <Route element={<ExternalLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
