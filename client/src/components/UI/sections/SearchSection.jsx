import UserCard from "../card/UserCard";
import { BsSearch } from "react-icons/bs";
import { UserContext } from "../../../context/context";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

const SearchSection = () => {
  const { userID } = useContext(UserContext);

  const { pathname } = useLocation();

  const isSetting = () => {
    if (pathname.toLowerCase().includes("setting")) {
      return true;
    }
    return false;
  };

  return (
    userID !== "" &&
    !isSetting() && (
      <div className="w-3/12 flex flex-col gap-6">
        <div className="bg-light-main py-3 px-5 relative rounded-md shadow-lg flex flex-row items-center">
          <input
            type="text"
            placeholder="Search for People"
            spellCheck="false"
            className="bg-transparent text-lg outline-none focus:outline-none w-full"
          />
          <BsSearch className="w-5 h-5 fill-inherit" />
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-xl font-bold">People to Follow</h4>
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
      </div>
    )
  );
};

export default SearchSection;
