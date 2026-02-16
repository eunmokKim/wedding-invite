import Account from "./components/account/Account";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Greeting from "./components/greeting/Greeting";
import Intro from "./components/intro/Intro";
import Location from "./components/map/Location";

function App() {
  return (
    <div className="container">
      <Intro />
      <Greeting />
      <Gallery />
      <Location />
      <Account />
      <Footer />
    </div>
  );
}

export default App;
