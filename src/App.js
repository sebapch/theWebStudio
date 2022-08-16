import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Title from './components/Title/Title';
import NavbarComponent from './components/NavbarComponent/NavbarComponent';
import About from './components/About/About';
import Specialize from './components/Specialize/Specialize'
import Offers from './components/Offers/Offers';
import Products from './components/Products/Products';
import Questions from './components/Questions/Questions';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import {LangContext, LangProvider} from './context/langContext'

function App() {



  return (
    <> 
    <LangProvider>
      <NavbarComponent />
      <Title />
      <About />
      <Specialize />
      <Offers />
      <Products />
      <Questions />
      <Contact />
      <Footer />
    </LangProvider>
    </>
  );
}

export default App;
