// Output the current year for the copyright
document.getElementById("current-year").textContent = new Date().getFullYear();

// Output the last modified date of the document
document.getElementById("lastModified").textContent = document.lastModified;

// Step 1: Get values from HTML
const temperature = parseFloat(document.querySelector(".temperature").textContent);
const windSpeed = parseFloat(document.querySelector(".windspeed").textContent);

// Step 2: Define wind chill calculation
function calculateWindChill(t, s) {
  return Math.round(35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16));
}

// Step 3: Conditions to apply formula
let windChill;

if (temperature <= 50 && windSpeed > 3) {
  windChill = calculateWindChill(temperature, windSpeed) + " °F";
} else {
  windChill = "N/A";
}

// Step 4: Output to page
document.querySelector(".windchill").textContent = windChill;