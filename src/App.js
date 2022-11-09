import logo from './logo.svg';
import './App.css';
import Navbar from './components/File/Navbar';
import AllRoutes from './components/Routs/AllRoutes';
import Footer from './components/File/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <Footer/>
      
    </div>
  );
}

export default App;
