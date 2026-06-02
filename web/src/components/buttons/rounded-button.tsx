interface RoundedButtonProps {
  text: string;
  size: "small" | "large";
  color: "orange" | "white" | "black";
  hover: "orange" | "white" | "filledOrange" | "black";
  customClass?: string;
}
const RoundedButton: React.FC<RoundedButtonProps> = ({
  text,
  color,
  hover,
  size,
  customClass,
}) => {
  const hoverClass =
    hover === "orange"
      ? "hover:text-black hover:bg-transparent hover:border-ocx-mauve"
      : hover === "white"
      ? "hover:text-black hover:bg-white hover:outline-black"
      : hover === "black"
      ? "hover:text-white hover:bg-black hover:outline-black"
      : "hover:text-white hover:bg-ocx-mauve hover:outline-ocx-mauve hover:outline-0";
  return (
    <button
      className={`rounded-full ${
        customClass ? customClass : ""
      } transition-all duration-300 font-medium box-content py-1  lg:py-3  outline outline-2 ${hoverClass} ${
        color === "orange"
          ? "outline-ocx-mauve  bg-ocx-mauve text-white "
          : "outline-black bg-white text-black "
      } ${size === "small" ? "lg:px-10 px-4" : "lg:px-16 px-7"} `}
    >
      {text}
    </button>
  );
};

export default RoundedButton;
