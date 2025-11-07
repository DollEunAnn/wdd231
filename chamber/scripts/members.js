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
    const telephone = document.createElement('p');
    const website = document.createElement('a');

    // populate
    name.textContent = `${member.name}`;
    portrait.setAttribute('src', `${member.imageUrl}`);
    address.textContent = `Address: ${member.addresses}`;
    telephone.textContent = `${member.phone_numbers}`;
    website.textContent = `${member.website}`;
    
    // append to card
    card.appendChild(portrait);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(telephone);
    card.appendChild(website);

    // build image attribute
    portrait.setAttribute('alt', `Business Image of ${member.name}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '440');
    portrait.setAttribute('height', '440');

    //build link
    website.href = `${member.website}`;


    cards.appendChild(card);
    
  });
}