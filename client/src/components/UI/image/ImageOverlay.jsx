import { useEffect, useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { createPortal } from "react-dom";
import ItemsCarousel from "react-items-carousel";

const modalNode = document.getElementById("modal-root");

const ImageOverlay = (props) => {
  const { images, index, onCloseOverlay } = props;

  const [activeItemIndex, setActiveItemIndex] = useState(-1);

  useEffect(() => {
    setActiveItemIndex(index);
    document.body.style.overflow = "hidden";
  }, [index]);

  const closeOverlayHandler = () => {
    setActiveItemIndex(-1);
    document.body.style.overflow = "visible";
    onCloseOverlay();
  };

  return createPortal(
    <div className="fixed h-screen w-screen flex items-center justify-center bg-black bg-opacity-75 z-10">
      <button className="absolute right-5 top-5" onClick={closeOverlayHandler}>
        <IoMdClose className="fill-light-main opacity-75 hover:opacity-100 w-10 h-10" />
      </button>
      <div className="w-4/6">
        <ItemsCarousel
          requestToChangeActive={(e) => setActiveItemIndex(e)}
          activeItemIndex={activeItemIndex}
          numberOfCards={1}
          gutter={5}
          leftChevron={
            <button>
              <AiFillCaretLeft className="fill-light-main w-10 h-10 opacity-60 hover:opacity-100" />
            </button>
          }
          rightChevron={
            <button>
              <AiFillCaretRight className="fill-light-main w-10 h-10 opacity-60 hover:opacity-100" />
            </button>
          }
          outsideChevron
          chevronWidth={60}
        >
          {images.map((src, idx) => (
            <img src={src} key={idx} alt="" />
          ))}
        </ItemsCarousel>
      </div>
    </div>,
    modalNode
  );
};

export default ImageOverlay;
