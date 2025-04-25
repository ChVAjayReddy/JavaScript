let input=document.getElementById("TextEnter");
let total=document.getElementById("TotalChar");
let remain=document.getElementById("RemainChar");

const maxLength = input.maxLength;

input.addEventListener('keyup', function () {
    let count = 0;
    for (let char of input.value) {
        count++;
    }

    total.innerText = count;
    remain.innerText = maxLength - count;
});