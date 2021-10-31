
const getRandomNumber=()=>{
    return Math.floor((Math.random()*9)+1);
}

const generateComputerNumber=()=>{
    let computerNumber = new Set();
    while(computerNumber.size<3) computerNumber.add(getRandomNumber());
    return [...computerNumber];
}




export {generateComputerNumber};