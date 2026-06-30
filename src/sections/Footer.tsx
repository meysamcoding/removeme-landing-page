import Container from "../components/Container";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-16 text-white">
      <Container>
        <div className="grid gap-10 md:grid-cols-3">
          {/* Company */}
          <div>
            <h3 className="text-2xl font-bold">RemoveMe</h3>

            <p className="mt-4 text-slate-300 leading-7">
              Protect your personal information by removing it from data broker
              websites and continuously monitoring your online privacy.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">
              Quick Links
            </h4>

            <ul className="space-y-3 text-slate-300">
              <li>
                <a href="#how">How It Works</a>
              </li>

              <li>
                <a href="#benefits">Benefits</a>
              </li>

              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">
              Follow Us
            </h4>

            <div className="flex gap-4 text-2xl">
            <FaFacebook className="cursor-pointer hover:text-blue-400 transition" />
            <FaInstagram className="cursor-pointer hover:text-pink-400 transition" />
            <FaLinkedin className="cursor-pointer hover:text-blue-500 transition" />
            <FaYoutube className="cursor-pointer hover:text-red-500 transition" />
          </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
          © 2026 RemoveMe. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;