
import Hero from "./Components/Hero";
import Business from "./Components/Business";
import About from "./Components/About";
import WhyChooseUs from "./Components/WhyChooseUs";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Newsletter from "./Components/Newletter";
 function App() {
  return (
  <div>
<Header/>
<Hero/>
<About/>
<Business/>
<WhyChooseUs/>
<Newsletter id="newsletter"/>
<Footer/>
  </div>
  );
}

export default App;