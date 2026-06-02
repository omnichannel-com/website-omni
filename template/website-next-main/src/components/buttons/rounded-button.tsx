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
      ? "hover:text-black hover:bg-transparent hover:border-secondaryColor"
      : hover === "white"
      ? "hover:text-black hover:bg-white hover:outline-black"
      : "hover:text-white hover:bg-secondaryColor hover:outline-secondaryColor hover:outline-0";
  return (
    <button
      className={`rounded-full ${
        customClass ? customClass : ""
      } transition-all duration-300 font-medium box-content py-1  lg:py-3  outline outline-2 ${hoverClass} ${
        color === "orange"
          ? "outline-secondaryColor  bg-secondaryColor text-white "
          : "outline-black bg-white text-black "
      } ${size === "small" ? "lg:px-10 px-4" : "lg:px-16 px-7"} `}
    >
      {text}
    </button>
  );
};

export default RoundedButton;
