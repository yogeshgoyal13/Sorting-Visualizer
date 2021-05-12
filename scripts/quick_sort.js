// Yellow - algo points to this array element
// Red - pivot and vals being swapped alongside pivot(if needed)
// Green - this element is at correct place

function Quick() {
    c_delay = 0;

    quick_sort(0, array_size - 1);

    enable_buttons();
}

function quick_partition(low, high) {
    let count = low;
    div_update(divs[high], div_sizes[high], "red");

    for (let i = low; i < high; i++) {
        div_update(divs[i], div_sizes[i], "yellow");
        if (div_sizes[i] <= div_sizes[high]) count++;
        div_update(divs[i], div_sizes[i], "blue");
    }

    div_update(divs[count], div_sizes[count], "red");

    let temp = div_sizes[high];
    div_sizes[high] = div_sizes[count];
    div_sizes[count] = temp;

    div_update(divs[count], div_sizes[count], "green");

    if(count!=high){
        div_update(divs[high], div_sizes[high], "blue");
    }

    let i = low, j = high;
    while (i < count && j > count) {
        while (i < count && div_sizes[i] <= div_sizes[count]){
            div_update(divs[i], div_sizes[i], "yellow");
            div_update(divs[i], div_sizes[i], "blue");
            i++;
        }

        while (j > count && div_sizes[j] > div_sizes[count]){
            div_update(divs[j], div_sizes[j], "yellow");
            div_update(divs[j], div_sizes[j], "blue");
            j--;
        }

        if (i < count && j > count) {
            div_update(divs[i], div_sizes[i], "red");
            div_update(divs[j], div_sizes[j], "red");

            let t = div_sizes[i];
            div_sizes[i] = div_sizes[j];
            div_sizes[j] = t;

            div_update(divs[i], div_sizes[i], "red");
            div_update(divs[j], div_sizes[j], "red");

            div_update(divs[i], div_sizes[i], "blue");
            div_update(divs[j], div_sizes[j], "blue");
            i++;
            j--;
        }
    }

    return count;
}

function quick_sort(start, end) {
    if (start < end) {
        //stores the position of pivot element
        var piv_pos = quick_partition(start, end);

        quick_sort(start, piv_pos - 1);//sorts the left side of pivot.

        for(var t=start;t<=piv_pos;t++)
        {
            div_update(divs[t],div_sizes[t],"green");//Color update
        }

        quick_sort(piv_pos + 1, end);//sorts the right side of pivot.

        for(var t=piv_pos+1;t<=end;t++)
        {
            div_update(divs[t],div_sizes[t],"green");//Color update
        }
    }
}