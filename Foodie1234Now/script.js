
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


      const tabs = document.querySelectorAll(".tab");

      
       tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
          
          tabs.forEach((tab) => {
            tab.classList.remove("active");
          });
          tab.classList.add("active");
        })
      })



  const items = document.querySelectorAll(".faq-item");

  items.forEach(item => {
    const btn = item.querySelector(".faq-question");
    const icon = item.querySelector(".icon");

    btn.addEventListener("click", () => {

      items.forEach(i => {
        if (i !== item) {
          i.classList.remove("active");
          i.querySelector(".icon").textContent = "+";
        }
      });

      item.classList.toggle("active");

      icon.textContent = item.classList.contains("active") ? "−" : "+";
    });
  });






const topTrack = document.getElementById("topTrack");
const bottomTrack = document.getElementById("bottomTrack");

let topX = lastX = 0;
let bottomX = 0;

const speed = 2; // change speed here
const resetPoint = topTrack.scrollWidth/2;

function animate() {

  started = true;
  // top → RIGHT
  topX += speed;
  if (topX >= resetPoint) topX = 0 ;
  topTrack.style.transform = `translateX(${topX}px)`;

  // bottom → LEFT
  bottomX -= speed;
  if (Math.abs(bottomX) >= resetPoint) bottomX = 0;
  bottomTrack.style.transform = `translateX(${bottomX}px)`;

  requestAnimationFrame(animate);
}

animate();



