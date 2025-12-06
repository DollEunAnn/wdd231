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
        description.textContent = `${school.degree} • ${school.yearCompleted}`;
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
        const level = document.createElement('p');

        title.textContent = `${skill.name} `;
        description.textContent = `${skill.type}`;
        tools.textContent = `${skill.tools.join(', ')}`;

        level.textContent = `(${skill.level}) `;
        level.className = 'sub-details';

        details.append(title, description, tools, level);

        skillContainer.append(details);
    });
}

// MUSIC SETUP
const music = document.getElementById("bgMusic");
const toggle = document.getElementById("musicToggle");

// Load saved volume or default to 40%
const savedVolume = localStorage.getItem("musicVolume");
music.volume = savedVolume !== null ? savedVolume : 0.2;

// Load saved play state
const savedState = localStorage.getItem("musicPlaying");
// console.log(savedState);

if (savedState === "true") {
    music.play().then(() => {
        toggle.textContent = "🔊 Music";
    }).catch(() => {
        // if the autoplay got block
        toggle.textContent = "▶ Music";
    });
}

// Toggle play/pause
toggle.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        toggle.textContent = "🔊 Music";
        localStorage.setItem("musicPlaying", "true");
    } else {
        music.pause();
        toggle.textContent = "🔇 Music";
        localStorage.setItem("musicPlaying", "false");
    }
});

