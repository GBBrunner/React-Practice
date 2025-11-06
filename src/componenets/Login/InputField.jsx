export default function InputField({ label, type = 'text', placeholder = '', value}) {
  return (
    <div className="mb-4 flex items-center gap-4">
      <label className="w-32 text-right text-gray-700 text-sm font-medium" htmlFor={label}>
        {label}
      </label>
      <input
        id={label}
        type={type}
        placeholder={placeholder}
        value={value}
        className="shadow-sm border border-gray-300 rounded-md w-64 py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
}