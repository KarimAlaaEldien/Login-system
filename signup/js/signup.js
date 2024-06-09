var formRegistration = document.querySelector("#registration")
var nameInput = document.querySelector("#nameInput");
var emailInput = document.querySelector("#emailInput");
var passwordInput = document.querySelector("#passwordInput");
var textInfo = document.querySelector("#textInfo")
var nAlert = document.querySelector("#nAlert")
var eAlert = document.querySelector("#eAlert")
var pAlert = document.querySelector("#pAlert")
var clientsList = [];
var clientInfo;
var regex = {
    nameInput: /^[A-Z][a-z]{2,12}$/,
    emailInput: /^[^@ \t\r\n\d][^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+$/,
    passwordInput: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
}

if (localStorage.getItem("clientsList") != null) {
    clientsList = JSON.parse(localStorage.getItem("clientsList"));
}

formRegistration.addEventListener("submit", function (e) {
    e.preventDefault();
    if (checkAreAllInputCorrect()) {
        getValueToAddUser();
    }
    else {
        textInfo.innerHTML = "All inputs are required";
    }
});

function InputValidation(elementReg, elementValue, elementAlert) {
    if (elementReg.test(elementValue.value)) {
        elementAlert.classList.replace("d-block", "d-none");
        return true;
    }
    else {
        elementAlert.classList.replace("d-none", "d-block");
        return false;
    }
}

function checkAreAllInputCorrect() {
    if (InputValidation(regex.nameInput, nameInput, nAlert) &&
        InputValidation(regex.emailInput, emailInput, eAlert) &&
        InputValidation(regex.passwordInput, passwordInput, pAlert)) {
        return true;
    }
};

function getValueToAddUser() {
    clientInfo = {
        userName: nameInput.value,
        UserEmail: emailInput.value,
        userPass: passwordInput.value,
    }
    if (checkEmail(clientInfo)) {
        textInfo.innerHTML = "Email alredy exsist";
    }
    else {
        clientsList.push(clientInfo);
        setDataInLoclalStorage();
        changeColorAndPuttext();
        setTimeout(() => {
            location.href = "../../login/login.html";
        }, 3000);
    }
};

function setDataInLoclalStorage() {
    localStorage.setItem("clientsList", JSON.stringify(clientsList));
};

function checkEmail(clientInfo) {
    for (var i = 0; i < clientsList.length; i++) {
        if (clientsList[i].UserEmail.toLowerCase() == clientInfo.UserEmail.toLowerCase()) {
            return true;
        }
    }
};

function validatinput(element) {
    if (regex[element.id].test(element.value)) {
        element.classList.add("is-valid");
        element.classList.remove("is-invalid");
        element.nextElementSibling.classList.replace("d-block", "d-none");
    }
    else {
        element.classList.add("is-invalid");
        element.classList.remove("is-valid");
        element.nextElementSibling.classList.replace("d-none", "d-block");
    }
};

function changeColorAndPuttext() {
    textInfo.style.color = "green";
    textInfo.innerHTML = "Success";
};