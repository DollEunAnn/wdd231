 const url = 'data/resume.json';
 const cards = document.querySelector('.cards');

//  dialog
const mydialog = document.querySelector('#mydialog');
const mytitle = document.querySelector('#mydialog h2');
const myclose = document.querySelector('#mydialog button');
const myinfo = document.querySelector('#mydialog p'); 

 async function getProjectData() {
    const response = await fetch(url);
    const data = await response.json();

    displayProjects(data.projects);
 }

getProjectData();

 const displayProjects = (projects)  => {
    projects.forEach((project) => {

        const workCard = document.createElement('section');
        workCard.className = 'workCard';

        const preview = document.createElement('img');
        const title = document.createElement('h2');
        const description = document.createElement('p');
        const pill = document.createElement('div');

        preview.setAttribute('src', `${project.photo}`);
        title.textContent = `${project.title}`;
        description.textContent = `${project.for}, ${project.year}`;
        pill.textContent = `${project.tag}`;

        workCard.append(preview);
        workCard.append(title);
        workCard.append(description);
        workCard.append(pill);

        preview.setAttribute('alt', `Preview of ${project.title}`);
        preview.setAttribute('loading', 'lazy');
        preview.setAttribute('width', '100%');
        preview.setAttribute('height', 'auto');

        workCard.addEventListener('click', () => 
            showDetail(project)
        );

        cards.append(workCard);
    });
 };

 function showDetail(project) {
    mytitle.innerHTML = project.title;
    myinfo.innerHTML = `${project.description}`;
    mydialog.showModal()
}

myclose.addEventListener("click", () => 
    mydialog.close()
);
