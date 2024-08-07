import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkIcon from '@mui/icons-material/Link';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import { styles } from '../styles';

const ControlledAccordions = (props) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <motion.div variants={textVariant()} className="mb-8">
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>
      <div className="w-full flex justify-center">
        <div style={{ maxWidth: 800 }}>
          <Accordion
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
            sx={{
              color: 'white',
              backgroundColor: '#2f154c',
              fontWeight: 500,
              marginBottom: '0.5rem',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              className="custom-accordion-summary"
            >
              <Typography sx={{ fontFamily: 'Poppins', fontWeight: 500 }}>
                Angular Developer @CNS Indiana University
              </Typography>
              <Typography sx={{ fontFamily: "Poppins", fontWeight: 500 }}>
                May 2022 - June. 2024
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontWeight: 300 }} className="exp-cls">
                <span className="loc-url-wrapper">
                  <span className="location">
                    <LocationOnIcon sx={{ fill: '#ff00ff' }} className="icon" />
                    Bloomington, Indiana
                  </span>
                  <br />
                  <span className="url">
                    <LinkIcon sx={{ fill: '#ff00ff' }} className="icon" />
                    <a
                      href="https://cns.iu.edu"
                      className="link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      cns.iu.edu
                    </a>
                  </span>
                  <br />
                </span>
                <p className="mb-2">
                  - Led the development of a responsive user interface for an
                  NSF-Funded biomedical visualization project, humanatlas.io,
                  resulting in a 29% increase in user engagement.
                </p>
                <p className="mb-2">
                  - Successfully designed and implemented reusable and
                  high-performance user interface components using Angular
                  Material, resulting in a significant 18% reduction in
                  development time while optimizing the performance of
                  application components.
                </p>
                <p className="mb-2">
                  - Worked closely with UX team to develop and maintain the
                  design system.
                </p>
                <p className="mb-2">
                  - Successfully attained 85% code coverage for Angular
                  components by using Jest.
                </p>
                <p className="mb-2">
                  - Created Zod objects and employed the Zod-to-JSON library to
                  facilitate YAML file validation through the exported JSON
                  schema. This resulted in a flawless 100% reduction in
                  developmental errors, ensuring robust data validation.
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel2'}
            onChange={handleChange('panel2')}
            sx={{
              color: 'white',
              backgroundColor: '#2f154c',
              marginBottom: '0.5rem',
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
              className="custom-accordion-summary"
            >
              <Typography sx={{ fontFamily: 'Poppins', fontWeight: 500 }}>
                Application Development Associate @Accenture
              </Typography>
              <Typography sx={{ fontFamily: 'Poppins', fontWeight: 500 }}>
                Dec. 2020 - Oct. 2021
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontWeight: 300 }} className="exp-cls">
                <span className="loc-url-wrapper">
                  <span className="location">
                    <LocationOnIcon sx={{ fill: '#ff00ff' }} className="icon" />
                    Pune, India
                  </span>
                  <br />
                  <span className="url">
                    <LinkIcon sx={{ fill: '#ff00ff' }} className="icon" />
                    <a
                      href="https://www.accenture.com/in-en"
                      rel="noreferrer"
                      className="link"
                      target="_blank"
                    >
                      accenture.com/in-en
                    </a>
                  </span>
                  <br />
                </span>
                <p className="mb-2">
                  - Crafted a responsive web application using React.js and
                  JavaScript, leading to a 23% enhancement in user satisfaction.
                </p>
                <p className="mb-2">
                  - Engineered 2 efficient and reusable functional components,
                  resulting in an impressive 18% reduction in code redundancy.
                </p>
                <p className="mb-2">
                  - Worked closely with UI/UX designers to translate design into
                  code resulting in a 23% improvement in user satisfaction.
                </p>
                <p className="mb-2">
                  - Formulated comprehensive unit tests employing Jest, yielding
                  an outstanding 85% code coverage, ensuring the robustness and
                  reliability of the code.
                </p>
                <p className="mb-2">
                  - Participated in code reviews, 20+ sprint sessions as part of
                  agile methodology fostering improvement in team productivity.
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === 'panel3'}
            onChange={handleChange('panel3')}
            sx={{ color: 'white', backgroundColor: '#2f154c' }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
              className="custom-accordion-summary"
            >
              <Typography sx={{ fontFamily: 'Poppins', fontWeight: 500 }}>
                Test Engineer Intern @Globalstep Pvt Ltd
              </Typography>
              <Typography sx={{ fontFamily: 'Poppins', fontWeight: 500 }}>
                Jan 2019 - Jun. 2019
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontWeight: 300 }} className="exp-cls">
                <span className="loc-url-wrapper">
                  <span className="location">
                    <LocationOnIcon sx={{ fill: '#ff00ff' }} className="icon" />
                    Pune, India
                  </span>
                  <br />
                  <span className="url">
                    <LinkIcon sx={{ fill: '#ff00ff' }} className="icon" />
                    <a
                      href="https://globalstep.com/"
                      rel="noreferrer"
                      className="link"
                      target="_blank"
                    >
                      globalstep.com
                    </a>
                  </span>
                  <br />
                </span>
                <p className="mb-2">
                  - Manually tested a gaming application on Android, IOS
                  devices, and WebGL Platform.
                </p>
                <p className="mb-2">
                  - Ran Smoke regression suite after every build and published
                  detailed reports with bugs detected in Hansoft Client,
                  TestRail, and Jira.
                </p>
                <p className="mb-2">
                  - Worked closely with the development team to provide a stable
                  build for every release.
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(ControlledAccordions, 'work');
