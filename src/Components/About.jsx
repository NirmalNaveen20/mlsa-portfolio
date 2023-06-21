import React from "react";

import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

const description =
  "I'm Nirmal Naveen Chandrasiri, a cloud and DevOps enthusiast with experience in designing and developing cloud native applications. I have a passion for learning and sharing my knowledge with others as publicly as possible. I love working with new technologies and exploring cloud native solutions. I am a strong believer in the power of positive thinking in the workplace, and I regularly develop myself and my skills to be the best version of myself that I can be.";


const skillsList = [
  "Git and GitHub",
  "Web Development(React, Node.js, Express.js, HTML, CSS, JavaScript, Python, Django)",
  "Cloud Computing(AWS, Azure, GCP)",
  "DevOps Practices",
  "App Development",
];


const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. I am a strong believer in the power of positive thinking in the workplace, and I regularly develop myself and my skills to be the best version of myself that I can be.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
