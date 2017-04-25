Bubbles Sort:


- extremely well known because of its easy to implement nature
- simple sort algorithm - one of the most slowest
- comparison-based algorithm : each pair of adjacent elements is compared and the elements are swappped if they are not in order
- not suitable for large data sets
- average and worst case complexity O(n2) (n = number of element)
- the smaller element goes to the top (beginning) of the array as a bubble goes to the top of the water.


    begin BubbleSort(list)

       for all elements of list
          if list[i] > list[i+1]
             swap(list[i], list[i+1])
          end if
       end for

       return list

    end BubbleSort