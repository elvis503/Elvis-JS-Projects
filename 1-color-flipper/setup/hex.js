const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const getHex = () => {
    let hexCode = "#";
    for(let i = 0; i <= 5; i++){
        let digit = Math.round(Math.random() * 15)
        digit = hexNumbers[digit];
        hexCode = hexCode.concat(digit);
    }
    return hexCode;
}

const button = document.getElementById("btn");

button.onclick = () => {
    let currentColor = getHex();

    document.querySelector(".color").innerHTML = currentColor;
    document.querySelector(".color").style.color = currentColor;
    document.getElementById("background").style.backgroundColor = currentColor;
};