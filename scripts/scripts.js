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
    contactMe: "Odezwij się",
    lt1: "M",
    lt2: "O",
    lt3: "J",
    lt4: "E",
    ll1: "P",
    ll2: "R",
    ll3: "A",
    ll4: "C",
    ll5: "E",
    firstBillboardDescription: `Są to propozycje bilboardu promującego inaugurację roku akademiackiego.

Zlecenie realizowane w ramach praktyk zawodowych w dziale promocji Akademii Mazowieckiej w Płocku.

Projekty miały charakteryzować się dystyngowaną, dostojną i luksusową estetyką.

Finalnie wybrano wariant w kolorze czerwonym.`,
    firstBookCoverTitle: "OKŁADKA KSIĄŻKI",
    firstBookCoverDescription: `Projekty okładki książki dla wydawnictwa naukowego Akademii Mazowieckiej w Płocku. 

Zaprojektowanie odpowiednio komunikatywnej grafiki stanowiło wyzwanie, ze względu na obszerny zakres treści dzieła.

Ostatecznie autor zdecydował się na wariant drugi, oparty na archiwalnym zdjęciu panoramy miasta.`,
    secondBookCoverTitle: "OKŁADKA KSIĄŻKI",
    secondBookCoverDescription: `Projekty okładki książki przygotowane dla wydawnictwa naukowego Akademii Mazowieckiej w Płocku.  

Pierwsza koncepcja jest to metafora dla pokonywania przeszkód i rozwiązywania problemów.

Druga propozycja to abstrakcyjna reprezentacja zależności, z jednego kręgu wynika kolejny.

Ostatecznie autor zdecydował się na wariant pierwszy.`,
    firstWebpageTitle: "STRONA WEB",
    firstWebpageDescription: `Strona internetowa zaprojektowana dla Płockiego Towarzystwa Lekarskiego.

Projekt zrealizowany za pośrednictwem środowiska Wordpress, z użyciem motywu AVADA.

Zgodnie z wytycznymi zleceniodawcy.`,
    firstPoster: "PLAKAT",
    firstPosterDescription: `Projekt plakatu oraz logotypu dla festiwalu realizowanego we współpracy z Młodzieżowym Domem Kultury w Bydgoszczy.

Jest to jedna z pierwszych moich prac graficznych, która trafiła do szerszego grona odbiorców.`,
    secondPoster: "PLAKAT",
    secondPosterDescription: `Plakat wykonany na zlecenie Teatru Dramatycznego w Płocku.

Początkowo koncepcja miała nawiązywać stylistycznie do malarstwa Marca Chagalla, jednak ze względu na czytelność przekazu zdecydowano się na uproszczenie formy.

Ilustracja została wykorzystana w informatorze promującym spektakl.`,
    thirdPoster: "PLAKAT",
    thirdPosterDescription: `Plakat zaprojektowany na zlecenie aktorów Teatru Dramatycznego w Płocku.

Dramat został wyprodukowany i zrealizowany w ramach Sceny Inicjatyw Płockiego teatru.`,
    fourthPoster: "PLAKAT",
    fourthPosterDescription: `Plakat promujący rekrutację osób dojrzałych do klubu sportowego UKS Judo Kano Płock.

Został on umieszczony na tablicach ogłoszeniowych w szkołach średnich oraz uczelniach wyższych.`,
    firstTshirt: "KOSZULKA",
    firstTshirtDescription: `Projekt koszulki klubowej dla UKS Judo Kano Płock. 

Na froncie umieszczono logo klubu, wraz z japońskimi znakami „ju” oraz symbolem „Kano

Na plecach znajduje się grafika w stylu „low poly art”, oraz znaki składające sie na słowo Judo.`,
    techTitle1: "Tym",
    techTitle2: "się bawie:"
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
    contactMe: "Contact me",
    lt1: " ",
    lt2: "M",
    lt3: "Y",
    lt4: " ",
    ll1: "W",
    ll2: "O",
    ll3: "R",
    ll4: "K",
    ll5: "S",
    firstBillboardDescription: `These are proposals for a billboard promoting the inauguration of the academic year.

The project was carried out as part of a professional internship in the promotion department of the Mazovian University in Płock.

The designs were to be characterized by a distinguished, dignified, and luxurious aesthetic.

The red version was ultimately selected.`,
    firstBookCoverTitle: "BOOK COVER",
    firstBookCoverDescription: `Book cover designs for the academic publishing house of the Mazovian Academy in Płock.

Designing a suitably communicative graphic was a challenge due to the extensive scope of the work's content.

Ultimately, the author opted for the second option, based on an archival photograph of the city's panorama.`,
    secondBookCoverTitle: "BOOK COVER",
    secondBookCoverDescription: `Book cover designs prepared for the academic publishing house of the Mazovian Academy in Płock.

The first concept is a metaphor for overcoming obstacles and solving problems.

The second proposal is an abstract representation of relationships, where one circle leads to another.

Ultimately, the author decided on the first option.`,
    firstWebpageTitle: "WEBPAGE",
    firstWebpageDescription: `Website designed for the Płock Medical Society.

Project implemented using WordPress, and AVADA theme.

According to the client's guidelines.`,
    firstPoster: "POSTER",
    firstPosterDescription: `A poster and logo design for a festival organized in collaboration with the Youth Cultural Center in Bydgoszcz.

This is one of my first graphic works to reach a wider audience.`,
    secondPoster: "POSTER",
    secondPosterDescription: `This poster was commissioned by the Dramatic Theatre in Płock.

The concept was initially intended to be stylistically inspired by the paintings of Marc Chagall, but for clarity of message, a simplified form was chosen.

The illustration was used in a brochure promoting the play.`,
    thirdPoster: "POSTER",
    thirdPosterDescription: `A poster commissioned by the actors of the Dramatic Theatre in Płock.

The play was produced and performed as part of the Płock Theatre's Initiative Stage.`,
    fourthPoster: "POSTER",
    fourthPosterDescription: `A poster promoting the recruitment of mature individuals for the UKS Judo Kano Płock sports club.

It was posted on noticeboards in secondary schools and universities.`,
    firstTshirt: "T-SHIRT",
    firstTshirtDescription: `Club t-shirt design for UKS Judo Kano Płock.

The front features the club logo, along with the Japanese characters "ju" and the symbol "Kano."

The back features a low-poly art graphic and characters spelling out the word "Judo."`,
    techTitle1: "This is",
    techTitle2: "what I play with:"
  }
};

