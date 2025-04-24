function toggleButtonClasses() {
    const button = document.getElementById('toggleButton');
    button.classList.toggle('button-state-1');
    button.classList.toggle('button-state-2');
  }


  document.addEventListener('DOMContentLoaded', function() {
    const triggers = document.querySelectorAll('#overlay-trigger');
    const overlay = document.getElementById('fullscreen-overlay');
    const overlayImageFirst = document.getElementById('overlay-image-first');
    const overlayImageSecond = document.getElementById('overlay-image-second');
    const overlayDescription = document.getElementById('overlay-description');

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
  
