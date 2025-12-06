const emli = document.getElementById('email');
const emle = document.getElementById('emailError');

emli.addEventListener("input", function () {
    if (emli.value.includes("@")) {
        emle.textContent = "";
    } else {
        emle.textContent = "Invalid Email";
    }
});
