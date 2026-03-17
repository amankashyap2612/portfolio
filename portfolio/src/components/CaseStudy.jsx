import Slider from "react-slick";
import { Link } from "react-router-dom";

function CaseStudy() {

const projects = [

{
id:1,
title:"Indian Army Veterans Portal",
img:"https://picsum.photos/800/500?1",
desc:"CRM system for managing ex-servicemen services",
tech:"CodeIgniter 4 • MySQL",
link:"https://indianarmyveterans.gov.in"
},

{
id:2,
title:"EZE Jobs Platform",
img:"https://picsum.photos/800/500?2",
desc:"Job portal connecting job seekers with employers",
tech:"CodeIgniter 4 • MySQL",
link:"https://ezejobs.vetab.in"
},

{
id:3,
title:"CFT Education LMS",
img:"https://picsum.photos/800/500?3",
desc:"Learning management system for courses",
tech:"CodeIgniter • PHP",
link:"https://cftedu.in"
},

{
id:4,
title:"Reeva Developers MLM",
img:"https://picsum.photos/800/500?4",
desc:"MLM platform with property booking",
tech:"PHP • MySQL",
link:"https://reevadeveloperspvtltd.com"
}

];

const settings = {
dots:true,
infinite:true,
speed:500,
slidesToShow:3,
slidesToScroll:1,
autoplay:true,
autoplaySpeed:3000,
responsive:[
{
breakpoint:1024,
settings:{slidesToShow:2}
},
{
breakpoint:768,
settings:{slidesToShow:1}
}
]
};

return(

<section id="case-study">

<div className="container">

<div className="text-center mb-5">
<h2 className="display-5 fw-bold text-gradient">
Project Case Studies
</h2>
</div>

<Slider {...settings}>

{projects.map((project,index)=>(

<div key={index}>

<div className="work-card p-3">

<img
src={project.img}
className="img-fluid rounded-3"
alt={project.title}
/>

<h5 className="mt-3 text-white">
{project.title}
</h5>

<p className="text-secondary">
{project.desc}
</p>

<small className="text-gradient">
{project.tech}
</small>

<br/>

<Link
to={`/project/${project.id}`}
className="btn-gradient mt-3"
>
View Project
</Link>

</div>

</div>

))}

</Slider>

</div>

</section>

)

}

export default CaseStudy;