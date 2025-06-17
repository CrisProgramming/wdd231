// Responsive hamburger menu toggle
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Fetch and display services dynamically
const serviceList = document.getElementById("serviceList");
const serviceModal = document.getElementById("serviceModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalBenefit = document.getElementById("modalBenefit");
const modalSymbol = document.getElementById("modalSymbol");
const closeModal = document.getElementById("closeModal");

async function loadServices() {
  try {
    const response = await fetch("data/services.json");
    const data = await response.json();

    data.forEach(service => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${service.title}</h3>
        <p>${service.summary}</p>
        <button class="details-btn" data-id="${service.id}">Learn More</button>
      `;
      serviceList.appendChild(card);
    });

    // Event delegation for buttons
    serviceList.addEventListener("click", (e) => {
      if (e.target.classList.contains("details-btn")) {
        const id = e.target.getAttribute("data-id");
        const service = data.find(s => s.id == id);
        modalTitle.textContent = service.title;
        modalDesc.textContent = service.description;
        modalBenefit.textContent = service.benefit;
        modalSymbol.textContent = service.symbol;
        serviceModal.showModal();
      }
    });

    closeModal.addEventListener("click", () => {
      serviceModal.close();
    });

  } catch (error) {
    console.error("Error fetching services:", error);
  }
}

if (serviceList) loadServices();