import { Accordion } from 'flowbite-react';

const FAQ = () => {
    return (
        <div className='mt-8 mx-8 lg:mx-24 text-left '>
            <h2 className="title text-4xl mb-3 text-blue-800 text-center">Frequently Asked Questions</h2>
            <hr className="w-full lg:w-2/5 mx-auto border-b-4 border-blue-800 mb-5 rounded" />

            <p className='text-lg lg:w-2/3 mb-8 text-center mx-auto'>People who visit our website frequently asks some repeated questions. To provide you with the questions on your mind and answer them we have shown it to you.</p>
           <Accordion collapseAll={true}>
            <Accordion.Panel>
                <Accordion.Title className='text-2xl text-black'>
                    How can I fill up examination forms through the portal?
                </Accordion.Title>
                <Accordion.Content>
                
                <p className="text-gray-500 dark:text-gray-400">
                To fill up your examination forms, simply log in to your student portal account, navigate to the "Form Fill Up" section, and follow the step-by-step instructions provided. Make sure to complete all required fields and submit your form before the specified deadline.</p>
                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title className='text-2xl text-black my-2'>
                How do I access my mark sheets and exam results?
                </Accordion.Title>
                <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                You can easily view your mark sheets and exam results by logging in to your student portal account. Once logged in, go to the "Marksheet" or "Results" section, where you will find your academic records, including grades and transcripts for your completed courses.</p>

                </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
                <Accordion.Title className='text-2xl text-black'>
                How can I collect my testimonial or academic certificates?
                </Accordion.Title>
                <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                Collecting your testimonial or academic certificates is hassle-free. Access the "Testimonial Collection" section on the student portal, submit your request, and follow the outlined process. We'll notify you when your documents are ready for pickup or provide instructions for delivery, ensuring a smooth and convenient experience.</p>
                
                </Accordion.Content>
            </Accordion.Panel>
            </Accordion>
        </div>
    );
};

export default FAQ;