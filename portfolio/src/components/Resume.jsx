function Resume() {
  return (
    <section id="resume" className="py-100">

      <div className="container">

        <div className="row g-5">

          {/* EXPERIENCE */}

          <div className="col-lg-6">

            <div className="section-header mb-5">

              <h2 className="display-6 fw-bold text-gradient">
                <i className="fa-solid fa-award me-2"></i>
                My Experience
              </h2>

            </div>

            {/* KGN Infotech */}

            <div className="resume-card mb-4">

              <span className="resume-date">
                Dec 2024 - Present
              </span>

              <h4 className="resume-title">
                Laravel Developer
              </h4>

              <p className="resume-location">
                KGN Infotech
              </p>

            </div>


            {/* PC Training Institute */}

            <div className="resume-card">

              <span className="resume-date">
                Dec 2022 - Jul 2024
              </span>

              <h4 className="resume-title">
                PHP Developer
              </h4>

              <p className="resume-location">
                PC Training Institute
              </p>

            </div>

          </div>


          {/* EDUCATION */}

          <div className="col-lg-6">

            <div className="section-header mb-5">

              <h2 className="display-6 fw-bold text-gradient">
                <i className="fa-solid fa-graduation-cap me-2"></i>
                My Education
              </h2>

            </div>


            {/* MCA */}

            <div className="resume-card mb-4">

              <span className="resume-date">
                2023 - Present
              </span>

              <h4 className="resume-title">
                Master of Computer Applications (MCA)
              </h4>

              <p className="resume-location">
                Pursuing
              </p>

            </div>


            {/* BA */}

            <div className="resume-card">

              <span className="resume-date">
                2017 - 2021
              </span>

              <h4 className="resume-title">
                Bachelor of Arts
              </h4>

              <p className="resume-location">
                Graduate
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Resume;