document.addEventListener('DOMContentLoaded', () => {
    // Initialize event listeners for navigation
    const courseLinks = document.querySelectorAll('.course-link');
    courseLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const courseId = link.getAttribute('data-course-id');
            loadCourseDetails(courseId);
        });
    });

    const loginButton = document.getElementById('login-button');
    if (loginButton) {
        loginButton.addEventListener('click', () => {
            // Logic for login
            loginUser();
        });
    }

    const signupButton = document.getElementById('signup-button');
    if (signupButton) {
        signupButton.addEventListener('click', () => {
            // Logic for signup
            signupUser();
        });
    }
});

function loadCourseDetails(courseId) {
    // Logic to load course details based on courseId
    console.log(`Loading details for course ID: ${courseId}`);
}