const minRange = document.getElementById("minRange");
const maxRange = document.getElementById("maxRange");

const minValue = document.getElementById("minValue");
const maxValue = document.getElementById("maxValue");

minRange.addEventListener("input", () => {
  if (parseInt(minRange.value) >= parseInt(maxRange.value)) {
    minRange.value = maxRange.value - 1;
  }
  minValue.textContent = "$" + minRange.value;
});

maxRange.addEventListener("input", () => {
  if (parseInt(maxRange.value) <= parseInt(minRange.value)) {
    maxRange.value = parseInt(minRange.value) + 1;
  }
  maxValue.textContent = "$" + maxRange.value;
});

const productContent = document.querySelectorAll(".product-detail-content");
productContent.forEach((div) => {
  div.addEventListener("click", () => {
    window.location.href = "productDetail.html";
  });
});

const filterbtn = document.querySelector(".filter-options");
const filterSection = document.querySelector(".filter-section");

filterbtn.addEventListener("click", () => {
  filterSection.classList.toggle("active");
});

const filterOption = document.querySelectorAll(".drop-menu");
const filter = document.querySelectorAll(".drop-items");

filterOption.forEach((menu, index) => {
  menu.addEventListener("click", () => {
    filter[index].classList.toggle("active");
  });
});


 const products = [
  {
    name: "Calitti CRYSTALS Non-Clumping Unscented",
    price: 14.83,
    image: "assests/cattilli.png",
    brand: "beyondGREEN biotech™",
    petType: "Cats",
    stock: "In Stock",
    size: "Large",
    category: "All Products"
  },
  {
    name: "Calitti EXTREME Clumping Clay Unscented",
    price: 28.54,
    image: "assests/cattilli-2.png",
    brand: "ReNewedPet",
    petType: "Cats",
    stock: "Out of Stock",
    size: "16oz",
    category: "Products"
  },
  {
    name: "FELTED CAT TOY CARROTS",
    price: 5.5,
    image: "assests/cattilli-3.png",
    brand: "Farm To Pet",
    petType: "Cats",
    stock: "In Stock",
    size: "8oz",
    category: "Bandana"
  },
  {
    name: "Calitti CRYSTALS Non-Clumping Unscented",
    price: 14.83,
    image: "assests/cattilli.png",
    brand: "Draw it Out®",
    petType: "Dogs",
    stock: "In Stock",
    size: "2 Bottle Valuer Pack",
    category: "4 Furry Friends"
  },
  {
    name: "FELTED CAT TOY CARROTS",
    price: 5.5,
    image: "assests/cattilli-3.png",
    brand: "Happy Dog Food",
    petType: "Dogs",
    stock: "Out of Stock",
    size: "Large",
    category: "4 Nudie Pets"
  },
  {
    name: "Calitti EXTREME Clumping Clay Unscented",
    price: 28.54,
    image: "assests/cattilli-2.png",
    brand: "Savannah Pet Food",
    petType: "Dogs",
    stock: "In Stock",
    size: "16oz",
    category: "Antler Dog Chew"
  }
];
