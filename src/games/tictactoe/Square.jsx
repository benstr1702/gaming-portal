function Square({ value, handleClick }) {
	return (
		<button
			className="w-20 h-20 bg-green-400 flex items-center justify-center text-3xl"
			onClick={handleClick}
		>
			{value}
		</button>
	);
}

export default Square;
