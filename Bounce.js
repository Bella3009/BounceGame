window.onload = function() {
   let btn = document.getElementById("jump");
   let context = canvas.getContext("2d");
    
   // Axis for the shape position
   var x = 300;
   var y = 350;

   // Initialise the shape
   context.arc(x, y, 50, 0, 2 * Math.PI);
   context.fillStyle="red";
   context.fill();

   btn.onclick = function() {
       count += 1;
   }

btn.onclick = function() {
   count += 1;
   //changing the y position
   y -= 25;
   
   // Shape return to original position when hit the corner
   if(y<=-50){
       y = 350;
   }

   //clearing the canvas
   context.clearRect(0, 0, 600, 400);

   //redrawing the circle   
   context.beginPath();
   context.arc(x, y, 50, 0, 2 * Math.PI);
   context.fillStyle="red";
   context.fill();
   
   //drawing the count value
   context.font = '25px Arial';
   context.fillStyle = 'white';
   context.fillText("Count: " + count, 20, 30);
}
}
