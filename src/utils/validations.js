const validationInputNumber=(userInputNumbers)=>{
    if(checkInputNumberLength(userInputNumbers) &&
        checkInputNumberDiferrent(userInputNumbers) &&
        checkInputNumberIncludeZero(userInputNumbers)) return true;
    else return false;

}

const checkInputNumberLength=(userInputNumbers)=>{
    if(userInputNumbers.length===3)return true;
    else return false;
}
const checkInputNumberDiferrent=(userInputNumbers)=>{
    const [num1,num2,num3]=userInputNumbers;
    if(num1!==num2 && num1!==num3 && num2!==num3) return true;
    else return false;

}
const checkInputNumberIncludeZero=(userInputNumbers)=>{
    if(userInputNumbers.indexOf(0)===-1)return true;
    else return false;

}


export {validationInputNumber}