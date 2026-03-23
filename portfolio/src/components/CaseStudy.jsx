import { useState } from "react";

function CaseStudy() {
  const [active, setActive] = useState(null);

  const projects = [
    {
      id: 2,
      title: "Ezejob Vetab - ezejobs.vetab.in",
      desc: "Developed a full-scale job portal similar to Naukri.com using CodeIgniter 4, designed to connect recruiters and job seekers on a single platform. The system allows recruiters to register, create company profiles, post job openings, and efficiently manage candidate applications through a centralized dashboard.On the other hand, job seekers can create profiles, upload resumes, search for jobs using advanced filters, and apply directly through the platform. The portal includes features such as job listings, application tracking, and a streamlined user interface that enhances the overall job search experience.The application is built with a focus on performance, usability, and scalability, ensuring smooth interaction for both employers and candidates. It simplifies the hiring process by providing a structured workflow for job posting, candidate filtering, and communication, making it a complete recruitment solution.",
      tech: "CodeIgniter 4 • MySQL"
    },
    {
      id: 3,
      title: "ECHS Janmitr- echs.janmitr.com:",
      desc: "Developed a comprehensive healthcare management system for ECHS (Ex-Servicemen Contributory Health Scheme) using CodeIgniter 4, aimed at streamlining medical service delivery for ex-servicemen. The platform was designed to efficiently manage member records, healthcare services, and medical-related workflows through a centralized digital system.The application includes features such as member registration and profile management, tracking of medical services provided, and handling of medical claim processes. It enables administrators to manage beneficiary data, monitor treatment records, and ensure smooth coordination between healthcare providers and patients.The system focuses on improving operational efficiency by digitizing manual processes, reducing paperwork, and ensuring faster access to healthcare services. With a user-friendly interface and optimized backend, the platform enhances transparency, data accuracy, and overall service delivery for ex-servicemen healthcare management.",
      tech: "CodeIgniter • PHP"
    },
    {
      id: 4,
      title: "Testsrv Janmitr",
      desc: "Developed a comprehensive billing and management portal for IGNOU (Indira Gandhi National Open University) at PCTI Institute using CodeIgniter 4. The system was designed to automate and manage the entire academic and financial workflow, ensuring accurate fee collection and efficient record management.The platform includes modules for program management, faculty management, course tracking, and class scheduling. It enables administrators to maintain structured records of students, assigned courses, faculty details, and scheduled classes. Additionally, the system handles billing operations such as fee generation, payment tracking, and financial reporting.The portal also provides reporting features that help administrators analyze data related to student enrollments, fee status, and academic activities. By digitizing manual processes, the system improves accuracy, reduces administrative workload, and enhances overall operational efficiency within the institute.",
      tech: "Laravel PHP • MySQL"
    },
    {
      id: 5,
      title: "Reeva Developer - reevadeveloperspvtltd.com",
      desc: "Designed and developed a comprehensive Multi-Level Marketing (MLM) and property booking platform using PHP and MySQL, aimed at streamlining sales operations and real estate transactions within a unified system. The platform enables users to register, build and manage their downline network, and track sales performance through an intuitive dashboard.The MLM module includes features such as downline management, commission calculation, and real-time earnings tracking, allowing users to monitor their network growth and income efficiently. It also provides administrative controls for managing users, tracking transactions, and generating reports.In addition to MLM functionalities, the platform integrates a property booking system where users can browse available properties, view detailed information, and book properties directly through the website. This combination of MLM and real estate features simplifies both sales tracking and property transactions.The system is designed with a focus on scalability, data accuracy, and user experience, helping businesses efficiently manage their sales network and property bookings while improving operational transparency and performance..",
      tech: "CodeIgniter PHP • MySQL"
    },
    {
      id: 6,
      title: "Texan Hr Managment System",
      desc: "Developed a comprehensive Human Resource Management System (HRMS) for Texan using PHP and MySQL, designed to streamline employee management, project tracking, and payroll operations within a centralized platform. The system provides an end-to-end solution for managing workforce data, improving operational efficiency, and automating HR processes.The platform includes modules for employee and project management, where detailed employee profiles, employment history, and project assignments are maintained. Administrators can track project progress, assign employees to specific projects, and monitor overall project status through an organized dashboard.The payroll management module automates salary processing by maintaining salary records, handling deductions such as taxes and penalties, and managing advances, loans, allowances, and benefits. The system calculates net pay accurately by combining all earnings and deductions, ensuring transparency and efficiency in financial operations.Additionally, the system includes attendance, timesheet, and leave management features. It tracks employee attendance, records timesheets for project-based work hours, and manages leave and absence records along with applicable deductions. This helps organizations maintain accurate work logs and improves workforce productivity.Overall, the HRMS is designed to simplify complex HR workflows, reduce manual effort, and provide a scalable and efficient solution for managing employees, projects, and payroll in a structured and reliable manner."
    },
    {
      id: 7,
      title: "Online HSE Management Solution",
      desc: "Developed a comprehensive web-based Environment, Health, and Safety (EHS) Management System using PHP and MySQL, designed to streamline the reporting and management of workplace incidents while ensuring compliance with organizational safety standards and regulations.The platform enables employees to log incidents with detailed information, including incident type, location, and description, while allowing management to review, track, and take necessary actions through a structured workflow. It includes a complete incident lifecycle management system with status tracking, updates, and archival of records for future reference.The system incorporates secure authentication with role-based access control, ensuring that different user roles (employees, supervisors, and administrators) have appropriate permissions for reporting, reviewing, and managing incidents.Additionally, the platform provides reporting and analytics features, enabling management to generate insights from incident data, monitor trends, and improve workplace safety measures. The system is designed with a strong focus on data integrity, reliability, and compliance, helping organizations maintain accurate records and adhere to health and safety regulations.Overall, the solution simplifies incident reporting, enhances transparency, and supports proactive safety management within the organization."
    }
  ];

  const toggle = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <section id="case-study" className="py-5">
      <div className="container">

        <style>{`
          .case-card {
            background: rgba(15, 23, 42, 0.6);
            backdrop-filter: blur(12px);
            border-radius: 16px;
            margin-bottom: 18px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
          }

          .case-card:hover {
            border-color: #38bdf8;
            box-shadow: 0 0 20px rgba(56, 189, 248, 0.15);
          }

          .case-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 25px;
            cursor: pointer;
            background: rgba(30, 41, 59, 0.4);
            color: #fff;
            transition: 0.3s;
          }

          .case-header h5 {
            margin: 0;
            font-weight: 600;
            font-size: 1.15rem;
            letter-spacing: 0.5px;
            color: #f1f5f9;
          }

          .case-header:hover {
            background: rgba(51, 65, 85, 0.6);
          }

          .case-body {
            max-height: 0;
            overflow: hidden;
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
            padding: 0 25px;
            opacity: 0;
          }

          .case-body.open {
            max-height: 1200px; /* high value for long text */
            padding: 20px 25px;
            opacity: 1;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
          }

          .desc-text {
            color: #94a3b8;
            line-height: 1.7;
            font-size: 0.95rem;
            margin-bottom: 15px;
          }

          .tech-stack {
            font-weight: 600;
            letter-spacing: 1px;
            text-transform: uppercase;
            font-size: 0.8rem;
          }

          .arrow {
            transition: transform 0.3s ease;
            color: #38bdf8;
            font-size: 1.2rem;
          }

          .arrow.up {
            transform: rotate(180deg);
          }

          .archived-tag {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            font-size: 0.8rem;
            color: #f59e0b;
            margin-top: 15px;
            opacity: 0.8;
          }
        `}</style>

        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-gradient">
            Project Case Studies
          </h2>
          <div className="mx-auto" style={{ height: '4px', width: '60px', background: 'var(--gradient)', borderRadius: '10px' }}></div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            {projects.map((project) => (
              <div key={project.id} className="case-card">
                <div 
                  className="case-header"
                  onClick={() => toggle(project.id)}
                >
                  <h5>{project.title}</h5>
                  <span className={`arrow ${active === project.id ? "up" : ""}`}>
                    ▼
                  </span>
                </div>

                <div className={`case-body ${active === project.id ? "open" : ""}`}>
                  <p className="desc-text">{project.desc}</p>

                  <div className="tech-stack text-gradient">
                    {project.tech}
                  </div>

                  <div className="archived-tag">
                    <span>🔒</span> Project Archived & Confidential
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default CaseStudy;