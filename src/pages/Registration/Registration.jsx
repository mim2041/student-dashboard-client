import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Registration = () => {
    return (
        <div className="py-8 lg:py-16">
            <div className="hero min-h-screen bg-base-200 px-8">
                {/* <div className="hero-content flex-col lg:flex-row-reverse justify-between"> */}
                
                    <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100 mb-10 ">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class Roll</span>
                            </label>
                            <input type="text" placeholder="Class Roll" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Registration No</span>
                            </label>
                            <input type="text" placeholder="Registration No" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className='py-2 px-4 bg-gradient-to-r from-blue-800 to-blue-500 text-white rounded-lg  btn-wide mx-auto'>Sign Up</button>

                        </div>
                    </form>
                    <p className="mx-8 text-sm mb-4">Already have an account? <Link to='/login' className="text-blue-800 text-md">Login</Link></p>
                    <div className='loginWith mx-auto gap-3 flex '>
                    <button   className='flex gap-3 items-center btn-outline border-2 border-blue-800 px-3 py-2 mr-4 mb-5  rounded-lg  text-lg'><FcGoogle /> Google</button>
                    <button  className='flex gap-3 items-center btn-outline border-2 border-blue-800 px-3 py-2 mb-5 rounded-lg text-lg'><FaFacebookF className="text-blue-800"/> Facebook</button>
                </div>
                    </div>
                </div>
                {/* </div> */}
        </div>
    );
};

export default Registration;