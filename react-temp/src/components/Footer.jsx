function Footer() {
  return (
    <footer className="d-flex flex-column align-items-center justify-content-center py-2">
      <div className="mb-2">
        <a
          href="https://www.instagram.com/qreativedesigner/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
          aria-label="Instagram"
          style={{ color: '#000' }}
        >
          <i className="fa-brands fa-instagram footer-icon"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/qreativegraphicdesigner/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
          aria-label="LinkedIn"
          style={{ color: '#000' }}
        >
          <i className="fa-brands fa-linkedin footer-icon"></i>
        </a>

        <a
          href="mailto:qreativedesigner@gmail.com"
          className="mx-2"
          aria-label="Email"
          style={{ color: '#000' }}
        >
          <i className="fa-solid fa-envelope footer-icon"></i>
        </a>
      </div>

      <small className="text-muted">
        © {new Date().getFullYear()} QreativeDesign
      </small>
    </footer>
  );
}

export default Footer;
