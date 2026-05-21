// On récupère les éléments de la Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeBtn = document.querySelector('.close-lightbox');

// On récupère toutes les cartes de la galerie
const galerieItems = document.querySelectorAll('.galerie-item');

// Pour chaque image de la galerie, on écoute le clic
galerieItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const title = item.querySelector('h3').innerText;
    
        // On affiche la lightbox avec les bonnes infos
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
        lightboxCaption.innerText = title;
    });
});

// Clic sur la croix pour fermer
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Clic à l'extérieur de l'image pour fermer aussi
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
const textElement = document.getElementById("typing-text");

// Les phrases qui vont défiler
const phrases = [
  "Florinda Vanelle, future Architecte Cloud.",
  "passionnée par l'esthétique et le design UI.",
  "créatrice de machines virtuelles et de sites web."
];

let phraseIndex = 0;
let characterIndex = 0;
let isDeleting = false;

function type() {
  const currentPhrase = phrases[phraseIndex];
  
  if (isDeleting) {
    // On efface les lettres
    textElement.textContent = currentPhrase.substring(0, characterIndex - 1);
    characterIndex--;
  } else {
    // On écrit les lettres
    textElement.textContent = currentPhrase.substring(0, characterIndex + 1);
    characterIndex++;
  }

  // Gestion des vitesses (plus rapide quand on efface)
  let typeSpeed = isDeleting ? 50 : 100;

  // Si la phrase est entièrement écrite
  if (!isDeleting && characterIndex === currentPhrase.length) {
    typeSpeed = 2000; // Pause de 2 secondes à la fin de la phrase
    isDeleting = true;
  } 
  // Si la phrase est entièrement effacée
  else if (isDeleting && characterIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length; // Passe à la phrase suivante
    typeSpeed = 500; // Petite pause avant de réécrire
  }

  setTimeout(type, typeSpeed);
}

// Lancement de l'animation au chargement de la page
document.addEventListener("DOMContentLoaded", type);
document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;
  const slideInterval = 4000; // Temps d'affichage par image (4 secondes)

  function nextSlide() {
    // 1. Enlever la classe 'active' de l'image actuelle
    slides[currentSlide].classList.remove("active");

    // 2. Calculer l'index de la prochaine image
    currentSlide = (currentSlide + 1) % slides.length;

    // 3. Ajouter la classe 'active' à la nouvelle image
    slides[currentSlide].classList.add("active");
  }

  // Lancer l'animation automatique
  setInterval(nextSlide, slideInterval);
});