import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary-bg w-full md:p-4">
      <div className="p-2 max-w-6xl mx-auto px-6 md:px-8 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-4">
          <div className="text-white text-lg font-bold my-4 md:my-auto">
            {/* Logo */}
            <NavLink to="/" className="md:text-4xl">
              NextVision-IT
            </NavLink>
          </div>

          <div>
            <h4 className="text-primary-text font-bold mb-4">Kontakt</h4>
            <ul className="text-secondary-text">
              <li>Max Mustermann</li>
              <li>info@mustermann.de</li>
              <li>Musterstraße 77</li>
              <li>123456 Muster</li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary-text font-bold mb-4">Leistungen</h4>
            <ul className="text-secondary-text">
              <li>
                <NavLink to="/service">IT-Consulting</NavLink>
              </li>
              <li>
                <NavLink to="/service">Webdesign</NavLink>
              </li>
              <li>
                <NavLink to="/service">Digitalisierung</NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary-text font-bold mb-4">Informationen</h4>
            <ul className="text-secondary-text">
              <li>
                <NavLink to="/datenschutz">Datenschutz</NavLink>
              </li>
              <li>
                <NavLink to="/impressum">Impressum</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
