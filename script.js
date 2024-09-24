const toggleButton = document.getElementById('toggleTheme');
const paymentDiv = document.getElementsByTagName("p");

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    paymentDiv.classList.toggle('dark-text');
});
