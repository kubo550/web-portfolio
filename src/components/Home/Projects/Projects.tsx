import { useRef, useState } from "react";
import { SectionTitle, SectionButtons } from "components/Typography";
import { Section } from "components";
import { projects } from "data";
import { ProjectItem } from "./ProjectItem";
import Animation from "components/Animation";

const Projects = () => {
  // todo
  const ref = useRef<HTMLDivElement>(null);
  const [badges, setBadges] = useState([]);

  return (
    <Section my id='projects'>
      <Animation>
        <div ref={ref} className='w-full md:w-1/2 mx-auto relative'>
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

        <div className='grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 mt-8 gap-y-6'>
          {projects.map((el, idx) => (
            <Animation key={el.id} delay={idx + 1}>
              <ProjectItem item={el} />
            </Animation>
          ))}
        </div>
      </Animation>
    </Section>
  );
};

export default Projects;
