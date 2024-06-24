import React from 'react';
import { Link } from 'react-router-dom';

function CopyrightPolicy() {
    return (
        <div className="container-fluid">
            <div className="row section-container">
                <div className="col">
                    <h1 className="page-header">Copyright Policy</h1>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <p className="section-body">
                        At VerbiQ, we respect the intellectual property rights of others and expect our users to do the same. This Copyright Policy outlines our procedures for addressing claims of copyright infringement and describes how you can report suspected copyright violations.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h4 className="section-header">1. Reporting Copyright Infringements</h4>
                    <p className="section-body">
                        If you believe that content on VerbiQ infringes your copyright, please provide us with a written notice that includes the following information:
                    </p>
                    <ul className="section-body">
                        <li><strong>Identification of the copyrighted work:</strong> A description of the copyrighted work that you claim has been infringed.</li>
                        <li><strong>Identification of the infringing material:</strong> A description of the material that you claim is infringing and that you request be removed or access to which be disabled, including the URL or other location of that material.</li>
                        <li><strong>Your contact information:</strong> Your address, telephone number, and email address.</li>
                        <li><strong>A statement of good faith:</strong> A statement that you have a good faith belief that the use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
                        <li><strong>A statement of accuracy:</strong> A statement that the information in the notification is accurate, and under penalty of perjury, that you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
                        <li><strong>Your signature:</strong> A physical or electronic signature of the copyright owner or a person authorized to act on their behalf.</li>
                    </ul>
                    <p className="section-body">
                        You can send your notice to:
                    </p>
                    <p className="section-body">
                    <Link to="/contact_us">Contact Us</Link>
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h4 className="section-header">2. Counter-Notification Procedure</h4>
                    <p className="section-body">
                        If you believe that your content was removed or disabled by mistake or misidentification, you can submit a counter-notification to us. The counter-notification must include the following information:
                    </p>
                    <ul className="section-body">
                        <li><strong>Identification of the removed material:</strong> A description of the material that has been removed or to which access has been disabled, including the URL or other location of that material before it was removed or disabled.</li>
                        <li><strong>Your contact information:</strong> Your address, telephone number, and email address.</li>
                        <li><strong>A statement of good faith:</strong> A statement that you have a good faith belief that the material was removed or disabled as a result of mistake or misidentification of the material.</li>
                        <li><strong>Consent to jurisdiction:</strong> A statement that you consent to the jurisdiction of the Federal District Court for the judicial district in which your address is located, or if your address is outside the United States, for any judicial district in which VerbiQ may be found, and that you will accept service of process from the person who provided the original infringement notification or an agent of such person.</li>
                        <li><strong>Your signature:</strong> A physical or electronic signature of the copyright owner or a person authorized to act on their behalf.</li>
                    </ul>
                    <p className="section-body">
                        You can send your counter-notification to:
                    </p>
                    <p className="section-body">
                    <Link to="/contact_us">Contact Us</Link>
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h4 className="section-header">3. Repeat Infringers</h4>
                    <p className="section-body">
                        VerbiQ will promptly terminate without notice the accounts of users that are determined by VerbiQ to be "repeat infringers." A repeat infringer is a user who has been notified of infringing activity more than twice and/or has had a user submission removed from the platform more than twice.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h4 className="section-header">4. Changes to This Copyright Policy</h4>
                    <p className="section-body">
                        VerbiQ reserves the right to update this Copyright Policy at any time. Changes will be effective immediately upon posting the updated policy on our website. We encourage you to review this Copyright Policy periodically to stay informed about how we are protecting intellectual property rights.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h4 className="section-header">5. Contact Us</h4>
                    <p className="section-body">
                        If you have any questions or concerns about this Copyright Policy, please contact us at:
                    </p>
                    <p className="section-body">
                    <Link to="/contact_us">Contact Us</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CopyrightPolicy;
