const cards = document.querySelector('#cards');

//step 4
async function getMemberData() {
    const response = await fetch('data/members.json');

    const data = await response.json();
  
    displayMembers(data.members);
}

getMemberData();


const displayMembers = (members) => {
  members.forEach((member) => {

    const card = document.createElement('section');
    const name = document.createElement('h2');
    const portrait = document.createElement('img');
    const address = document.createElement('p');
    const products = document.createElement('p');

    // populate
    name.textContent = `${member.name}`;
    portrait.setAttribute('src', `${member.imageUrl}`);
    address.textContent = `Address: ${member.addresses}`;
    products.textContent = `Membership Level: ${member.membership_level}`;
    
    // append to card
    card.appendChild(portrait);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(products);

    // build image attribute
    portrait.setAttribute('alt', `Business Image of ${member.name}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '440');
    portrait.setAttribute('height', '440');


    cards.appendChild(card);
    
  });
}