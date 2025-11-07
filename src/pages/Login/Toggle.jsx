export default function Toggle({ label, index, active, onClick }) {
	return (
		<span className={`${active === index ? 'bg-blue-400 ' : 'text-indigo-400'} cursor-pointer px-2 py-1 rounded-lg text-lg`}
			onClick={() => onClick(index)}
            id={label}
		>
			{label}
		</span>
	)
}