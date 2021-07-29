import { useRef, useState } from "react";
import { Button, SectionTitle } from "components/Typography";
import { Section, Animation } from "components";
import { projects } from "data";
import { ProjectItem } from "./ProjectItem";
import Link from "next/link";

const Projects = () => {
  // todo
  const ref = useRef<HTMLDivElement>(null);
  const [badges, setBadges] = useState([]);

  return (
    <Section my id='projects'>
      <div ref={ref} className='w-full md:w-1/2 mx-auto relative'>
        <SectionTitle subtitle='Some of my recent works' title='Projects'>
          I do my best to ensure that my projects are at the highest level in
          terms of functionality, performance and accessibility.
          <div className='flex w-full justify-around mt-4'>
            <Link href='/projects' passHref>
              <a>
                <Button type='code' arrow>
                  Projects
                </Button>
              </a>
            </Link>
            <a
              href='https://github.com/kubo550'
              download
              target='_blank'
              rel='noreferrer'
            >
              <Button type='download'>All repos</Button>
            </a>
          </div>
        </SectionTitle>
      </div>

      <div className='grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 mt-8 gap-y-6'>
        {[...projects].slice(0, 3).map((el, idx) => (
          <Animation key={el.id} delay={idx}>
            <ProjectItem item={el} />
          </Animation>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
