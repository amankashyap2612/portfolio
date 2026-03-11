import { useParams } from "react-router-dom";
function ProjectDetail() {
const projects = {
1:{
title:"Indian Army Veterans Portal",
intro:"CRM portal for managing ex-servicemen services.",
problem:"Manual management of veteran records caused inefficiency.",
solution:"Developed centralized CRM system using CodeIgniter 4.",
tech:"CodeIgniter 4 • PHP • MySQL",
link:"https://indianarmyveterans.gov.in"
},
2:{
title:"EZE Jobs Platform",
intro:"Job portal connecting job seekers with employers.",
problem:"Job seekers struggled to find suitable jobs.",
solution:"Built job search platform with employer dashboard.",
tech:"CodeIgniter • PHP • MySQL",
link:"https://ezejobs.vetab.in"
},
3:{
title:"CFT Education LMS",
intro:"Learning management system for institutes.",
problem:"Institutes needed system for course tracking.",
solution:"Created LMS with course management and exams.",
tech:"CodeIgniter • PHP • MySQL",
link:"https://cftedu.in"
}
};
const { id } = useParams();
const project = projects[id];
if(!project){
return 
<h2 className="text-center mt-5">Project Not Found</h2>
;
}
return(
<>
<style>{`
   .hero-banner{
   background: linear-gradient(rgba(15,7,21,0.6), rgba(15,7,21,0.6)),
   url("https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop");
   background-size:cover;
   background-position:center;
   height:400px;
   display:flex;
   align-items:center;
   justify-content:center;
   margin-top:80px;
   }
   .hero-title{
   font-size:4rem;
   font-weight:700;
   color:white;
   }
   .service-details-area{
   padding:80px 0;
   }
   .content-wrap h2{
   font-size:2.5rem;
   font-weight:700;
   margin-bottom:25px;
   }
   .content-wrap h3{
   font-size:1.8rem;
   font-weight:600;
   margin-top:40px;
   margin-bottom:20px;
   }
   .content-wrap p{
   color:#d9d9d9;
   line-height:1.8;
   }
   .contact-form-card{
   background:#140c1c;
   padding:40px;
   border-radius:20px;
   border:1px solid rgba(135,80,247,0.2);
   }
   .sidebar-sticky{
   position:sticky;
   top:40px;
   }
   .form-control{
   background:#05010a;
   border:1px solid #2a1454;
   color:white;
   padding:15px;
   border-radius:10px;
   margin-bottom:20px;
   }
   .submit-btn{
   background:linear-gradient(90deg,#8750f7 0%,#2a1454 100%);
   border:none;
   padding:15px;
   width:100%;
   border-radius:50px;
   color:white;
   font-weight:600;
   transition:0.3s;
   }
   .submit-btn:hover{
   transform:translateY(-3px);
   }
   `}
</style>
{/* HERO */}
<div className="hero-banner">
   <h1 className="hero-title">
      {project.title}
   </h1>
</div>
{/* CONTENT */}
<div className="service-details-area">
   <div className="container">
      <div className="row g-5">
         {/* LEFT SIDE */}
         <div className="col-lg-7">
            <div className="content-wrap">
               <h2>{project.title}</h2>
               <h3>1. Introduction</h3>
               <p>{project.intro}</p>
               <h3>2. Problem</h3>
               <p>{project.problem}</p>
               <h3>3. Solution</h3>
               <p>{project.solution}</p>
               <h3>Tech Stack</h3>
               <p>{project.tech}</p>
               <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="submit-btn mt-3"
                  >
               View Live Project
               </a>
            </div>
         </div>
         {/* RIGHT SIDE FORM */}
         <div className="col-lg-5">
            <div className="sidebar-sticky">
               <div className="contact-form-card">
                  <h3 className="fw-bold mb-4">
                     Get in Touch
                  </h3>
                  <form>
                     <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        />
                     <input
                        type="email"
                        className="form-control"
                        placeholder="Email address"
                        />
                     <textarea
                        className="form-control"
                        rows="5"
                        placeholder="Message"
                        />
                     <button
                        type="submit"
                        className="submit-btn"
                        >
                     Send Message
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
</>
)
}
export default ProjectDetail;