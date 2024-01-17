import react from "react";
import './App.css';
import {Routes,Route} from "react-router-dom";

import Blog from "./pages/pageBlog/Blog.jsx"
import Home from "./pages/pageHome/Home.jsx";
import Realisation from "./pages/pageReal/Realisation.jsx";
import Services from "./pages/pageServices/Services.jsx";
import Contact from "./pages/pageContact/Contact.jsx";
import Legal from "./pages/pageLegal/Legal.jsx";
import Github from './pages/pageGithub/Github';

import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Services" element={<Services/>}></Route>
          <Route path="/Realisation" element={<Realisation/>}></Route>
          <Route path="/Blog" element={<Blog/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
          <Route path="/Legal" element={<Legal/>}></Route>
          <Route path="/Github" element={<Github/>}></Route>
      </Routes>
      <Footer/>
    </div>
    
  );
}
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>

export default App;
