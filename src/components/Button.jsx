export default function Button({ children, ...props }) {
  return (
    <button
      className=" mt-4 mx-2 p-2 bg-gray-800 text-gray-200 hover:bg-gray-700 rounded focus:outline-none focus:ring focus:border-blue-300 w-32 h-10"
      {...props}
    >
      {children}
    </button>
  );
}
