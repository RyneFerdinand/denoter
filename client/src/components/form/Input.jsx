const Input = (props) => {
  const { type, placeholder, icon } = props;

  const selectedValue = "";

  let placeholderClass = "";
  if (props.type === "date") {
    placeholderClass =
      selectedValue === "" ? "text-light-negative text-opacity-40" : "";
  }

  return (
    <div className="relative w-full">
      <input
        type={type}
        placeholder={placeholder}
        spellCheck="false"
        className={`${placeholderClass} ${
          icon ? "pl-14" : "pl-3"
        } bg-transparent border-light-negative border-opacity-20 border-2 py-3 w-full pr-3 rounded-md text-md peer outline-none focus:outline-none focus:border-highlight`}
      />
      {icon && (
        <div className="flex flex-row items-center absolute h-full pl-4 inset-0 w-fit peer-focus:fill-highlight peer-focus:opacity-100 fill-light-negative opacity-40">
          {icon}
        </div>
      )}
    </div>
  );
};

export default Input;
