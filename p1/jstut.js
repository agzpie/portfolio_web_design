// PI = 4/1 - 4/3 - 4/5...
function calcPI(iterations){
    let pi = 0, divisor = 1;
    for(i = 0; i <= iterations; i++){
        pi = pi + (4/divisor) - (4/(divisor + 2));
        divisor += 4;
    }
    document.getElementById("Output1").value = pi.toFixed(10);
}

let fibList = [];

function getFibList(howMany){
    for(i = 0; i < howMany; i++){
        fibList[i] = fib(i);
    }
    // przesuwa listę o 1: fibList.shift();
    // fibList.pop() - ostatnia wartość
    // fibList.splice(3, 2) - usuwa wartość o indeksie 3 i kolejną
    document.getElementById("Output1").value = fibList.join(", ");
}

function fib(whichNum){
    let num1 = 1;
    let num2 = 1;
    let temp;

    for(i = 0; i < whichNum; i++){
        temp = num1;
        num1 = num1 + num2;
        num2 = temp;
    }
    return num2;
}

let mLText = "My dear old ~ sat me down to  hear some words of wisdom \n 1. Give a man a ~ and you ~ him for a day to ~ a ~ that is very ~ \n 2. Having a ~ in case you're in a ~ with your ~ \n A big and ~ ~ helps to ~ something.";

let mLArray = mLText.split(" ");
let inputArray = [];


function madLibGenerator(){
    createInputArray();
    
    if(checkForMissingInput()){
        document.getElementById("Output1").value = "Enter all values above";
        
    } else {
        createMLSentence();
    }
}

function createInputArray(){
    for(i = 0; i <= 11; i++){
        inputArray[i] = document.getElementById("i" + i).value;
    }
}

function checkForMissingInput(){
    let defaultArrayValues = ["Person", "Noun", "Verb", "Verb", "Noun", "Adjective", "Noun", "Event", "Body Part", "Adjective", "Noun", "Verb"];

    for(i = 0; i < inputArray.length; i++){
        if(defaultArrayValues.indexOf(inputArray[i]) > -1) {
            return true;
        }
    }
    return false;
}

function createMLSentence(){
    let arrayIndex = 0;
    for(i = 0; i < mLArray.length; i++){
        let matchIndex = mLArray.indexOf("~");
        mLArray[matchIndex] = inputArray[arrayIndex];
        arrayIndex++;
    }
    document.getElementById("Output1").value = mLArray.join(" ");
}