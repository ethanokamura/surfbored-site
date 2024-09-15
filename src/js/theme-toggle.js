var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
const screenshot00 = document.getElementById('screenshot-00');
const screenshot01 = document.getElementById('screenshot-01');
const screenshot02 = document.getElementById('screenshot-02');

let isDarkMode = false;

// Initial theme setup on page load
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
    themeToggleDarkIcon.classList.add('hidden');
    document.documentElement.classList.add('dark');
    isDarkMode = true;
} else {
    themeToggleDarkIcon.classList.remove('hidden');
    themeToggleLightIcon.classList.add('hidden');
    document.documentElement.classList.remove('dark');
    isDarkMode = false;
}

// Button toggle event listener
var themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', function() {
    // Toggle icon visibility
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // Handle theme toggling logic
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            isDarkMode = true;
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
            isDarkMode = false;
        }
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
            isDarkMode = false;
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
            isDarkMode = true;
        }
    }
    applyMode(); // Update screenshots based on the theme
});

function applyMode() {
    if (isDarkMode) {
        screenshot01.src = 'images/screenshot_01.png';
        screenshot00.src = 'images/screenshot_00.png';
        screenshot02.src = 'images/screenshot_02.png';
    } else {
        screenshot01.src = 'images/light_screenshot_01.png';
        screenshot00.src = 'images/light_screenshot_00.png';
        screenshot02.src = 'images/light_screenshot_02.png';
    }
}