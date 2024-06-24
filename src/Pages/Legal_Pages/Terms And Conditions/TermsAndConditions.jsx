import React from 'react';
import { Link } from 'react-router-dom';

function TermsAndConditions() {
    return (
        <div className="container-fluid">
            <div className="row section-container">
                <div className="col">
                    <h1 className="page-header">Terms And Conditions</h1>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <p className="section-body">
                        Welcome to VerbiQ. By accessing and using our website, you agree to comply with and be bound by the following terms and conditions. Please read these terms carefully before using our services.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h4 className="section-header">1. Acceptance of Terms</h4>
                    <p className="section-body">
                        By using VerbiQ, you agree to these terms and conditions. If you do not agree with any part of these terms, please do not use our platform.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h4 className="section-header">2. Use of the Platform</h4>
                    <ul className="section-body">
                        <li><strong>Eligibility:</strong> You must be at least 13 years old to use VerbiQ. By using the platform, you represent that you meet this age requirement.</li>
                        <li><strong>Account Creation:</strong> VerbiQ operates without an authentication system. Users do not need to create an account to post or view notes.</li>
                        <li><strong>Content Posting:</strong> Users can post anonymous notes. Once posted, notes cannot be deleted, updated, or retracted. Users are responsible for the content they post and must ensure it complies with all applicable laws and regulations.</li>
                        <li><strong>Prohibited Content:</strong> Users agree not to post content that is illegal, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable. VerbiQ reserves the right to remove any content that violates these terms.</li>
                    </ul>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h4 className="section-header">3. Privacy</h4>
                    <p className="section-body">
                        Our Privacy Policy outlines how we handle your information. By using VerbiQ, you consent to the collection and use of information as described in our Privacy Policy.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h4 className="section-header">4. Intellectual Property</h4>
                    <ul className="section-body">
                        <li><strong>User Content:</strong> Users retain ownership of the content they post on VerbiQ. By posting content, you grant VerbiQ a non-exclusive, royalty-free, perpetual, and worldwide license to use, display, and distribute your content.</li>
                        <li><strong>Trademarks:</strong> All trademarks, logos, and service marks displayed on VerbiQ are the property of their respective owners.</li>
                    </ul>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h4 className="section-header">5. Limitation of Liability</h4>
                    <p className="section-body">
                        VerbiQ is provided on an "as is" and "as available" basis. We do not guarantee that the platform will be error-free, secure, or uninterrupted. VerbiQ is not liable for any damages resulting from the use or inability to use our platform.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h4 className="section-header">6. Indemnification</h4>
                    <p className="section-body">
                        You agree to indemnify and hold harmless VerbiQ, its affiliates, and their respective officers, directors, employees, and agents from any claims, liabilities, damages, and expenses arising out of your use of the platform or violation of these terms.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h4 className="section-header">7. Note on Post Permanence</h4>
                    <p className="section-body">
                        <strong>Please note: </strong> Once you upload content on VerbiQ, it cannot be edited, deleted, or tracked by the user who posted it. Please ensure that your posts comply with our guidelines before uploading.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h4 className="section-header">8. Changes to Terms</h4>
                    <p className="section-body">
                        VerbiQ reserves the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the platform constitutes your acceptance of the revised terms.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h4 className="section-header">9. Governing Law</h4>
                    <p className="section-body">
                        These terms and conditions are governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law principles.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h4 className="section-header">10. Contact Information</h4>
                    <p className="section-body">
                        For inquiries or feedback, please reach out to us at <Link to="/contact_us">Contact Us</Link>.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <p className="section-body">
                        <strong>Thank you for using VerbiQ. We hope you enjoy sharing and discovering anonymous notes on our platform.</strong>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default TermsAndConditions;
