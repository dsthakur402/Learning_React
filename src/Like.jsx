import { useState } from "react";

export default function Like() {
    
    const[isLike, setIsLike] = useState(false);
    const[count, setCount] = useState(0);
    let toggle = () => {
        setCount(count+1);
        setIsLike(!isLike);
    }
    let styles = {color : "red"};
    return (
        <div>
            <h1>count = {count}</h1>
            <p onClick={toggle}>
                {
                    isLike ? (
                        <i class="fa-solid fa-heart" aria-hidden="true"></i>
                    ): (
                        <i class="fa-regular fa-heart" aria-hidden="true"></i>
                    )
                }
            </p>
         
        </div>
    );
}