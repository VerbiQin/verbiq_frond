import React from 'react'
import './ContactUs.css'


function ContactUs() {
    return (
        <div className="coatiner-fuild">
            <div className="row section-container">
                <div className="col">
                    <h1 className='page-header'>Contact Us</h1>
                </div>
            </div>


            <div className="row section-container">
                <div className="col">
                    <p className='section-body'>
                        Thank you for your interest in VerbiQ! We value your feedback, questions, and suggestions. Please feel free to reach out to us using the contact information below:
                    </p>
                    Email: <a href="mailto:contact@verbiq.com">contact@verbiq.com</a>
                </div>
            </div>

            <div className="row section-container">
                <div className="col">
                    <h4 className='section-header'>Social Media</h4>
                    <p className='section-body'>
                        Update soon...
                    </p>
                </div>
            </div>
            <hr />
            <div className="row section-container">
                <div className="col">
                    <p className='section-body'>
                        For urgent matters, please indicate "Urgent" in the subject line of your email.
                    </p>
                    <p className='section-body'>
                    We look forward to hearing from you and enhancing your experience with VerbiQ!
                    </p>
                </div>
            </div>



        </div>
    )
}

export default ContactUs