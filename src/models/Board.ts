import { Cell } from "./Cell";
import { Colors } from "./Colors";

export class Board {
    cells: Cell[][] = []

    public initCells() {
        for (let y = 0; y < 8; y++) {
            const row: Cell[] = [];
            for (let x = 0; x < 8; x++) {
                if ((y + x) % 2 !== 0 ) {
                    row.push(new Cell(this, x, y, Colors.BLACK, null)); // черные ячейки
                } else {
                    row.push(new Cell(this, x, y, Colors.WHITE, null)) // белые ячейки
                }
            }
            this.cells.push(row);
        }
    }
}