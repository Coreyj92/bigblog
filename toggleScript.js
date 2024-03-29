const modeToggle = document.getElementById('mode-toggle');
const content = document.querySelector('.content');

modeToggle.addEventListener('change', function() {
    if (modeToggle.checked) {
        content.classList.add('dark-mode');
        content.classList.remove('light-mode');
    } else {
        content.classList.add('light-mode');
        content.classList.remove('dark-mode');
    }
});    