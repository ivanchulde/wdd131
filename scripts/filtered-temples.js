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


const temples = [
{
	templeName: "Aba Nigeria",
	location: "Aba, Nigeria",
	dedicated: "2005, August, 7",
	area: 11500,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
},
{
	templeName: "Manti Utah",
	location: "Manti, Utah, United States",
	dedicated: "1888, May, 21",
	area: 74792,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
},
{
	templeName: "Payson Utah",
	location: "Payson, Utah, United States",
	dedicated: "2015, June, 7",
	area: 96630,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
},
{
	templeName: "Yigo Guam",
	location: "Yigo, Guam",
	dedicated: "2020, May, 2",
	area: 6861,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
},
{
	templeName: "Washington D.C.",
	location: "Kensington, Maryland, United States",
	dedicated: "1974, November, 19",
	area: 156558,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
},
{
	templeName: "Lima Perú",
	location: "Lima, Perú",
	dedicated: "1986, January, 10",
	area: 9600,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
},
{
	templeName: "Mexico City Mexico",
	location: "Mexico City, Mexico",
	dedicated: "1983, December, 2",
	area: 116642,
	imageUrl:
	"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
},
{
	templeName: "Quito Ecuador",
	location: "Quito, Ecuador",
	dedicated: "2022, November, 20",
	area: 36780,
	imageUrl:
	"https://churchofjesuschrist.org/imgs/490df500d14611ec90efeeeeac1ee7e67e80c168/full/640%2C/0/default"
},
{
	templeName: "Guayauil Ecuador",
	location: "Guayaquil, Ecuador",
	dedicated: "1999, August, 1",
	area: 45000,
	imageUrl:
	"https://www.churchofjesuschrist.org/imgs/b6e397f7a6c219442a9987bcd8c92ff78c5d50a6/full/640%2C/0/default"
},
{
	templeName: "Barranquilla Colombia",
	location: "Barranquilla, Colombia",
	dedicated: "2018, December, 9",
	area: 25349,
	imageUrl:
	"https://www.churchofjesuschrist.org/imgs/7e68e3b2ed30f817f91392968737f45a07e17e79/full/640%2C/0/default"
},
];

// Set max width and height for all temple images
// (add these attributes when creating the image elements)

createTempleCard(temples);

const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

oldLink.addEventListener("click", () => {
	createTempleCard(temples.filter(temple => temple.dedicated < "1900, January, 1"));
});

newLink.addEventListener("click", () => {
	createTempleCard(temples.filter(temple => temple.dedicated > "2000, January, 1"));
});

largeLink.addEventListener("click", () => {
	createTempleCard(temples.filter(temple => temple.area > 90000));
});
smallLink.addEventListener("click", () => {
	createTempleCard(temples.filter(temple => temple.area < 10000));
});

homeLink.addEventListener("click", () => {
	createTempleCard(temples);
});

function createTempleCard(filteredTemples) {
	document.querySelector(".container").innerHTML = ""; // Clear previous content
	filteredTemples.forEach(temple => { 
		let card = document.createElement("section");
		let name = document.createElement("h3");
		let location = document.createElement("p");
		let dedication = document.createElement("p");
		let area = document.createElement("p");
		let img = document.createElement("img");

		name.textContent = temple.templeName;
		location.innerHTML = `<span class="label1">Location:</span> ${temple.location}`;
		dedication.innerHTML = `<span class="label1">Dedicated:</span> ${temple.dedicated}`;
		area.innerHTML = `<span class="label1">Size:</span> ${temple.area} sq ft`;
		img.setAttribute("src", temple.imageUrl);
		img.setAttribute("alt", `${temple.templeName} Temple`);
		img.setAttribute("loading", "lazy");

		if (temples.indexOf(temple) > 3) {
			img.setAttribute("loading", "lazy");
		}
		

		
		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedication);
		card.appendChild(area);
		card.appendChild(img);

		document.querySelector(".container").appendChild(card);
	});

}