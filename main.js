const lightbulb = document.getElementById('lightbulb');
const lightswitch = document.getElementById('lightswitch');
const status = document.getElementById('statusOfSwitch');

let isLightOn = false;

lightswitch.addEventListener('click', function() {
    if(isLightOn) {
        lightbulb.src = "lightOff.png";
        lightswitch.src = "switchOff.png";
        status.textContent = "TURN ON LIGHT.";
    }else{
        lightbulb.src = "lightOn.png";
        lightswitch.src = "switchOn.png"
        status.textContent = "YOU DID IT! now, TURN OFF the lights."
    }
    isLightOn = !isLightOn;
}

);