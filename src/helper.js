export function generateNumber(count) {
    let numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * 9) + 1);
    }
    return numbers;
}

export function sum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

export function winningCond(ticket) {
    return ticket.every((num) => num === ticket[0]);
}