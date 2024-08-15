import Navbar from "../../Components/Navbar";
import Branding from "./Branding";
import FurnitureCategories from "./FurnitureCategories";
import Hero from "./Hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar/>
      <Hero/>
      <Branding/>
      <FurnitureCategories/>
    </div>
  )
}
