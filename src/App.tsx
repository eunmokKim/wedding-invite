// import AccountSection from "./components/account/AccountSection";
// import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Greeting from "./components/greeting/Greeting";
import Intro from "./components/intro/Intro";
import MapSection from "./components/map/MapSection";

function App() {
  return (
    <div className="container">
      <Intro />
      <Greeting />
      <Gallery />
      <MapSection />
      {/* <AccountSection /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
