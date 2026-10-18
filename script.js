const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const nameError = document.getElementById('name-error');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const messageInput = document.getElementById('message');
const messageError = document.getElementById('message-error');
const formStatus = document.getElementById('form-status');
function validateName() {
    const value = nameInput.value.trim();
    if (value.length === 0) {
        nameError.textContent = 'Будь ласка, введіть ваше ім\'я.';
        return false;
    }
    nameError.textContent = '';
    return true;
}
function validateEmail() {
    const value = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value.length === 0) {
        emailError.textContent = 'Будь ласка, введіть email.';
        return false;
    }

    if (!emailPattern.test(value)) {
        emailError.textContent = 'Введіть коректний email, наприклад you@example.com.';
        return false;
    }

    emailError.textContent = '';
    return true;
}
function validateMessage() {
    const value = messageInput.value.trim();

    if (value.length === 0) {
        messageError.textContent = 'Будь ласка, введіть повідомлення.';
        return false;
    }

    if (value.length < 10) {
        messageError.textContent = 'Повідомлення має містити щонайменше 10 символів.';
        return false;
    }

    messageError.textContent = '';
    return true;
}

nameInput.addEventListener('blur', validateName);
nameInput.addEventListener('input', function () {
    if (nameError.textContent !== '') {
        validateName();
    }
});
emailInput.addEventListener('blur', validateEmail);
emailInput.addEventListener('input', function () {
    if (emailError.textContent !== '') {
        validateEmail();
    }
});
messageInput.addEventListener('blur', validateMessage);
messageInput.addEventListener('input', function () {
    if (messageError.textContent !== '') {
        validateMessage();
    }
});
form.addEventListener('submit', function (event) {
    event.preventDefault();

    let isValid = true;
    formStatus.textContent = '';

    const isNameValid = validateName();
    if (!isNameValid) {
        isValid = false;
    }

    const isEmailValid = validateEmail();
    if (!isEmailValid) {
        isValid = false;
    }

    const isMessageValid = validateMessage();
    if (!isMessageValid) {
        isValid = false;
    }

    if (isValid) {
        formStatus.textContent = 'Дякуємо! Ваше повідомлення надіслано.';
        form.reset();
    }
});