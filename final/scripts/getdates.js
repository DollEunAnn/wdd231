  // year
  const year = document.querySelector("#currentyear");
  const today = new Date();
  year.innerHTML = `<span>${today.getFullYear()}</span>`;