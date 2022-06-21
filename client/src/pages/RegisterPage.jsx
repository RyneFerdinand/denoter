import { FaLock, FaUser } from "react-icons/fa";
import Input from "../components/form/Input";
import { MdEmail } from "react-icons/md";
import { AiFillCalendar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsGenderFemale } from "react-icons/bs";

import { genderOption } from "../options"

import Button from "../components/form/Button";
import { MainLogo } from "../components/logo/Logo";
import Dropdown from "../components/form/Dropdown";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center justify-center gap-8 w-1/3 mx-auto bg-light-main py-16 px-24 rounded-md shadow-lg">
        <MainLogo />
        <form className="flex flex-col items-center gap-4 w-full cursor-default mt-4">
          <Input
            icon={<FaUser className="w-5 h-5 fill-inherit" />}
            name="username"
            type="text"
            placeholder="Username"
          />
          <Input
            icon={<MdEmail className="w-5 h-5 fill-inherit" />}
            name="email"
            type="email"
            placeholder="Email"
          />
          <Input
            icon={<FaLock className="w-5 h-5 fill-inherit" />}
            name="password"
            type="password"
            placeholder="Password"
          />
          <Input
            icon={<AiFillCalendar className="w-5 h-5 fill-inherit" />}
            name="dob"
            type="date"
            placeholder="Date of Birth"
          />
          <Dropdown
            options={genderOption}
            icon={<BsGenderFemale className="w-5 h-5 fill-inherit" />}
            name="gender"
          />
          <Button type="submit">REGISTER</Button>
          <p className="font-light mt-4">
            Already have an account ?{" "}
            <Link to="/login" className="font-medium hover:underline">
              Login Here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
