import React from 'react';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
    return (
        <div className="container-fluid">
            <div className="row section-container">
                <div className="col">
                    <h1 className="page-header">Privacy Policy</h1>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <p className="section-body">
                        At VerbiQ, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and protect your information when you use our platform.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h4 className="section-header">1. Information We Collect</h4>
                    <p className="section-body">
                        <strong>Personal Information: </strong>VerbiQ does not require or collect personal information for anonymous note postings.
                    </p>
                    <p className="section-body">
                        <strong>Non-Personal Information:</strong>
                        <ul>
                            <li>
                                <strong>IP Addresses: </strong>We may collect IP addresses for security and operational purposes, such as preventing abuse and ensuring the integrity of the platform.
                            </li>
                            <li>
                                <strong>Cookies: </strong>VerbiQ currently does not use cookies. If implemented in the future, cookies may be used to enhance user experience, and you will be able to manage your cookie preferences through your browser settings.
                            </li>
                        </ul>
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h4 className="section-header">2. Use of Information</h4>
                    <p className="section-body">
                        <strong>Non-Personal Information:</strong> We may use non-personal information for security monitoring, website performance analysis, and to improve the user experience on VerbiQ. This information may also be used to ensure compliance with our terms and to protect against fraudulent or malicious activity.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h4 className="section-header">3. Data Sharing</h4>
                    <p className="section-body">
                        <ul>
                            <li><strong>Service Providers: </strong>We do not sell or rent your personal information to third parties. We may share non-personal information with trusted service providers to assist us in operating VerbiQ, such as hosting services or analytics providers.</li>
                            <li><strong>Legal Requirements: </strong>We may disclose information if required to do so by law or in response to valid requests by public authorities.</li>
                        </ul>
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h4 className="section-header">4. Data Security</h4>
                    <p className="section-body">
                        We implement reasonable security measures to protect against unauthorized access, alteration, disclosure, or destruction of data. However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h4 className="section-header">5. Cookies</h4>
                    <p className="section-body">
                        VerbiQ does not currently use cookies. If cookies are implemented in the future, this section will be updated to reflect their usage and how you can manage your preferences.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h4 className="section-header">6. Third-Party Links</h4>
                    <p className="section-body">
                        VerbiQ may include links to external websites not operated by us. We are not responsible for the content or privacy practices of these third-party sites. We encourage you to review the privacy policies of any third-party websites you visit.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h4 className="section-header">7. Children's Privacy</h4>
                    <p className="section-body">
                        VerbiQ is not intended for use by individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h4 className="section-header">8. Changes to This Privacy Policy</h4>
                    <p className="section-body">
                        VerbiQ reserves the right to update this Privacy Policy at any time. Changes will be effective immediately upon posting the updated policy on our website. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
                    </p>
                </div>
            </div>


            <div className="row">
                <div className="col">
                    <h4 className='section-header'>9. Contact us</h4>
                    <p className='section-body'>
                        For inquiries or feedback, please reach out to us at <Link to="/contact_us">Contact Us</Link>
                    </p>
                </div>
            </div>

        </div>
    );
}

export default PrivacyPolicy;
