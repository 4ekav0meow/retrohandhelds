const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    body.setAttribute('data-theme', currentTheme);
}

toggleBtn.addEventListener('click', () => {
    let theme = body.getAttribute('data-theme');
    
    if (theme === 'synthwave') {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'default');
    } else {
        body.setAttribute('data-theme', 'synthwave');
        localStorage.setItem('theme', 'synthwave');
    }
});