// Yellow - algo points to this array element
// Red - 2 at the same time, means both are being swapped OR just the potential candidate(while up and down heapify)
// Green - this element is at correct place

function Heap() {
    c_delay = 0;

    heap_sort();

    enable_buttons();
}

function heapify(currSize) {
    // at this point, 0th element(to which pi points initially) is RED bcoz it was swapped with root to extract currMAX from MAX_HEAP
    let pi = 0;

    let lci = 2 * pi + 1;
    let rci = 2 * pi + 2;
    while (lci < currSize) {
        let mi = pi;

        div_update(divs[lci], div_sizes[lci], "yellow");
        if (div_sizes[lci] > div_sizes[mi]) {
            mi = lci;
        }
        div_update(divs[lci], div_sizes[lci], "blue");

        if (rci < currSize) {
            div_update(divs[rci], div_sizes[rci], "yellow");
            if (div_sizes[rci] > div_sizes[mi]) {
                mi = rci;
            }
            div_update(divs[rci], div_sizes[rci], "blue");
        }

        // only pi is RED at this moment, all other blue, and last x elements green coz sorted
        if (mi == pi) {
            div_update(divs[pi], div_sizes[pi], "blue");
            break;
        }

        div_update(divs[mi], div_sizes[mi], "red");

        let temp = div_sizes[mi];
        div_sizes[mi] = div_sizes[pi];
        div_sizes[pi] = temp;

        div_update(divs[pi], div_sizes[pi], "red");
        div_update(divs[mi], div_sizes[mi], "red");

        div_update(divs[pi], div_sizes[pi], "blue");

        pi = mi;
        lci = 2 * pi + 1;
        rci = 2 * pi + 2;

        if(lci >= currSize){
            div_update(divs[pi], div_sizes[pi], "blue");
        }
    }
}

function buildHeap() {
    for (let i = 1; i < array_size; i++) {
        let ci = i;

        div_update(divs[ci], div_sizes[ci], "red");
        while (ci > 0) {
            let pi = Math.floor((ci - 1) / 2);

            div_update(divs[pi], div_sizes[pi], "yellow");

            if (div_sizes[ci] > div_sizes[pi]) {
                div_update(divs[pi], div_sizes[pi], "red");
                div_update(divs[ci], div_sizes[ci], "red");

                let temp = div_sizes[ci];
                div_sizes[ci] = div_sizes[pi];
                div_sizes[pi] = temp;

                div_update(divs[pi], div_sizes[pi], "red");
                div_update(divs[ci], div_sizes[ci], "red");

                div_update(divs[ci], div_sizes[ci], "blue");
            }
            else {
                div_update(divs[pi], div_sizes[pi], "blue");
                div_update(divs[ci], div_sizes[ci], "blue");
                break;
            }

            ci = pi;
        }
    }
}

function heap_sort() {
    buildHeap();

    for (let i = array_size - 1; i >= 0; i--) {
        div_update(divs[0], div_sizes[0], "red");
        div_update(divs[i], div_sizes[i], "red");

        let temp = div_sizes[i];
        div_sizes[i] = div_sizes[0];
        div_sizes[0] = temp;

        div_update(divs[i], div_sizes[i], "green");

        heapify(i);
    }
}