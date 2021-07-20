import Section from "components/Section";
import { SectionTitle } from "components/Typography";
import SectionButtons from "components/Typography/SectionButtons";
import { projects } from "data";
import Link from "next/link";

const Projects = () => {
  return (
    <Section id='projects'>
      <div className=''>
        <SectionTitle subtitle='Some of my recent works' title='Projects'>
          I do my best to ensure that my projects are at the highest level in
          terms of functionality, performance and accessibility.
          <SectionButtons
            href='/projects'
            label='See More'
            secondHref='https://github.com/kubo550?tab=repositories'
            secondLabel='All Repos'
          />
        </SectionTitle>
      </div>
    </Section>
  );
};

export default Projects;
