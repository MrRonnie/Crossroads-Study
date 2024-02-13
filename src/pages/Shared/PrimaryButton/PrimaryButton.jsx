
const PrimaryButton = ({ children }) => {
  return (
    <button className="btn  bg-orange-500 text-white text-sm uppercase font-medium rounded hover:bg-red-600 focus:outline-none focus:bg-red-600 border-0">
      {children}
    </button>
  );
};

export default PrimaryButton;
