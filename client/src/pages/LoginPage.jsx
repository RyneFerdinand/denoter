import Input from "../components/form/Input";
import {
  FaUser,
  FaLock,
  FaGoogle,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import { MainLogo } from "../components/icons/Logo";
import Button from "../components/form/Button";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-8 w-1/3 mx-auto dark:bg-dark-main bg-light-main py-16 rounded-md shadow-lg">
        <MainLogo />
        <form className="flex flex-col items-center gap-4 cursor-default mt-4 w-2/3">
          <Input
            icon={<FaUser className="w-5 h-5 fill-inherit" />}
            name="username"
            type="text"
            placeholder="Username"
          />
          <Input
            icon={<FaLock className="w-5 h-5 fill-inherit" />}
            name="password"
            type="password"
            placeholder="Password"
          />
          <Button type="submit">LOGIN</Button>
          <p>OR</p>
          <div className="flex flex-row w-full justify-center gap-4">
            <div className="cursor-pointer bg-light-negative border-2 border-light-negative fill-light-back p-3 hover:opacity-80 rounded-full transition-opacity duration-75 ">
              <FaGoogle className="w-6 h-6 rounded-full fill-inherit" />
            </div>
            <div className="cursor-pointer bg-light-negative border-2 border-light-negative fill-light-back p-3 hover:opacity-80 rounded-full transition-opacity duration-75 ">
              <FaFacebookF className="w-6 h-6 rounded-full fill-inherit" />
            </div>
            <div className="cursor-pointer bg-light-negative border-2 border-light-negative fill-light-back p-3 hover:opacity-80 rounded-full transition-opacity duration-75 ">
              <FaTwitter className="w-6 h-6 rounded-full fill-inherit" />
            </div>
          </div>
          <p className="font-light mt-4">
            Don't have an account ?{" "}
            <Link to="/register" className="font-medium hover:underline">
              Register Here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
