export async function getResumeData() {

    try {
        const response = await fetch("data/resume.json");
        
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        
        return data;

    } catch (error) {
        
        console.error("Failed to load resume data:", error);

        return null;
    }
}
