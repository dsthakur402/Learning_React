import { useState } from "react";
import "./Lottery.css";
import { generateNumber, sum, winningCond} from "./helper";
import Ticket from "./Ticket";


export default function Lottery({n=3}) {
    let [ticket, setNum] = useState(generateNumber(n));
    let isWinning = winningCond(ticket); 

    let buyTicket = () => {
        setNum(generateNumber(n));
    };

    return (
        <div>
            <h1>WELCOME! to satta bazar</h1>
            <div>
                <Ticket ticket={ticket}/>
            </div>
            <button onClick={buyTicket}>Generate Lottery No.</button>
            {isWinning ? <h1> You won! </h1> : <h3>Better Luck! next time</h3> }
        </div>
    );
}
