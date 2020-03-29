/**
 *
 * Footer
 *
 */

import React from 'react';

import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

import Newsletter from '../../containers/Newsletter';

const Footer = props => {
  const infoLinks = [
    { id: 0, name: 'Contacta con nosotros', to: '/contact' },
  ];

  const footerBusinessLinks = (
    <ul className='support-links'>
      <li className='footer-link'>
        <Link to='/register'>SignUp</Link>
      </li>
      <li className='footer-link'>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );

  const footerLinks = infoLinks.map(item => (
    <li key={item.id} className='footer-link'>
      <Link key={item.id} to={item.to}>
        {item.name}
      </Link>
    </li>
  ));

  return (
    <footer className='footer'>
      <Container>
        <div className='footer-content'>
          <div className='footer-block'>
            <div className='block-title'>
              <h2>Enlaces</h2>
            </div>
            <div className='block-content'>
              <ul>{footerLinks}</ul>
            </div>
          </div>
          <div className='footer-block'>
            <div className='block-title'>
              <h2>Newsletter</h2>
              <Newsletter />
            </div>
          </div>
        </div>

        <div className='footer-copyright'>
          <span>© {new Date().getFullYear()} MERN Store</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
