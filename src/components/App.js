import { ID } from "../utils/constants.js";
import { generateComputerNumber } from "../utils/games.js";
export default function BaseballGame(){
    const $app=document.getElementById(ID.APP);
    const $submit = document.getElementById(ID.SUBMIT);
    const $userInput=document.getElementById(ID.USER_INPUT);

    const computerInputNumbers = generateComputerNumber();

    console.log(`🎁this is answer:${computerInputNumbers}`);

    const userInputNumber=(e)=>{
        e.preventDefault();
        console.log($userInput.value);
    }
    $submit.addEventListener("click",userInputNumber);






}