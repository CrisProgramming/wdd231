document.addEventListener("DOMContentLoaded", async () => {
  const woundList = document.getElementById("woundList");

  try {
    const response = await fetch("data/wounds.json");
    const wounds = await response.json();

    wounds.forEach(wound => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${wound.name}</h3>
        <p><strong>Cause:</strong> ${wound.cause}</p>
        <p><strong>Behavior:</strong> ${wound.behavior}</p>
        <p><strong>Healing:</strong> ${wound.healing}</p>
      `;
      woundList.appendChild(card);
    });
  } catch (err) {
    console.error("Failed to load wounds data:", err);
  }
});