const nameInput = document.querySelector('input[name="userNameOrEmail"]');
const passwordInput = document.querySelector('input[name="password"]');
const error_hint = document.querySelector('.error-hint');
const error_hintpass = document.querySelector('.error_hintpass');
const btn = document.querySelector(".btn-signIn");
const url = 'SignInData.json';

btn.onclick = () => {
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
        console.log(xhr.responseText);
        // const data = JSON.parse(xhr.responseText);
        // outputData(data);
    }
    xhr.open('GET', url);
    xhr.send();
};

// function outputData(vals) {
//     main.innerHTML = "";
//     vals.forEach((ele, ind) => {
//         console.log(ele.first, ele.last);
//         const div = document.createElement('div');
//         main.append(div);
//         div.innerHTML = `${ele.first} ${ele.last}`;
//     });


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
    validateInputsPass();
    LoadData();


});

nameInput.addEventListener("input", () => {
    validateInputs();
})
passwordInput.addEventListener("input", () => {
    validateInputsPass();
})

