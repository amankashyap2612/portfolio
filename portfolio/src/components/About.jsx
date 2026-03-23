function About() {
  return (
    <section id="about"> 
      <div className="text-center mb-5">
        <h2 className="display-6 fw-bold">
          About <span className="text-gradient">Me</span>
        </h2>
      </div>

      <div className="row justify-content-center">

        <div className="col-lg-8 p-5">

          <p className="text-secondary lead">
            I am a passionate <b>PHP Developer</b> with over 
            <b> 2+ years of experience</b> specializing in 
            <b> Laravel</b> and <b>CodeIgniter</b>. I build 
            scalable web applications, CRM systems, and 
            business solutions that solve real-world problems.
          </p>

          <p className="text-secondary">
            I have worked on multiple real-world projects including 
            <b> CRM systems</b>, <b>MLM platforms</b>, 
            <b> LMS applications</b>, and <b>job portals</b>. 
            My focus is on writing clean, maintainable code and 
            developing efficient backend systems that improve 
            business operations.
          </p>

          <p className="text-secondary">
            I enjoy building secure APIs, optimizing database 
            performance, and creating user-friendly solutions. 
            I am always eager to learn new technologies and 
            continuously improve my development skills.
          </p>

          {/* 🔥 CTA BUTTON */}
          <div className="text-center mt-4">
            <a 
              href="https://wa.me/918700435202" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success px-4 py-2 d-inline-flex align-items-center gap-2"
            >
              <i className="fa-brands fa-whatsapp"></i>
              Hire Me 
            </a>
          </div>

        </div>

      </div> 
    </section>
  );
}

export default About;