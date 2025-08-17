import { products } from "../data/products.js";
import { renderProducts } from "./amazon.js";

const searchInput = document.querySelector(".search-bar");
const productList = document.querySelector(".js-products-grid");
const searchButton = document.querySelector(".search-button");

// Clear and show message helper
const showNotFoundMessage = () => {
  productList.innerHTML = `
    <div class="no-products-container">
      <h2 class="no-products-title">No products found</h2>
    </div>
  `;
};


const performSearch = (mode) => {
  const query = searchInput.value.trim().toLowerCase();

  if (query === "") {
    renderProducts(products);
    return;
  }

  const filtered = products.filter((product) => {
    const productWords = product.name.toLowerCase().split(/\s+/);

    return mode === "exact"
      ? productWords.some((pWord) => pWord === query) // Exact match
      : productWords.some((pWord) => pWord.includes(query)); // Partial match
  });

  productList.innerHTML = "";

  if (filtered.length === 0) {
    showNotFoundMessage();
  } else {
    renderProducts(filtered);
  }
};

renderProducts(products);

searchInput.addEventListener("input", () => {
  performSearch("partial");
});

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    performSearch("exact");
  }
});

searchButton.addEventListener("click", () => {
  performSearch("exact");
});
