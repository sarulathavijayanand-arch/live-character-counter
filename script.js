
const message = document.getElementById("message");
const counter = document.getElementById("counter");
const remaining = document.getElementById("remaining");
const warning = document.getElementById("warning");

const maxLength = 200;

message.addEventListener("input", function() {
    const typed = message.value.length;
    const left = maxLength - typed;

    counter.textContent = typed + " / " + maxLength + " characters";
    remaining.textContent = left + " characters remaining";

    if (left === 0) {
        warning.textContent = "You have reached the character limit!";
    } else {
        warning.textContent = "";
    }
});
