import "./App.css";
import Navbar from "./components/File/Navbar";
import AllRoutes from "./components/Routs/AllRoutes";
import Footer from "./components/File/Footer";
import Footertwo from "./components/File/Footertwo";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
      <Footertwo />
    </div>
  );
}

export default App;
