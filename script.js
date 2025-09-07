// Function to set the theme
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update theme text
    const themeText = document.getElementById('theme-text');
    themeText.textContent = theme === 'dark' ? 'الوضع الداكن' : 'الوضع الفاتح';
}

// Function to toggle theme
function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    
    // Set checkbox state
    const checkbox = document.getElementById('checkbox');
    checkbox.checked = savedTheme === 'dark';
    
    // Add event listener to theme toggle
    checkbox.addEventListener('change', () => {
        toggleTheme();
    });
});

// Add animation to subject cards on page load
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.subject-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s, transform 0.5s';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });
    
    // Preload icons for better user experience
    const iconPaths = [
        'icons/arabic.png',
        'icons/english.png',
        'icons/french.png',
        'icons/math.png',
        'icons/physics.png',
        'icons/chemistry.png',
        'icons/biology.png',
        'icons/islamic.png'
    ];
    
    iconPaths.forEach(path => {
        const img = new Image();
        img.src = path;
    });
});
