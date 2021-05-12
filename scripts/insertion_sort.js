// Yellow - algo points to this array element
// Red - val being swapped
// Green - this element is at correct place

function Insertion()
{
    c_delay=0;

    for(var j=1;j<array_size;j++)
    {
        div_update(divs[j],div_sizes[j],"yellow");//YELLOW - pointing to this element

        var key= div_sizes[j];
        var i=j-1;

        // Till swaps required
        while(i>=0 && div_sizes[i]>key)
        {
            // curr 2 elems need to be swapped, so make RED
            div_update(divs[i],div_sizes[i],"red");//Color update
            div_update(divs[i+1],div_sizes[i+1],"red");//Color update

            div_sizes[i+1]=div_sizes[i];

            div_update(divs[i],div_sizes[i],"red");//Height update
            div_update(divs[i+1],div_sizes[i+1],"red");//Height update
            
            if((i+1) != j)
            {
                div_update(divs[i+1],div_sizes[i+1],"blue");//Color update
            }
            else {
                div_update(divs[i+1],div_sizes[i+1],"yellow");//Color update
            }
            i-=1;
        }

        if(i!=(j-1)){
            div_sizes[i+1]=key;
            div_update(divs[i+1],div_sizes[i+1],"red");//Color update
        }
        div_update(divs[i+1],div_sizes[i+1],"blue");//Color update 
    }
    
    div_update(divs[array_size-1],div_sizes[array_size-1],"blue");//Color update

    for(var t=0;t<array_size;t++)
    {
        div_update(divs[t],div_sizes[t],"green");//Color update
    }

    enable_buttons();
}