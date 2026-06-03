### Sorting

https://www.geeksforgeeks.org/javascript/sorting-algorithms-in-javascript/

```bash
Sorting algorithms in JavaScript are structured sets of instructions used to arrange elements within an array in a specific order (such as ascending or descending numerical or alphabetical order)

1. Bubble Sort
   Bubble Sort is one of the simplest sorting algorithms. It repeatedly compares adjacent elements and swaps them if they are in the wrong order.
2. Selection Sort
   Selection Sort is a simple comparison-based algorithm. It divides the array into two parts: sorted and unsorted. In each iteration, it selects the smallest (or largest) element from the unsorted part and moves it to the sorted part. It is in place algorithm.
   Notes: Selection sort it does less memory write compared to other Algorithm but Cycle sort is Optimal in terms of memory Writes.
3. Insertion Sort
   Insertion Sort is a simple and stable sorting algorithm that builds the final sorted array one element at a time. It works by iterating through the array and inserting each element into its correct position in the already sorted portion of the array.

   Characteristics of Insertion Sort:
   - This algorithm is one of the simplest algorithm with simple implementation
   - Basically, Insertion sort is efficient for small data values
   - Insertion sort is adaptive in nature, i.e. it is appropriate for data sets which are already partially sorted.ets.

4. Merge Sort
   Merge Sort is a divide-and-conquer algorithm. It divides the array into two halves, recursively sorts them, and merges the sorted halves.
5. Quick Sort Using Lomuto
   Quick Sort is another divide-and-conquer algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot.

   Lomuto Partition :

   In Lomuto Partition, the last element is chosen as the pivot.
   It maintains two pointers: one for smaller elements and another for iterating through the array.
   Lomuto Partition is less efficient than Hoare's Partition because it performs more swaps and handles repeated elements poorly.
   Hoare's Partition :

   In Hoare's Partition, the first element is chosen as the pivot.
   It uses two pointers starting from both ends of the array and moves them toward each other.
   Hoare's Partition generally provides better performance, especially with repeated elements, but it is slightly harder to implement.
```

### Binary search

https://www.geeksforgeeks.org/javascript/binary-search-in-javascript/

```bash
Binary Search is a searching technique that works on the Divide and Conquer approach. It is used to search for any element in a sorted array. Compared with linear, binary search is much faster with a Time Complexity of O(logN), whereas linear search works in O(N) time complexity.

Here is working of Binary Search:

Find the middle element of the array.
Compare the middle element with the target key.
If equal, return the index.
If the key is smaller, search the left half of the array.
If the key is larger, search the right half of the array.
Repeat the process until the element is found or the search space becomes empty.
```

### Array method map/filter/find

https://medium.com/@torycons/javascript-%E0%B8%88%E0%B8%B1%E0%B8%94%E0%B8%81%E0%B8%B2%E0%B8%A3-array-%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%87%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B9%86-%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-map-filter-reduce-%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%9C%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%9E%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%99-bfc84e59ebae

```bash
map: return all data in array with special function assign in code
filter: return only data in array that meet condition
find: return first data in array that meet condition
```
