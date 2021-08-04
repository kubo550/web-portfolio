import { SectionTitle, Button } from "components/Typography";
import Link from "next/link";
import { Section, AboutSvg, Animation } from "components";

const About = () => {
  return (
    <Section>
      <div className='grid grid-cols-1 md:grid-cols-4  gap-x-0 lg:gap-x-10'>
        <div className='col-span-2'>
          <Animation>
            <SectionTitle title='About me' subtitle='Let me introduce myself'>
              A portfolio for a web designer. We used React JS to make this
              portfolio. Clean design with full responsiveness. You will find
              this portfolio very professional. Also, we added smooth scroll in
              the portfolio which will make the scroll experience really
              elegant.
              <div className='flex w-full justify-around mt-4'>
                <Link href='/about' passHref>
                  <a>
                    <Button type='profile' arrow>
                      Profile
                    </Button>
                  </a>
                </Link>

                <a href='/files/Jakub_Kurdziel_CV.pdf' download>
                  <Button type='download'>Download CV</Button>
                </a>
              </div>
            </SectionTitle>
          </Animation>
        </div>

        <div className='my-0 sm:my-5 col-span-2 '>
          <Animation>
            <AboutSvg />
          </Animation>
        </div>
      </div>
    </Section>
  );
};

export default About;
