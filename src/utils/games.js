import { NUMBER,MESSAGE} from "./constants.js";
const getRandomNumber=()=>{
    return Math.floor((Math.random()*NUMBER.MAX)+NUMBER.MIN);
}

const generateComputerNumber=()=>{
    let computerNumber = new Set();
    while(computerNumber.size<NUMBER.THREE) computerNumber.add(getRandomNumber());
    console.log(`${MESSAGE.COMPUTER_NUMBER} ${[...computerNumber]}`);
    return [...computerNumber];
}

const getHint=(computerInputNumbers,userInputNumbers)=>{
    let ball=NUMBER.ZERO;
    let strike=NUMBER.ZERO;
    computerInputNumbers.forEach((number,index)=>{
        if(number===userInputNumbers[index]) strike++;
        else if(userInputNumbers.indexOf(number)!==-1)ball++;
    })
    return [ball,strike];
}

const getHintMessage=(ball,strike)=>{
    if(ball===NUMBER.ZERO && strike===NUMBER.ZERO) return MESSAGE.NOTHING;
    else if(ball>NUMBER.ZERO && strike===NUMBER.ZERO) return `${ball}${MESSAGE.BALL}`;
    else if(ball===NUMBER.ZERO && strike>NUMBER.ZERO && strike<NUMBER.THREE) return `${strike}${MESSAGE.STRIKE}`;
    else if(ball>NUMBER.ZERO && strike>NUMBER.ZERO) return `${ball}${MESSAGE.BALL} ${strike}${MESSAGE.STRIKE}`
}



export {generateComputerNumber,getHint,getHintMessage};