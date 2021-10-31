import { ID,MESSAGE} from "../utils/constants.js";
import { generateComputerNumber,getHint,getHintMessage } from "../utils/games.js";
import { validationInputNumber } from "../utils/validations.js";
export default function BaseballGame(){
    const $app=document.getElementById(ID.APP);
    const $submit = document.getElementById(ID.SUBMIT);
    const $userInput=document.getElementById(ID.USER_INPUT);
    const $resultView=document.getElementById(ID.RESULT_VIEW);


    const computerInputNumbers = generateComputerNumber();
    console.log(`${MESSAGE.COMPUTER_NUMBER} ${computerInputNumbers}`);
    const play=(computerInputNumbers,userInputNumbers)=>{
        const [ball,strike]=getHint(computerInputNumbers,userInputNumbers);
        if(strike===3){
            return `<p>${MESSAGE.CORRECT}</p>
                    <span>${MESSAGE.RESTART}</span> <button id="game-restart-button">재시작</button>`;
        }else{
            return getHintMessage(ball,strike);
        }
    }

    const userInputNumber=(e)=>{
        e.preventDefault();
        const userInputNumbers = $userInput.value.split('').map(e=>+e);
        if(validationInputNumber(userInputNumbers)){
            const message=play(computerInputNumbers,userInputNumbers);
            $resultView.innerHTML=`${message}`;
        }else{
            alert(MESSAGE.WRONG_ALERT);
        }
    }
    $submit.addEventListener("click",userInputNumber);

}