function applyLanguage(lang) {
  document.getElementById('description').textContent = transalations[lang].description;
  document.getElementById('hi').textContent = transalations[lang].hi;
  document.getElementById('wt1').textContent = transalations[lang].wt1;
  document.getElementById('wt2').textContent = transalations[lang].wt2;
  document.getElementById('contactMe').textContent = transalations[lang].contactMe;
  document.getElementById('lt1').textContent = transalations[lang].lt1;
  document.getElementById('lt2').textContent = transalations[lang].lt2;
  document.getElementById('lt3').textContent = transalations[lang].lt3;
  document.getElementById('lt4').textContent = transalations[lang].lt4;
  document.getElementById('ll1').textContent = transalations[lang].ll1;
  document.getElementById('ll2').textContent = transalations[lang].ll2;
  document.getElementById('ll3').textContent = transalations[lang].ll3;
  document.getElementById('ll4').textContent = transalations[lang].ll4;
  document.getElementById('ll5').textContent = transalations[lang].ll5;
  document.getElementById('firstBillboardDescription').textContent = transalations[lang].firstBillboardDescription;
  document.getElementById('firstBookCoverTitle').textContent = transalations[lang].firstBookCoverTitle;
  document.getElementById('firstBookCoverDescription').textContent = transalations[lang].firstBookCoverDescription;
  document.getElementById('secondBookCoverTitle').textContent = transalations[lang].secondBookCoverTitle;
  document.getElementById('secondBookCoverDescription').textContent = transalations[lang].secondBookCoverDescription;
  document.getElementById('firstWebpageTitle').textContent = transalations[lang].firstWebpageTitle;
  document.getElementById('firstWebpageDescription').textContent = transalations[lang].firstWebpageDescription;
  document.getElementById('firstPoster').textContent = transalations[lang].firstPoster;
  document.getElementById('firstPosterDescription').textContent = transalations[lang].firstPosterDescription;
  document.getElementById('secondPoster').textContent = transalations[lang].secondPoster;
  document.getElementById('secondPosterDescription').textContent = transalations[lang].secondPosterDescription;
  document.getElementById('thirdPoster').textContent = transalations[lang].thirdPoster;
  document.getElementById('thirdPosterDescription').textContent = transalations[lang].thirdPosterDescription;
  document.getElementById('fourthPoster').textContent = transalations[lang].fourthPoster;
  document.getElementById('fourthPosterDescription').textContent = transalations[lang].fourthPosterDescription;
  document.getElementById('firstTshirt').textContent = transalations[lang].firstTshirt;
  document.getElementById('firstTshirtDescription').textContent = transalations[lang].firstTshirtDescription;
  document.getElementById('techTitle1').textContent = transalations[lang].techTitle1;
  document.getElementById('techTitle2').textContent = transalations[lang].techTitle2;
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
