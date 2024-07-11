// Swiper initialization
var swiper;

function initializeSwiper() {
    swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 1,
        spaceBetween: 10,
    });
}

function toggleSwiper() {
    const swiperContainer = document.querySelector('.swiper-container');
    if (window.innerWidth >= 768) {
        if (swiper) {
            swiper.destroy(true, true);
            swiper = null;
        }
        swiperContainer.classList.add('hidden');
    } else {
        if (!swiper) {
            initializeSwiper();
        }
        swiperContainer.classList.remove('hidden');
    }
}

window.addEventListener('resize', () => {
    toggleSwiper();
});

window.addEventListener('load', () => {
    toggleSwiper();
});

toggleSwiper();

        
        

        // Efek Mengetik
        function typeEffect(element, speed) {
            var text = element.getAttribute('data-text');
            element.innerHTML = "";

            var i = 0;
            function type() {
                if (i < text.length) {
                    element.append(text.charAt(i));
                    i++;
                    setTimeout(type, speed);
                } else {
                    setTimeout(function() {
                        element.innerHTML = "";
                        i = 0;
                        type();
                    }, 2000); // Tunggu 2 detik sebelum mengulang
                }
            }

            type();
        }

        document.addEventListener('DOMContentLoaded', function() {
            var typingText = document.getElementById('typing-text');
            typingText.setAttribute('data-text', typingText.innerHTML); // Simpan teks asli
            typeEffect(typingText, 100);
        });


        
// Zoom
function handleZoom() {
  const groups = document.querySelectorAll('.group');
  const mediaQuery = window.matchMedia('(max-width: 640px)');

  // Remove existing event listeners to prevent duplication
  groups.forEach(group => {
    const newGroup = group.cloneNode(true);
    group.parentNode.replaceChild(newGroup, group);
  });

  // Add event listeners based on media query
  const updatedGroups = document.querySelectorAll('.group');
  updatedGroups.forEach(group => {
    const img = group.querySelector('img');
    const src = img.src;

    if (mediaQuery.matches) {
      group.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.classList.add('modal-overlay');
        modal.innerHTML = `
          <div class="relative">
            <img src="${src}">
          </div>
        `;

        // Close modal on click anywhere
        modal.addEventListener('click', () => {
          document.body.removeChild(modal);
        });

        document.body.appendChild(modal);
      });
    }
  });
}

window.addEventListener('resize', handleZoom);
window.addEventListener('DOMContentLoaded', handleZoom);


// navbar
window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 0) {
    navbar.classList.add('fixed-navbar');
  } else {
    navbar.classList.remove('fixed-navbar');
  }
});

// dropdown menu
document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.getElementById('dropdown');
  const dropdownToggle = document.getElementById('dropdown-toggle');
  const dropdownItems = dropdown.querySelectorAll('a, label');

  dropdownToggle.addEventListener('click', () => {
    if (dropdown.classList.contains('scale-0')) {
      // buat buka
      dropdown.classList.remove('scale-0', 'opacity-0');
      dropdown.classList.add('scale-100', 'opacity-100');
    } else {
      // tutup
      dropdown.classList.remove('scale-100', 'opacity-100');
      dropdown.classList.add('scale-0', 'opacity-0');
    }
  });

  // klik buat tutup
  document.addEventListener('click', (event) => {
    if (!dropdown.contains(event.target) && !dropdownToggle.contains(event.target)) {
      dropdown.classList.remove('scale-100', 'opacity-100');
      dropdown.classList.add('scale-0', 'opacity-0');
    }
  });


  dropdownItems.forEach(item => {
    item.addEventListener('click', function() {
      dropdown.classList.remove('scale-100', 'opacity-100');
      dropdown.classList.add('scale-0', 'opacity-0');
    });
  });
});