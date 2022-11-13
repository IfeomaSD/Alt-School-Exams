import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SharedLayout from "./pages/SharedLayout"
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import { useState } from "react";
import './App.css';

function App() {
  const [setUser] = useState(null);
  return (
    <BrowserRouter>
    <nav> Navbar</nav>
    <Routes>
      <Route path = '/' element = {<SharedLayout />} >
        <Route index element= {<Home/>} />
        <Route path="login" element= {<Login setUser = {setUser} />} />
                <Route path="contact" element= {<Contact />} />
                <Route path="*" element={<Error />} /> 
                </Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
