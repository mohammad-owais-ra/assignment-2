import Image from "next/image";
import img from "../app/2.png";

export default function Home() {
  return (
    <div className="homeContainer">
      <div className="childContainer">
        Hello,
        <br />
       <div className="name">I am <span className="navyBlue">Mohammad Owais</span></div>
        <div className="paragraph">
          This assignment is part of my learning journey with <b><i>Next.js</i></b>.
          I am currently at a beginner level, and in this project, I am practicing the basics of creating <i>web pages using Next.js</i>.
          This includes learning about components, routing, and rendering. My goal is to understand how to use Next.js to create simple web applications.
        </div>
      </div>
      <div className="profilePic">
        <Image src={img} alt="Owais" className="img" />
      </div>
    </div>
  );
}
