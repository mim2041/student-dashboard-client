import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";

const Login = () => {
    
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();
     const [loginError, setLoginError] = useState("");
     const location = useLocation();
     const navigate = useNavigate();
     const from = location.state?.from?.pathname || "/";
  const { signIn } = useContext(AuthContext);
  const onSubmit = (data) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };
  return (
    <div className="py-8 lg:py-16">
      <div className="hero min-h-screen bg-base-200 px-8">
        {/* <div className="hero-content flex-col lg:flex-row-reverse justify-between"> */}
        <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100 mb-10 ">
          <h1 className="text-4xl pt-6 text-center font-bold text-blue-800">
            Login Now!!
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
                {...register("password", { required: true })}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="py-2 px-4 bg-gradient-to-r from-blue-800 to-blue-500 text-white rounded-lg  btn-wide mx-auto">
                Login
              </button>
            </div>
          </form>
          <p className="mx-8 text-sm mb-4">
            Do not have an account?{" "}
            <Link
              to="/signUp"
              className="text-blue-800 text-md border-2 border-blue-800 p-1 rounded-lg ml-2"
            >
              Sign Up
            </Link>
          </p>
          <div className="loginWith mx-auto gap-3 flex ">
            <button className="flex gap-3 items-center btn-outline border-2 border-blue-800 px-3 py-2 mr-4 mb-5  rounded-lg  text-lg">
              <FcGoogle /> Google
            </button>
            <button className="flex gap-3 items-center btn-outline border-2 border-blue-800 px-3 py-2 mb-5 rounded-lg text-lg">
              <FaFacebookF className="text-blue-800" /> Facebook
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Login;
