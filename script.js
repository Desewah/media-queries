const form = document.querySelector('.form');
const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const email = document.querySelector('.email');
const password = document.querySelector('.password');

// Individual input validations
const validateFirstName = () => {
    if (firstName.validity.valueMissing) {
        diplayError(firstName, 'First Name cannot be empty');
    } else {
        diplayError(firstName, '');
    }
}
const validateLastName = () => {
    if (lastName.validity.valueMissing) {
        diplayError(lastName, 'Last Name cannot be empty');
    } else {
        diplayError(lastName, '');
    }
}
const validateEmail = () => {
    if (email.validity.valueMissing) {
        diplayError(email, 'Email cannot be empty');
    } else if (email.validity.typeMismatch) {
        diplayError(email, 'Looks like this is not an email');
    } else {
        diplayError(email, '');
    }
}
const validatePassword = () => {
    if(password.validity.tooShort) {
        diplayError(password, 'Password must be at least 8 characters');
    }
    else if (password.validity.valueMissing) {
        diplayError(password, 'Password cannot be empty');
    } else {
        diplayError(password, '');
    }
}

// Runs all input validations
const validateAll = () => {
    validateFirstName();
    validateLastName();
    validateEmail();
    validatePassword();
}

// Handles diplaying error states
const diplayError = (input, message) => {
    const errorMessage = input.nextElementSibling; // Selects the span below each input
    errorMessage.innerText = message;
    if (message) {
        input.classList.add('show-error');
    } else {
        input.classList.remove('show-error');
    }
}

// Listens for text input and runs validations
firstName.addEventListener("input", validateFirstName);
lastName.addEventListener("input", validateLastName);
email.addEventListener("input", validateEmail);
password.addEventListener("input", validatePassword);

// Runs all validations when form is submitted
form.addEventListener("submit", e => {
    if (!form.checkValidity()) {
        validateAll()
        e.preventDefault();
    }
});
