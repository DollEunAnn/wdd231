
export async function getResumeData() {
    const response = await fetch('data/resume.json');
    return await response.json();
}
