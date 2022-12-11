import Heading from "../common/Heading";

export default function Resume() {
  return (
    <>
      <section className='resumeIntro'>
        <div className='resumeIntroContent'>
          <Heading title={"Resume"} />
          <p>Hi, I'm Line</p>
          <p>
            I have experience from working in Publishing, where I have worked for the last 3+ years. I am a certified Product Owner, and I currently work as a
            Product Owner in a strong and warm agile team.
          </p>
          <p>
            For the last 2 years I have studied Frontend development at Noroff fulltime alongside my job. Having realized that my true passion is code, I am now
            fully set on becoming a developer. My goal is to further expand my knowledge into backend development, and eventually be able to work as a fullstack
            developer. I believe my experience from working with languages, grammar, media content and communication is a real strenght for me as I am moving
            into this new and exciting area.
          </p>
          <p>My current workplace has provided me with useful experience in Agile Scrum and Kanban, Accessibility, JIRA and much more.</p>
        </div>
      </section>
      <section className='resumeContainer experienceContainer'>
        <Heading size={2} title={"Selected experience"} />
        <div className='resumeItem'>
          <div className='resumeTimeInfo'>
            <p>March 2022 - Present</p>
            <p>H. Aschehoug & Co (W. Nygaard)</p>
          </div>
          <div className='resumeDescInfo'>
            <Heading size={3} title={"Product Owner"} />
            <ul>
              <li>Part of an interdisciplinary and autonomous agile team, using the scrum methodology.</li>
              <li>The role creates the roadmap, keeps track of the teams backlog and prioritizes tasks.</li>
              <li>Part of an interdisciplinary and autonomous agile team, using the scrum methodology.</li>
              <li>The role creates the roadmap, keeps track of the teams backlog and prioritizes tasks.</li>
            </ul>
          </div>
        </div>
        <div className='resumeItem'>
          <div className='resumeTimeInfo'>
            <p>November 2020 - Present</p>
            <p>H. Aschehoug & Co (W. Nygaard)</p>
          </div>
          <div className='resumeDescInfo'>
            <Heading size={3} title={"Content Creator"} />
            <ul>
              <li>Part of an interdisciplinary and autonomous agile team, using the scrum methodology. </li>
              <li>Plans, registers and tests development needs in JIRA.</li>
              <li>Documents and trains other roles in CMS, tools and routines.</li>
              <li>Responsibility for content being accessible.</li>
            </ul>
          </div>
        </div>
        <div className='resumeItem'>
          <div className='resumeTimeInfo'>
            <p>November 2020 - Present</p>
            <p>H. Aschehoug & Co (W. Nygaard)</p>
          </div>
          <div className='resumeDescInfo'>
            <Heading size={3} title={"Product Consultant"} />
            <ul>
              <li>Production role handling text, images and all types of relevant media on a daily basis. </li>
              <li>Worked closely with editors and designers.</li>
              <li>Worked with a range of Adobe programs.</li>
              <li>Gained experience from different methodologies, amongst others Kanban and Scrum.</li>
              <li>Gained insight into areas such as pedagogy and rights.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className='resumeContainer'>
        <Heading size={2} title={"Education"} />
        <div className='resumeItem'>
          <div className='resumeTimeInfo'>
            <p>January 2021 - January 2023</p>
            <p>Noroff School of Technology and Digital Media</p>
          </div>
          <div className='resumeDescInfo'>
            <Heading size={3} title={"Higher Professional Degree in Frontend development"} />
            <p>
              Some topics and technologies covered by the course include: HTML5, CSS3, JavaScript, Typescript, Bootstrap, Sass, Tailwind, React, Next.js,
              GraphQL, Jest, GitHub, Visual Studio Code, Atom, WordPress, Adobe Xd, Adobe Illustrator, Adobe Photoshop.
            </p>
          </div>
        </div>
        <div className='resumeItem'>
          <div className='resumeTimeInfo'>
            <p>September 2017 - October 2018</p>
            <p>Oxford Brookes University</p>
          </div>
          <div className='resumeDescInfo'>
            <Heading size={3} title={"MA in Digital Publishing"} />
            <p>
              With an emphasis on digital publishing, the course gives an excellent overview of every aspect of publishing. After graduating I have a broad
              understanding of the key issues facing the publishing industry in the 21st century.
            </p>
          </div>
        </div>
        <div className='resumeItem'>
          <div className='resumeTimeInfo'>
            <p>August 2014 - May 2016</p>
            <p>Volda University College (HVO)</p>
          </div>
          <div className='resumeDescInfo'>
            <Heading size={3} title={"BA in Journalism"} />
            <p>
              The course gives a thorough introduction to journalism, as it is practiced in modern media houses. I have been provided with good media training
              and knowledge of journalism as a subject, and I have a good understanding of the media's role and function in society. I have been taught to
              master relevant journalistic tools, techniques, genres and forms of expression.
            </p>
          </div>
        </div>
        <div className='resumeItem'>
          <div className='resumeTimeInfo'>
            <p>August 2011 - May 2014</p>
            <p>Volda University College (HVO)</p>
          </div>
          <div className='resumeDescInfo'>
            <Heading size={3} title={"BA in Nordic Languages and Literature"} />
            <p>
              The course gives an insight into many contexts and conditions in our society, both in the present and the past. Having graduated I have a good
              understanding of how language and literature reflext social, cultural and political aspects of society.
            </p>
          </div>
        </div>
      </section>

      <section className='resumeContainer'>
        <Heading size={2} title={"Certifications and courses"} />

        <div className='resumeItem'>
          <div className='resumeTimeInfo'>
            <p>2022</p>
            <p>Bouvet ASA</p>
          </div>
          <div className='resumeDescInfo'>
            <Heading size={3} title={"Scrum Product Owner Certified"} />
            <p>A two days full time course focused on learning Agile methodology and understanding the role of the Product Owner.</p>
          </div>
        </div>

        <div className='resumeItem'>
          <div className='resumeTimeInfo'>
            <p>2021</p>
            <p>Funka</p>
          </div>
          <div className='resumeDescInfo'>
            <Heading size={3} title={"Publishing & Accessibility"} />
            <p>A course focused on digital content creation and how to make sure content is accessible for as many users as possible.</p>
          </div>
        </div>
      </section>
    </>
  );
}
