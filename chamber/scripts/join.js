
// form details
const getString = window.location.search;
const formInfo = new URLSearchParams(getString);
const details = document.querySelector('#membershipDetail');

console.log(getString);
// details.innerHTML = `
//     <p>Thank you for signing up, ${formInfo.get('first')}!</p>
    

//     `;