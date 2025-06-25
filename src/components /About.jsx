import { motion } from "framer-motion";
import React from "react";
import { Tilt } from 'react-tilt'
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrap } from "../HOC";


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px]'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-[230px] rounded-[20px] shadow-card'
      style={{
        background: 'linear-gradient(90.13deg, #00cea8 1.9%, #bf61ff 97.5%)',
        padding: '2px'
      }}
    >
      
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "0.1,1")}
        className="mt-4 text-secondary text-{17px} max-w-3xl leading-[30px]">
        I'm a passionate and quick-learning software developer with a strong foundation in both web development and machine learning. My technical expertise spans front-end technologies including HTML, CSS, and ReactJS, back-end development with NodeJS, and database management using MySQL. I'm proficient in multiple programming languages including Java, C, Python, and JavaScript, with growing knowledge in ML algorithms.

        As a natural problem solver, I excel at analyzing patterns and adapting quickly to new technologies. I'm driven by the challenge of creating innovative solutions and continuously expanding my skill set in the ever-evolving field of software development and machine learning.

      </motion.p>
      <br />
      <br />
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key = {service.title} index={index}{...service}/>
        ))}
      </div>
    </>
  );
};

export default SectionWrap(About, "about")
