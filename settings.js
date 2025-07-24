document.addEventListener("DOMContentLoaded", function(){
/* Functions */
function getId(id) {
    return document.getElementById(id);
}

function getLS(key) {
    return localStorage.getItem(key);
}

function setLS(key, value) {
    localStorage.setItem(key, value);
}

function updateButtonState(button, key) {
    const value = getLS(key);
    if (value === "ON") {
        button.textContent = "Enabled";
        button.setAttribute('v', 'ON');
    } else if (value === "OFF") {
        button.textContent = "Disabled";
        button.setAttribute('v', 'OFF');
    } else {
        setLS(key, "ON");
        button.textContent = "Enabled";
        button.setAttribute('v', 'ON');
    }
}

function setupToggleButton(button, key) {
    updateButtonState(button, key);
    button.onclick = () => {
        const current = getLS(key);
        const newVal = current === "ON" ? "OFF" : "ON";
        setLS(key, newVal);
        updateButtonState(button, key);
    };
}

/* Variables */
const GAdsB = getId('GAds');
const AAdsB = getId('AAds');
const PjsB = getId('Pjs');

/* Setup Toggle Buttons */
setupToggleButton(GAdsB, "GAds");
setupToggleButton(AAdsB, "AAds");
setupToggleButton(PjsB, "Pjs");

})

/* Enabling means you get them, disabling removes them */