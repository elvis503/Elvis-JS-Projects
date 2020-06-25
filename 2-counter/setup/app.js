const btnDecrease = document.getElementById("decrease");

const btnIncrease = document.getElementById("increase");

const btnReset = document.getElementById("reset");

const value = document.querySelector("#value");

let counter = 0;

btnReset.onclick = function(){
    counter = 0;
    view(counter);
}

btnIncrease.onclick = function(){
    counter ++;
    view(counter);
}

btnDecrease.onclick = function(){
    counter --;
    view(counter);
}

function view(number) {
    value.innerHTML = number;
    if(number < 0){
        //value.style.col
        value.style.color = "red";
    }else{
        value.style.color = "var(--clr-grey-2)";
    }
}



