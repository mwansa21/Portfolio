// Select the button
const themeToggle = document.getElementById('theme-toggle');

// Function to toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');

  // Save mode in local storage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    themeToggle.textContent = "☀️"; // Sun icon for light mode
  } else {
    localStorage.setItem('theme', 'light');
    themeToggle.textContent = "🌙"; // Moon icon for dark mode
  }
}

// Check saved theme from local storage
window.onload = function () {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = "☀️"; // Sun icon for light mode
  } else {
    themeToggle.textContent = "🌙"; // Moon icon for dark mode
  }
};

// Event listener for button click
themeToggle.addEventListener('click', toggleDarkMode);
