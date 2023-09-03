let password = document.getElementById('pwd');
let confirmPwd = document.getElementById('confirm');
let confirmedText = document.getElementById('confirmedText');
let lName = document.getElementById('lname');
let pNumber = document.getElementById('pnumber');

function passwordCheck() {
    if (password.value == confirmPwd.value) {
        confirmPwd.style.borderColor = "limegreen";
        confirmPwd.style.backgroundColor = "rgba(50, 205, 50, .05)";
        confirmedText.textContent = `Passwords match!`;
    } else {
        console.log(`It's not a match yet`);
        confirmPwd.style.backgroundColor = "white";
        confirmedText.textContent = `It's not a match yet`;
    }
};

function inputCheck() {
    if(lName.value) {
        lName.style.borderColor = "limegreen";
    }
}

function numberCheck() {
    isValidNumber = pNumber.checkValidity() 
    if (isValidNumber) {
        pNumber.style.borderColor = "limegreen";
    };
}