import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import PrimaryButton from "../../components/PrimaryButton";

const Registration = () => {

    const {createUser} = useContext(AuthContext);

    const { register, handleSubmit, reset,
        formState: { errors },
      } = useForm();

    const navigate = useNavigate();

    const onSubmit = (data) => {
        // console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
               
                navigate('/login')
            })
      }


    return (
        <div className="py-8 lg:py-16">
            <div className="hero min-h-screen bg-base-200 px-8">
                {/* <div className="hero-content flex-col lg:flex-row-reverse justify-between"> */}
                
                    <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100 mb-10 ">
                    <h1 className="text-4xl pt-6 text-center font-bold text-blue-800">Sign Up Now!!</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })}  placeholder="Your Name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Father's Name</span>
                            </label>
                            <input type="text" {...register("fname", { required: true })}  placeholder="Your Name" className="input input-bordered" />
                            {errors.fname && <span className="text-red-600">Father's Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Mother's Name</span>
                            </label>
                            <input type="text" {...register("mname", { required: true })}  placeholder="Your Name" className="input input-bordered" />
                            {errors.mname && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class Roll</span>
                            </label>
                            <input type="number" {...register("roll", { required: true })} placeholder="Class Roll" className="input input-bordered" />
                            {errors.roll && <span className="text-red-600">Roll No is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Exam Roll</span>
                            </label>
                            <input type="number" {...register("eroll", { required: true })} placeholder="Class Roll" className="input input-bordered" />
                            {errors.eroll && <span className="text-red-600">Roll No is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Registration No</span>
                            </label>
                            <input type="number" {...register("registration", { required: true })} placeholder="Registration No" className="input input-bordered" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Session</span>
                            </label>
                            <select className="select select-bordered">
                                <option disabled selected>Select your Session</option>
                                <option>2021-2022</option>
                                <option>2020-2021</option>
                                <option>2019-2020</option>
                                <option>2018-2019</option>
                                <option>2017-2018</option>
                                <option>2016-2017</option>
                                <option>2015-2016</option>
                                <option>2014-2015</option>
                                <option>2013-2014</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: true })} type="text" placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600">Email is required</span>}

                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", { required: true,
                                 minLength: 6,
                                 maxLength: 20,
                                 pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z]).{8}$/
                                 })} placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
                            {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 characters</span>}
                            {errors.password?.type === 'maxLength' && <span className="text-red-600">Password must be less than 20 characters</span>}
                            {errors.password?.type === 'pattern' && <span className="text-red-600">Password must have one uppercase, one lowercase, one number and one special character</span>}
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <PrimaryButton></PrimaryButton>

                        </div>
                    </form>
                    <p className="mx-8 text-sm mb-4">Already have an account? <Link to='/login' className="text-blue-800 text-md border-2 border-blue-800 p-1 rounded-lg ml-2">Login</Link></p>
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
