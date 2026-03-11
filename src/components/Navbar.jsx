function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">

        <a className="navbar-brand text-white fw-bold" href="#">Aman</a>

        <button
          className="navbar-toggler border-0 text-white"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <i className="fa fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">

          <ul className="navbar-nav ms-auto me-4">
            <li className="nav-item">
              <a className="nav-link" href="#about">About me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">Services</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#works">Works</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#skills">Skills</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>

          <button className="btn-gradient">Hire Me</button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;