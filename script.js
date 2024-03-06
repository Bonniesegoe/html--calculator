function getHistory () {
    return document.getElementById("history").innerText;
}

function printHistory(num){
    document.getElementById("history-value").innerText=num;
}

function getOutput(){
    return document.getElementById("output-value").innerText;
}

function printOutput(num){
    if(num=="") {
        document.getElementById("output-value").innerText=num;
    }
    else{
        document.getElementById("output-value").innerText=getFormattedNumber(num);
    }
}

//Adds with comma separated values
function getFormattedNumber(num){
    if(num=="-"){
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

//Removes comma present in values
function reverseNumberFormat(num){
    return Number(num.replace(/, /g, ''));
}

var operator = document.getElementsByClassName("operators");
for(var i =0; i<operator.length; i++){
    operator[i].addEventListener('click, function'())
}