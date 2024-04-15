import React from 'react'
import { Link } from 'react-router-dom'
import { socialLinks } from '../constants/index.js'


const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Have a project in mind? <br className="sm:block hidden" />
        Let's build something together.
      </p>

      <div className="flex mt-4">
        {socialLinks.map((link, index) => (
          <Link
            key={index}
            to={link.link}
            className="btn bg-blue-500 text-white px-4 py-2 rounded-md mr-4 flex items-center"
          >
            <img src={link.iconUrl} alt={link.name} className="w-5 h-5 mr-2" />
            {link.name}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CTA