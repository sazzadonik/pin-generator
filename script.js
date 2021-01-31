// let displayValue = document.getElementById("displayValue").value;

let digitContainer = document.getElementById("digitContainer");
let generateClick = document.getElementById("generateButton");
let submitButton = document.getElementById("submit");

digitContainer.addEventListener("click", function(event){
    let display = document.getElementById("displayValue");
    let typeDigit = event.target.innerText;
    if(typeDigit == "C"){
        test = "";
        display.value = "";
    }else if(typeDigit == "0"||
            typeDigit == "1" ||
            typeDigit == "2" ||
            typeDigit == "3" ||
            typeDigit == "4" ||
            typeDigit == "5" ||
            typeDigit == "6" ||
            typeDigit == "7" ||
            typeDigit == "8" || 
            typeDigit == "9" ){

        let displayValue = display.value;
        displayValue =  displayValue + typeDigit;
        display.value = displayValue;
    }else if(typeDigit == "<"){
        let removeLast = display.value;
        if(removeLast != ""){
            removeLast = removeLast.slice(0, -1);
        }
        display.value = removeLast;
    }
});


generateClick.addEventListener("click", function(){
    generateDisplay = document.getElementById("generateDisplay");
    let randomNumber = randomNumberFunction();
    if(randomNumber.length != 4 ){
        randomNumber = randomNumberFunction();
    }
    generateDisplay.value = randomNumber;
});

function randomNumberFunction(){
    let randomNumber = Math.random() * 10000 + "";
    randomNumber = randomNumber.split(".")[0];
    return randomNumber;
}

submitButton.addEventListener("click",function(){
    let generateValue = +document.getElementById("generateDisplay").value;
    let calculatorValue = +document.getElementById("displayValue").value
    if(generateValue == calculatorValue && generateValue != "" && calculatorValue != ""){
        document.getElementById("notifyCorrect").style.display = "block";
        document.getElementById("notifyWrong").style.display = "none";
    }else{
        document.getElementById("notifyWrong").style.display = "block";
        document.getElementById("notifyCorrect").style.display = "none";
        itemLeft();
    }
    document.getElementById("generateDisplay").value = "";
    document.getElementById("displayValue").value = "";
});


function itemLeft(){
    let item = +document.getElementById("itemLeft").innerText;
    item = item - 1;
    document.getElementById("itemLeft").innerText = item;
    if(item == 0){
        document.getElementById("submit").disabled = true;
    }
}