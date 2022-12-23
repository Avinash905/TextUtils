import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({ type: type, msg: message });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggle = (e) => {
    const color = e.target.classList[0].split("-")[1];
    setMode(color);
    if (color === "dark") {
      document.querySelector("body").style.backgroundColor = "#383838";
    } else if (color === "danger") {
      document.querySelector("body").style.backgroundColor = "#FF3333";
    } else if (color === "success") {
      document.querySelector("body").style.backgroundColor = "#33FF66";
    } else if (color === "info") {
      document.querySelector("body").style.backgroundColor = "#6666FF";
    } else if (color === "warning") {
      document.querySelector("body").style.backgroundColor = "#FF9900";
    } else if (color === "light") {
      document.querySelector("body").style.backgroundColor = "#fff";
    }
  };
  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} toggle={toggle} />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/TextUtils"
            element={<TextForm mode={mode} showAlert={showAlert} />}
          />
          <Route
            path="/TextUtils/about"
            element={<About mode={mode} showAlert={showAlert} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
