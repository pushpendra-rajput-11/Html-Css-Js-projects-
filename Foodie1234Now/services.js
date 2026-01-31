 
const toggleBtn = document.querySelector('.toggle_btn');
      const toggleBtnIcon = document.querySelector('.toggle_btn i');
      const dropdownMenu = document.querySelector('.dropdown_menu');

      toggleBtn.onclick = function(){
        dropdownMenu.classList.toggle('open');
        const isOpen = dropdownMenu.classList.contains('open')

        toggleBtnIcon.classList = isOpen
        ? "fa-solid fa-xmark"
        : "fa-solid fa-bars"
      }


    const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 80,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });

