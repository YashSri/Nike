const Button = ({ label, iconURL, backgroundColor, textColor, borderColor }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white border-x-coral-red"
      } ${backgroundColor === 'bg-white' ? 'border-gray-300' : ''}`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          className="ml-2 rounded-full w-5 h-5"
          alt=""
        />
      )}
    </button>
  );
};

export default Button;
