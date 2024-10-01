document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const message = document.getElementById('form-message');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const msg = document.getElementById('message').value.trim();

        if (!name || !email || !msg) {
            message.style.color = 'red';
            message.textContent = 'Please fill in all fields.';
            return;
        }

        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
        if (!emailRegex.test(email)) {
            message.style.color = 'red';
            message.textContent = 'Please enter a valid email address.';
            return;
        }

        const data = { name, email, message: msg };

        try {
            const submitButton = form.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.textContent = 'Sending...';

            const spinner = document.createElement('span');
            spinner.classList.add('spinner');
            submitButton.appendChild(spinner);

            const response = await fetch('/api/contact', { 
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

            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
        } catch (error) {
            console.error('Error:', error);
            message.style.color = 'red';
            message.textContent = 'There was an error sending your message. Please try again later.';

            const submitButton = form.querySelector('button[type="submit"]');
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
        }
    });
});
