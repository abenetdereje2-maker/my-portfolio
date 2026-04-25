// Change navbar background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = '#0a0a0a';
        nav.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
    } else {
        nav.style.backgroundColor = '#1a1a1a';
        nav.style.boxShadow = 'none';
    }
});

// Simple Console Log to confirm site loaded
console.log("Portfolio loaded successfully.");