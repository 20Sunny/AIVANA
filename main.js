const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  // "#9400D3",
  // "#4B0082",
  // "#0000FF",
  // "#00FF00",
  // "#FFFF00",
  // "#FF7F00",
  // "#FF0000"
  "#ff0000",
  "#FF7F00",
  "#FFFF00",
  "#00FF00",
  "#0000FF",
  "#4B0082",
  "#9400D3"
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.09;
    y += (nextCircle.y - y) * 0.09;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();
