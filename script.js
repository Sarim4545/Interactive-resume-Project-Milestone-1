document.addEventListener('DOMContentLoaded', function () {
    // Helper function to toggle content visibility
    var toggleVisibility = function (buttonId, contentId) {
        var button = document.getElementById(buttonId);
        var content = document.getElementById(contentId);
        button.addEventListener('click', function () {
            content.classList.toggle('hide'); // Toggle 'hide' class to hide/show content
        });
    };
    // Career Objective Toggle
    toggleVisibility('toggle-objective', 'objective-content');
    // Certifications Toggle
    toggleVisibility('toggle-certification', 'certification-content');
    // Personal Info Toggle
    toggleVisibility('toggle-personal-info', 'personal-info-content');
    // Education Toggle
    toggleVisibility('toggle-education', 'education-content');
    // Skills Toggle
    toggleVisibility('toggle-skills', 'skills-content');
    // Work Experience Toggle
    toggleVisibility('toggle-Work', 'Work-content');
});
