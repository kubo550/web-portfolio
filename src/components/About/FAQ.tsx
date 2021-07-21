import { Disclosure } from "@headlessui/react";
import { BiUpArrow } from "react-icons/bi";
import { questions } from "data";

const FAQ = () => {
  return (
    <div className='w-full px-4 my-10'>
      <div className='w-full max-w-md p-2 mx-auto bg-white rounded-2xl'>
        {questions.map(({ id, question, answer }) => (
          <Disclosure key={id}>
            {({ open }) => (
              <div className='my-2'>
                <Disclosure.Button className='flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
                  <span>{question}</span>
                  <BiUpArrow
                    className={`${
                      open ? "" : "transform rotate-180"
                    } w-5 h-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className='px-4 pt-4 pb-2 text-sm text-gray-500'>
                  {answer}
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
