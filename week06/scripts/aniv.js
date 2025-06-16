// Output the current year for the copyright
document.getElementById("current-year").textContent = `${new Date().getFullYear()}`;

// Output the last modified date of the document
document.getElementById("lastModified").textContent = `${document.lastModified}`;

// Toggle the navigation menu on mobile
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// --- Review Count Tracker ---

// Check if current page is review.html
if (window.location.pathname.endsWith("thanks.html")) {
    // Get the current review count or default to 0
    let reviewCount = parseInt(localStorage.getItem("reviewCount")) || 0;

    // Increment the count
    reviewCount++;

    // Save it back to localStorage
    localStorage.setItem("reviewCount", reviewCount);

    // Update the HTML span with the new count
    const countSpan = document.getElementById("reviewCount");
    if (countSpan) {
        countSpan.textContent = `${reviewCount}`;
    }
}

// Services data container
const services = [
	{ id: "CR", name: "Computer Repair", cost: 20 },
	{ id: "PR", name: "Programming Tutoring", cost: 50 },
	{ id: "MP", name: "Mathematics and Physics Tutoring", cost: 30 },
	{ id: "NT", name: "Network Setup", cost: 100 },
	{ id: "CS", name: "Custom Software Development", cost: 200 },
	{ id: "WD", name: "Web Development", cost: 150 },
	{ id: "DS", name: "Data Science Consulting", cost: 250 },
	{ id: "AI", name: "Artificial Intelligence Solutions", cost: 300 }
];

//Services from the selector in the form
// Populate the service type selector with options
const select = document.getElementById("service-type");
if (select) {
    services.forEach(service => {
        const option = document.createElement("option");
        option.value = service.id;
        option.textContent = `${service.name}`; 
        select.appendChild(option);
    });
}


