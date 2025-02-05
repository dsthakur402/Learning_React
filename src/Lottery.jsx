import { useState } from "react";
import "./Lottery.css";

export default function Lottery() {
    let [num, setNum] = useState(0);
    let [win, setWin] = useState(false); 

    
    let generateNumber = () => {
        let n = Math.floor(Math.random() * 1000) + 1;
        setNum((prev) => n);
        setWin(() => {
            return n < 100;
        });
    };

    return (
        <div>
            <h1>WELCOME! to satta bazar</h1>
            <div>
                <input
                    type="text"
                    className="lotteryNumber"
                    value={num > 0 ? num : "Your lottery no."}
                    readOnly
                />
            </div>
            <button onClick={generateNumber}>Generate Lottery No.</button>
            {win && <h1> You won! </h1>}
        </div>
    );
}
