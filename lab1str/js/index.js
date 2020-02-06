var Letter = prompt("enter the string","");
function ShowCount(a) {
    let count = 0;
    for (let i = 0; i < Letter.length; i++){
        (a == Letter[i]) ? count+=1 :" ";
    }
    return console.log(count)
}
ShowCount(prompt("what letter count?",""))