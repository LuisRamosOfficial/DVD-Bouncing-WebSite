

let color = 0;

const dvd = document.querySelector('.dvd');
const CornerCelebration = document.querySelector('#CornerText');
let dy = 2;
let dx = 2;

let y = Math.random() * 200;
let x = Math.random() * 300;

let invertery = false;
let inverterx = false;

console.log(window.innerHeight - 102);

const colors = [
	'invert(40%) sepia(16%) saturate(2194%) hue-rotate(179deg) brightness(98%) contrast(89%)',
	'invert(50%) sepia(52%) saturate(523%) hue-rotate(75deg) brightness(95%) contrast(91%)',
	'invert(10%) sepia(80%) saturate(4539%) hue-rotate(4deg) brightness(90%) contrast(116%)',
	'invert(100%) sepia(100%) saturate(0%) hue-rotate(294deg) brightness(102%) contrast(103%)',
	'invert(98%) sepia(96%) saturate(1041%) hue-rotate(9deg) brightness(97%) contrast(103%)',
];
const CornerHandler = () => {
	CornerCelebration.style.display = 'block';
	setTimeout(() => {
		CornerCelebration.style.display = 'none';
	}, 5000);
};

setInterval(() => {
	if (color > 4) {
		color = 0;
	}
	// Y movement

	dvd.style.top = `${y}px`;
	if (invertery == false) {
		y += dy;
	} else {
		y -= dy;
	}
	if (y <= 0) {
		console.log(colors[color]);
		invertery = false;
		dvd.style.webkitFilter = colors[color];
		dvd.style.mozFilter = colors[color];
		color += 1;
	}
	if (y >= window.innerHeight - 88) {
		invertery = true;
		dvd.style.webkitFilter = colors[color];
		dvd.style.mozFilter = colors[color];
		color += 1;
	}

	// X movement
	dvd.style.left = `${x}px`;
	if (inverterx == false) {
		x += dx;
	} else {
		x -= dx;
	}
	if (x <= 0) {
		inverterx = false;
		dvd.style.webkitFilter = colors[color];
		dvd.style.mozFilter = colors[color];
		color += 1;
	}
	if (x >= window.innerWidth - 200) {
		inverterx = true;
		dvd.style.webkitFilter = colors[color];
		dvd.style.mozFilter = colors[color];
		color += 1;
	}

	// Check Corners

	if (x < 30 && y < 30) {
		CornerHandler();
	} else if (x > window.innerWidth - 230 && y > window.innerHeight - 100) {
		CornerHandler();
	} else if (x > window.innerWidth - 230 && y < 30) {
		CornerHandler();
	} else if (x < 30 && y > window.innerHeight - 100) {
		CornerHandler();
	}
}, 10);
