        // Inisialisasi Swiper
        var swiper = new Swiper('.swiper-container', {
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });

        function updatePaginationPosition() {
            const swiperContainer = document.querySelector('.swiper-container');
            const swiperSlides = document.querySelectorAll('.swiper-slide');
            const swiperPagination = document.querySelector('.swiper-pagination');
            let maxHeight = 0;

            swiperSlides.forEach(slide => {
                const slideHeight = slide.querySelector('div').offsetHeight;
                if (slideHeight > maxHeight) {
                    maxHeight = slideHeight;
                }
            });

            swiperPagination.style.top = `${maxHeight + 20}px`;
        }

        window.addEventListener('resize', updatePaginationPosition);
        window.addEventListener('load', updatePaginationPosition);
        updatePaginationPosition();


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

// zoom
      document.querySelectorAll('.group').forEach(group => {
        group.addEventListener('click', () => {
          const img = group.querySelector('img');
          const src = img.src;
          const modal = document.createElement('div');
          modal.classList.add('fixed', 'inset-0', 'bg-black', 'bg-opacity-75', 'flex', 'items-center', 'justify-center', 'z-50');
          modal.innerHTML = `
            <div class="relative">
              <img src="${src}" class="max-w-full max-h-full">
              <button class="absolute top-0 right-0 mt-[-50px] mr-4 text-white text-2xl" onclick="this.parentElement.parentElement.remove()">×</button>
            </div>
          `;
          document.body.appendChild(modal);
        });
      });

