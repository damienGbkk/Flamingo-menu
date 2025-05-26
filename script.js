
document.addEventListener('DOMContentLoaded', () => {
  const menuContainer = document.getElementById('menu');
  fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vT6Ni3IRmOJ89oDQ-w0AjxaDnLPFiyIijBOlyv2-uRXw2biGEVpjutUPAdtsrl335THy29ZNiDfoZio/pub?output=csv")
    .then(response => response.text())
    .then(text => {
      const rows = text.trim().split('\n');
      const headers = rows.shift().split(',');
      const data = rows.map(row => {
        const values = row.split(',');
        return Object.fromEntries(headers.map((h, i) => [h.trim(), values[i].trim()]));
      });
      data.forEach(item => {
        const el = document.createElement('div');
        el.className = 'item';
        el.innerHTML = `
          <h2>${item.Name}</h2>
          <p>${item.Description}</p>
          <p><strong>${item.Price}</strong></p>
          <img src="${item["Image URL"]}" alt="${item.Name}" style="max-width:100%; border-radius:12px; margin-top:8px"/>
        `;
        menuContainer.appendChild(el);
      });
    });
});
