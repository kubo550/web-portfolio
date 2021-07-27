import { SectionTitle, SectionButtons } from "components/Typography";
import { Section, AboutSvg, Animation } from "components";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <Section>
      <div className='grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-x-0 lg:gap-x-10'>
        <div className='col-span-2 lg:col-span-3'>
          <Animation>
            <SectionTitle title='About me' subtitle='Let me introduce myself'>
              A portfolio for a web designer. We used React JS to make this
              portfolio. Clean design with full responsiveness. You will find
              this portfolio very professional. Also, we added smooth scroll in
              the portfolio which will make the scroll experience really
              elegant.
              <SectionButtons
                href='/about'
                label='Read More'
                secondHref='/files/Jakub_Kurdziel_CV.pdf'
                secondLabel='Download CV'
                download
              />
            </SectionTitle>
          </Animation>
        </div>

        <div className='my-0 md:my-5 col-span-3'>
          <Animation>
            <AboutSvg />
          </Animation>
        </div>
      </div>
    </Section>
  );
};

export default About;
