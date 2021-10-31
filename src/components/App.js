import { ID,MESSAGE,NUMBER} from "../utils/constants.js";
import { generateComputerNumber,getHint,getHintMessage } from "../utils/games.js";
import { validationInputNumber } from "../utils/validations.js";
export default function BaseballGame(){
    let [ball,strike]=[0,0];
    const $app=document.getElementById(ID.APP);
    const $submit = document.getElementById(ID.SUBMIT);
    const $userInput=document.getElementById(ID.USER_INPUT);
    const $resultView=document.getElementById(ID.RESULT_VIEW);

    let computerInputNumbers = generateComputerNumber();
    

    const play=(computerInputNumbers,userInputNumbers)=>{
        [ball,strike]=getHint(computerInputNumbers,userInputNumbers);
        if(strike===NUMBER.THREE){
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
            if(strike===NUMBER.THREE){
            const $restart = document.getElementById(ID.RESTART);
            $restart.addEventListener("click",resetGame);
            }
        }else{
            alert(MESSAGE.WRONG_ALERT);
        }
    }

    const resetGame=(e)=>{
        e.preventDefault();
        computerInputNumbers = generateComputerNumber();
        $resultView.innerHTML=``;
        $userInput.value=``;
    }
    $submit.addEventListener("click",userInputNumber);

}