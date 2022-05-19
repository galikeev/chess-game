import { useEffect, useState } from "react";
import BoardComponent from "./components/boardComponent/BoardComponent";
import LostFigures from "./components/lostFigures/LostFigures";
import Timer from "./components/timer/Timer";
import { Board } from "./models/Board";
import { Colors } from "./models/Colors";
import { Player } from "./models/Player";


const App = () => {

	const [board, setBoard] = useState(new Board());
	const [currentPlayer, setCurrentPlayer] = useState <Player | null>(null);
	const whitePlayer = new Player(Colors.WHITE);
	const blackPlayer = new Player(Colors.BLACK);

	useEffect(() => {
		restart();
		setCurrentPlayer(whitePlayer);
	}, [])

	const restart = () => {
		const newBoard = new Board();
		newBoard.initCells();
		newBoard.addFigures();
		setCurrentPlayer(whitePlayer);
		setBoard(newBoard);
	}

	const swapPlayer = () => {
		setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer);
	}

	return (
		<div className="app">
			<Timer
				restart={restart}
				currentPlayer={currentPlayer}
			/>
			<BoardComponent 
				board={board} 
				setBoard={setBoard}
				currentPlayer={currentPlayer}
				swapPlayer={swapPlayer}
			/>
			<div>
				<LostFigures title='Черные фигуры' figures={board.lostBlackFigures}/>
				<LostFigures title='Белые фигуры' figures={board.lostWhiteFigures}/>
			</div>
		</div>
	);
}

export default App;
