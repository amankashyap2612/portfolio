import CountUp from "react-countup";

function Hero() {
  return (
    <section className="hero-section">

      <div className="container">

        <div className="row align-items-center">

          <div className="col-lg-6" >

            <h5 className="fw-bold mb-3">I am Aman Kashyap</h5>

            <h1 className="hero-title">
              PHP Developer + <br />
              <span className="text-gradient">
                Laravel & CodeIgniter Expert
              </span>
            </h1>

            <p className="my-4 text-secondary lead">
              PHP Developer with 2+ years experience in Laravel, CodeIgniter and React.
              I build scalable CRM systems, LMS platforms and enterprise web applications.
            </p>

            <div className="d-flex align-items-center gap-3">

              <a
                href="/AMAN_CV.pdf"
                download
                className="btn btn-outline-light rounded-pill px-4 py-2"
              >
                Download CV
                <i className="fa fa-download ms-2"></i>
              </a>

              <div className="d-flex gap-3 ms-3">

                <a href="#" className="text-white">
                  <i className="fab fa-twitter"></i>
                </a>

                <a
                  href="https://github.com/amankashyap2612"
                  className="text-white"
                  target="_blank"
                >
                  <i className="fab fa-github"></i>
                </a>
                 <a
                    href="https://www.linkedin.com/in/aman-kashyap-9a8684222/"
                    className="text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-linkedin"></i>
                </a>

              </div>

            </div>

          </div>

        </div>

        {/* STATS */}

        <div className="row mt-5 pt-5 text-center">

          <div className="col-md-3 stat-box">

            <h2>
              <CountUp end={3} duration={2} />+
            </h2>

            <p>Years Experience</p>

          </div>

          <div className="col-md-3 stat-box">

            <h2>
              <CountUp end={12} duration={2} />+
            </h2>

            <p>Projects Completed</p>

          </div>

          <div className="col-md-3 stat-box">

            <h2>
              <CountUp end={5} duration={2} />+
            </h2>

            <p>Technologies</p>

          </div>

          <div className="col-md-3 stat-box">

            <h2>
              <CountUp end={100} duration={2} />%
            </h2>

            <p>Project Delivery</p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;