import BaseModal from "./BaseModal";
import TextareaAutosize from "react-textarea-autosize";
import ReactTextareaAutosize from "react-textarea-autosize";
import { dummyImages } from "../../../data/dummy-data";
import ImageGrid from "../image/ImageGrid";
import ImageButton from "../../form/ImageButton";
import { BsImageFill } from "react-icons/bs";
import GifIcon from "../../icons/GifIcon";
import Button from "../../form/Button";

const CommentModal = (props) => {
  const { onHideModal, showModal } = props;

  return (
    showModal && (
      <BaseModal onHideModal={onHideModal} modalTitle={"Comment"}>
        <div className="gap-8 flex flex-row px-4 py-4">
          <img
            src="https://cdn0-production-images-kly.akamaized.net/kHTgvWOsA9q6cSeYIn_gu4QORys=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/1502851/original/072728300_1486650977-magikarp-know_your_meme.jpg"
            alt=""
            className="aspect-square w-12 rounded-full object-cover self-start"
          />
          <div className="flex flex-col gap-6 w-10/12">
            <TextareaAutosize
              name=""
              id=""
              maxRows={5}
              spellCheck="false"
              className="resize-none col text-xl w-full py-2 focus:outline-none"
              placeholder="Write Something..."
            />
            {dummyImages.length > 0 && (
              <ImageGrid type="FORM" images={dummyImages} />
            )}
            <div className="flex flex-row justify-between">
              <div className="flex flex-row items-center gap-4">
                <ImageButton>
                  <BsImageFill className="fill-light-negative h-7 w-auto cursor-pointer opacity-75 hover:opacity-90" />
                </ImageButton>
                <ImageButton>
                  <GifIcon className="fill-light-negative-main h-7 opacity-75 hover:opacity-90 cursor-pointer" />
                </ImageButton>
              </div>
              <Button size="SMALL">Post</Button>
            </div>
          </div>
        </div>
      </BaseModal>
    )
  );
};

export default CommentModal;
