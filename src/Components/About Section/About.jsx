import React from 'react';
import './about.css';
import {FiDownload} from 'react-icons/fi';
import img from '../../Assets/alex-png.png'
export default function About() {
	return (
		<section id='about' className='about section container'>

			<div className="sectionTitle">
				<span className="titleNumber">01.</span>
				<h5 className="titleText">
					About Me
					<div className="underline"><span></span></div>
				</h5>
			</div>
			
			<div className="container sectionContent grid">
				<div className="textSection">
					<h4>
            I am excited to apply for IT positions at your organization and introduce myself, Oleksandr Shakhov. Currently in my second and final year of studying Computer Information Technology at Lethbridge College, I bring a strong passion for IT, coupled with hands-on experience and academic achievements. Throughout my studies, I have actively contributed to various projects, demonstrating technical proficiency and a collaborative mindset. Eager to apply my skills in a professional setting, I am confident in my ability to make meaningful contributions to your team.            <br/><br/><b>For more information click on the button below.</b>
					</h4>

          <div className='flex'>
            <div className="aboutBtn">
              <a href="Oleksandr Shakhov Rezume.pdf" target='_blank' className="flex">
                Resume <FiDownload className='icon' />
              </a>
            </div>
            <div className="aboutBtn">
              <a href="Oleksandr Shakhov Cover Letter.pdf" target='_blank' className="flex">
                Cover Letter <FiDownload className='icon' />
              </a>
            </div>
          </div>
				</div>

				<div className="aboutImgDiv">
					<img src={img} alt="Oleksandr Shakhov" className='aboutImg' />
				</div>
			</div>
		</section>
	)
}