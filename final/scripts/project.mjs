// dialog
const mydialog = document.querySelector('#dialogBox');
const mytitle = document.querySelector('#dialogBox h2');
const myclose = document.querySelector('#dialogBox button');
const myinfo = document.querySelector('#dialogBox p');
const fullImage = document.querySelector('#dialogBox img');
const cards = document.querySelector('.cards');

export function displayProjects(projects) {
    projects.forEach((project) => {
        const workCard = document.createElement('section');
        workCard.className = 'workCard';

        const preview = document.createElement('img');
        const title = document.createElement('h2');
        const description = document.createElement('p');
        const pillContainer = document.createElement('div');
        const pill = document.createElement('span');
        pill.className = 'pill';

        preview.setAttribute('src', `${project.photo}`);
        preview.setAttribute('alt', `Preview of ${project.title}`);
        preview.setAttribute('loading', 'lazy');
        preview.setAttribute('width', '100%');
        preview.setAttribute('height', 'auto');

        title.textContent = project.title;
        description.textContent = `${project.for}, ${project.year}`;
        pill.textContent = project.tag;

        pillContainer.appendChild(pill);

        workCard.append(preview, title, description, pillContainer);

        workCard.addEventListener('click', () => showDetail(project));

        cards.append(workCard);
    });
}

function showDetail(project) {
    
    mytitle.textContent = project.title;
    myinfo.textContent = project.description;
    fullImage.setAttribute('src', `${project.photo}`);


    mydialog.showModal();
}

myclose.addEventListener("click", () => {
    mydialog.close();
});