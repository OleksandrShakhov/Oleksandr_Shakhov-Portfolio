import React from 'react';
import './references.css';

const data = [
  {
		id: 1,  
		title: 'Tom Kinnel',
    pos: 'Project manager at City of Lethbridge',
		desc: "I had the pleasure of working with Oleksandr Shakhov on a number of projects during his summer position with our team. Oleksandr consistently showcased a high level of dedication and commitment to the success of the project. His contributions were invaluable, demonstrating not only technical proficiency but also a proactive and collaborative approach to teamwork. Oleksandr's ability to meet tight deadlines and deliver quality work was commendable. I highly recommend Oleksandr Shakhov for his exceptional work and positive impact on our projects.",
    contact: 'tom.kinnell@lethbridge.ca', 
    phone: '825 594 21 91'
	},
  {
		id: 2,
		title: 'Valentina Volkova',
    pos: 'Valentina Volcova. Landlord',
		desc: 'I had the pleasure of having Oleksandr Shakhov as a tenant, and I can confidently attest to his reliability and responsibility. As a tenant, Oleksandr was consistently dedicated to maintaining the property, demonstrating a strong sense of responsibility. He communicated effectively and addressed any concerns promptly. Oleksandr is not only a dependable tenant but also a respectful and considerate individual. I highly recommend him as a tenant and believe he brings the same level of commitment to any endeavor.',
    contact: 'volcova@gmail.ca', 
    phone: '825 594 21 92'
	},
  {
		id: 3,
		title: 'Eric Zarubin',
    pos: 'Project manager at City of Lethbridge',
		desc: "During Oleksandr Shakhov's tenure as a summer student at our organization, he played a pivotal role in some projects. Oleksandr consistently exhibited dedication and a strong work ethic throughout the project. His technical skills and attention to detail were instrumental in achieving project milestones. Oleksandr was always eager to take on challenges and demonstrated a proactive approach to problem-solving. His contributions significantly enhanced the success of all of the projects, and I highly recommend him for his outstanding performance.",
    contact: 'eric@lethbridge.ca', 
    phone: '825 594 21 93'
	},
]



export default function Projects() {
	return (
		<section id='references' className='projects container section'>

			<div className="sectionTitle">
				<span className="titleNumber">05.</span>
				<h5 className="titleText">
					References
					<div className="underline"><span></span></div>
				</h5>
			</div>

			<div className="projectContainer grid">
				{
					data.map(({id, desc, title, contact, phone, pos}) => {
						return (
							<div key={id} className="singleProject">

								<div className="projectTitle">
									<h3>{title}</h3>
								</div>
                <h4>{pos}</h4>
                <div className="projectTitle">
									<h4>
                    <a href="mailto:tom.kinnell@lethbridge.ca">{contact}</a>
                  </h4>
								</div>
                <div className="projectTitle">
                <h4>
                    <a href="tel:+18255942191">{phone}</a>
                </h4>
								</div>

								<div className="desc">
									{desc}
								</div>
							</div>
						)
					})
					}
			</div>

		</section>
	)
}