import { ID } from "../utils/constants.js";
import { generateComputerNumber } from "../utils/games.js";
import { validationInputNumber } from "../utils/validations.js";
export default function BaseballGame(){
    const $app=document.getElementById(ID.APP);
    const $submit = document.getElementById(ID.SUBMIT);
    const $userInput=document.getElementById(ID.USER_INPUT);

    const computerInputNumbers = generateComputerNumber();
    console.log(`🎁this is answer:${computerInputNumbers}`);

    const userInputNumber=(e)=>{
        e.preventDefault();
        const userInputNumbers = $userInput.value.split('').map(e=>+e);
        if(validationInputNumber(userInputNumbers)){
            console.log("good");

        }else{
            alert("😢입력이 잘못됬습니다 다시 입력해주세요.");
        }
    }
    $submit.addEventListener("click",userInputNumber);






}