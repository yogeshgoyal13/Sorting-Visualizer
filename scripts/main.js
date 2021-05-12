// Slider of array size
let inp_as = document.getElementById("a_size");

// Array size
let array_size = inp_as.value; 

// Generate new array button
let inp_gen = document.getElementById("a_generate");

// Slider of algo speed
let inp_aspeed = document.getElementById("a_speed");

// Selected all buttons to run sorting algo
let butts_algos = document.querySelectorAll(".algos");
console.log(butts_algos)

// Vertical Height of each array pipe
let div_sizes = [];

// Store each array pipe as a div
let divs = [];

// Left and Right Margin of each array pipe
let margin_size;

// Container where array pipes will be inserted
let cont = document.getElementById("array_container");
cont.style = "flex-direction:row";

// generate_array() will be called if generate new array button is clicked
inp_gen.addEventListener("click", generate_array);

function generate_array() {
  conventions = document.getElementsByClassName("convention");
  conventions[1].style.display = "none";
  conventions[0].style.display = "none";
  document.getElementById("navbardrop").innerHTML = "Sorting Algorithms";
  inp_as.disabled = false;
  inp_gen.disabled = false;
  inp_aspeed.disabled = false;
  document.getElementById("navbardrop").classList.remove("link_disabled");

  cont.innerHTML = "";

  for (let i = 0; i < array_size; i++) {
    div_sizes[i] = Math.floor(Math.random() * 1 * (inp_as.max - 4 * inp_as.min)) + 2;

    divs[i] = document.createElement("div");
    cont.appendChild(divs[i]);

    margin_size = 0.15;

    divs[i].style =
      "margin:0% " + margin_size + "%; background-color:#4ea8de; width:" + (100 / array_size - 2 * margin_size) + "%; height:" + div_sizes[i] + "%;";
  }
}

// update_array_size() will be called if slider of array size is used
inp_as.addEventListener("input", update_array_size);

function update_array_size() {
  array_size = inp_as.value;
  generate_array();
}

// Generate default array on opening of site
window.onload = update_array_size();

// runalgo() will be called if any sorting algorithm is clicked
for (let i = 0; i < butts_algos.length; i++) {
  butts_algos[i].addEventListener("click", runalgo);
}

function runalgo() {
  // call the below function first so that the running algo is not interrupted
  disable_buttons();
  document.getElementById("navbardrop").innerHTML = this.innerHTML;
  conventions = document.getElementsByClassName("convention");
  if(this.innerHTML == "Merge Sort"){
    conventions[1].style.display = "block";
  }
  else{
    conventions[0].style.display = "block";
  }

  // this.classList.add("butt_selected");
  switch (this.innerHTML) {
    case "Bubble Sort":
      Bubble();
      break;
    case "Selection Sort":
      Selection_sort();
      break;
    case "Insertion Sort":
      Insertion();
      break;
    case "Merge Sort":
      Merge();
      break;
    case "Quick Sort":
      Quick();
      break;
    case "Heap Sort":
      Heap();
      break;
  }
}

function disable_buttons() {

  // for (let i = 0; i < butts_algos.length; i++) {
  // window.setTimeout(function () {
    document.getElementById("navbardrop").classList.add("link_disabled");
    inp_as.disabled = true;
    inp_gen.disabled = true;
    inp_aspeed.disabled = true;
    var onlyText = document.getElementsByClassName("only-text");    
    onlyText[0].style.opacity = 0.6;
    onlyText[1].style.opacity = 0.6;
  // }, (c_delay += delay_time));
  // }
}