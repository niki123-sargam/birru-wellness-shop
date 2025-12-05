const products = [
  { name: "Vitamin C Supplement", price: 500, image: "images/vitamin-c.jpg" },
  { name: "Herbal Tea", price: 300, image: "images/herbal-tea.jpg" },
  { name: "Health Monitor Kit", price: 1500, image: "images/monitor-kit.jpg" }
];

const productsContainer = document.createElement('div');
productsContainer.id = "products-container";
document.body.appendChild(productsContainer);

products.forEach(product => {
  const productDiv = document.createElement('div');
  productDiv.classList.add('product');

  productDiv.innerHTML = `
    <img src="${product.image}" alt="${product.name}" width="150">
    <h3>${product.name}</h3>
    <p>Price: ₹${product.price}</p>
    <button>Add to Cart</button>
  `;

  productsContainer.appendChild(productDiv);
});
