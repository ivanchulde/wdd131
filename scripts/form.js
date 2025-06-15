// Output the current year for the copyright
document.getElementById("current-year").textContent = new Date().getFullYear();

// Output the last modified date of the document
document.getElementById("lastModified").textContent = document.lastModified;




// --- Review Count Tracker ---

// Check if current page is review.html
if (window.location.pathname.endsWith("review.html")) {
    // Get the current review count or default to 0
    let reviewCount = parseInt(localStorage.getItem("reviewCount")) || 0;

    // Increment the count
    reviewCount++;

    // Save it back to localStorage
    localStorage.setItem("reviewCount", reviewCount);

    // Update the HTML span with the new count
    const countSpan = document.getElementById("reviewCount");
    if (countSpan) {
        countSpan.textContent = reviewCount;
    }
}

//Products data
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];


const select = document.getElementById("productName");
if (select) {
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });
}