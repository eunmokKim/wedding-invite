import Account from "./components/account/Account";
import WeddingDay from "./components/day/WeddingDay";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Greeting from "./components/greeting/Greeting";
import GuestBook from "./components/guest/GuestBook";
import Intro from "./components/intro/Intro";
import Location from "./components/map/Location";

function App() {
  return (
    <div className="container">
      <Intro />
      <Greeting />
      <WeddingDay />
      <Gallery />
      <Location />
      <Account />
      <GuestBook />
      <Footer />
    </div>
  );
}

export default App;
