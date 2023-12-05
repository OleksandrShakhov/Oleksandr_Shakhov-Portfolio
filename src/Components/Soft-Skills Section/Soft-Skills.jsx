import React, { useState } from 'react';
import './soft-skills.css';

const skillsData = [
  {
    title: 'Active Listener',
    content: 'I am adept at actively listening to others, paying full attention to understand their perspectives and concerns. This skill allows me to build strong connections and collaborate effectively in various situations.',
  },
  {
    title: 'Great Time Management',
    content: 'With excellent time management skills, I ensure that tasks are completed efficiently and deadlines are met. I prioritize effectively, plan tasks meticulously, and adapt to changing priorities without compromising quality.',
  },
  {
    title: 'Responsible and Dedicated',
    content: 'My sense of responsibility and dedication is reflected in my commitment to delivering high-quality work. I take ownership of my tasks, meet deadlines consistently, and strive for excellence in all that I do.',
  },
  {
    title: 'Great Team Player',
    content: 'Being a great team player, I actively contribute to team goals, communicate effectively, and collaborate with team members. I value teamwork and believe in fostering a positive and collaborative work environment.',
  },
  {
    title: 'Fast Learner',
    content: 'I am a quick learner, adapting to new concepts and technologies with ease. This enables me to stay updated in a rapidly evolving work environment and contribute effectively to projects with a short learning curve.',
  },
  {
    title: 'Problem Solving',
    content: 'My problem-solving skills enable me to analyze challenges, identify innovative solutions, and implement effective problem-solving strategies. I approach problems with a positive mindset and a focus on finding practical solutions.',
  }
  ];

const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id='skills' className='skills container section'>
      <div className="sectionTitle">
        <span className="titleNumber"></span>
        <h5 className="titleText">
          My Soft Skills
          <div className="underline"><span></span></div>
        </h5>
      </div>

      <div className="accordion-container">
        {skillsData.map((skill, index) => (
          <React.Fragment key={index}>
            <button
              className={`accordion ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleAccordionClick(index)}
            >
              {skill.title}
            </button>
            <div className={`panel ${activeIndex === index ? 'show' : ''}`}>
              <p>{skill.content}</p>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Skills;