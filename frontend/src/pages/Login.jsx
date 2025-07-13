import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, reset, handleSubmit } = useForm();

  const LoginHandler = (user) => {
    console.log(user);
  };

  return (
    <form
      onSubmit={handleSubmit(LoginHandler)}
      className="flex items-center justify-center"
    >
      <div className="flex w-[90%] xl:w-[55%]">
        <div className="hidden md:block bg-[#2874F0] w-[40%] p-10 text-[#FFFFFF] ">
          <h1 className="font-medium text-4xl">Login</h1>
          <p className="mt-5 font-medium text-[17px] text-[#DBDBDB]">
            Get access to your Orders, Wishlist and Recommendations
          </p>
          <img
            className="pl-5 mt-45"
            src="login_img_png.png"
            alt=""
          />
        </div>

        {/* input....... */}
        <div className="flex relative  p-10 bg-[#FFFFFF] items-start justify-start flex-col w-full xl:w-[60%]">
          <input
            {...register("email")}
            className="w-full outline-none border-b p-2 text-md placeholder:text-[#878787]"
            type="email"
            placeholder="Email"
          />
          <input
            {...register("passwaord")}
            className="w-full outline-none border-b p-2 text-md placeholder:text-[#878787]"
            type="password"
            placeholder="Password"
          />
          <small className="text-[#878787] mt-8">
            By continuing, you agree to Storzo's{" "}
            <a href="#" className="text-[#2874F2]">
              Terms of Use
            </a>{" "}
            and{" "}
            <a href="#" className="text-[#2874F2]">
              Privacy Policy.
            </a>
          </small>
          <button className="w-full h-[50px] rounded mt-10 cursor-pointer text-[#FFFFFF] font-bold bg-[#FB641B] active:bg-[#fb661beb]">
            Login
          </button>
          <div className="w-full mt-50 flex items-center justify-center">
            <Link to="/register" className="text-[#2874F2] text-sm font-bold">
              New to Storzo? Create an account
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
