import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-15">
            I'm Amit Kumar Modak, a versatile software developer with a comprehensive skill set and a fervent passion for learning. Proficient in HTML, CSS, Java, Python, React, JavaScript, Node js, Express js, Spring Spring boot, Hibernate MySQL, and more.
            <br/>
             I thrive in dynamic environments where innovation and adaptability are key. With a knack for fast learning and a relentless drive to acquire new skills, I'm committed to staying at the forefront of technology. Whether it's designing elegant user interfaces or optimizing backend systems, I'm dedicated to delivering high-quality solutions that exceed expectations. Ready to tackle new challenges and embrace continuous growth, I'm excited to contribute my expertise to innovative projects and collaborate with like-minded professionals. Let's embark on this journey of exploration and excellence together!
        </p>
        {/* <p className="text-xl mt-15">
        Welcome to my corner of the web! I'm Amit Kumar Modak, a passionate software developer with a keen interest in crafting innovative solutions. With a solid foundation of 2 years in the field, I've honed my skills in designing and building software that not only meets but exceeds expectations. My journey in the world of software development has been a dynamic one, marked by continuous learning and growth. I thrive on challenges and love to push the boundaries of what's possible in the realm of technology.
        </p> */}

        <br />

        {/* <p className="text-xl">
        My professional journey is characterized by a deep-rooted enthusiasm for developing web applications. My tech arsenal includes Java, HTML, CSS, Python and Javascript. Lately, I've been diving headfirst into the exciting world of React, MySql, and Hibernate striving to create seamless and visually appealing web experiences. Beyond coding, I am a firm believer in collaboration, communication, and user-centric design. I am thrilled to embark on new projects, share my knowledge, and continue my journey of innovation in the ever-evolving field of software development. Thank you for joining me on this exciting adventure!
        </p> */}
      </div>
    </div>
  );
};

export default About;