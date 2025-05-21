// Output the current year for the copyright
document.getElementById("current-year").textContent = new Date().getFullYear();

// Output the last modified date of the document
document.getElementById("lastModified").textContent = document.lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});