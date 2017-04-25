var quickSortList = [38, 63, 4, 0, 33, 28, 47, 10, 2];


function swap(quickSortList, firstIndex, secondIndex){
    var temp = quickSortList[firstIndex];
    quickSortList[firstIndex] = quickSortList[secondIndex];
    quickSortList[secondIndex] = temp;
}

function partition(quickSortList, left, right) {

    var pivot = quickSortList[Math.floor((right + left) / 2)],
        leftIndex = left,
        rightIndex = right;
    console.log( leftIndex + "," + rightIndex);


    while (leftIndex <= rightIndex) {

        while (quickSortList[leftIndex] < pivot) {
            leftIndex++;
        }

        while (quickSortList[rightIndex] > pivot) {
            rightIndex--;
        }

        if (leftIndex <= rightIndex) {
            swap(quickSortList, leftIndex, rightIndex);
            leftIndex++;
            rightIndex--;
        }
    }

    return leftIndex;
}


function quickSort(quickSortList, leftItem, rightItem) {

    var index;

    if (quickSortList.length > 1) {

        leftItem = typeof leftItem != "number" ? 0 : leftItem;
        console.log("leftItem is: " + leftItem);
        rightItem = typeof rightItem != "number" ? quickSortList.length - 1 : rightItem;

        index = partition(quickSortList, leftItem, rightItem);

        if (leftItem < index - 1) {
            quickSort(quickSortList, leftItem, index - 1);
        }

        if (index < rightItem) {
            quickSort(quickSortList, index, rightItem);
        }

    }

    return quickSortList;
}

// first call
quickSort(quickSortList);
console.log(quickSortList);