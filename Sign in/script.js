const nameInput = document.querySelector('input[name="userNameOrEmail"]');
const passwordInput = document.querySelector('input[name="password"]');
const error_hint = document.querySelector('.error-hint');
const error_hintpass = document.querySelector('.error_hintpass');
const btn = document.querySelector(".btn-signIn");



const validateInputs = () => {
    nameInput.classList.remove("invalid");
    error_hint.classList.add("hidden");
    if (!nameInput.value) {
        nameInput.classList.add('invalid');
        error_hint.classList.remove("hidden");
    }
};

const validateInputsPass = () => {
    passwordInput.classList.remove('invalid');
    error_hintpass.classList.add("hidden");
    if (!passwordInput.value) {
        passwordInput.classList.add("invalid");
        error_hintpass.classList.remove("hidden");
    }
};

btn.addEventListener("click", (e) => {
    e.preventDefault();
    validateInputs();


});

nameInput.addEventListener("input", () => {
    validateInputs();
})
passwordInput.addEventListener("input", () => {
    validateInputsPass();
})