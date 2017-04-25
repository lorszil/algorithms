var bubbleSortList = [82, 6, 91, 10, 56, 23, 87, 1];
var counter = 0;

function bubbleSort(bubbleSortList)
{
    var sortedList;
    do {
        sortedList = false;
        for (var listElem = 0; listElem < bubbleSortList.length - 1; listElem++) {
            if (bubbleSortList[listElem] > bubbleSortList[listElem + 1]) {
                /*console.log(bubbleSortList[listElem] + "," + bubbleSortList[listElem + 1]);
                console.log(counter);*/
                //counter++;

                //the other option to swap the elem is defined a third one and change it in two step
                var temp = bubbleSortList[listElem];
                //console.log(temp);
                bubbleSortList[listElem] = bubbleSortList[listElem + 1];
                bubbleSortList[listElem + 1] = temp;
                //console.log("After the " + counter + " is " + bubbleSortList);
                sortedList = true;
            }
        }
    } while (sortedList);
}

bubbleSort(bubbleSortList);
console.log("Sorted list: " + bubbleSortList);