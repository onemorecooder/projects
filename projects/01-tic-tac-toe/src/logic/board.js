import {WINNER_COMBOS} from "../constants.js";

export const checkWinnerFrom = (boardToCheck) => {
    /*SE REVISAN TODAS LAS COMBINACIONES GANADORAS
    * PARA VER QUIÉN DE LOS DOS HA GANADO (X u O)*/
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo
        if (
            boardToCheck[a] &&
            boardToCheck[a] === boardToCheck[b] &&
            boardToCheck[a] === boardToCheck[c]
        ) {
            return boardToCheck[a]
        }
    }
    /*SI NO HAY GANADOR*/
    return null
}