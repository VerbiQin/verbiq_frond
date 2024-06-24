import React from 'react';
import { Link } from 'react-router-dom';

function Disclaimer() {
    return (
        <div className="container-fluid">
            <div className="row section-container">
                <div className="col">
                    <h1 className="page-header">Disclaimer</h1>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <p className="section-body">
                        Welcome to VerbiQ. By accessing and using our platform, you acknowledge and agree to the following disclaimers. Please read these carefully before using our services.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h4 className="section-header">1. General Disclaimer</h4>
                    <p className="section-body">
                        VerbiQ is provided on an "as is" and "as available" basis. While we strive to maintain the platform's functionality and security, we make no warranties or representations regarding the accuracy, reliability, or availability of the platform. We do not guarantee that the platform will be free from errors, viruses, or other harmful components.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h4 className="section-header">2. Content Disclaimer</h4>
                    <p className="section-body">
                        The content posted on VerbiQ is created by users and reflects their own views and opinions. VerbiQ does not endorse, guarantee, or assume responsibility for the accuracy, completeness, or reliability of any content posted by users. Users are responsible for the content they post and must ensure it complies with all applicable laws and regulations.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h4 className="section-header">3. User Responsibility</h4>
                    <p className="section-body">
                        Users are solely responsible for the content they post on VerbiQ. By posting content, you agree not to use the platform for any unlawful or unauthorized purposes, including but not limited to posting content that is illegal, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h4 className="section-header">4. Limitation of Liability</h4>
                    <p className="section-body">
                        To the fullest extent permitted by law, VerbiQ and its affiliates, officers, directors, employees, and agents shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the platform, including but not limited to any errors or omissions in content, any loss or damage of any kind incurred as a result of the use of any content posted, transmitted, or otherwise made available via the platform, even if advised of their possibility.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h4 className="section-header">5. External Links Disclaimer</h4>
                    <p className="section-body">
                        VerbiQ may contain links to external websites that are not provided or maintained by or in any way affiliated with us. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h4 className="section-header">6. Changes to This Disclaimer</h4>
                    <p className="section-body">
                        VerbiQ reserves the right to update this Disclaimer at any time. Changes will be effective immediately upon posting the updated Disclaimer on our website. We encourage you to review this Disclaimer periodically to stay informed about our practices and your responsibilities.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h4 className="section-header">7. Note on Post Permanence</h4>
                    <p className="section-body">
                        Please note: Once you upload content on VerbiQ, it cannot be edited, deleted, or tracked by the user who posted it. Please ensure that your posts comply with our guidelines before uploading.
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h4 className="section-header">8. Contact Us</h4>
                    <p className="section-body">
                        If you have any questions or concerns about this Disclaimer, please contact us at:
                    </p>
                    <p className="section-body">
                    <Link to="/contact_us">Contact Us</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Disclaimer;
