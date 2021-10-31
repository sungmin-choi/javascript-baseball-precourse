import { ID,MESSAGE} from "../utils/constants.js";
import { generateComputerNumber } from "../utils/games.js";
import { validationInputNumber } from "../utils/validations.js";
export default function BaseballGame(){
    const $app=document.getElementById(ID.APP);
    const $submit = document.getElementById(ID.SUBMIT);
    const $userInput=document.getElementById(ID.USER_INPUT);


    const computerInputNumbers = generateComputerNumber();
    console.log(`${MESSAGE.COMPUTER_NUMBER} ${computerInputNumbers}`);
    const play=(computerInputNumbers,userInputNumbers)=>{
        console.log(computerInputNumbers,userInputNumbers);
    }

    const userInputNumber=(e)=>{
        e.preventDefault();
        const userInputNumbers = $userInput.value.split('').map(e=>+e);
        if(validationInputNumber(userInputNumbers)){
            play(computerInputNumbers,userInputNumbers);

        }else{
            alert(MESSAGE.WRONG_ALERT);
        }
    }
    $submit.addEventListener("click",userInputNumber);

}