import Heading from "../common/Heading";

export default function ProjectsPage() {
  return (
    <div>
      <Heading title={"Projects"} />
      <p className='projectsMainDesc'>Here are some examples of projects I've worked on.</p>
      <div>
        <section className='project'>
          <Heading size={2} title={"The Flowerpot"} />
          <p className='projectLabel'>Semester Project 2</p>
          <p>
            An e-commerce site where admin users with the correct user name and password can log in to publish new products to the shop or edit and delete
            existing products. All visitors can view products and add products to the cart. The project is built using Bootstrap and Sass.
          </p>
          <div className='projectLinksSections'>
            <a href='https://github.com/linelind/line-lindheim-toresby_sp2' target='_blank'>
              GitHub
            </a>
            <a href='https://magnificent-centaur-7f9542.netlify.app/index.html' target='_blank'>
              Website
            </a>
          </div>
        </section>
        <section className='project'>
          <Heading size={2} title={"The Shakespeare Plays"} />
          <p className='projectLabel'>JavaScript Frameworks CA</p>
          <p>
            A smaller project to showcase understanding of using Routes in React, and working with API using Axios. The project is built using React and
            Bootstrap.
          </p>
          <div className='projectLinksSections'>
            <a href='https://github.com/Noroff-FEU-Assignments/js-frameworks-course-assignment-linelind' target='_blank'>
              GitHub
            </a>
          </div>
        </section>
        <section className='project'>
          <Heading size={2} title={"PlotTwist"} />
          <p className='projectLabel'>Project Exam 2</p>
          <p>
            A social media platform where users can register, log in, create posts, comment and react to posts, update their profile and follow or unfollow
            other users. The project is built using React, Bootstrap and Sass.
          </p>
          <div className='projectLinksSections'>
            <a href='https://github.com/Noroff-FEU-Assignments/project-exam-2-linelind' target='_blank'>
              GitHub
            </a>
            <a href='https://plottwist-linelind.netlify.app' target='_blank'>
              Website
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
