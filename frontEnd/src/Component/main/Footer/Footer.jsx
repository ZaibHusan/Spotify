import React from 'react'
import "./Footer.css"
export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">For the Record</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Communities</h4>
                    <ul>
                        <li><a href="#">For Artists</a></li>
                        <li><a href="#">Developers</a></li>
                        <li><a href="#">Advertising</a></li>
                        <li><a href="#">Investors</a></li>
                        <li><a href="#">Vendors</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Useful links</h4>
                    <ul>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Free Mobile App</a></li>
                        <li><a href="#">Popular by Country</a></li>
                        <li><a href="#">Import your music</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Spotify Plans</h4>
                    <ul>
                        <li><a href="#">Premium Individual</a></li>
                        <li><a href="#">Premium Duo</a></li>
                        <li><a href="#">Premium Family</a></li>
                        <li><a href="#">Premium Student</a></li>
                        <li><a href="#">Spotify Free</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="legal-links">
                    <a href="#">Legal</a>
                    <a href="#">Safety & Privacy Center</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Cookies</a>
                    <a href="#">About Ads</a>
                    <a href="#">Accessibility</a>
                </div>
                <p>© 2025 all right reserved Zaib fro clone</p>
            </div>
        </footer>
    )
}
