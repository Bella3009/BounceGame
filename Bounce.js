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
}
