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

  if (mediaQuery.matches) {
    groups.forEach(group => {
      const img = group.querySelector('img');
      const src = img.src;

      const showModal = () => {
        const modal = document.createElement('div');
        modal.classList.add('modal-overlay');
        modal.innerHTML = `
          <div class="relative">
            <img src="${src}">
            <button class="close-button" onclick="document.body.removeChild(this.closest('.modal-overlay'))">×</button>
          </div>
        `;
        document.body.appendChild(modal);
      };

      group.addEventListener('click', showModal);
    });
  } else {
    groups.forEach(group => {
      const cloneGroup = group.cloneNode(true);
      group.parentNode.replaceChild(cloneGroup, group);
    });
  }
}

window.addEventListener('resize', handleZoom);
window.addEventListener('DOMContentLoaded', handleZoom);

