document.addEventListener('DOMContentLoaded', () => {

    const toggleVisibility = (buttonId: string, contentId: string) => {
        const button = document.getElementById(buttonId) as HTMLButtonElement;
        const content = document.getElementById(contentId) as HTMLElement;

        button.addEventListener('click', () => {
            content.classList.toggle('hide'); 
        });
    };

    // Career Objective button Toggle
    toggleVisibility('toggle-objective', 'objective-content');

    // Certifications button Toggle
    toggleVisibility('toggle-certification', 'certification-content');

    // Personal Info button Toggle
    toggleVisibility('toggle-personal-info', 'personal-info-content');

    // Education button Toggle
    toggleVisibility('toggle-education', 'education-content');

    // Skills button Toggle
    toggleVisibility('toggle-skills', 'skills-content');

    // Work Experience button Toggle
    toggleVisibility('toggle-Work', 'Work-content');
});
