const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const errorText = document.querySelector(".error-text");
const button = document.querySelector("#button");

const inputs = [email, phone, password, confirmPassword]

inputs.forEach(item => {
    item.addEventListener('focusin', () => {
        errorText.textContent = ''
        item.classList.remove("error");
        if (item == password || item == confirmPassword) {
            password.classList.remove('error')
            confirmPassword.classList.remove('error');
        }
    });
});

// Real-time validation for confirm password
confirmPassword.addEventListener('input', () => {
    if (confirmPassword.value === password.value && confirmPassword.value !== '') {
        confirmPassword.classList.add('confirm-valid');
        confirmPassword.classList.remove('error');
        errorText.textContent = '';
    } else {
        confirmPassword.classList.remove('confirm-valid');
    }
});

const submit = (e) => {
    e.preventDefault();
    if (password.value !== confirmPassword.value) {
        password.classList.add('error');
        confirmPassword.classList.add('error');
        confirmPassword.classList.remove('confirm-valid');
        errorText.textContent = "Passwords do not match";
        return;
    }
    // If passwords match, you can proceed with form submission or other actions
    alert("Account created successfully!"); // Example success message
};

button.addEventListener("click", submit);


