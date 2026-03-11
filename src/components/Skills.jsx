function Skills() {

  const skills = [
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      percent: "95%"
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      percent: "90%"
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      percent: "85%"
    },
    {
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      percent: "90%"
    },
    {
      name: "Laravel",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
      percent: "85%"
    },
    {
      name: "CodeIgniter",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg",
      percent: "90%"
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      percent: "75%"
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      percent: "90%"
    },
    {
      name: "jQuery",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
      percent: "85%"
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      percent: "90%"
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      percent: "85%"
    },
    {
      name: "Bitbucket",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg",
      percent: "80%"
    },
    {
      name: "REST API",
      icon: "https://cdn-icons-png.flaticon.com/512/2165/2165004.png",
      percent: "85%"
    }
  ];

  return (
    <section id="skills">

      <div className="container text-center">

        <h2 className="display-6 fw-bold mb-5">
          My <span className="text-gradient">Skills</span>
        </h2>

        <div className="row g-4 justify-content-center">

          {skills.map((skill, index) => (

            <div key={index} className="col-6 col-md-3 col-lg-2">

              <div className="skill-card" data-aos="fade-up">

                <img src={skill.icon} alt={skill.name} />

                <h6>{skill.name}</h6>

                <span className="text-gradient fw-bold">
                  {skill.percent}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;