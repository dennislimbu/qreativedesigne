import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light px-4">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand t" to="/">
          <img
            src="/images/home/logo/Q.png"
            alt="Qreative Designe Logo"
            style={{
              height: '38px',
              width: 'auto',
              objectFit: 'contain',
              display: 'inline-block',
            }}
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="mainNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
