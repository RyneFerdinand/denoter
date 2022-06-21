const Button = (props) => {
  return (
    <button
      className="bg-light-highlight text-light-main py-3 text-lg font-bold w-full rounded-md hover:opacity-75"
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
