import { SubLogo } from "../../icons/Logo";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { BsPerson, BsPersonFill } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../../context/context";

const Navigation = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { userID } = useContext(UserContext);

  const checkPath = (menu) => {
    return pathname.includes(menu);
  };

  return (
    userID !== "" && (
      <nav className=" w-2/12">
        <div className="fixed flex flex-col items-start gap-4 w-2/12">
          <SubLogo />
          <div className="flex flex-col gap-4 w-full">
            <Link
              to="/home"
              className={`${
                checkPath("home")
                  ? "fill-highlight text-highlight"
                  : "fill-light-negative opacity-50 text-light-negative"
              } flex flex-row items-center py-3 px-2 gap-8 cursor-pointer border-2 border-transparent rounded-lg hover:bg-light-negative hover:bg-opacity-10 focus:outline-none`}
            >
              <AiFillHome className="w-7 h-7" />
              <h4 className="text-inherit text-xl font-medium">Home</h4>
            </Link>
            <Link
              to="/profile/magikarp_"
              className={`${
                checkPath("profile")
                  ? "fill-highlight text-highlight"
                  : "fill-light-negative opacity-50 text-light-negative"
              } flex flex-row items-center py-3 px-2 gap-8 cursor-pointer border-2 border-transparent rounded-lg hover:bg-light-negative hover:bg-opacity-10 focus:outline-none`}
            >
              <BsPersonFill className="w-7 h-7" />
              <h4 className="text-inherit text-xl font-medium">Profile</h4>
            </Link>
            <Link
              to="/setting"
              className={`${
                checkPath("setting")
                  ? "fill-highlight text-highlight"
                  : "fill-light-negative opacity-50 text-light-negative"
              } flex flex-row items-center py-3 px-2 gap-8 cursor-pointer border-2 border-transparent rounded-lg hover:bg-light-negative hover:bg-opacity-10 focus:outline-none`}
            >
              <AiFillSetting className="w-7 h-7" />
              <h4 className="text-inherit text-xl font-medium">Setting</h4>
            </Link>
            <button
              onClick={() => navigate("/login")}
              type="button"
              className="fill-warn text-warn font-bold flex flex-row items-center py-3 px-2 gap-8 cursor-pointer border-2 border-transparent rounded-lg hover:bg-light-negative hover:bg-opacity-10 focus:outline-none"
            >
              <FiLogOut className="w-7 h-7" />
              <h4 className="text-inherit text-xl font-medium">Logout</h4>
            </button>
          </div>
        </div>
      </nav>
    )
  );
};

export default Navigation;
