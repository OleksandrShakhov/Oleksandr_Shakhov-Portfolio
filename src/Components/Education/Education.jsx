import React from 'react';
import './education.css';


export default function Education() {
	return (
<section id='education' className='skills container section'>
  <div className="sectionTitle">
    <span className="titleNumber">02.</span>
    <h5 className="titleText">
      My Education
      <div className="underline"><span></span></div>
    </h5>
  </div>

  <div className='skillsContainer grid'>
    <div className="skillGroup">
      <div className="groupTitle">
        <h2 className="title">Diploma Degree: Computer Information Technology</h2>
        <span className="subTitle">
          Lethbridge College – Lethbridge, AB<br/> Sept 2022 – Current
        </span>
        <h2 className="title">Courses taken:</h2>
        <ul>
          <li className='educationLi'>Computer Networking I and II</li>
          <li className='educationLi'>Math for IT</li>
          <li className='educationLi'>HTML and Web Pablishing (HTML, CSS, JS)</li>
          <li className='educationLi'>Web Development (Apache, PHP, SQL)</li>
          <li className='educationLi'>Computer Hardware Maintenance</li>
          <li className='educationLi'>Database Management System</li>
          <li className='educationLi'>UX/UI Design</li>
          <li className='educationLi'>Computer Programming I and II</li>
          <li className='educationLi'>System Analisys and Design</li>
          <li className='educationLi'>Algorithms and Problem solving</li>
          <li className='educationLi'>Others</li>
        </ul>
      </div>
    </div>
    <div className="skillGroup">
      <div className="groupTitle">
        <h2 className="title">Bachelor’s Degree: Management</h2>
        <span className="subTitle">
        National University of Life and Environmental Science – Kyiv, Ukraine<br/> Sept 2017 – June 2019
        </span>
      </div>
    </div>
  </div>
</section>
	)
}