
import './App.css';
import {useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Contato from './components/pages/Contato';
import Home from './components/pages/Home';
import Empresa from './components/pages/Empresa';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Container from './components/layout/Container';
import NewProject from './components/pages/NewProject';



function App() {

  
  return (
              
<Router>

  <Navbar />

  <Container customClass="min-height">

    <Routes>  

          <Route path="/" element={<Home/>} />
          <Route path="/" element={<Contato/>} />
          <Route path="/" element={<Empresa/>} /> 
          <Route path="/" element={<NewProject/>} /> 
          

    </Routes>
  </Container>

<Footer />

</Router>


  

  );
  }

export default App;