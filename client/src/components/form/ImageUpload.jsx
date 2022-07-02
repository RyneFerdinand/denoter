import { useRef } from "react";

const ImageUpload = (props) => {
  const fileInputRef = useRef();

  const imageSelectHandler = () => {
    
  }

  return (
    <>
      <input
        type="file"
        name={props.name}
        id={props.id}
        onChange={imageSelectHandler}
        className="hidden"
        ref={fileInputRef}
        accept="image/*"
      />
    </>
  );
};

export default ImageUpload;
