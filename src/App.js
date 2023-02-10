import './App.css';
import NavbarMenu from './components/navbars/NavbarLogo';
import NavbarService from './components/navbars/NavbarService';
import ContainerBackground from './components/containers/ContainerBackground';
import Footer from './components/footers/Footer';

function App() {
  return (
    <div className="App">
      <NavbarMenu />
      <NavbarService />
      <ContainerBackground />
      <Footer />
    </div>
  );
}

export default App;
