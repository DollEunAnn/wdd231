import { tanayInterests } from "../data/interest.mjs";
// card
const container = document.getElementById("cards");

// visit
const messageContainer = document.getElementById("visit-message");
const lastVisit = localStorage.getItem("lastVisit");
const today = Date.now();

tanayInterests.forEach(item => {
  // Create card wrapper
  const card = document.createElement("div");
  card.classList.add("card");

  // Title
  const title = document.createElement("h2");
  title.textContent = item.name;

  // Figure + Image
  const figure = document.createElement("figure");
  const img = document.createElement("img");
  img.src = item.photo_url;
  img.alt = item.name;
  img.width = 300;
  img.height = 200;
  img.loading= "lazy";
  figure.appendChild(img);

  // Address
  const address = document.createElement("address");
  address.textContent = item.address;

  // Description
  const description = document.createElement("p");
  description.textContent = item.description;

  // Button
  const button = document.createElement("button");
  button.textContent = "LEARN MORE";

  // Assemble card
  card.appendChild(figure);
  card.appendChild(title);
  card.appendChild(address);
  card.appendChild(description);
  card.appendChild(button);

  // Add to container
  container.appendChild(card);
});


function getDaysBetween(ms1, ms2) {
  const diff = Math.abs(ms2 - ms1);
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

let message = "";

if (!lastVisit) {
  message = "Welcome! Let us know if you have any questions.";
} else {
  const days = getDaysBetween(today, parseInt(lastVisit));
  if (days < 1) {
    message = "Back so soon! Awesome!";
  } else {
    message = `You last visited ${days} day${days === 1 ? "" : "s"} ago.`;
  }
}

messageContainer.textContent = message;
localStorage.setItem("lastVisit", today.toString());