const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const nameError = document.getElementById('name-error');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const messageInput = document.getElementById('message');
const messageError = document.getElementById('message-error');
const formStatus = document.getElementById('form-status');
form.addEventListener('submit', function (event) {
    event.preventDefault();

    let isValid = true;
    formStatus.textContent = '';

    const nameValue = nameInput.value.trim();

    if (nameValue.length === 0) {
        nameError.textContent = 'Будь ласка, введіть ваше ім\'я.';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue.length === 0) {
        emailError.textContent = 'Будь ласка, введіть email.';
        isValid = false;
    } else if (!emailPattern.test(emailValue)) {
        emailError.textContent = 'Введіть коректний email, наприклад you@example.com.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    const messageValue = messageInput.value.trim();

    if (messageValue.length === 0) {
        messageError.textContent = 'Будь ласка, введіть повідомлення.';
        isValid = false;
    } else if (messageValue.length < 10) {
        messageError.textContent = 'Повідомлення має містити щонайменше 10 символів.';
        isValid = false;
    } else {
        messageError.textContent = '';
    }

    if (isValid) {
        formStatus.textContent = 'Дякуємо! Ваше повідомлення надіслано.';
        form.reset();
    }
});