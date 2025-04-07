import { Facebook, Instagram, Twitter, MessageCircle } from "lucide-react";
import Nav from "react-bootstrap/Nav";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://www.facebook.com/shubham.nikhade.140?mibextid=wwXIfr&rdid=og41F8eLhauGt2dm&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18qYakw1ts%2F%3Fmibextid%3DwwXIfr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="hover:text-blue-500 transition-colors" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="hover:text-pink-500 transition-colors" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="hover:text-blue-400 transition-colors" />
          </a>
          <a
            href="https://wa.me/224626127594"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="hover:text-green-400 transition-colors" />
          </a>
        </div>

        {/* Links */}
        <div className="text-center">
          
            <a
              href="#"
              className="block md:inline hover:underline text-sm md:mx-4"
            >
              Terms & Conditions
            </a>
            <a
              href="#contact"
              className="block md:inline hover:underline text-sm md:mx-4"
            >
              Contact Us
            </a>
          
        </div>

        {/* Contact Info */}
        <div className="text-sm text-center md:text-right">
          <p>Email: global.forage3734@gmail.com</p>
          <p>
            Phone:
            <br /> +224 627066363 <br />
            +224 629739393 <br />
            +224 626127594
          </p>
        </div>
      </div>

      <div className="mt-6 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} Global Forage. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
