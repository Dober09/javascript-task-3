const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const checkbox = document.getElementById('terms');
const signupBtn = document.getElementById('sign-up');


const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const termsError = document.getElementById("termsError");



function resetFieldState(inputElement, errorElement) {
        if (inputElement.type !== 'checkbox') {
            inputElement.style.border = "1px solid #ccc";
        }
        errorElement.textContent = "";
    }

function applyFailureState(inputElement, errorElement, message) {
    if (inputElement.type !== 'checkbox') {
        inputElement.style.border = '2px solid red';
    } else {
        const label = document.querySelector(`label[for="${inputElement.id}"]`);
            if (label) label.style.color = 'red';
    }
        errorElement.textContent = message;
        return false;
    }

// INDIVIDUAL VALIDATION FUNCTIONS


function validateUsername() {
        resetFieldState(username, usernameError);
        
        if (!username.value.trim()) {
            return applyFailureState(username, usernameError, "Username field cannot be left blank.");
        }
        return true;
}

function validateEmail() {
        resetFieldState(email, emailError);
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailValue = email.value.trim();

        if (!emailValue) {
            return applyFailureState(email, emailError, "Email field cannot be left blank.");
        }
        if (!emailPattern.test(emailValue)) {
            return applyFailureState(email, emailError, "Please provide a valid email structure.");
        }
        return true;
}


function validatePassword() {
        resetFieldState(password, passwordError);

        if (!password.value) {
            return applyFailureState(password, passwordError, "Password field cannot be left blank.");
        }
        if (password.value.length < 8) {
            return applyFailureState(password, passwordError, "Password security requires a minimum of 8 characters.");
        }
        return true;
}

function validateTerms() {
        resetFieldState(terms, termsError);

        if (!terms.checked) {
            return applyFailureState(terms, termsError, "You must accept the terms conditions to proceed.");
        }
        return true;
}

function validateAll() {
    const isUsernameValid = validateUsername();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isTermsValid = validateTerms();

    return isUsernameValid && isEmailValid && isPasswordValid && isTermsValid;
}

signupBtn.addEventListener('click', function(event) {
    event.preventDefault();

      if (validateAll()) {
        console.log('Validation Successful. System parsing payload...');
        alert('Signup Portal: Registration submitted successfully.');
    } else {
        console.warn('Validation Rejected: Please fix the errors above.');
    }
    

});