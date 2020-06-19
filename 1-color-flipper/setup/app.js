const colors = ["green", "red", "blue", "grey", "yellow"];

document.querySelector(".color").style.color = "White";

document.getElementById("btn").onclick = () => {
    let i = Math.round((Math.random() * 4))
    let currentColor = colors[i];

    document.querySelector(".color").innerHTML = currentColor;
    document.querySelector(".color").style.color = currentColor;
    document.getElementById("background").style.backgroundColor = currentColor;
};
