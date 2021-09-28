const points = [50, 10, 13, 15, 35, 130];
document.getElementById("demo").innerHTML = points;  

function myFunction() {
  points.sort(function(a, b){return a - b});
  document.getElementById("demo").innerHTML = points;
}