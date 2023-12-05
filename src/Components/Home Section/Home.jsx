import React from 'react';
import './home.css';
import {FiGithub} from 'react-icons/fi'
import {FiFacebook} from 'react-icons/fi'
import {TbBrandTelegram} from 'react-icons/tb'
import {CgArrowRightR} from 'react-icons/cg'
import {HiChevronDoubleDown} from 'react-icons/hi'


export default function Home() {

	return (
		<section id='home' className='home section container'>

			{/* this div will be visible only at wide screens*/}
			<div className="leftIcons">
				<div className="socials grid">
					<a href='https://github.com/OleksandrShakhov' target='_blank' rel="noreferrer">
						<FiGithub className='icon'/>
					</a>
					<a href='https://www.facebook.com/aleksandr.shakhov.3597/' target='_blank' rel="noreferrer">
						<FiFacebook className='icon'/>
					</a>
					<a href='https://t.me/Oleksandr_Shakhov' target='_blank' rel="noreferrer">
						<TbBrandTelegram className='icon'/>
					</a>
					<div className="line"></div>
				</div>
			</div>

			{/* homeContent */}
			<div className="container homeContainer">

				<span className="introText">
					Hi, my name is
				</span>

				<h1 className='title'>
					Oleksandr Shakhov
				</h1>

				<p className="homeParagraph">
          Detail-oriented and technically proficient IT student with experience in the City of Lethbridge's
          Waste and Recycle Department. Seeking a position where I can leverage my Computer
          Information Technology background to provide exceptional IT support and contribute to a
          dynamic team.
				</p>

			<div className="lowerHomeSection">
				<button className="containerBtn">
					<a href="#contact" className="flex">
						Contact Me
						<CgArrowRightR className='icon'/>
					</a>
				</button>

				<div className="scrollDiv">
					<a href="#about" className="flex">
						<h6 className="scroll">Scroll Down</h6>
						<HiChevronDoubleDown className='icon'/>
					</a>
				</div>
			</div>
			</div>

			{/* rightside div with email access */}
			<div className="rightEmail">
				<div>
					<div className="emailAddress">
						<a href="https://mailto:shakhov42@gmail.com" target='_blank' rel="noreferrer">
							shakhov42@gmail.com
						</a>
					</div>

					<div className="line"></div>
				</div>
		</div>
		</section>
	)
}