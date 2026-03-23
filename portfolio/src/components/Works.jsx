import { useState } from "react";

function Works() {

  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Deeba Dies & Tools",
      category: "web",
      img: "/images/deeba.png",
      link: "https://erp.deebadies.com/login",
      desc: "Assign dies to workers and track progress efficiently with automated status updates"
    },
    {
      title: "VSERVE Real State",
      category: "web",
      img: "/images/assetx.png",
      link: "https://vserverealestate.com",
      desc: "A modern platform for buying, selling, and investing in properties across India and Dubai. "
    },
    {
      title: "CFT Education LMS",
      category: "web",
      img: "/images/cft.png",
      link: "https://cftedu.in",
      desc: "Learning management system for course management and assessments"
    },
    {
      title: "Digilearner",
      category: "web",
      img: "/images/digilearner.png",
      link: "https://digilearner.in/",
      desc: "A digital platform for publishing and delivering educational books and learning content."
    },
    {
      title: "Aadya Global Healthcare CRM",
      category: "crm",
      img: "/images/aghc.png",
      link: "https://aadyaglobal.com",
      desc: "Medical tourism CRM for managing clients and operations"
    },
    {
      title: "UBadmit",
      category: "web",
      img: "/images/ubadmit.png",
      link: "https://ubadmit.com/",
      desc: "Making Your Study Abroad Dream a Smooth Reality"
    }
  ];

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="works">

      <div className="container">

        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-gradient">
            My Recent Works
          </h2>
        </div>

        {/* FILTER */}

        <div className="d-flex justify-content-center mb-5">

          <div className="work-filter-nav d-inline-flex align-items-center">

            <button
              className={`filter-btn ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              All
            </button>

            <button
              className={`filter-btn ${filter === "web" ? "active" : ""}`}
              onClick={() => setFilter("web")}
            >
              Web Apps
            </button>

            <button
              className={`filter-btn ${filter === "crm" ? "active" : ""}`}
              onClick={() => setFilter("crm")}
            >
              CRM
            </button>

          </div>

        </div>

        {/* PROJECT GRID */}

        <div className="row g-4">

          {filtered.map((project, index) => (

            <div key={index} className="col-md-6 col-lg-4">

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >

                <div className="work-card">

                  <div className="work-img-container">

                    <img
                      src={project.img}
                      className="img-fluid"
                      alt={project.title}
                    />

                  </div>

                  <div className="p-3">

                    <h5 className="text-white">
                      {project.title}
                    </h5>

                    <p className="text-secondary">
                      {project.desc}
                    </p>

                  </div>

                </div>

              </a>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Works;