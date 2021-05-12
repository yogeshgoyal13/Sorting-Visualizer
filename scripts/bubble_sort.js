// Yellow - algo points to this array element
// Red - 2 at the same time, means both are being swapped
// Green - this element is at correct place

function Bubble() {
  c_delay = 0;

  for (var i = 0; i < array_size - 1; i++) {
    for (var j = 0; j < array_size - i - 1; j++) {
      // Color update - algo points to jth element
      div_update(divs[j], div_sizes[j], "yellow"); 
      
      // Swap required b/w j and j+1
      if (div_sizes[j] > div_sizes[j + 1]) {
        // Both elements made red to denote they are being swapped
        div_update(divs[j], div_sizes[j], "red"); 
        div_update(divs[j + 1], div_sizes[j + 1], "red"); 

        // Swap both elements
        var temp = div_sizes[j];
        div_sizes[j] = div_sizes[j + 1];
        div_sizes[j + 1] = temp;

        // Update heights of both elements, still being red
        div_update(divs[j], div_sizes[j], "red"); 
        div_update(divs[j + 1], div_sizes[j + 1], "red"); 
      }

      // jth element is now at correct place for this iteration, so make it blue again
      div_update(divs[j], div_sizes[j], "blue"); 
    }

    // Last element(to which j points) is now at global correct position, so make it green
    div_update(divs[j], div_sizes[j], "green"); 
  }
  div_update(divs[0], div_sizes[0], "green"); 

  // Algo finished, enable buttons
  enable_buttons();
}
