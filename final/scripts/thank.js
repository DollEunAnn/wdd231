const getString = window.location.search;

console.log(getString);

const message = new URLSearchParams(getString);

console.log(message);
console.log(message.get('to-email'));

const card = document.querySelector('#messageResults');

const from = document.createElement('p');
from.id = 'fromEmail';

const summary = document.createElement('p');
const contact = document.createElement('p');

from.textContent =  `From: ${message.get('from-email')}`;
contact.textContent =  `Contact: ${message.get('phone')}`;
summary.textContent = `Your Message: ${message.get('message')}`;

card.append(from, contact, summary);
