import logo from './logo.svg';
import './App.css';
import {
  NavBar, Footer, HomePage, MyItinerary, TrackFlights
} from './ui-components';


function App() {
  return (
      <div>
      <NavBar />
          <HomePage />
      <Footer />
      </div>
  );
}

export default App;
