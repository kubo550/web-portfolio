import { Section, Animation } from "components";
import { SectionButtons, SectionTitle } from "components/Typography";
import { ContactSvg } from "components";

const Contact = () => {
  return (
    <Section id='contact'>
      <div className='grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-x-0 lg:gap-x-10 gap-y-6'>
        <div className='my-0 md:my-5 col-span-3 order-2 md:order-1 px-10'>
          <Animation>
            <ContactSvg />
          </Animation>
        </div>

        <div className='col-span-2 order-1 md:order-2 lg:col-span-3'>
          <Animation>
            <SectionTitle title='Contact' subtitle="Let's be in touch">
              Contact is a 1997 American science fiction drama film directed by
              Robert Zemeckis. It is a film adaptation of Carl 1985 novel of the
              same name; Sagan and his wife Ann Druyan wrote the story outline
              for the film.
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
      </div>
    </Section>
  );
};

export default Contact;
