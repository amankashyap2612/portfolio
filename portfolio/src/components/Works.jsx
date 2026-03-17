import { useState } from "react";

function Works() {

  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Indian Army Veterans Portal",
      category: "web",
      img: "https://picsum.photos/600/400?1",
      link: "https://indianarmyveterans.gov.in",
      desc: "CodeIgniter 4 based CRM system for managing veteran services"
    },
    {
      title: "EZE Jobs Platform",
      category: "web",
      img: "https://picsum.photos/600/400?2",
      link: "https://ezejobs.vetab.in",
      desc: "Job search platform connecting job seekers with employers"
    },
    {
      title: "CFT Education LMS",
      category: "web",
      img: "https://picsum.photos/600/400?3",
      link: "https://cftedu.in",
      desc: "Learning management system for course management and assessments"
    },
    {
      title: "Reeva Developers MLM",
      category: "web",
      img: "https://picsum.photos/600/400?4",
      link: "https://reevadeveloperspvtltd.com",
      desc: "MLM platform with sales tracking and property booking"
    },
    {
      title: "Aadya Global Healthcare CRM",
      category: "crm",
      img: "https://picsum.photos/600/400?5",
      link: "https://aadyaglobal.com",
      desc: "Medical tourism CRM for managing clients and operations"
    },
    {
      title: "IGNOU Billing Portal",
      category: "web",
      img: "https://picsum.photos/600/400?6",
      link: "https://testsrv.janmitr.com/ignou_billing",
      desc: "Automated billing system for IGNOU students and administration"
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