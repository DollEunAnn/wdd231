const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

//step 4
async function getProphetData() {
    // step 5
    const response = await fetch(url);
    //step 6
    const data = await response.json();
    
    // step 7
    //console.table(data); 
     
    //step 10
    displayProphets(data.prophets); //array of prophets
}

// step 8
getProphetData();

// const displayProphets = function(prophets)
//shorter version
const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {

    const card = document.createElement('section');
    const fullName = document.createElement('h2');
    const portrait = document.createElement('img');
    const birthday = document.createElement('p');
    const placeOfBirth = document.createElement('p');

    // populate
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    portrait.setAttribute('src', `${prophet.imageurl}`);
    birthday.textContent = `Date of Birth: ${prophet.birthdate}`;
    placeOfBirth.textContent = `Place of Birth: ${prophet.birthplace}`;
    
    // append to card
    card.appendChild(fullName);
    card.appendChild(birthday);
    card.appendChild(placeOfBirth);
    card.appendChild(portrait);

    // build image attribute
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');



    cards.appendChild(card);
    
  });
}