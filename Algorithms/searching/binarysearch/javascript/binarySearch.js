function binarySearch(narray, delement) {
    var mid = Math.floor(narray.length / 2);

    if (narray[mid] === delement){
        return mid;
    }
    else if (narray.length === 1)
    {
        return null;
    }
    else if (narray[mid] < delement) {
        var arr = narray.slice(mid + 1);
        var res = binarySearch(arr, delement);
        if (res === null)
        {
            return null;
        }
        else {
            return mid + 1 + res;
        }
    }
    else {
        var arr1 = narray.slice(0, mid);
        return binarySearch(arr1, delement);
    }
}

var binarySearchLis = [5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
console.log(binarySearch(binarySearchLis, 14));
