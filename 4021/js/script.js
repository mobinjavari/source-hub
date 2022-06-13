// CSS Class Names
var overlay = document.querySelector("[class='overlay']"),
    box = document.querySelector("[class='box']"),
    message = document.querySelector("[class='message']"),
    fxBtn = document.querySelector("[class='toggle-effect-btn']"),
    alertBtn = document.querySelector("[class='alert-btn']")
    clsBtn = document.querySelector("[class='box-btn']")

// Create custom alert 
function customAlert() {
    this.send = function (dialog) {
        message.innerHTML = dialog;
        overlay.style.display = "block";
        box.style.opacity = 1;
        box.style.zIndex = 10;
        box.style.animation = '0.3s fadeIn ease-in-out';
    }
    this.return = function () {
        box.style.opacity = 0;
        box.style.zIndex = 0;
        box.style.animation = '0.3s fadeOut ease-in-out'
        overlay.style.display = "none";
    }
}
var alert = new customAlert();



