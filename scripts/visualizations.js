let speed = 100;

// Decrease numerator to increase speed
let delay_time = 6000 / (Math.floor(array_size / 10) * speed); 

// This is updated over every div change so that visualization is visible
let c_delay = 0; 

// vis_speed() is called when algo speed is changed
inp_aspeed.addEventListener("input", vis_speed);

function vis_speed() {
  let array_speed = inp_aspeed.value;
  switch (parseInt(array_speed)) {
    case 1:
      speed = 1;
      break;
    case 2:
      speed = 3;
      break;
    case 3:
      speed = 9;
      break;
    case 4:
      speed = 27;
      break;
    case 5:
      speed = 100;
      break;
    case 6:
      speed = 243;
      break;
    case 7:
      speed = 729;
      break;
    case 8:
      speed = 2187;
      break;
    case 9:
      speed = 6000;
      break;
    case 10:
      speed = 10000;
      break;
  }

  // Decrease numerator to increase speed
  delay_time = 6000 / (Math.floor(array_size / 10) * speed); 
}

// Update height and color of cont(current array element)
function div_update(cont, height, color) {
  if(color=="blue"){
    color="#4ea8de";
  }
  else if(color=="yellow"){
    color="#e1bb36";
  }
  else if(color=="red"){
    color=="#ef233c";
  }

  window.setTimeout(function () {
    cont.style =
      "margin:0% " + margin_size + "%; width:" + (100 / array_size - 2 * margin_size) + "%; height:" + height + "%; background-color:" + color + 
      ";";
  }, (c_delay += delay_time));
}

// Enable all buttons again after completion of running algo
function enable_buttons() {
  window.setTimeout(function () {
    document.getElementById("navbardrop").innerHTML = "Sorting Algorithms";
    conventions = document.getElementsByClassName("convention");
    conventions[1].style.display = "none";
    conventions[0].style.display = "none";
    document.getElementById("navbardrop").classList.remove("link_disabled");
    // for (let i = 0; i < butts_algos.length; i++) {      
      inp_as.disabled = false;
      inp_gen.disabled = false;
      inp_aspeed.disabled = false;
      var onlyText = document.getElementsByClassName("only-text");
      onlyText[0].style.opacity = 1;
      onlyText[1].style.opacity = 1;
    // }
  }, (c_delay += delay_time));
}
