import Square from "./Square";

function Board({ squares, onClick, isGameOver }) {
	return (
		<div className="grid grid-cols-3 gap-1">
			{squares.map((square, i) => (
				<Square
					key={i}
					value={square}
					handleClick={() => onClick(i)}
					disabled={isGameOver || square}
				/>
			))}
		</div>
	);
}

export default Board;
