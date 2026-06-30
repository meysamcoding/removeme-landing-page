import Container from "../components/Container";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-600">
            RemoveMe
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-8 lg:flex">
            <li>
              <a href="#how" className="hover:text-blue-600">
                How It Works
              </a>
            </li>

            <li>
              <a href="#benefits" className="hover:text-blue-600">
                Benefits
              </a>
            </li>

            <li>
              <a href="#faq" className="hover:text-blue-600">
                FAQ
              </a>
            </li>
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden items-center gap-4 lg:flex">
            <button className="rounded-lg border px-5 py-2">
              Login
            </button>

            <button className="rounded-lg bg-blue-600 px-5 py-2 text-white">
              Start Free Scan
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden">
            ☰
          </button>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;