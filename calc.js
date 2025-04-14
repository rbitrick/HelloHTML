const calcdisplay = document.getElementById("calcdisplay");

function appendToDisplay(input){
    calcdisplay.value += input;
}

function clearDisplay(){
    calcdisplay.value = "";
}

function calculate(){
    try{
        calcdisplay.value = eval(calcdisplay.value);
    }
    catch{
        calcdisplay.value = "Error"
    }
}