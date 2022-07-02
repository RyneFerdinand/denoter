const Dropdown = (props) => {
  const { options, selected, type } = props;

  const selectedValue = "DEFAULT";
  const placeholderClass =
    selectedValue === "DEFAULT" ? "text-light-negative text-opacity-40" : "";

  return (
    <div className="relative w-full">
      <select
        name={props.name}
        className={`${placeholderClass} bg-transparent border-light-negative dark:text-dark-negative border-opacity-20 border-2 py-3 pl-14 w-full rounded-md text-md peer outline-none focus:outline-none focus:border-highlight`}
      >
        {options &&
          options.map((opt) => (
            <option value={opt.value} selected={selected === opt.value}>
              {opt.show}
            </option>
          ))}
      </select>
      <div className="flex flex-row items-center absolute h-full pl-4 inset-0 w-fit peer-focus:fill-highlight peer-focus:opacity-100 fill-light-negative dark:fill-dark-negative opacity-40">
        {props.icon}
      </div>
    </div>
  );
};

export default Dropdown;
