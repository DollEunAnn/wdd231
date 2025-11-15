const business = document.querySelector('#business');

// landing
async function getMemberPremiumData() {
  const response = await fetch('data/members.json');

  const data = await response.json();

  // filter members with membership_level = 3
  const premiumMembers = data.members.filter(member => member.membership_level === 3);

  displayMembersLanding(premiumMembers);

}

const displayMembersLanding = (members) => {
  // Shuffle array
  for (let i = members.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [members[i], members[j]] = [members[j], members[i]];
  }

  // Take first 3
  const selectedMembers = members.slice(0, 2);

  selectedMembers.forEach(member => {
    const businessCard = document.createElement('div');
    businessCard.classList.add('business-card');
    
    // Header
    const businessHeader = document.createElement('div');
    businessHeader.classList.add('business-header');

    const businessName = document.createElement('p');
    const businessTag = document.createElement('p');


    // Content
    const businessContent = document.createElement('div');
    businessContent.classList.add('business-content');

    const profile = document.createElement('img');
    
    // Info
    const info = document.createElement('div');
    info.classList.add('info');

    const address = document.createElement('p');
    const website = document.createElement('p');
    const phone = document.createElement('p');
    const url = document.createElement('p');
    const level = document.createElement('p');

    businessName.textContent = `${member.name}`;
    businessTag.textContent = `${member.products}`;

    address.textContent = `Address: ${member.addresses}`;
    phone.textContent = `Phone: ${member.phone_numbers}`;
    website.textContent = `Website: ${member.website}`;
    level.textContent = `Membership Level: ${member.membership_level}`;

    profile.setAttribute('src', `${member.imageUrl}`);
    profile.setAttribute('alt', `Business Image of ${member.name}`);
    profile.setAttribute('lazy', 'loading');

    businessCard.append(businessHeader, businessContent);
    businessHeader.append(businessName, businessTag);
    businessContent.append(profile, info);
    info.append(address,website, phone, url, level);

    business.append(businessCard);
  });
};

getMemberPremiumData();

