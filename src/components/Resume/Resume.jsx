import React from 'react';
import './Resume.css';
import FancySocial from '../FancySocial/FancySocial';
import {
  socials,
  cnsSkills,
  cnsExperience,
  accentureExperience,
  accentureSkills,
  foodySkills,
  foodyPoints,
  chirpChatSkills,
  chirpChatPoints,
  streamCrewSkills,
  streamCrewPoints,
  languages,
  frameworks,
  dbCloud,
  tools,
  iuCourses,
  sppuCourses,
} from '../../constants/index';
import SkillCard from '../SkillCard/SkillCard';
import DownloadButton from '../DownloadButton/DownloadButton';

const Resume = () => {
  return (
    <div className="wrapper w-[1920px]">
      <div className="top">
        <div className="flex flex-col items-center">
          <div className="name mt-16">Bhushan Khope</div>
          <div className="role">Software Developer - Front End Developer</div>
          <div className="location-email">
            <span className="flex items-center">
              <span className="material-symbols-outlined icons">
                location_on
              </span>
              <span>Indiana, USA</span>
            </span>
            <span className="flex items-center">
              <span className="material-symbols-outlined icons">mail</span>
              <span>bhushankhope@gmail.com</span>
            </span>
          </div>
          <div className="flex gap-1 mb-8">
            {socials.map((social, index) => {
              return <FancySocial key={index} props={social}></FancySocial>;
            })}
          </div>
          <div className="mb-16">
            {/* <FancySocial
            props={{
              bgc: '#F6F3FF',
              borderColor: '#222222',
              filename: 'download',
              label: 'Download Resume',
              link: 'files/Bhushan_Khope_Resume.pdf',
            }}
          /> */}
            <DownloadButton
              props={{
                link: 'files/Bhushan_Khope_Resume.pdf',
                filename: 'download',
              }}
            ></DownloadButton>
          </div>
        </div>
      </div>
      <div className="bottom-wrapper">
        <div className="bottom">
          <div className="education">
            <span className="left">Education</span>
            <span className="right">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Indiana University, Bloomington</span>
                  <span>Jan. 2022 - Dec. 2023</span>
                </div>
                <div className="flex gap-2 mb-3 flex-wrap">
                  {iuCourses.map((course) => {
                    return <SkillCard label={course} key={course} />;
                  })}
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Pune University</span>
                  <span>Aug. 2016 - May. 2020</span>
                </div>
                <div className="flex gap-2 mb-3 flex-wrap">
                  {sppuCourses.map((course) => {
                    return <SkillCard label={course} key={course} />;
                  })}
                </div>
              </div>
            </span>
          </div>
          <div className="experience">
            <div className="left">Experience</div>
            <div className="right">
              <div>
                <div className="exp-name">
                  <span>CNS Indiana University - Software Developer</span>
                  <span>May. 2022 - Present</span>
                </div>
                <div className="flex gap-2 mb-3 flex-wrap">
                  {cnsSkills.map((skill) => {
                    return <SkillCard label={skill}></SkillCard>;
                  })}
                </div>
                <ul>
                  {cnsExperience.map((exp) => {
                    return (
                      <li key={exp[0]} className="desc mb-1">
                        {exp}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <div className="exp-name">
                  <span>Accenture - Associate Software Engineer</span>
                  <span>Dec. 2020 - Oct. 2021</span>
                </div>
                <div className="flex gap-2 mb-3 flex-wrap">
                  {accentureSkills.map((skill) => {
                    return <SkillCard label={skill} />;
                  })}
                </div>
                <ul>
                  {accentureExperience.map((exp) => {
                    return (
                      <li key={exp} className="desc">
                        {exp}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="projects">
            <span className="left">Projects</span>
            <span className="right">
              <div>
                <div className="mb-2">Foody</div>
                <div className="flex gap-2 mb-3 flex-wrap">
                  {foodySkills.map((skill) => {
                    return <SkillCard label={skill}></SkillCard>;
                  })}
                </div>
                <ul>
                  {foodyPoints.map((point) => {
                    return (
                      <li key={point} className="desc">
                        {point}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <div className="mb-2">Chirp Chat</div>
                <div className="flex gap-2 mb-3 flex-wrap">
                  {chirpChatSkills.map((skill) => {
                    return <SkillCard label={skill}></SkillCard>;
                  })}
                </div>
                <ul>
                  {chirpChatPoints.map((point) => {
                    return (
                      <li key={point} className="desc">
                        {point}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <div className="mb-2">Stream Crew</div>
                <div className="flex gap-2 mb-3 flex-wrap">
                  {streamCrewSkills.map((skill) => {
                    return <SkillCard label={skill}></SkillCard>;
                  })}
                </div>
                <ul>
                  {streamCrewPoints.map((point) => {
                    return (
                      <li key={point} className="desc">
                        {point}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </span>
          </div>
          <div className="skills">
            <span className="left">Skills & Tools</span>
            <span className="right">
              <div className="grid gap-y-1">
                <div>
                  <span>Languages</span>
                  <span className="flex gap-2 mb-3 flex-wrap">
                    {languages.map((lang) => {
                      return <SkillCard key={lang} label={lang} />;
                    })}
                  </span>
                </div>
                <div>
                  <span>Frameworks</span>
                  <span className="flex gap-2 mb-3 flex-wrap">
                    {frameworks.map((framework) => {
                      return <SkillCard key={framework} label={framework} />;
                    })}
                  </span>
                </div>
                <div>
                  <span>Databases & Cloud</span>
                  <span className="flex gap-2 mb-3 flex-wrap">
                    {dbCloud.map((d) => {
                      return <SkillCard key={d} label={d} />;
                    })}
                  </span>
                </div>
                <div>
                  <span>Tools</span>
                  <span className="flex gap-2 mb-3 flex-wrap">
                    {tools.map((tool) => {
                      return <SkillCard key={tool} label={tool} />;
                    })}
                  </span>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
