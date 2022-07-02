const Button = (props) => {

  let sizeClass = "";
  if(props.size === "SMALL") {
    sizeClass = " rounded-md hover:opacity-75 px-8 py-1 rounded-full"
  }  else {
    sizeClass = " w-full rounded-md hover:opacity-75 py-3"
  } 

  return (
    <button
      className={`bg-highlight text-light-main text-lg font-bold ${sizeClass}`}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
