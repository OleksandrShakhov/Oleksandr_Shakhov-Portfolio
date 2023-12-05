import React from 'react';
import './app.css';
import About from './Components/About Section/About';
import Education from './Components/Education/Education';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home Section/Home';
import Skills from './Components/Skills Section/Skills';
import Projects from './Components/Projects Section/Projects';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact Section/Contact';
import SoftSkills from './Components/Soft-Skills Section/Soft-Skills';
import References from './Components/References/References';


const App = () => {
	return (
		<>
			<Navbar />
			<Home />
			<About />
      <Education />
			<Skills />
      <SoftSkills/>
			<Projects />
      <References />
			<Contact />
			<Footer />
		</>
	)
}

export default App;