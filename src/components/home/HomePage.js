import Heading from "../common/Heading";
import { Link } from "react-router-dom";
import ProfileImage from "../../assets/LineProfile.jpg";

export default function HomePage() {
  return (
    <div className='homeContainer'>
      <section className='homeInfoContainer'>
        <div>
          <Heading title={"Hello"} />
          <p>My name is Line Lindheim Tøresby, and I'm your go-to for all things frontend related!</p>
        </div>
        <div className='homeLinksSections'>
          <Link to='/projects'>Projects</Link>
          <Link to='/resume'>Resume</Link>
        </div>
        <div>
          <p>
            I am a recently graduated frontend developer based in Oslo, Norway. I enjoy solving problems, and have a passion for effective and smart solutions
            that are accessible and inclusive. JavaScript sparks joy in me, and continued learning is my motivation.{" "}
          </p>
          <p>
            With a background from literature, journalism and publishing, I am well experienced in communication, working with a variety of media types and
            presentation of digital content.
          </p>
        </div>
      </section>
      <section className='homeProfileContainer'>
        <div className='imgContainer'>
          <img src={ProfileImage} alt='Profile image' />
        </div>
        <h2>linelind</h2>
        <p>Frontend Development</p>
        <p>UX / UI Design</p>
        <p>Communcation</p>
        <p>Content Creation</p>
        <p>Journalism</p>
      </section>
    </div>
  );
}
