var loginUser = document.querySelector("#loginUser");
var emailInput = document.querySelector("#emailInput");
var passwordInput = document.querySelector("#passwordInput");
var loginbutton = document.querySelector("button");
var wrongValue = document.querySelector('P#wrongValue');
var signup = document.querySelector(".my-anchor");
var textInfo = document.querySelector("#textInfo");
var clientsList=[];
var clientInfo;

if (localStorage.getItem("clientsList") != null) {
    clientsList = JSON.parse(localStorage.getItem("clientsList"));
};

loginUser.addEventListener("submit", function (e) {
    e.preventDefault();
    getvalue();
});

function getvalue() {
    clientInfo = {
        emailInput: emailInput.value,
        passwordInput: passwordInput.value,
    }
    if (checkValue(clientInfo)) {
        textInfo.innerHTML = "All inputs are required to open the site";
    }
    else if (verifyClient(clientInfo)) {
        changeColorAndPuttext();
        setTimeout(() => {
            location.href = "../../home/home.html";
        }, 3000);
    }
    else {
        textInfo.innerHTML = "Error in email or password";
    }
};

function changeColorAndPuttext() {
    textInfo.style.color = "#0aff11";
    textInfo.innerHTML = "Success";
};

function checkValue(clientInfo) {
    if (clientInfo.emailInput.length == 0 || clientInfo.passwordInput.length == 0) {
        return true;
    }
};
function verifyClient(clientInfo) {
    for (var i = 0; i < clientsList.length; i++)
        if (clientInfo.emailInput.toLowerCase().trim() == clientsList[i].UserEmail &&
            clientInfo.passwordInput.trim() == clientsList[i].userPass) {
            setNewData(clientsList[i].userName);
            return true;
        }
};
function setNewData(userName) {
    localStorage.setItem("userName", JSON.stringify(userName));
};
