window.onload = function() {
    let context = canvas.getContext("2d")
    let count = 0;
    let t = Date.now();
    let speed = 25;
    
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
        speed = 25
        draw();
    }
    
    // Move the shape when screen is touched
    document.ontouchstart = function() {
        count += 1;
        y -= 25;
        speed = 25;
        draw();
    }
    
    function draw(){
        // Adding the gravity on the shape
        var timePassed = (Date.now() - t) / 1000;
        t = Date.now();
        if(y <= 350) {
            speed += 50 * timePassed;
            y += speed*timePassed;
        }
        // If the circle touch the top border don't go up more
        if(y<=45){
            y = 45;
        }
        
        if(y>350){
            y = 350;
            count = 0;
        }
        // Clearing the canvas
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
