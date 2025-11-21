const dialogBox = document.querySelector('#dialogBox');
const closeButton = document.querySelector('#closeButton');
const dialogBoxText = document.querySelector('.dialogContent');
const title = document.querySelector('#title');

// membership detail modal
npButton.addEventListener("click", () => {
    dialogBox.showModal();
    title.textContent = "Non Profit Membership";
    dialogBoxText.innerHTML = `
    <p> Membership Benefits: </p>
    <ul>
        <li>Access to community events</li>
        <li>Listing in the online directory</li>
        <li>Free attendance to quarterly networking sessions</li>
        <li>Discounted booth fees for local fairs</li>
        <li>Eligibility for community partnership projects</li>
    </ul>
    <p id="price">PHP 500</p>`;
})

bronzeButton.addEventListener("click", () => {
    dialogBox.showModal();
    title.textContent = "Bronze Membership";
    dialogBoxText.innerHTML = `
    <p> Membership Benefits: </p>
    <ul>
        <li>All Non-Profit benefits</li>
        <li>Standard business directory listing with logo</li>
        <li>Access to monthly training webinars</li>
        <li>Member-only newsletter updates</li>
        <li>10% discount on event tickets</li>
    </ul>
    <p id="price">PHP 1,000</p> `;
})

silverButton.addEventListener("click", () => {
    dialogBox.showModal();
    title.textContent = "Silver Membership";
    dialogBoxText.innerHTML = `
    <p> Membership Benefits: </p>
    <ul>
        <li>All Bronze benefits</li>
        <li>Priority placement in business directory</li>
        <li>1 spotlight feature on the home page per quarter</li>
        <li>Free attendance to monthly workshops</li>
        <li>15% discount on event tickets and vendor booths</li>
        <li>Access to exclusive partnership opportunities</li>
    </ul>
    <p id="price">PHP 2,500</p> `;
})

goldButton.addEventListener("click", () => {
    dialogBox.showModal();
    title.textContent = "Gold Membership";
    dialogBoxText.innerHTML = `
    <p> Membership Benefits: </p>
    <ul>
        <li>All Silver benefits</li>
        <li>Premium placement on the home page</li>
        <li>Unlimited spotlight features (scheduled)</li>
        <li>VIP access to all events and annual gala</li>
        <li>30% discount on all chamber-sponsored events</li>
        <li>Custom promotional posts on social media</li>
        <li>Invitation to leadership roundtable discussions</li>
    </ul>
    <p id="price">PHP 3,500</p> `;
})

closeButton.addEventListener("click", () => {
    dialogBox.close();
});

document.addEventListener("DOMContentLoaded", () => {
    const loadTime = document.getElementById("timestamp");

    loadTime.value = new Date().toLocaleString();
});