function Services() {
  return (
    <section id="services">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-gradient">
            My Quality Services
          </h2>

          <p className="text-secondary mt-3">
            I build scalable web applications, CRM systems, and modern web solutions using PHP frameworks.
          </p>
        </div>

        <div className="service-list-container">

          {/* Service 1 */}

          <div className="service-row" data-aos="fade-right">
            <span className="service-number">01</span>

            <span className="service-title">
              Custom Web Development
            </span>

            <p className="service-desc d-none d-md-block">
              Building responsive and scalable web applications using PHP, Laravel, and CodeIgniter with optimized performance.
            </p>

            <span className="service-arrow">
              <i className="fa fa-arrow-down"></i>
            </span>
          </div>


          {/* Service 2 */}

          <div className="service-row" data-aos="fade-right">
            <span className="service-number">02</span>

            <span className="service-title">
              CRM & Admin Panel Development
            </span>

            <p className="service-desc d-none d-md-block">
              Developing powerful CRM systems and admin dashboards for managing clients, users, and business workflows.
            </p>

            <span className="service-arrow">
              <i className="fa fa-arrow-down"></i>
            </span>
          </div>


          {/* Service 3 */}

          <div className="service-row" data-aos="fade-right">
            <span className="service-number">03</span>

            <span className="service-title">
              API Integration & Backend Development
            </span>

            <p className="service-desc d-none d-md-block">
              Creating secure backend systems and integrating REST APIs for payment systems, data exchange, and third-party services.
            </p>

            <span className="service-arrow">
              <i className="fa fa-arrow-down"></i>
            </span>
          </div>


          {/* Service 4 */}

          <div className="service-row" data-aos="fade-right">
            <span className="service-number">04</span>

            <span className="service-title">
              Database Design & Optimization
            </span>

            <p className="service-desc d-none d-md-block">
              Designing efficient MySQL databases with optimized queries to improve performance and scalability.
            </p>

            <span className="service-arrow">
              <i className="fa fa-arrow-down"></i>
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Services;