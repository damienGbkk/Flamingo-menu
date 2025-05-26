
document.addEventListener('DOMContentLoaded', () => {
  const menuContainer = document.getElementById('menu');
  const data = [
    { name: "Tuna Tartare", description: "Fresh tuna with avocado and lime", price: "$12" },
    { name: "Mango Salad", description: "Green mango, chili, lime, peanuts", price: "$9" },
    { name: "Pad Thai", description: "Classic stir-fried noodles", price: "$10" }
  ];
  data.forEach(item => {
    const el = document.createElement('div');
    el.className = 'item';
    el.innerHTML = `<h2>${item.name}</h2><p>${item.description}</p><p><strong>${item.price}</strong></p>`;
    menuContainer.appendChild(el);
  });
});
