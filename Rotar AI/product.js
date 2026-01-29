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

 
 
 const tabs = document.querySelectorAll(".engage");
       const all_content = document.querySelectorAll(".subscription");

       tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
          tabs.forEach((tab) => {
            tab.classList.remove("active");
          });
          tab.classList.add("active");

          all_content.forEach((subscription) => {
            subscription.classList.remove("active");
          });

          all_content[index].classList.add("active");
        });
      });
