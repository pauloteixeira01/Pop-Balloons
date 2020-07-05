function addBall(){
	let ball = document.createElement("div");
	ball.setAttribute("class", "ball");

	let p1 = Math.floor(Math.random() * 1200);
	let p2 = Math.floor(Math.random() * 500);

	let color = parseInt(Math.random() * 999999);
	ball.setAttribute("style", "left:"+p1+"px;top:"+p2+"px;background-color:#"+cor);
		
	ball.setAttribute("onclick","burst(this)");

	document.body.appendChild(ball);
}

function burst(element){
	document.body.removeChild(element);
}

function start(){
	setInterval(addBall, 500);
}
