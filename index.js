const textbox = document.getElementById("textbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const answer = document.getElementById("answer");
let temp;

function convert() {
    if (toFahrenheit.checked) {
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        answer.textContent = temp.toFixed(1) + "°F";
    } else if (toCelsius.checked) {
        temp = Number(textbox.value);
        temp = (temp - 32) * (5 / 9);
        answer.textContent = temp.toFixed(1) + "°C";
    } else {
        answer.textContent = "Select any one unit";
    }

}