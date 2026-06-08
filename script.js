// ===== Mobile Menu Toggle =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
navLinks.classList.toggle('active');

// Animate hamburger
const spans = hamburger.querySelectorAll('span');
spans[0].style.transform = navLinks.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : '';
spans[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
spans[2].style.transform = navLinks.classList.contains('active') ? 'rotate(-45deg) translate(5px, -5px)' : '';
});

// Close menu when link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
link.addEventListener('click', () => {
navLinks.classList.remove('active');
const spans = hamburger.querySelectorAll('span');
spans[0].style.transform = '';
spans[1].style.opacity = '1';
spans[2].style.transform = '';
});
});

// ===== Smooth Scroll (fallback for older browsers) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute('href'));
if (target) {
target.scrollIntoView({
behavior: 'smooth',
block: 'start'
});
}
});
});

// ===== Navbar Scroll Effect =====
window.addEventListener('scroll', () => {
const navbar = document.querySelector('.navbar');
if (window.scrollY > 50) {
navbar.style.background = 'rgba(255,255,255,0.98)';
navbar.style.boxShadow = '0 2px 25px rgba(0,0,0,0.1)';
} else {
navbar.style.background = 'rgba(255,255,255,0.98)';
navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
}
});

// ===== Simple Form Validation =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
e.preventDefault();

const name = this.querySelector('input[type="text"]').value.trim();
const email = this.querySelector('input[type="email"]').value.trim();

if (!name || !email) {
alert('Kripya apna naam aur email zaroor bharein!');
return;
}

if (!email.includes('@') || !email.includes('.')) {
alert('Kripya valid email address dalein!');
return;
}

// Success message (demo)
alert('Dhanyavaad! Hum jald hi aapse contact karenge.\n\nThank you! We will contact you soon.');
this.reset();
});

// ===== Intersection Observer for animations =====
const observerOptions = {
threshold: 0.1,
rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.style.opacity = '1';
entry.target.style.transform = 'translateY(0)';
}
});
}, observerOptions);

// Add animation to cards
document.querySelectorAll('.product-card, .gallery-item').forEach(el => {
el.style.opacity = '0';
el.style.transform = 'translateY(30px)';
el.style.transition = 'all 0.6s ease';
observer.observe(el);
});

// Set current year in footer dynamically
const yearSpan = document.querySelector('.footer-bottom p');
if (yearSpan) {
yearSpan.innerHTML = yearSpan.innerHTML.replace('2026', new Date().getFullYear());
}