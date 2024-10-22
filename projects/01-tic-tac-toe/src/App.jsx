import './App.css'
import {useState} from "react";
import confetti from "canvas-confetti"
import {Square} from "./components/Square.jsx";

import {TURNS} from "./constants.js";

import {checkWinnerFrom} from "./logic/board.js";

import {saveGameToStorage, resetFameStorage} from "./logic/storage/index.js";

import {WinnerModal, checkEndGame} from "./components/WinnerModal.jsx";

function App() {
    const [board, setBoard] = useState(() => {
        const boardFromStorage = window.localStorage.getItem("board");
        return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
    })

    const [turn, setTurn] = useState(() => {
        const turnFromStorage = window.localStorage.getItem("turn");
        return turnFromStorage ?? TURNS.X
    })
    /*NULL = NO HAY GANADOR
    * FALSE = HAY UN EMPATE*/

    const [winner, setWinner] = useState(null)

    const resetGame = () => {
        setBoard(Array(9).fill(null))
        setTurn(TURNS.X)
        setWinner(null)

        // RESETEAMOS EL STORAGE
        resetFameStorage()
    }

    const updateBoard = (index) => {
        /*NO SE ACTUALIZA SI YA HAY ALGO EN LA CASILLA
        * O SI HAY UN GANADOR*/
        if (board[index] || winner) return
        /*ACTUALIZA EL TABLERO*/
        const newBoard = [...board]
        newBoard[index] = turn
        setBoard(newBoard)
        /*CAMBIA EL TURNO*/
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
        setTurn(newTurn)
        // GUARDAR PARTIDA AQUÍ
        saveGameToStorage({board: newBoard, turn: newTurn})

        const newWinner = checkWinnerFrom(newBoard)
        /*LA ACTUALIZACIÓN DE ESTADOS ES ASÍNCRONA*/
        if (newWinner) {
            confetti()
            setWinner(newWinner)
        } else if (checkEndGame(newBoard)) {
            setWinner(false)
        }

    }

    return (
        <main className='board'>
            <h1>TicTacToe</h1>
            <button onClick={resetGame}>Reset Game</button>
            <section className='game'>
                {
                    board.map((_, index) => {
                        return (
                            <Square
                                key={index}
                                index={index}
                                updateBoard={updateBoard}
                            >
                                {board[index]}
                            </Square>
                        )
                    })
                }
            </section>
            <section className="turn">
                <Square isSelected={turn === TURNS.X}>
                    {TURNS.X}
                </Square>
                <Square isSelected={turn === TURNS.O}>
                    {TURNS.O}
                </Square>
            </section>

            <WinnerModal winner={winner} resetGame={resetGame}/>
        </main>
    )
}

export default App
