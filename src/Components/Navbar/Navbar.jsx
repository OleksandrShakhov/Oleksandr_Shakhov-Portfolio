import React, { useState, useEffect } from 'react';
import './navbar.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';

export default function Navbar() {
  const [active, setActive] = useState('navBar');
  const [activeHeader, setActiveHeader] = useState();

  const showNavBar = () => {
    setActive('navBar activeNavbar');
  };

  const closeNavBar = () => {
    setActive('navBar');
  };

  const addBg = () => {
    if (window.scrollY >= 10) {
      setActiveHeader('header activeHeader');
    } else {
      setActiveHeader('header');
    }
  };

  useEffect(() => {
    // Set initial header class when the component mounts
    addBg();

    // Add scroll event listener
    window.addEventListener('scroll', addBg);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', addBg);
    };
  }, []);


	return (
		<header className={activeHeader}>
			<div className='logoDiv'>
				<h1 className='logo'>
					<a href='#home'>O.S.</a>
				</h1>
			</div>

			<div className={active}>
				<ul onClick={closeNavBar} className="navLists">
					<li className="navItem">
						<a href="#about" className="navLink">
								<span className='headerNumber'>1. </span>
							About
						</a>
					</li>
          <li className="navItem">
						<a href="#education" className="navLink">
							<span className='headerNumber'>2. </span>
						Education
						</a>
					</li>
					<li className="navItem">
						<a href="#skills" className="navLink">
							<span className='headerNumber'>3. </span>
						Skills
						</a>
					</li>
					<li className="navItem">
						<a href="#projects" className="navLink">
							<span className='headerNumber'>4. </span>
						Projects
						</a>
					</li>
          <li className="navItem">
						<a href="#references" className="navLink">
							<span className='headerNumber'>5. </span>
							References
						</a>
					</li>
					<li className="navItem">
						<a href="#contact" className="navLink">
							<span className='headerNumber'>6. </span>
							Contacts
						</a>
					</li>
						<button className='btn'>
							<a href="Oleksandr Shakhov Rezume.pdf" target="_blank">Resume</a>
						</button>
				</ul>

				<div
					className="closeNavBar"
					onClick={closeNavBar}
				>
					<AiFillCloseCircle className='icon'/>
				</div>
			</div>

			<div className="toggleNavBar" onClick={showNavBar}>
				<TbGridDots className='icon'/>
			</div>
		</header>
	)
}