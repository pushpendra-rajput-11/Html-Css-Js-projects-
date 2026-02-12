// Home section js

const openNavbar = document.querySelector(".pop-up-nav");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");

function openNav() {
  openNavbar.classList.add("active");
  overlay.classList.add("active");
}

function closeNav() {
  openNavbar.classList.remove("active");
  overlay.classList.remove("active");
}

document.querySelectorAll(".contact-us-btn").forEach((div) => {
  div.addEventListener("click", () => {
    window.location.href = "contactUs.html";
  });
});

document.querySelectorAll(".shop-now-btn").forEach((div) => {
  div.addEventListener("click", () => {
    window.location.href = "shop.html";
  });
});

// Shop Page javasript

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
    category: "All Products",
  },
  {
    name: "Calitti EXTREME Clumping Clay Unscented",
    price: 28.54,
    image: "assests/cattilli-2.png",
    brand: "ReNewedPet",
    petType: "Cats",
    stock: "Out of Stock",
    size: "16oz",
    category: "Products",
  },
  {
    name: "FELTED CAT TOY CARROTS",
    price: 5.5,
    image: "assests/cattilli-3.png",
    brand: "Farm To Pet",
    petType: "Cats",
    stock: "In Stock",
    size: "8oz",
    category: "Bandana",
  },
  {
    name: "Calitti CRYSTALS Non-Clumping Unscented",
    price: 14.83,
    image: "assests/cattilli.png",
    brand: "Draw it Out®",
    petType: "Dogs",
    stock: "In Stock",
    size: "2 Bottle Valuer Pack",
    category: "4 Furry Friends",
  },
  {
    name: "FELTED CAT TOY CARROTS",
    price: 5.5,
    image: "assests/cattilli-3.png",
    brand: "Happy Dog Food",
    petType: "Dogs",
    stock: "Out of Stock",
    size: "Large",
    category: "4 Nudie Pets",
  },
  {
    name: "Calitti EXTREME Clumping Clay Unscented",
    price: 28.54,
    image: "assests/cattilli-2.png",
    brand: "Savannah Pet Food",
    petType: "Dogs",
    stock: "In Stock",
    size: "16oz",
    category: "Antler Dog Chew",
  },
];

const container = document.getElementById("product-container");

// Select original card
const card = document.querySelector(".product-detail-content");

// Clear container (remove original card)
container.innerHTML = "";

const countElement = document.querySelector(".count-product");

countElement.textContent = products.length;

products.forEach((product) => {
  const clone = card.cloneNode(true);

  clone.querySelector(".product-name").textContent = product.name;
  clone.querySelector(".price").textContent = "$" + product.price;
  clone.querySelector(".product-image").src = product.image;

  container.appendChild(clone);
});

// Product Page JavaSript

const counteValue = document.querySelector("#counter");

const increament = () => {
  let value = parseInt(counteValue.innerText);
  value = value + 1;
  counteValue.innerText = value;
};

const decreament = () => {
  let value = parseInt(counteValue.innerText);
  value = value - 1;
  counteValue.innerText = value;
};
