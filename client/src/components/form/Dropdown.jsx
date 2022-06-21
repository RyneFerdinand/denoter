const Dropdown = (props) => {
  const { options, selected } = props;

  const selectedValue = "Default";
  const placeholderClass =
    selectedValue === "Default" ? "text-light-negative text-opacity-40" : "";

  return (
    <div className="relative w-full">
      <select
        name={props.name}
        className={`${placeholderClass} bg-transparent border-light-negative border-opacity-20 border-2 py-3 pl-14 w-full rounded-md text-md peer outline-none focus:outline-none focus:border-light-highlight`}
      >
        {options &&
          options.map((opt) => (
            <option value={opt.value} selected={selected === opt.value}>
              {opt.show}
            </option>
          ))}
      </select>
      <div className="flex flex-row items-center absolute h-full pl-4 inset-0 w-fit peer-focus:fill-light-highlight peer-focus:opacity-100 fill-light-negative opacity-40">
        {props.icon}
      </div>
    </div>
  );
};

export default Dropdown;
