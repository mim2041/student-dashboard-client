

const Features = () => {
    return (
        <div className=" px-12 lg:px-24 py-12 text-center mt-12">
            <h1 className="title text-5xl mb-3 text-blue-800 text-center">Our Features</h1>
            <hr className="w-full lg:w-1/4 mx-auto border-b-4 border-blue-800 mb-6 rounded" />
            <p className="lg:w-3/4 mx-auto">The features of a student portal website for our University can be diverse and comprehensive, aiming to provide students with a robust and user-friendly platform for our academic needs. We are providing a new system with integration of our exam form fill up, view result, show student information, and apply for Testimony. We (the students) have to face many ironies to collect these.</p>
            

            <div className='mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 items-center'>
                <div className='bg-blue-200 shadow-xl rounded-lg lg:m-2 lg:w-[200px] border-[2px, solid, black]  mouse-pointer' 
                style={{ transition: 'transform 0.5s ease' }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-50px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0px)'}>
                    <img className='w-full lg:w-[200px] h-[150px] rounded-lg' src="https://img.freepik.com/free-vector/gradient-ssl-illustration_23-2149247155.jpg?size=626&ext=jpg&uid=R91745417&ga=GA1.2.1896121507.1673852466&semt=sph" alt="" />
                    <div className='p-2'>
                    <h1 className='title text-pink-600'>User Authentication</h1>
                    <p>Secure login and registration for students, with options for password reset and account recovery.</p>
                    </div>
                </div>
                <div className='bg-green-200 shadow-xl rounded-lg m-2 lg:w-[200px] border-[2px, solid, black]'
                style={{ transition: 'transform 0.5s ease' }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-50px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0px)'}>
                    <img className='w-full lg:w-[200px] h-[150px] rounded-lg' src="https://img.freepik.com/free-vector/dashboard-admin-panel-with-flat-design_23-2147863331.jpg?size=626&ext=jpg&uid=R91745417&ga=GA1.2.1896121507.1673852466&semt=ais" alt="" />
                    <div className='p-2'>
                    <h1 className='title text-pink-600'>Dashboard</h1>
                    <p>Personalized dashboard for each student upon login, displaying relevant information and quick links to essential features.</p>
                    </div>
                </div>
                <div className='bg-orange-200 shadow-xl lg:w-[200px]  m-2 rounded-lg border-[2px, solid, black]'
                style={{ transition: 'transform 0.5s ease' }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-50px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0px)'}>
                    <img className='w-full lg:w-[200px]h-[150px] rounded-lg' src="https://img.freepik.com/free-vector/forms-concept-illustration_114360-4797.jpg?size=626&ext=jpg&uid=R91745417&ga=GA1.2.1896121507.1673852466&semt=sph" alt="" />
                    <div className='p-2'>
                    <h1 className='title text-pink-600'>Exam Form Fill Up</h1>
                    <p>Exam form fill-up process. Students can fill up their exam forms through our website.</p>
                    </div>
                </div>
                <div className='bg-yellow-100 shadow-xl m-2 lg:w-[200px] rounded-lg border-[2px, solid, black]'
                style={{ transition: 'transform 0.5s ease' }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-50px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0px)'}>
                    <img className='w-full lg:w-[200px]h-[150px] rounded-lg' src="https://img.freepik.com/free-vector/people-checking-giant-check-list-background_23-2148085673.jpg?size=626&ext=jpg&uid=R91745417&ga=GA1.1.1896121507.1673852466&semt=ais" alt="" />
                    <div className='p-2'>
                    <h1 className='title text-pink-600'>See Result</h1>
                    <p>We provide results by authorization. No extra hassle to collect marksheet.</p>
                    </div>
                </div>
                
                <div className='bg-sky-200 shadow-xl  m-2 lg:w-[200px] rounded-lg border-[2px, solid, black]'
                style={{ transition: 'transform 0.5s ease' }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-50px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0px)'}>
                    <img className='w-full lg:w-[200px]h-[150px] rounded-lg' src="https://img.freepik.com/free-vector/hand-drawn-api-illustration_23-2149388656.jpg?size=626&ext=jpg&uid=R91745417&ga=GA1.2.1896121507.1673852466&semt=sph" alt="" />
                    <div className='p-2'>
                    <h1 className='title text-pink-600'>Integration</h1>
                    <p>Integration with other university systems like the student information system (SIS) and learning management system (LMS).</p>
                    </div>
                </div>
                
                <div className='bg-violet-200 shadow-xl rounded-lg m-2 lg:w-[200px] border-[2px, solid, black]'
                style={{ transition: 'transform 0.5s ease' }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-50px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0px)'}>
                    <img className='w-full lg:w-[200px]h-[150px] rounded-lg' src="https://img.freepik.com/free-vector/gradient-responsive-website-design-set_23-2149538364.jpg?size=626&ext=jpg&uid=R91745417&ga=GA1.2.1896121507.1673852466&semt=ais" alt="" />
                    <div className='p-2'>
                    <h1 className='title text-pink-600'>Mobile Responsiveness</h1>
                    <p>A mobile-friendly design to ensure students can access the portal on various devices.</p>
                    </div>
                </div>
                
                
                

            </div>
        </div>
    );
};

export default Features;