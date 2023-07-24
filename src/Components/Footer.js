import React from 'react';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Contact Information:
            </p>
            <p className="footer-subscription-text">
              48 Iceland St., Ottawa, Ontario
            </p>
            <p className="footer-subscription-text">
              (314) 159-2653
            </p>
            <p className="footer-subscription-text">
              idioms@idioms.com
            </p>
            <p className="footer-subscription-text">
              Mon-Sat: 8:00 a.m. - 7 p.m.
            </p>
            <p className="footer-subscription-link">
              <Link to="/aboutus">About Us</Link>
            </p>
            
        </section>
    </div>
  )
}

export default Footer