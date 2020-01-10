import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import "./Footer.scss";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "logo.svg"}) {
        publicURL
      }
    }
  `);
  const itemsSocial = [
    { href: 'https://twitter.com/halolabteam', classIcon: 's-twitter' },
    { href: 'https://www.instagram.com/halolabteam/', classIcon: 's-inst' },
    { href: 'https://www.facebook.com/halolabteam/', classIcon: 's-fb' },
    { href: 'https://www.behance.net/halolab', classIcon: 's-beh' },
    { href: 'https://dribbble.com/halolab', classIcon: 's-dbl' },
  ];

  return (
    <div>
      <footer className="clearfix">
        <div className="footer_conteiner">
          <div className="footer__logo">
            <img src={data.file.publicURL} alt="logo"/>
            With Love from Halo Lab
          </div>
        
          <div className="socials">
            <ul>
              {
                itemsSocial.map(({ href, classIcon }) => {
                  return (
                    <li key={href}>
                      <a href={href} className={classIcon}>{}</a>
                    </li>
                  );
                })
              }
            </ul>
          </div>
        </div>
      </footer>
      <div className="modal-overlay"></div>
    </div>
  );
};

export default Footer;
