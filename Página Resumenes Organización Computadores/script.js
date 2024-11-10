document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    const revealSection = () => {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight * 0.8) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    };

    window.addEventListener("scroll", revealSection);
    revealSection(); // Para que la animación se active al cargar si la sección está visible
});