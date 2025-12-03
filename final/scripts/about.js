 const url = 'data/resume.json';

async function getData() {
    const response = await fetch(url);
    const data = await response.json();

    displayWorkExperience(data.workExperience);
    displaySkills(data.skills);
    displayEducation(data.education);
 }

getData();

const workExperience = document.querySelector('#workExperience');
const education = document.querySelector('#education');
const skillContainer = document.querySelector('#skills'); 

function displayWorkExperience(experiences) {
    experiences.forEach((experience) => {
        const details = document.createElement('section');
        details.className = 'details';

        const title = document.createElement('h3');
        const description = document.createElement('p');
        const location = document.createElement('address');

        title.textContent = `${experience.company} • ${experience.role}`;
        description.textContent = `${experience.yearStarted} - ${experience.yearEnded}`;
        location.textContent = `${experience.location}`;

        details.append(title, description, location);

        workExperience.append(details);
    });
}

function displayEducation(schools) {
    schools.forEach((school) => {
        const details = document.createElement('section');
        details.className = 'details';

        const title = document.createElement('h3');
        const description = document.createElement('p');
        const location = document.createElement('address');

        title.textContent = `${school.school}`;
        description.textContent = `${school.degree}`;
        location.textContent = `${school.location}`;

        details.append(title, description, location);

        education.append(details);
    });
}

function displaySkills(skills) {
    skills.forEach((skill) => {
        const details = document.createElement('section');
        details.className = 'details';

        const title = document.createElement('h3');
        const description = document.createElement('p');
        const tools = document.createElement('p');

        title.textContent = `${skill.name}`;
        description.textContent = `${skill.type}`;
        tools.textContent = `${skill.tools.join(', ')}`;

        details.append(title, description, tools);

        skillContainer.append(details);
    });
}