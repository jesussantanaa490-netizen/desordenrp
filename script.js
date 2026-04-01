// Animación de brillo en el logo
document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector("header h1");

  // Efecto de brillo intermitente
  setInterval(() => {
    logo.style.textShadow = "0 0 20px #ff6600, 0 0 40px #ff0000";
    setTimeout(() => {
      logo.style.textShadow = "2px 2px 5px #000";
    }, 800);
  }, 2000);
});

// Efecto spray al pasar el mouse por los enlaces del menú
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("mouseenter", () => {
    link.style.color = "#ff6600";
    link.style.textShadow = "0 0 10px #ff6600, 0 0 20px #ff0000";
  });

  link.addEventListener("mouseleave", () => {
    link.style.color = "#f5f5f5";
    link.style.textShadow = "none";
  });
});

// Animación de aparición suave en secciones
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "translateY(50px)";
  section.style.transition = "all 0.8s ease-out";
  observer.observe(section);
});
document.addEventListener("DOMContentLoaded", () => {
  const graffiti = document.querySelector(".graffiti-text");

  // Simular spray con sombras intermitentes
  setInterval(() => {
    graffiti.style.filter = "drop-shadow(0 0 10px #ff0000) drop-shadow(0 0 20px #ff6600)";
    setTimeout(() => {
      graffiti.style.filter = "none";
    }, 500);
  }, 1500);
});
document.addEventListener("DOMContentLoaded", () => {
  const graffiti = document.querySelector(".graffiti-text");
  const spraySound = document.getElementById("spraySound");

  // Reproduce sonido al iniciar animación
  spraySound.play();

  // Simular spray con sombras intermitentes
  setInterval(() => {
    graffiti.style.filter = "drop-shadow(0 0 10px #ff0000) drop-shadow(0 0 20px #ff6600)";
    setTimeout(() => {
      graffiti.style.filter = "none";
    }, 500);
  }, 1500);
});