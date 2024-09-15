var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
const screenshot00 = document.getElementById('screenshot-00');
const screenshot01 = document.getElementById('screenshot-01');
const screenshot02 = document.getElementById('screenshot-02');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

let isDarkMode = localStorage.getItem('color-theme') === 'dark';

applyMode();

themeToggleBtn.addEventListener('click', function() {
    isDarkMode = !isDarkMode;
    applyMode();
    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
          } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
});


function applyMode() {
  if (isDarkMode) {
    // Apply dark mode
    screenshot01.src = 'images/screenshot_01.png';
    screenshot00.src = 'images/screenshot_00.png';
    screenshot02.src = 'images/screenshot_02.png';
  } else {
    // Apply light mode
    screenshot01.src = 'images/light_screenshot_01.png';
    screenshot00.src = 'images/light_screenshot_00.png';
    screenshot02.src = 'images/light_screenshot_02.png';
  }
}