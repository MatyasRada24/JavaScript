const counterLabel = document.getElementById("counterLabel");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increase");
let count = 0;

increaseBtn.onclick = function () {
    count++;
    counterLabel.textContent = count;
}

decreaseBtn.onclick = function () {
    count--;
    counterLabel.textContent = count;
}

resetBtn.onclick = function () {
    count = 0;
    counterLabel.textContent = count;
}