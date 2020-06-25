const colors = ["green", "red", "blue", "grey", "yellow"];

document.querySelector(".color").style.color = "White";

const button = document.getElementById("btn");

button.onclick = () => {
    let i = getRandom();
    let currentColor = colors[i];

    document.querySelector(".color").innerHTML = currentColor;
    document.querySelector(".color").style.color = currentColor;
    document.getElementById("background").style.backgroundColor = currentColor;
};

const getRandom = () => {
    return Math.round((Math.random() * 4))
}
