import Branding from "./Branding";
import DedicationAndGallery from "./DedicationAndGallery";
import ElevateYourMood from "./ElevateYourMood";
import ElevateYourSpace from "./ElevateYourSpace";
import FurnitureCategories from "./FurnitureCategories";
import FurnitureReview from "./FurnitureReview";
import Gallery from "./Gallery";
import Hero from "./Hero";
import ProductGrid from "./ProductGrid";
import TestimonialSection from "./TestimonialSection"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero/>
      <Branding/>
      <FurnitureCategories category={1}/>
      <ProductGrid/>
      <ElevateYourSpace/>
      <FurnitureCategories category={2}/>
      <ElevateYourMood/>
      <DedicationAndGallery/>
      <Gallery/>
      <TestimonialSection/>
      <FurnitureReview/>

    </div>
  )
}
