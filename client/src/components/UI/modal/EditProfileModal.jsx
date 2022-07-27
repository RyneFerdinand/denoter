import { useEffect } from "react";
import { MdEdit, MdEmail } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import BaseModal from "./BaseModal";
import Input from "../../form/Input";
import TextArea from "../../form/TextArea";
import { AiFillCalendar } from "react-icons/ai";
import Dropdown from "../../form/Dropdown";
import { genderOption } from "../../../data/options";
import { BsGenderFemale } from "react-icons/bs";
import ImageButton from "../../form/ImageButton";

const EditProfileModal = (props) => {
  const { onHideModal, showModal } = props;

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    }
  }, [showModal]);

  return (
    showModal && (
      <BaseModal onHideModal={onHideModal} modalTitle={"Edit Profile"}>
        <div className="relative h-80">
          <div className="absolute z-0 h-4/5 w-full">
            <img
              src="https://i.kym-cdn.com/entries/icons/facebook/000/002/819/karp.jpg"
              className="h-full w-full object-cover"
              alt=""
            />
            <div className="absolute inset-0 bg-light-negative group bg-opacity-0 hover:bg-opacity-20 w-full h-full flex gap-5 items-center justify-center duration-100">
              <ImageButton>
                <MdEdit className="opacity-0 group-hover:opacity-100 w-10 h-10 cursor-pointer fill-light-main rounded-full bg-opacity-90 bg-light-negative p-2 hover:bg-opacity-75" />
              </ImageButton>
              <IoMdClose className="opacity-0 group-hover:opacity-100 w-10 h-10 cursor-pointer fill-light-main rounded-full bg-opacity-90 bg-light-negative p-2 hover:bg-opacity-75" />
            </div>
          </div>
          <div className="absolute left-10 bottom-0 z-10 aspect-square w-32 h-32">
            <img
              src="http://www.aweapps.com/images/easyblog_articles/662/magikarp.jpg"
              className="rounded-full object-cover w-full h-full"
              alt=""
            />
            <div className="rounded-full absolute inset-0 bg-light-negative group bg-opacity-0 hover:bg-opacity-20 w-full h-full flex gap-5 items-center justify-center duration-100">
              <ImageButton>
                <MdEdit className="opacity-0 group-hover:opacity-100 w-10 h-10 cursor-pointer fill-light-main rounded-full bg-opacity-90 bg-light-negative p-2 hover:bg-opacity-75" />
              </ImageButton>
            </div>
          </div>
        </div>
        <div className="px-10 py-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-bold text-lg ml-1">
              Bio
            </label>
            <TextArea placeholder="Bio" name="bio" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-bold text-lg ml-1">
              Email
            </label>
            <Input icon={false} name="email" type="email" placeholder="Email" />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="dob" className="font-bold text-lg ml-1">
              Date of Birth
            </label>
            <Input
              icon={<AiFillCalendar className="w-5 h-5 fill-inherit" />}
              name="dob"
              type="date"
              placeholder="Date of Birth"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="gender" className="font-bold text-lg ml-1">
              Gender
            </label>
            <Dropdown
              options={genderOption}
              icon={<BsGenderFemale className="w-5 h-5 fill-inherit" />}
              name="gender"
            />
          </div>
          <button
            // onClick={showModalHandler}
            className={`self-end text-highlight font-bold py-1 px-4 border-[1px] border-highlight rounded-full focus:outline-none hover:bg-highlight hover:text-light-main transition-colors duration-75`}
          >
            Save
          </button>
        </div>
      </BaseModal>
    )
  );
};

export default EditProfileModal;
