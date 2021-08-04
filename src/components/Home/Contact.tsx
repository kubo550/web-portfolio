import { Section, Animation } from "components";
import { Button, SectionTitle } from "components/Typography";
import { ContactSvg } from "components";
import Link from "next/link";

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
              Contact me any time and everywhere you want. Check all methods of contact and choose
              the most convenient for you. I usually reply within 2/4 hours.
              <div className='flex w-full justify-around mt-4'>
                <Link href='/projects' passHref>
                  <a>
                    <Button type='contact' arrow>
                      Contact me
                    </Button>
                  </a>
                </Link>

                <a href='mailto:qwercy142@gmail.com'>
                  <Button type='mail'>E-mail</Button>
                </a>
              </div>
            </SectionTitle>
          </Animation>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
