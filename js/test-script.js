

var userName = window.prompt('Enter your Name');

window.alert('Impending Doom in 3...2..1.. '+ userName);


var satCountDown= new Date(' July 11, 2020').getTime();

var  x = setInterval(function(){
	var today = new Date().getTime();
	var distance = satCountDown - today
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	
	document.getElementById('countdown').innerHTML = days  +  'd' +  hours +  'h' +  minutes +  'm' +  seconds +  's' ;
	
	if (distance <0) {
		clearInterval(x);
		document.getElementById('countdown').innerHTML = 'Times up';
	}
	
}, 1000);



console.log('hello ' + userName);

console.log('days left' + satCountDown)