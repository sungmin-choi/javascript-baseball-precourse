import { NUMBER } from "./constants.js";
const getRandomNumber=()=>{
    return Math.floor((Math.random()*NUMBER.MAX)+NUMBER.MIN);
}

const generateComputerNumber=()=>{
    let computerNumber = new Set();
    while(computerNumber.size<3) computerNumber.add(getRandomNumber());
    return [...computerNumber];
}




export {generateComputerNumber};