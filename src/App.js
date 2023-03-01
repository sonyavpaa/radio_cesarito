import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayOut from './pages/LayOut';
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LayOut/>}>
        <Route index element={<Home/>}></Route>
        <Route path="about" element={<About />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
