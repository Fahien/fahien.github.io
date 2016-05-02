function rain() {
	var container = document.getElementById("c-container");
	var c = document.getElementById("c");
	c.width = container.clientWidth;
	c.height = container.clientHeight;

	var drop_size = 12;
	var columns = c.width/drop_size;

	var chinese = "ムタ二コク1234567890シモラキリエスハヌトユABCDEF";
	chinese = chinese.split("");

	var drops = [];
	for(var i = 0; i < columns; i++)
		drops[i] = 1; //y coordinate - same for everyone at the starting. The index contains the x coordinate

	ctx = c.getContext('2d');

	function draw()
	{
		ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
		ctx.fillRect(0, 0, c.width, c.height);

		ctx.fillStyle = "#000";
		ctx.font= drop_size + "px arial";
		for(var i = 0; i < drops.length; i++) { text = chinese[Math.floor(Math.random()*chinese.length)]; ctx.fillText(text, i*drop_size, drops[i]*drop_size); if(drops[i]*drop_size > c.height && Math.random() > 0.975)
				drops[i] = 0;

			drops[i]++;
		}
	}
	setInterval(draw, 33);
}

rain();
