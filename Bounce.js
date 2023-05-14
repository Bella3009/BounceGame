window.onload = function() {
    let context = canvas.getContext("2d")
    let count = 0;

    // Axis for the shape position
    var x = 300;
    var y = 350;

    // Initialise the shape
    context.arc(x, y, 50, 0, 2 * Math.PI);
    context.fillStyle="red";
    context.fill();

    // Move the shape with any pressed keyboard's button
    document.onkeydown = function() {
        count += 1;
        y -= 25;
        draw();
    }

    // Move the shape when screen is touched
    document.ontouchstart = function() {
        count += 1;
        y -= 25;
        draw();
    }

    function draw(){
        // If the circle touch the top returns to original position
        if(y<=25){
            y = 350;
        }
        //Clearing the canvas
        context.clearRect(0, 0, 600, 400);

        //Redrawing the circle
        context.beginPath();
        context.arc(x, y, 50, 0, 2 * Math.PI);
        context.fillStyle="red";
        context.fill();

        //Drawing the count value
        context.font = '25px Arial';
        context.fillStyle = 'white';
        context.fillText("Count: " + count, 20, 30);
        window.requestAnimationFrame(draw);
    }
}