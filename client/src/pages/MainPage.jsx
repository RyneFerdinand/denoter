import Navigation from "../components/UI/sections/Navigation";
import SearchSection from "../components/UI/sections/SearchSection";
import HomePage from "./subpage/HomePage";

const MainPage = () => {
  return (
    <>
      <div className="flex flex-row py-8 px-20">
        <Navigation />
        <div className="w-7/12 px-24">
          <HomePage />
        </div>
        <SearchSection />
      </div>
    </>
  );
};

export default MainPage;
