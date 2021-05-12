// Yellow - algo points to this array element
// Red - will be swapped
// Green - this element is at correct place

function Selection_sort()
{
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        // First element in each iteration will be swapped with minimum element, so make it RED
        div_update(divs[i],div_sizes[i],"red");

        index_min=i;

        for(var j=i+1;j<array_size;j++)
        {
            // algo is checking this element
            div_update(divs[j],div_sizes[j],"yellow");

            if(div_sizes[j]<div_sizes[index_min])
            {
                if(index_min!=i)
                {
                    div_update(divs[index_min],div_sizes[index_min],"blue");//Color update back to blue bcoz index_min is not minimum
                }
                index_min=j;
                div_update(divs[index_min],div_sizes[index_min],"red");//Color update
            }
            else
            {
                div_update(divs[j],div_sizes[j],"blue");//Color update
            }
        }
        
        if(index_min!=i)
        {
            var temp=div_sizes[index_min];
            div_sizes[index_min]=div_sizes[i];
            div_sizes[i]=temp;

            div_update(divs[index_min],div_sizes[index_min],"red");//Height update
            div_update(divs[i],div_sizes[i],"red");//Height update
            
            div_update(divs[index_min],div_sizes[index_min],"blue");//Color update
        }
        div_update(divs[i],div_sizes[i],"green");//Color update
    }
    div_update(divs[i],div_sizes[i],"green");//Color update

    enable_buttons();
}