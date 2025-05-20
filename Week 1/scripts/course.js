const courses = [
    { code: "WDD 130", name: "Web Fundamentals", credits: 3, completed: true },
    { code: "WDD 131", name: "Dynamic Web Fundamentals", credits: 3, completed: true },
    { code: "WDD 231", name: "Frontend Development I", credits: 3, completed: false },
    { code: "CSE 110", name: "Programming Building Blocks", credits: 2, completed: true },
    { code: "CSE 111", name: "Programming with Functions", credits: 2, completed: true },
];

function displayCourses(filteredCourses) {
    const container = document.getElementById("course-cards");
    container.innerHTML = "";

    let totalCredits = 0;

    filteredCourses.forEach(course => {
        const card = document.createElement("div");
        card.className = course.completed ? "course completed" : "course";

        card.innerHTML = `
        <h3>${course.code}</h3>
        <p>${course.name}</p>
        <p>Credits: ${course.credits}</p>
        <p>Status: ${course.completed ? "✅ Completed" : "🕗 In Progress"}</p>
      `;

        container.appendChild(card);
        totalCredits += course.credits;
    });

    document.getElementById("total-credits").textContent = totalCredits;
}

function filterCourses(type) {
    let filtered = courses;

    if (type === "WDD") {
        filtered = courses.filter(course => course.code.startsWith("WDD"));
    } else if (type === "CSE") {
        filtered = courses.filter(course => course.code.startsWith("CSE"));
    }

    displayCourses(filtered);
}

window.addEventListener("DOMContentLoaded", () => {
    displayCourses(courses);
});  