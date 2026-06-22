
import { Suspense, lazy } from "react";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

const About = lazy(() => import("./Components/About"));
const Business = lazy(() => import("./Components/Business"));
const WhyChooseUs = lazy(() => import("./Components/WhyChooseUs"));
const Newsletter = lazy(() => import("./Components/Newletter"));

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Suspense fallback={<div className="text-center py-12 text-gray-500">Loading content...</div>}>
        <About />
        <Business />
        <WhyChooseUs />
        <Newsletter id="newsletter" />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;