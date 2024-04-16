document
    .querySelector('.email-address')
    .addEventListener('submit', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get the email input value
        const emailInput = document.getElementById('email').value.trim();

        // Regular expression to validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Get the error message element
        const errorMessage = document.querySelector('.error');

        // Check if the mail is empty or invalid
        if (emailInput === '' || emailRegex.test(emailInput)) {
            // Show the error message
            errorMessage.style.visibility = 'visible';
        } else {
            // Hide the error message
            errorMessage.style.visibility = 'hidden';
            // Proceed with form submission
            this.submit();
        }
    });
