const dialogBox = document.querySelector('#dialogBox');
const closeButton = document.querySelector('#closeButton');
const dialogBoxText = document.querySelector('#dialogBox .content');
const title = document.querySelector('#dialogBox #title');

npButton.addEventListener("click", () => {
    dialogBox.showModal();
    title.textContent = "Non Profit Membership";
    dialogBoxText.innerHTML = `
    <p> Special Membership Perks </p>`;
})

bronzeButton.addEventListener("click", () => {
    dialogBox.showModal();
    title.textContent = "Bronze Membership";
    dialogBoxText.innerHTML = `
    <p> Special Membership Perks </p>`;
})

silverButton.addEventListener("click", () => {
    dialogBox.showModal();
    title.textContent = "Silver Membership";
    dialogBoxText.innerHTML = `
    <p> Special Membership Perks </p>`;
})

goldButton.addEventListener("click", () => {
    dialogBox.showModal();
    title.textContent = "Gold Membership";
    dialogBoxText.innerHTML = `
    <p> Special Membership Perks </p>`;
})

closeButton.addEventListener("click", () => {
    dialogBox.close();
});