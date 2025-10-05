// src/assets/js/courses.js

const courses = [
    { id: 1, title: "Introduction to HTML", completed: false },
    { id: 2, title: "CSS Fundamentals", completed: false },
    { id: 3, title: "JavaScript Basics", completed: false }
];

export function getCourses() {
    return courses;
}

export function getCourseDetails(courseId) {
    return courses.find(course => course.id === courseId);
}

export function markCourseCompleted(courseId) {
    const course = courses.find(course => course.id === courseId);
    if (course) {
        course.completed = true;
    }
}