# Out of the sorting algorithms introduced, or any others you have encountered, which is the quickest or most efficient in sorting a set of data and why?
>This question is highly dependant on the set of data in reference. If the data set is **already sorted** , leads to the best case for *simple algorithms* such as Bubble sort and Insertion sort. If the data set is sorted in **reverse order**, simple algorithms tend to slow down and the Merge sort and Heap sort algorithms emerge. However, when the data set is randomly ordered as in most scenarios, for smaller data sets the best algorithms seem to be Quick sort, Insertion sort and Merge sort. However, when the size of the data sets increases it seems that Quick sort is the fastest in most scenarios followed closely by Merge sort and then Heap sort. 

# Why is Binary Search more efficient than Linear Search for most cases?
>Linear search will sort from begginning to the end as the name implies until it reaches the desired element. This is an inefficient way to search if the element that is being searched for is near the end or at the end of the data set. This is where binary search becomes useful. With binary search we select an element at the center of the array and comapare it against the desired element. Depending on the the size of the element we are looking for if the element is less than the one compared against the larger half of the array can be ignored, if the element is larger the smaller half may be ignored. The algorithm continues in this fasion until the target item is reached. ** THIS WILL ONLY WORKED ON SORTED ARRAYS** since if the elements are not sorted, there is no linear numeric comparison. 


# Code an implementation of Bubble Sort and test it on an integer array of your choice
```
function bubbleSort (numArr) {

var swapped;
do{
	swapped = false;
	for(let i = 0; i < numArr.length - 1; i++) {
		if(numArr[i]>numArr[i+1])
		{
			var hold = numArr[i];
			numArr[i] = numArr[i+1];
			numArr[i+1] = hold;
			swapped = true;
		}
	}
  }while (swapped);
}
```

console:
```
arr = [4,2,1,6,7,4,32,41,103,1,3,4,5,6,2]
(15) [4, 2, 1, 6, 7, 4, 32, 41, 103, 1, 3, 4, 5, 6, 2]
bubbleSort(arr)
undefined
arr
(15) [1, 1, 2, 2, 3, 4, 4, 4, 5, 6, 6, 7, 32, 41, 103]
```
