import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"

export default function App() {
  return (
    <main className="scroll-smooth">
      <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
        <Footer/>
    </main>
  )
}
