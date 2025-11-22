
// form details
const getString = window.location.search;
const formInfo = new URLSearchParams(getString);
const details = document.querySelector('.memberDetails');

const levelCode = formInfo.get("membership-level"); 
const levelName = levelCode === "NP" ? "Non Profit" : levelCode;

const timestamp = formInfo.get("timestamp"); 

details.innerHTML = `
    <p>${formInfo.get('organization')}</p>
    <p>${levelName} Membership</p>
    <div class="line"></div>
    <p>${formInfo.get('first')} ${formInfo.get('last')}</p>
    <p>${formInfo.get('orgtitle')}</p>
    <p>${formInfo.get('email')}</p>
    <p>${formInfo.get('phone')}</p>
    <div class="line"></div>
    <p>Registration Date: ${timestamp}</p>
    
`;