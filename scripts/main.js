var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function clock() {
	var todayTime = new Date();
	var todayDate = new Date();

	document.getElementById('time').innerHTML = todayTime.toLocaleTimeString();
	document.getElementById('date').innerHTML = todayDate.getDate() + ' ' + monthNames[todayDate.getMonth()] + ' ' + todayDate.getFullYear();
}

setInterval(clock, 0)

document.getElementById('change').onclick = function inverse() {
	var colors = ['#FFFFFF', '#FF0000', '#FFFF00', '#008000', '#EE82EE' ];
	var randomColor = colors[Math.floor(Math.random() * colors.length)];
	document.getElementById('time').style.color = randomColor;
	document.getElementById('date').style.color = randomColor;
	document.getElementById('circle').style.borderColor = randomColor;
}

document.getElementById('background').onclick = function picture() {
	var pictures = ['url(https://static.wixstatic.com/media/f0f38e_4e9209d1b6a549028189c591e09088e0~mv2.png)', 'url(https://images.bonnier.cloud/files/ill/production/2019/04/12093919/mars_planeet.jpg?auto=compress&q=30&fit=max&w=920&fm=webp&ixlib=imgixjs-3.4.2)', 'url(https://www.arcgis.com/sharing/rest/content/items/f99dd40c7e084ec19df7affc91efb95c/resources/1583160722087.jpeg?w=3507)'];
	var randomPicture = pictures[Math.floor(Math.random() * pictures.length)];
	document.getElementById('circle').style.backgroundImage = randomPicture;
}

function background() {
	var time = new Date();
	var hours = time.getHours(); 
	if (hours >= 8 && hours < 12) {
		document.body.style.backgroundColor = '#FFFF99';
	} else if (hours >= 12 && hours < 18) {
		document.body.style.backgroundColor = '#99CCFF';
	} else if (hours >= 18 && hours < 22) {
		document.body.style.backgroundColor = '#FFB266';
	} else {
		document.body.style.backgroundColor = '#000000';
	}
}

background();