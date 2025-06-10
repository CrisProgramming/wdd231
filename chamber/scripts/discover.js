// Set current year and last modified date
const year = document.getElementById("year");
const lastModified = document.getElementById("lastModified");
year.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;

// Visitor message logic
const msgEl = document.getElementById("visitor-message");
const now = Date.now();
const lastVisit = Number(localStorage.getItem("lastVisit"));

let message = "Welcome! Let us know if you have any questions.";
if (lastVisit) {
  const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
  if (days < 1) message = "Back so soon! Awesome!";
  else message = `You last visited ${days} ${days === 1 ? "day" : "days"} ago.`;
}
msgEl.textContent = message;
localStorage.setItem("lastVisit", now);

// Fetch and display location cards
fetch("data/locations.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("cardContainer");
    data.forEach(loc => {
      const card = document.createElement("div");
      card.className = "location-card";
      card.innerHTML = `
        <h2>${loc.name}</h2>
        <figure>
          <img src="images/${loc.image}" alt="${loc.name}" loading="lazy" />
        </figure>
        <address>${loc.address}</address>
        <p>${loc.description}</p>
        <button>Learn More</button>
      `;
      container.appendChild(card);
    });
  });