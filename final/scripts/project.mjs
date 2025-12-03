// dialog
const mydialog = document.querySelector('#mydialog');
const mytitle = document.querySelector('#mydialog h2');
const myclose = document.querySelector('#mydialog button');
const myinfo = document.querySelector('#mydialog p');

const cards = document.querySelector('.cards');

export function displayProjects(projects) {
    projects.forEach((project) => {
        const workCard = document.createElement('section');
        workCard.className = 'workCard';

        const preview = document.createElement('img');
        const title = document.createElement('h2');
        const description = document.createElement('p');
        const pill = document.createElement('div');

        preview.setAttribute('src', `${project.photo}`);
        preview.setAttribute('alt', `Preview of ${project.title}`);
        preview.setAttribute('loading', 'lazy');
        preview.setAttribute('width', '100%');
        preview.setAttribute('height', 'auto');

        title.textContent = project.title;
        description.textContent = `${project.for}, ${project.year}`;
        pill.textContent = project.tag;

        workCard.append(preview, title, description, pill);

        workCard.addEventListener('click', () => showDetail(project));

        cards.append(workCard);
    });
}

function showDetail(project) {
    mytitle.textContent = project.title;
    myinfo.textContent = project.description;
    mydialog.showModal();
}

myclose.addEventListener("click", () => {
    mydialog.close();
});