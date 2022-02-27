const nameInput = document.querySelector('input[name="userNameOrEmail"]');
const passwordInput = document.querySelector('input[name="password"]');
const error_hint = document.querySelector('.error-hint');
const btn = document.querySelector(".btn-signIn");


const validateInputs = () => {
    nameInput.classList.remove("invalid");
    passwordInput.classList.remove('invalid');
    error_hint.classList.add("hidden");
    if (!nameInput.value || !passwordInput.value) {
        nameInput.classList.add("invalid");
        passwordInput.classList.add('invalid');
        error_hint.classList.remove("hidden");
    }
};

btn.addEventListener("click", (e) => {
    e.preventDefault();
    validateInputs();


});

nameInput.addEventListener("input", () => {
    validateInputs();
})