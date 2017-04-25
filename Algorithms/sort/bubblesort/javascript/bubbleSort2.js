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

                // The one option to swap to elem ES6 (Firefox and Chrome already support it (Destructuring Assignment Array Matching)):
                [bubbleSortList[listElem],bubbleSortList[listElem + 1]] = [bubbleSortList[listElem + 1],bubbleSortList[listElem]];

                sortedList = true;
            }
        }
    } while (sortedList);
}

bubbleSort(bubbleSortList);
console.log("Sorted list: " + bubbleSortList);
