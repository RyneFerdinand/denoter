import { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import AboutUs from "./setting-section/AboutUs";
import Authentication from "./setting-section/Authentication";
import PrivacyPolicy from "./setting-section/PrivacyPolicy";
import TermsAndCondition from "./setting-section/TermsAndCondition";

const SettingPage = () => {
  const settings = [
    "Theme",
    "Authentication",
    "Terms and Conditions",
    "Privacy Policy",
    "About Us",
  ];

  const [selectedSetting, setSelectedSetting] = useState(null);

  const changeSelectedSetting = (setting) => {
    setSelectedSetting(setting);
  };

  const selectedMenu = () => {
    if (selectedSetting === "About Us") {
      return <AboutUs />;
    } else if (selectedSetting === "Privacy Policy") {
      return <PrivacyPolicy />;
    } else if (selectedSetting === "Terms and Conditions") {
      return <TermsAndCondition />;
    } else if (selectedSetting === "Authentication") {
      return <Authentication />;
    }
  };

  return (
    <>
      <div className="flex flex-col w-10/12 gap-4 px-24">
        <h2 className="text-xl font-bold">Settings</h2>
        <div className="flex flex-row">
          <div className="w-4/12 flex flex-col gap-4 pr-6">
            {settings.map((setting, idx) => (
              <div
                key={idx}
                className={`cursor-pointer bg-light-main rounded-r-md text-lg font-normal shadow-lg border-l-4 border-light-main hover:border-l-highlight flex flex-row items-center justify-between py-4 pr-4 pl-6`}
                onClick={() => changeSelectedSetting(setting)}
              >
                <p>{setting}</p>
                <AiOutlineRight />
              </div>
            ))}
            <a
              href="mailto:dummymail@mail.com"
              className="cursor-pointer bg-light-main rounded-r-md text-lg font-normal shadow-lg border-l-4 border-light-main hover:border-l-highlight flex flex-row items-center justify-between py-4 pr-4 pl-6"
            >
              <p>Contact Us</p>
              <BsArrowUpRight />
            </a>
          </div>
          {selectedSetting && (
            <div className="pl-6 w-8/12">
              <div className="bg-light-main rounded-r-md shadow-lg px-10 py-6 flex flex-col h-fit">
                <h2 className="text-2xl font-bold border-b-4 border-highlight self-start pb-1">
                  {selectedSetting}
                </h2>
                {selectedMenu()}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SettingPage;
