import React, { FC, useState } from "react";
import { Board } from "../../models/Board";
import { Cell } from "../../models/Cell";
import CellComponent from "../cellComponent/CellComponent";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({board, setBoard}) => {

    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

    const click = (cell: Cell) => {
        if (cell.figure) {
            setSelectedCell(cell);
        }
    }

    return (
        <div className="board">
            {board.cells.map((row, index) => {
                return (
                    <React.Fragment key={index}>
                        {row.map(cell => {
                            return (
                                <CellComponent 
                                    click={click}
                                    cell={cell} 
                                    key={cell.id}
                                    selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                                />
                            )
                        })}
                    </React.Fragment>
                )
            })}
        </div>
    );
};

export default BoardComponent;