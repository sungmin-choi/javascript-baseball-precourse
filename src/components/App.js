import { ID } from "../utils/constants.js";
export default function BaseballGame(){
    const $app=document.getElementById(ID.APP);
    const $submit = document.getElementById(ID.SUBMIT);
    const $userInput=document.getElementById(ID.USER_INPUT);
    const userInputNumber=(e)=>{
        e.preventDefault();
        console.log($userInput.value);
    }
    $submit.addEventListener("click",userInputNumber);






}