let name= prompt("Your Name?","" );
let textHi = "Hi ";
let textHow = "How are you?, ";
let textHave = "Have a nice day!, ";
let changeName = function(yourName,hi){
    hi = hi+yourName
    alert(hi)};
function changeYourName(yourName,hi){
    hi = hi+yourName
    alert(hi);
}
var changeNameTwo = new Function('yourname,bye', ' confirm(bye+yourname); ');
function MyArray(...args) {
    for (i = 0; i < args.length; i++) {
        if (args[i] == 1) { // Проверка на наличие числа 1 в массиве
            return console.log("Number 1")
        } ;
    };
  };
function MyDefaultArray(a,r,g = 3) {
    for (i = 0; i < arguments.length; i++) {
        if (arguments[i] == 1) { // Проверка на наличие числа 1 в массиве
            return console.log("Number 2")
        }; 
    };
  };

MyArray(0,2,4,6);
MyDefaultArray(2,4);
changeName(name,textHi);
changeYourName(name,textHow);
changeNameTwo(name, textHave)