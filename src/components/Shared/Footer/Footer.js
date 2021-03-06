import React from 'react';
import footer from '../../images/header2.png';

const Footer = () => {
    return (
        <div>
             <div>
                    <img className='w-100' src={footer} alt="headerImage" />
                </div>
            <footer style={{backgroundColor:'#003254'}}>
                <div className="row row-cols-1 row-cols-md-3 mx-2 g-4 px-4 text-white border-bottom border-secondary">
                    <div className="p-4">
                        <h4 className="border-bottom border-warning text-warning pb-2">Our Services</h4>
                        <ul>
                            <li>Our Team</li>
                            <li>Contact Us</li>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Terms and Services</li>
                        </ul>
                    </div>
                    <div className="p-4">
                        <h4 className="border-bottom text-info border-info pb-2">Contact US</h4>
                        <p><i className="fas fa-map-marker-alt"></i> Eastern Housing, Dhaka, Bangladesh</p>
                        <p><i className="fas fa-envelope"></i> info123@traveltalk.com</p>
                        <p><i className="fas fa-phone-alt"></i> +880 123-456-789</p>
                        <p><i className="fas fa-phone-alt"></i> +880 456-123-987</p>
                    </div>
                    <div className="p-4">
                        <h4 className="border-bottom pb-2">Subscribe</h4>
                        <div className="input-group input-group-lg">
                            <input type="text" placeholder="Enter Email" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                            <span className="input-group-text btn-danger btn" id="inputGroup-sizing-lg">Subscribe</span>
                            <p>Get the latest news and updates right at your inbox.</p>
                        </div>
                    </div>
                </div>
                <div className="text-light text-center p-4">
                    <p>Copyright <span>&copy;</span>2022 <span className="text-warning">TravelTalk</span> All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;