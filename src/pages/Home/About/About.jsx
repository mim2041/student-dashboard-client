import img from '../../../assets/images/home/banner3.jpg'

const About = () => {
    return (
        <div className='mx-8 lg:mx-24 my-12 '>
            <h1 className="title text-5xl mb-3 text-blue-800 text-center">About US</h1>
            <hr className="w-full lg:w-1/4 mx-auto border-b-4 border-blue-800 mb-8 lg:mb-12 rounded" />
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-16'>
            <div className='w-full lg:w-1/3 rounded-xl'>
                <img className='rounded-xl' src={img} alt="" />
            </div>
            <div className='w-full lg:w-1/2'>
            
            <p>
            At Jahangirnagar University, we are dedicated to nurturing the minds of tomorrow's leaders. Established with a vision to provide quality education and foster intellectual growth, we take pride in our rich academic heritage and commitment to excellence. Our institution is not just a place of learning; it's a community where students, faculty, and staff come together to explore, innovate, and make a difference in the world. With a focus on academic rigor, research, and holistic development, we empower our students to realize their full potential and become responsible global citizens. Join us on this educational journey, where knowledge meets opportunity, and together, we shape a brighter future...
            </p>
            <button className='py-2 px-4 bg-gradient-to-r from-blue-800 to-blue-500 text-white rounded-lg mt-4'>Read More</button>
            </div>
        </div>
        </div>
    );
};

export default About;