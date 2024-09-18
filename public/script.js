// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const message = document.getElementById('form-message');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Collect form data
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const msg = document.getElementById('message').value.trim();

        // Simple form validation
        if (name === '' || email === '' || msg === '') {
            message.style.color = 'red';
            message.textContent = 'Please fill in all fields.';
            return;
        }

        // Prepare the data to send
        const data = { name, email, message: msg };

        try {
            // Disable the submit button to prevent multiple submissions
            const submitButton = form.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';

            // Send POST request to the server
            const response = await fetch('/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                message.style.color = 'green';
                message.textContent = result.message;
                form.reset();
            } else {
                message.style.color = 'red';
                message.textContent = result.message || 'There was an error sending your message. Please try again later.';
            }

            // Re-enable the submit button
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
        } catch (error) {
            console.error('Error:', error);
            message.style.color = 'red';
            message.textContent = 'There was an error sending your message. Please try again later.';

            // Re-enable the submit button
            const submitButton = form.querySelector('button[type="submit"]');
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
        }
    });
});
