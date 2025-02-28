export default function Button({ type = "button", children, action, customClass }) {
  return (
    <button
      type={type}
      className={`px-4 py-2 ${customClass} rounded-full`}
      onClick={action}
    >
      {children}
    </button>
  );
}
