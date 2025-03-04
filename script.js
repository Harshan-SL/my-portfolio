document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("click", function() {
            links.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });
});

const toggleButton = document.getElementById('darkModeToggle');

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    updateButtonIcon(isDarkMode);
}

function updateButtonIcon(isDarkMode) {
    toggleButton.textContent = isDarkMode ? '☀️' : '🌙';
}

document.addEventListener("DOMContentLoaded", () => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    if (savedMode) {
        document.body.classList.add('dark-mode');
    }
    updateButtonIcon(savedMode);
});

toggleButton.addEventListener('click', toggleDarkMode);