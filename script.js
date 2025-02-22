window.addEventListener("load", function() {
    const loadingScreen = document.getElementById("loading-screen");
    
    // On attend la fin de l'animation du logo (6 secondes dans ton cas)
    setTimeout(() => {
        // On commence à rendre l'écran de chargement transparent
        loadingScreen.style.opacity = "0";
        
        // Après 1 seconde (pour laisser le temps à l'animation de l'opacity), on cache l'écran
        setTimeout(() => {
            loadingScreen.style.display = "none";
        }, 1000); // 1000ms pour correspondre à la durée de la transition de l'opacité
    }, 5000); // 6000ms pour laisser à l'animation du logo le temps de se terminer
});



const navLinks = document.querySelectorAll("nav ul li a");
const sections = document.querySelectorAll(".section");

function showSection(sectionId) {
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    });
}

navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const sectionId = link.getAttribute("data-section");
        showSection(sectionId);
    });
});

showSection("accueil");

window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


document.querySelector('.hero-image img').addEventListener('mousemove', function (e) {
    const { left, top, width, height } = this.getBoundingClientRect();
    
    const offsetX = (e.clientX - left) / width;
    const offsetY = (e.clientY - top) / height;
    
    const rotateX = (offsetY - 0.5) * 30;
    const rotateY = (offsetX - 0.5) * 30; 
    
    this.style.setProperty('--rotate-x', `${rotateX}deg`);
    this.style.setProperty('--rotate-y', `${rotateY}deg`);
});

document.querySelector('.hero-image img').addEventListener('mouseleave', function () {
    this.style.setProperty('--rotate-x', `0deg`);
    this.style.setProperty('--rotate-y', `0deg`);
});


document.querySelector('.cta-btn').addEventListener('click', function(e) {
    e.preventDefault();  
    
    
    setTimeout(() => {
        document.getElementById('projets').scrollIntoView({
            behavior: 'smooth' 
        });
    }, 100);
});

function handleScroll() {
    const projects = document.querySelectorAll('.project');
    
    projects.forEach(project => {
        const rect = project.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.top <= window.innerHeight;

        if (isVisible) {
            project.classList.add('visible');
        } else {
            project.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);

document.addEventListener('DOMContentLoaded', handleScroll);


