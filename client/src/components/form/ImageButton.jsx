import React from "react";
import { useRef } from "react";

const ImageButton = (props) => {
  const fileInputRef = useRef();

  const imageChangeHandler = async (event) => {
    // props.onFileSelect(props.name, event.target.files[0]);
  };

  const imageUploadHandler = async () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <input
        type="file"
        name={props.name}
        id={props.id}
        onChange={imageChangeHandler}
        className="hidden"
        ref={fileInputRef}
        accept="image/*"
      />
      <button type="buton" onClick={imageUploadHandler}>
        {props.children}
      </button>
    </div>
  );
}

export default ImageButton;