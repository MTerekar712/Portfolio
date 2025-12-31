// import navbar from './compnets/navbar'
// import home from './compnets/home'
// import Skill from './compnets/Skill'
// import contact from './compnets/contact'
// import {Route, Routes } from 'react-router-dom'
// import about from './compnets/about'
// import project from './compnets/project'

// const App = () => {
//   return (
//     <div className='mainbox'>
//       {navbar()}
//       <Routes>
//         <Route path='/' element={home()} />
//         <Route path='/about' element={about()}/>
//         <Route path='/skills' element={Skill()}/>
//         <Route path='/project' element={project()} />
//         <Route path='/contact' element={contact()}/>
//       </Routes>
//     </div>

//   )
// }

// export default App

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./compnets/Navbar";
import Home from "./compnets/Home";
import About from "./compnets/About";
import Skill from "./compnets/Skill";
import Project from "./compnets/Project";
import Contact from "./compnets/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
