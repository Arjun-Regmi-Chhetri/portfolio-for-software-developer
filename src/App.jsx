import ScrollAnimation from "./hooks/scrollAnimation"
import Navbar from "./components/Navbar"
import About from "./pages/about"
import Home from "./pages"
import Work from "./pages/work"
import Footer from "./pages/footer"
import Version from "./components/version"
function App() {
  ScrollAnimation();
  return (
    <div className="App">
   
        <Navbar />
         <Home />
         <About />
         <Work />
         <Footer />
         <Version />
       
    </div>
  )
}

export default App
