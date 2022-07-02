import { BsPersonPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

const defaultImage =
  "https://img1.ak.crunchyroll.com/i/spire3/b04bb9778e5e5f4aacc48341c6c301711621877106_full.jpg";

const UserCard = (props) => {
  const { type } = props;

  return (
    <Link
      to={`/profile/magikarp_`}
      className={`bg-light-main ${
        type === "LARGE"
          ? "py-5 px-7 grid-rows-2 grid-cols-[0.4fr_2.4fr_0.3fr] gap-x-6"
          : "py-3 px-5 grid-cols-[0.7fr_2fr_0.3fr] gap-x-4"
      } rounded-md shadow-lg grid items-center justify-between cursor-pointer`}
    >
      <img
        src={defaultImage}
        className=" object-cover aspect-square rounded-full"
        alt=""
      />
        <h4 className={`${type === "LARGE" ? "text-2xl" : "text-xl"} font-medium`}>@Pochita_</h4>
        {type === "LARGE" && (
          <p className="row-start-2 col-start-2 self-start">
            A dog that has a chainsaw for a nose, not really a fan for colors
            other than orange though so yeah.
          </p>
        )}
      <div className="hover:fill-light-main w-fit justify-self-center hover:bg-light-negative border-2 p-1 rounded-md border-transparent transition-colors duration-75">
        <BsPersonPlus className="w-6 h-6 fill-inherit" />
      </div>
    </Link>
  );
};

export default UserCard;
