
const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ68PZRwCLsMzEG4TdffQVowjQk61-RJjXD16Ji1--9vNq8zw_66lufogA2X3y5iePTip7zpRTejPAO/pub?output=csv";

document.addEventListener("DOMContentLoaded", () => {
  fetch(sheetURL)
    .then(res => res.text())
    .then(data => {
      const rows = data.split("\n");
      const headers = rows[0].split(",");
      const content = rows.slice(1).map(row => {
        const values = row.split(",");
        return headers.reduce((acc, header, i) => {
          acc[header.trim()] = values[i]?.trim() || "";
          return acc;
        }, {});
      });

      const grouped = {};
      content.forEach(item => {
        const cat = item["Category"] || "Other";
        if (!grouped[cat]) grouped[cat] = [];
        grouped[cat].push(item);
      });

      const container = document.getElementById("menu-container");
      Object.keys(grouped).forEach(category => {
        const section = document.createElement("div");
        section.className = "category";
        section.innerHTML = `<h2>${category}</h2>`;

        grouped[category].forEach(item => {
          const el = document.createElement("div");
          el.className = "item";
          el.innerHTML = `
            <h3>${item["Name"]}</h3>
            <p>${item["Description"]}</p>
            <p><strong>${item["Price (THB)"]}</strong></p>
            ${item["Image URL"] ? `<img src="${item["Image URL"]}" alt="${item["Name"]}">` : ""}
          `;
          section.appendChild(el);
        });

        container.appendChild(section);
      });
    });
});
