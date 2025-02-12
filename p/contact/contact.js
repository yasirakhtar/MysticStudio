const form = document.getElementById('collectEmailForm');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const response = await fetch(form.action, {
        method: form.method,
        body: formData,
    });
    const result = await response.json();

    messageDiv.textContent = result.message;
    messageDiv.style.color = result.status === 'success' ? 'green' : 'red';
});