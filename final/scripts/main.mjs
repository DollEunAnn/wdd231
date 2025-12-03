import { getResumeData } from "./resumeService.mjs";
import { displayProjects } from "./project.mjs";

getResumeData().then(data => {
    displayProjects(data.projects, ".cards");
});
