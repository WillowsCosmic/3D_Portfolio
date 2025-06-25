import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrap } from "../HOC";
import { textVariant } from "../utils/motion";
import { VerticalTimeline, VerticalTimelineElement } from "./verticalTimeline";


const ExperienceCard = ({ experience }) => (
  <>
    <h3 className="text-white text-[24px] font-bold">
      {experience.title}
    </h3>
    <p className="text-secondary text-[16px] font-semibold" >
      {experience.company_name}
    </p>

    <ul 
    style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding:"34px"}}
    className="list-disc list-inside ml-0 space-y-1"
    >
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className=" text-white-100 text-[13px] pl-5 tracking-wider leading-5"
        >
          {point}
        </li>
      ))}
    </ul>
  </>
)

const experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          What I have done so far
        </p>
        <h2 className={styles.sectionHeadText}>
          Work Experience.
        </h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline animate={true}>
          {experiences.map((experience, index) =>
            <VerticalTimelineElement
              key={index}
              date={experience.date}
              iconStyle={{
                background: experience.iconBg,
                color: '#fff',
                fontSize: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              contentStyle={{
                background: '#1d1836',
                color: '#fff',
              }}
              contentArrowStyle={{ borderRight: '7px solid white' }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </div>
              }
            >
              <ExperienceCard experience={experience} />
            </VerticalTimelineElement>
          )}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrap(experience, "work")
