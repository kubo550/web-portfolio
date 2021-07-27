import { Section, SectionTitle } from "components";
// @ts-ignore
import TypeAnimation from "react-type-animation";

const Hero = () => {
  return (
    <Section id='hero'>
      <div className='absolute top-0 left-0 bottom-0 right-0 w-full h-full overflow-hidden'>
        <video
          autoPlay
          muted
          loop
          src='/video/bg.mp4'
          className='w-full h-5/6 object-cover border-2 border-gray-800 mt-8'
        />
      </div>

      <div className='absolute left-auto md:left-1/4 top-auto md:top-1/3 '>
        <SectionTitle
          title='Hi there!'
          subtitle='Welcome to my personal portfolio'
        >
          <TypeAnimation
            cursor={false}
            sequence={[
              "Thanks for coming here!",
              2000,
              "I hope You will remember me",
              2000,
              "I wish You a nice trip",
              2000,
            ]}
            wrapper='h4'
            repeat={Infinity}
          />
        </SectionTitle>
      </div>
    </Section>
  );
};

export default Hero;
