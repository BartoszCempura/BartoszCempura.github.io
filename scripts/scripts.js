function toggleButtonClasses() {
    const button = document.getElementById('toggleButton');
    const isPL = button.classList.contains('button-state-1');

    button.classList.toggle('button-state-1');
    button.classList.toggle('button-state-2');

    button.textContent = isPL ? 'EN' : 'PL';

    const lang = isPL ? 'EN' : 'PL';
    localStorage.setItem('lang', lang);

    applyLanguage(lang);
  }

function setButtonState(button, lang) {
    if (lang === 'PL') {
      button.textContent = 'PL';
      button.className = 'button-state-1';
    } else {
      button.textContent = 'EN';
      button.className = 'button-state-2';
    }
}

const transalations = {
  PL: {
    description: `Z peselu może już nie najmłodszy, ale duchem wciąż świeży i głodny nowych wyzwań.
Zanim technologia skradła mi serce, próbowałem wielu dróg.
                  
Z wychowania aktor, plastyk. Z wykształcenia informatyk, muzyk, filozof.
Z pasji, cyfrowy rzemieślnik.
                             
Wierzę, że to właśnie szczegóły robią różnicę, 
dlatego w każdy projekt wchodzę na pełnych obrotach.
                  
Ta mieszanka doświadzczeń daje mi unikalną perspektywę
na rozwiązywanie problemów i tworzenie rzeczy wyjątkowych.`,
    hi: "Cześć !!!",
    wt1: "Szukasz człowieka ",
    wt2: "z wyobraźnią ??",
    contactMe: "Odezwij się"
  },
  EN: {
    description: `Maybe not the youngest by birth date, but still fresh in spirit and hungry for new challenges.
Before technology stole my heart, I tried many paths.

Raised as an actor and visual artist. Educated as an IT specialist, musician, and philosopher.
By passion, a digital craftsman.
           
I believe its the details that make the difference, 
thats why I give my all to every project.

This mix of experiences gives me a unique perspective
on solving problems and creating meaningful things.`,
    hi: "Hey there !!!",
    wt1: "Looking for a person ",
    wt2: "with imagination ??",
    contactMe: "Contact me"
  }
};

function applyLanguage(lang) {
  document.getElementById('description').textContent = transalations[lang].description;
  document.getElementById('hi').textContent = transalations[lang].hi;
  document.getElementById('wt1').textContent = transalations[lang].wt1;
  document.getElementById('wt2').textContent = transalations[lang].wt2;
  document.getElementById('contactMe').textContent = transalations[lang].contactMe;
}

  document.addEventListener('DOMContentLoaded', function() {
    const triggers = document.querySelectorAll('#overlay-trigger');
    const overlay = document.getElementById('fullscreen-overlay');
    const overlayImageFirst = document.getElementById('overlay-image-first');
    const overlayImageSecond = document.getElementById('overlay-image-second');
    const overlayDescription = document.getElementById('overlay-description');

    const savedLang = localStorage.getItem('lang') || 'PL';
    const toggleButton = document.getElementById('toggleButton');

    setButtonState(toggleButton, savedLang);
    applyLanguage(savedLang);


// Funkcja do blokowania przewijania strony
    function disableScroll() {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = getScrollbarWidth() + 'px'; 
    }
    
    // Funkcja do przywracania przewijania strony
    function enableScroll() {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }
    
    triggers.forEach(trigger => {
      trigger.addEventListener('click', function(e) {
        e.preventDefault();
  
      const galleryItem = this.closest('.transition-all');

      const images = galleryItem.querySelectorAll('img');
      overlayImageFirst.src = images[0].src;
        
      const paragraphs = galleryItem.querySelectorAll('p');
      const sourceDescription = paragraphs[1];

        
        if (images[1]) {
          if (images[1].id === 'JudoPlakat') { //rozwiązanie dla przypadków neistandardowych z zastosowaniem id
            overlayImageFirst.src = images[1].src;
            overlayImageSecond.classList.add('hidden');
            overlayImageFirst.parentElement.classList.remove('md:grid-cols-2');
          } else {
            // Domyślne zachowanie dla wszystkich innych przypadków z drugim obrazkiem
            overlayImageSecond.src = images[1].src;
            overlayImageSecond.classList.remove('hidden');
            overlayImageFirst.parentElement.classList.add('md:grid-cols-2');
          }
        } else {
          // Nie ma drugiego obrazka
          overlayImageSecond.classList.add('hidden');
          overlayImageFirst.parentElement.classList.remove('md:grid-cols-2');
        }
            
        overlayDescription.innerHTML = sourceDescription?.innerHTML.trim() || ''; // ustawiamy text dla overlay
  
        // pokaż overlay
        requestAnimationFrame(() => {
          overlay.classList.remove('invisible', 'opacity-0');
          overlay.classList.add('opacity-100', 'visible');
          disableScroll();
        });
      });
    });
  
    // zamykanie overlay
    overlay.addEventListener('click', function(e) {
      if (e.target.tagName === 'IMG') {
        e.stopPropagation();
        return;
      }
      
      overlay.classList.remove('opacity-100', 'visible');
      overlay.classList.add('opacity-0');
      enableScroll();
      
      // czas na załadowanie opacity
      setTimeout(() => {
        overlay.classList.add('invisible');
      }, 200);
    });
});

const button = document.getElementById('toggle-btn');
const panel = document.getElementById('social-panel');
let hideTimeout;

button.addEventListener('click', () => {
  panel.classList.toggle('visible');

  if (panel.classList.contains('visible')) {
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
      panel.classList.remove('visible');
    }, 2000);
  } else {
    clearTimeout(hideTimeout);
  }
});
