export default function Button({ type = "button", children, action }) {
  return (
    <button
      type={type}
      className="px-4 py-2 bg-black hover:bg-gray-700 text-white rounded-full"
      onClick={action}
    >
      {children}
    </button>
  );
}
