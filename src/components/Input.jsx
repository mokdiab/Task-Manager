import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textArea, ...props }, ref) {
  return (
    <p className="p-0">
      <label className="block mt-4 text-gray-600">{label}</label>
      {textArea ? (
        <textarea
          className="p-2 border rounded w-full"
          ref={ref}
          {...props}
        ></textarea>
      ) : (
        <input
          className="p-2 text-stone-700 border rounded w-full"
          ref={ref}
          {...props}
        />
      )}
    </p>
  );
});
export default Input;
