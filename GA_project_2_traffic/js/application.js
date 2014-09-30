function buttonClick(lightOn){
  var yellowLight = document.getElementById('yellow');
  var redLight = document.getElementById('red');
  var greenLight = document.getElementById('green');
  
  redLight.style.backgroundColor = "black";
  greenLight.style.backgroundColor = "black";
  yellowLight.style.backgroundColor = "black";
  
  var light = document.getElementById(lightOn);
  
  light.style.backgroundColor = lightOn;
}