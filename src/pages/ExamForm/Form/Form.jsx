
const Form = () => {
    return (
        <div className="py-12 lg:py-20 mx-8 lg:mx-24 flex flex-col items-center">
            <h1 className="title text-4xl mb-3 text-blue-800 text-center ">Fill the Form</h1>
            <hr className="w-full lg:w-1/5 mx-auto border-b-4 border-blue-800 mb-8 lg:mb-12 rounded" />
            <form className="w-full mx-auto flex flex-col items-center">
                <div className="form-control w-full max-w-xl lg:max-w-2xl">
                    <label className="label">
                        <span className="label-text mt-4">Name</span>
                    </label>
                    <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xl lg:max-w-2xl" />
                </div>
                <div className="form-control w-full max-w-xl lg:max-w-2xl">
                    <label className="label">
                        <span className="label-text mt-4">Registration No</span>
                    </label>
                    <input type="text" placeholder="Registration No" className="input input-bordered w-full max-w-xl lg:max-w-2xl" />
                </div>
                <div className="form-control w-full max-w-xl lg:max-w-2xl">
                    <label className="label">
                        <span className="label-text mt-4">Roll No</span>
                    </label>
                    <input type="text" placeholder="Your Class Roll" className="input input-bordered w-full max-w-xl lg:max-w-2xl" />
                </div>
                <div className="form-control w-full max-w-xl lg:max-w-2xl">
                    <label className="label">
                        <span className="label-text mt-4">Department / Institute</span>
                    </label>
                    <select className="select select-bordered">
                        <option disabled selected>Select One</option>
                        <option>Institute of Business Administration</option>
                        <option>Institute of Information Technology</option>
                        <option>Institute of Remote Sensing and GIS</option>
                        <option>Bangabandhu Institute of Comparative Literature and Culture</option>
                    </select>
                </div>
                <div className="form-control w-full max-w-xl lg:max-w-2xl">
                    <label className="label">
                        <span className="label-text mt-4">Student ID No</span>
                    </label>
                    <input type="text" placeholder="Student ID No" className="input input-bordered w-full max-w-xl lg:max-w-2xl" />
                </div>
                <div className="form-control w-full max-w-xl lg:max-w-2xl">
                    <label className="label">
                        <span className="label-text mt-4">Alloted Hall</span>
                    </label>
                    <input type="text" placeholder="Your Alloted Hall Name" className="input input-bordered w-full max-w-xl lg:max-w-2xl" />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text mt-4">Enrolled Courses</span>
                    </label>
                    <table className="text-center w-full max-w-xl lg:max-w-2xl">
                        <thead className="max-w-xl lg:max-w-2xl">
                            <tr>
                                <td className="border-2 lg:px-20" colSpan={2}>Theoretical Courses</td>
                                <td className="border-2 lg:px-28 py-3" colSpan={2}>Practical Courses</td>
                            </tr>
                            
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border-2 px-[7px] py-3">Course Code</td>
                                <td className="border-2 px-[7px]  py-3">Course Title</td>
                                <td className="border-2 px-[7px]  py-3">Course Code</td>
                                <td className="border-2 px-[7px] py-3">Course Title</td>
                            </tr>
                            <tr>
                                <td className="border-2 py-4"> </td>
                                <td className="border-2 py-4"> </td>
                                <td className="border-2 py-4"> </td>
                                <td className="border-2 py-4"> </td>
                            </tr>
                            <tr>
                                <td className="border-2 py-4"> </td>
                                <td className="border-2 py-4"> </td>
                                <td className="border-2 py-4"> </td>
                                <td className="border-2 py-4"> </td>
                            </tr>
                            <tr>
                                <td className="border-2 py-4"> </td>
                                <td className="border-2 py-4"> </td>
                                <td className="border-2 py-4"> </td>
                                <td className="border-2 py-4"> </td>
                            </tr>
                            <tr>
                                <td className="border-2 py-4"> </td>
                                <td className="border-2 py-4"> </td>
                                <td className="border-2 py-4"> </td>
                                <td className="border-2 py-4"> </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button className='py-2 px-4 bg-gradient-to-r btn-wide mt-8 from-blue-800 to-blue-500 text-white rounded-lg mt-4'>Submit</button>
            </form>
        </div>
    );
};

export default Form;