const apiKey = 'e406ff0aee7a5f8bc0b4c5ec47b2ddcb';
const city = 'Irvine';
const units = 'imperial';

async function getWeather() {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${apiKey}`);
  const data = await response.json();

  const current = data.list[0];
  document.getElementById('current-weather').innerHTML = `
    <p><strong>Temperature:</strong> ${current.main.temp}°</p>
    <p><strong>Condition:</strong> ${current.weather[0].description}</p>
  `;

  let forecastHTML = '<h3>3-Day Forecast</h3>';
  for (let i = 8; i <= 24; i += 8) {
    const forecast = data.list[i];
    const date = new Date(forecast.dt_txt).toLocaleDateString('en-US', { weekday: 'short' });
    forecastHTML += `<p><strong>${date}:</strong> ${forecast.main.temp}°</p>`;
  }
  document.getElementById('forecast').innerHTML = forecastHTML;
}

async function loadSpotlights() {
  const response = await fetch('data/members.json');
  const members = await response.json();
  const goldSilver = members.filter(m => m.membership === 2 || m.membership === 3);
  const selected = goldSilver.sort(() => 0.5 - Math.random()).slice(0, 3);

  const spotlights = document.getElementById('spotlights');
  selected.forEach(member => {
    const div = document.createElement('div');
    div.classList.add('spotlight');
    div.innerHTML = `
      <h3>${member.name}</h3>
      <img src="images/${member.image}" alt="${member.name}">
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><strong>Address:</strong> ${member.address}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <p><em>${member.membership === 3 ? 'Gold' : 'Silver'} Member</em></p>
    `;
    spotlights.appendChild(div);
  });
}

getWeather();
loadSpotlights();