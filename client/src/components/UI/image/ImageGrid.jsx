import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import ImageOverlay from "./ImageOverlay";

const ImageGrid = (props) => {
  const { type, images } = props;

  const count = images.length;
  const [imageOverlay, setImageOverlay] = useState(true);
  const [selectedImage, setSelectedImage] = useState(-1);
  const gridClass = [];
  const rounded = [];

  for (let i = 0; i < count; i++) {
    if (count === 1) {
      gridClass.push("row-span-2 col-span-2");
    } else if (count === 2 || (count === 3 && i === 0)) {
      gridClass.push("row-span-2");
    }
    if (count === 3 && i === 2) {
      gridClass.push("col-start-2");
    }
  }
  if (type === "CARD") {
    for (let i = 0; i < count; i++) {
      if (count === 1) {
        rounded.push("rounded-lg");
      } else if (count === 2) {
        if (i === 0) {
          rounded.push("rounded-l-lg");
        } else {
          rounded.push("rounded-r-lg");
        }
      } else if (count === 3) {
        if (i === 0) {
          rounded.push("rounded-l-lg");
        } else if (i === 1) {
          rounded.push("rounded-tr-lg");
        } else if (i === 2) {
          rounded.push("rounded-br-lg");
        }
      } else if (count === 4) {
        if (i === 0) {
          rounded.push("rounded-tl-lg");
        } else if (i === 1) {
          rounded.push("rounded-tr-lg");
        } else if (i === 2) {
          rounded.push("rounded-bl-lg");
        } else if (i === 3) {
          rounded.push("rounded-br-lg");
        }
      }
    }
  }

  const viewImageHandler = (idx) => {
    setSelectedImage(idx);
    setImageOverlay(true);
  };

  const closeOverlayHandler = () => {
    setImageOverlay(false);
  };

  return (
    <>
      {imageOverlay && (
        <ImageOverlay
          images={images}
          index={selectedImage}
          onCloseOverlay={closeOverlayHandler}
        />
      )}
      <div className="grid grid-cols-2 grid-rows-[150px_150px] gap-2">
        {type === "CARD"
          ? images.map((image, idx) => (
              <img
                key={idx}
                src={image}
                className={`object-cover cursor-pointer ${rounded[idx]} ${gridClass[idx]} h-full`}
                onClick={() => viewImageHandler(idx)}
                alt=""
              />
            ))
          : images.map((image, idx) => (
              <div className={`${gridClass[idx]} relative`}>
                <img
                  key={idx}
                  src={image}
                  className="rounded-lg cursor-pointer h-full object-cover"
                  alt=""
                />
                <AiFillCloseCircle className="absolute right-2 top-2 w-6 h-6 fill-light-main opacity-75 cursor-pointer" />
              </div>
            ))}
      </div>
    </>
  );
};

export default ImageGrid;
