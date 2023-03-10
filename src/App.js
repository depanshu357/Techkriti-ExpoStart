import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home';
import Header from './Components/Header';
import About from './Pages/About';
import Term from './Pages/Term';
import Why from './Pages/Why';
import Footer from './Pages/Footer';

function App() {
 
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Header />
        <Sidebar />
        <Home />
        <About />
        <Term />
        <Why />
        <Footer />
       
        
        
      </div>
      
     
    </>

  );
}

export default App;
