import React, { useState } from 'react';
import './contact.css';
// Importend icons
import {BsInstagram} from 'react-icons/bs'
import {BsArrowRightSquare} from 'react-icons/bs'
import {BsTelegram} from 'react-icons/bs'
import {FaFacebookMessenger} from 'react-icons/fa'
import {CgArrowRightR} from 'react-icons/cg'
import {GrFormClose} from 'react-icons/gr'
import {MdOutlineMarkEmailRead} from 'react-icons/md'

//EmailJS 
import emailjs from 'emailjs-com';

export default function Contact() {

  const [isSent, setIsSent] = useState(false); // initialize state to false

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        'shakhov42@gmail.com',
        'template_ehwqx9l',
        e.target,
        '8AbWo945hxovHGhuz'
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true); // set state to true when email is sent successfully
        },
        (error) => {
          console.log(error.text);
        }
      );

	/*const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
		
		emailjs.sendForm('shakhov42@gmail.com', 'template_ehwqx9l', form.current, '8AbWo945hxovHGhuz')
		e.target.reset() // to reset the form after submit*/
	};

	return (
		<section id='contact' className='contact section container'>

			<div className="sectionTitle">
				<span className="titleNumber">06.</span>
				<h5 className="titleText">
					Contact Me
					<div className="underline"><span></span></div>
				</h5>
			</div>

			<div className="contactContainer grid">
				<div className="socialContacts grid">
					<h3>Talk to me</h3>

					<div className="cards grid">

						<div className="card">
							<div>
								<BsTelegram className='icon iconInst' />
							</div>
							<h4>Telegram</h4>
							<span className='userName'>
								@Oleksandr_Shakhov
							</span>
							<div>
								<a href="https://t.me/Oleksandr_Shakhov" className="flex" target="_blank">
									Send Message
									<BsArrowRightSquare className='icon'/>
								</a>
							</div>
						</div>

						<div className="card">
							<div>
								<FaFacebookMessenger className='icon iconInst' />
							</div>
							<h4>Facebook</h4>
							<span className='userName'>
								Oleksandr Shakhov
							</span>
							<div>
								<a href="https://www.facebook.com/aleksandr.shakhov.3597/" className="flex" target="_blank">
									Send Message
									<BsArrowRightSquare className='icon'/>
								</a>
							</div>
						</div>

						<div className="card">
							<div>
								<BsInstagram className='icon iconInst' />
							</div>
							<h4>Instagram</h4>
							<span className='userName'>
								@aleksandr_shakhov
							</span>
							<div>
								<a href="https://www.instagram.com/aleksandr_shakhov/" className="flex" target="_blank">
									Send Message
									<BsArrowRightSquare className='icon'/>
								</a>
							</div>
						</div>
						
					</div>
					
				</div>

				<div className="form grid">
					<h3>Send me an Email</h3>

					<form /*ref={form}*/ onSubmit={sendEmail} >
						<input type="text" placeholder='Enter your Name' name='name'  />
						<input type="email" placeholder='Enter your Email' name='email' />
						<textarea name="message" placeholder='Enter your Message'></textarea>
						<button className="formBtn" type='submit'>
							Send Email
						</button>
					</form>
          {isSent && (
            <div className="popup">
              <MdOutlineMarkEmailRead className='icon-email'/>
              <p className='popup-text-1'>Thanks for your email</p>
              <p className='popup-text-2'>Your message has been successfully sent!</p>
              <button className='btn-popup' onClick={() => setIsSent(false)}><GrFormClose className='icon-close' /></button>
            </div>
          )}
				</div>
			</div>
			<div className="forGoUp">
					<a href='#home' className="goUp">
						<CgArrowRightR className='iconGo' title='Go Up'/>
					</a>
				</div>
		</section>
	)
}