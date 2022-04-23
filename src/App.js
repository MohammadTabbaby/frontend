import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Icons from './components/Icons'
import Services from './components/Services'
import Facility from './components/Facility'
import Booking from './components/Book'
import About from './components/About'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Header />
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <Home />
      <Icons />
      <Services />
      <Facility />
      <Booking />
      <About />
      <Footer />
    </div>

  );

}

export default App;
