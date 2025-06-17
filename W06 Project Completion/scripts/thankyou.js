document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const output = document.getElementById("formOutput");

  const name = params.get("name");
  const email = params.get("email");
  const interest = params.get("interest");
  const message = params.get("message");

  if (name && email && interest && message) {
    output.innerHTML = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Interest:</strong> ${interest}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;
    localStorage.setItem("lastUserContact", JSON.stringify({ name, email, interest, message }));
  } else {
    output.innerHTML = `<p>Missing form information. Please try again.</p>`;
  }
});