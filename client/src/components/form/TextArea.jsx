const TextArea = (props) => {
  const { placeholder, name } = props;

  const selectedValue = "";

  let placeholderClass = "";
  if (props.type === "date") {
    placeholderClass =
      selectedValue === "" ? "text-light-negative text-opacity-40" : "";
  }

  return (
    <div className="relative w-full">
      <textarea
        name={name}
        placeholder={placeholder}
        className="bg-transparent border-light-negative border-opacity-20 border-2 py-3 w-full px-3 rounded-md text-md peer outline-none focus:outline-none resize-none focus:border-highlight"
        rows="6"
      />
    </div>
  );
};

export default TextArea;
