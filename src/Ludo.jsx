import { useState } from "react";

export default function Ludo() {
    const [moves, setMoves] = useState({blue: 0, yellow: 0, green: 0, red: 0});

    let blueClick = () => {
        setMoves( (preMoves) => {
            return { ...preMoves, blue: preMoves.blue + 1 };
        });
    }
    let yellowClick = () => {
        setMoves( (preMoves) => {
            return { ...preMoves, yellow: preMoves.yellow + 1 };
        });
    }
    let greenClick = () => {
        setMoves( (preMoves) => {
            return { ...preMoves, green: preMoves.green + 1 };
        });
    }
    let redClick = () => {
        setMoves( (preMoves) => {
            return { ...preMoves, red: preMoves.red + 1 };
        });
    }

    return(
        <div>
            <h3>Game Begins!</h3>
            <p>Blue Moves = {moves.blue}</p>
            <button style={{background: "blue"}} onClick={blueClick}>+1</button>
            <p>yellow Moves = {moves.yellow} </p>
            <button style={{background: "yellow", color: "black"}} onClick={yellowClick}>+1</button>
            <p>Green Moves = {moves.green} </p>
            <button style={{background: "green"}} onClick={greenClick}>+1</button>
            <p>Red Moves = {moves.red} </p>
            <button style={{background: "red"}} onClick={redClick}>+1</button>            
        </div>
    );
}