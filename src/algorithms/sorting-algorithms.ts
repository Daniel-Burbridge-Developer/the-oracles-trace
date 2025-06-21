export const SortingAlgorithms = {
  bubbleSort: {
    name: "Bubble Sort",
    description:
      "Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, which indicates that the list is sorted.",
    steps: [
      {
        step: 1,
        action:
          "Repeat the following steps for i from 0 to n-1 (where n is the array length):",
      },
      {
        step: 2,
        action: "For j from 0 to n-i-2:",
      },
      {
        step: 3,
        action: "If array[j] > array[j+1], swap array[j] and array[j+1].",
      },
      {
        step: 4,
        action: "After all passes, the array is sorted in ascending order.",
      },
    ],
    options: {
      sortingOrder: {
        type: "enum",
        values: ["ascending", "descending"],
        description: "The order in which the array should be sorted.",
        defaultValue: "ascending",
      },
      customComparator: {
        type: "function",
        description:
          "A custom comparison function for defining a specific sorting logic (e.g., sorting objects by a particular property).",
        defaultValue: null,
      },
    },
    Considerations: {
      whenToUse: {
        description:
          "Bubble Sort is rarely the optimal choice for real-world applications due to its inefficiency.",
        scenarios: [
          "**Educational purposes:** Ideal for teaching basic sorting concepts due to its straightforward logic.",
          "**Very small, nearly sorted datasets:** For extremely small arrays (e.g., less than 10-20 elements) that are almost sorted, its simplicity might marginally offset its poor performance overhead compared to more complex algorithms. However, even then, Insertion Sort is usually better.",
          "**Situations where code simplicity outweighs performance:** In highly constrained environments where code size and simplicity are paramount and performance is not critical, for tiny datasets.",
        ],
      },
      whenNotToUse: {
        description:
          "Avoid Bubble Sort in most practical scenarios where performance is a concern.",
        scenarios: [
          "**Large datasets:** Its O(n²) time complexity makes it prohibitively slow for arrays with hundreds or thousands of elements.",
          "**Performance-critical applications:** Any scenario where sorting speed is important (e.g., database queries, real-time systems, large data processing).",
          "**General-purpose sorting:** Modern programming languages and libraries provide highly optimized sorting algorithms (like Timsort or IntroSort) that should almost always be preferred.",
        ],
      },
      benefits: [
        "Simple to understand and implement.",
        "Requires minimal additional memory (O(1) space complexity).",
        "Stable sorting algorithm.",
        "Adaptive: efficient for nearly sorted data (O(n) in best case).",
      ],
      cons: [
        "Poor time complexity (O(n²) in average and worst cases).",
        "Performs many element swaps.",
        "Inefficient for large datasets.",
      ],
    },
  },
  selectionSort: {
    name: "Selection Sort",
    description:
      "Selection Sort is an in-place comparison sorting algorithm. It divides the input list into two parts: a sorted sublist of items built up from left to right at the front (left end) of the list and an unsorted sublist of the remaining unsorted items. The algorithm proceeds by finding the smallest (or largest, depending on sorting order) element in the unsorted sublist, exchanging it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.",
    steps: [
      {
        step: 1,
        action: "For i from 0 to n-1 (where n is the array length):",
      },
      {
        step: 2,
        action: "Set min_idx = i.",
      },
      {
        step: 3,
        action: "For j from i+1 to n-1:",
      },
      {
        step: 4,
        action: "If array[j] < array[min_idx], set min_idx = j.",
      },
      {
        step: 5,
        action: "Swap array[i] and array[min_idx].",
      },
      {
        step: 6,
        action: "After all passes, the array is sorted in ascending order.",
      },
    ],
    options: {
      sortingOrder: {
        type: "enum",
        values: ["ascending", "descending"],
        description: "The order in which the array should be sorted.",
        defaultValue: "ascending",
      },
      customComparator: {
        type: "function",
        description:
          "A custom comparison function for defining a specific sorting logic.",
        defaultValue: null,
      },
    },
    Considerations: {
      whenToUse: {
        description:
          "Selection Sort is useful in niche scenarios where minimizing memory writes (swaps) is a primary concern, even at the cost of more comparisons.",
        scenarios: [
          "**Memory write-constrained environments:** In hardware environments where writing to memory is a very expensive operation (e.g., certain types of flash memory, EEPROM), Selection Sort's minimal swaps (at most n-1) can be an advantage.",
          "**Small datasets where simplicity is key:** Similar to Bubble Sort, for extremely small arrays, its simple implementation can be favorable if performance is not paramount.",
        ],
      },
      whenNotToUse: {
        description:
          "Avoid Selection Sort for most general-purpose sorting tasks.",
        scenarios: [
          "**Large datasets:** Its O(n²) time complexity makes it impractical for significant amounts of data.",
          "**Performance-critical applications:** It performs the same number of comparisons regardless of the input data, making it consistently slow.",
          "**When stability is required:** By default, it's not a stable sort, meaning the relative order of equal elements might change.",
        ],
      },
      benefits: [
        "Simple to understand and implement.",
        "Requires minimal additional memory (O(1) space complexity).",
        "Minimizes the number of swaps (at most n-1 swaps).",
      ],
      cons: [
        "Poor time complexity (O(n²) in all cases).",
        "Not adaptive; performance does not improve for partially sorted data.",
        "Generally not a stable sorting algorithm.",
      ],
    },
  },
  insertionSort: {
    name: "Insertion Sort",
    description:
      "Insertion Sort builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, insertion sort provides several advantages: simple implementation, efficient for (and performs well on) small data sets, and efficient for data sets that are already substantially sorted.",
    steps: [
      {
        step: 1,
        action: "For i from 1 to n-1 (where n is the array length):",
      },
      {
        step: 2,
        action: "Set key = array[i].",
      },
      {
        step: 3,
        action: "Set j = i - 1.",
      },
      {
        step: 4,
        action: "While j >= 0 and key < array[j]:",
      },
      {
        step: 5,
        action: "Set array[j+1] = array[j].",
      },
      {
        step: 6,
        action: "Decrement j.",
      },
      {
        step: 7,
        action: "Set array[j+1] = key.",
      },
      {
        step: 8,
        action: "After all passes, the array is sorted in ascending order.",
      },
    ],
    options: {
      sortingOrder: {
        type: "enum",
        values: ["ascending", "descending"],
        description: "The order in which the array should be sorted.",
        defaultValue: "ascending",
      },
      customComparator: {
        type: "function",
        description:
          "A custom comparison function for defining a specific sorting logic.",
        defaultValue: null,
      },
    },
    Considerations: {
      whenToUse: {
        description:
          "Insertion Sort is highly effective for small datasets and partially sorted arrays, often used as a component within hybrid sorting algorithms.",
        scenarios: [
          "**Small datasets:** For arrays with a few dozen elements (e.g., N < 50-100), Insertion Sort often outperforms more complex O(n log n) algorithms due to its low constant factor and overhead.",
          "**Nearly sorted data:** If the input array is almost sorted (e.g., only a few elements are out of place), Insertion Sort performs very efficiently (close to O(n)). This is common in real-world data.",
          "**As a component in hybrid sorting algorithms:** Many advanced sorting algorithms (like Timsort and IntroSort) use Insertion Sort for sorting small sub-arrays, leveraging its efficiency on small inputs.",
          "**Online sorting:** When elements are received one by one and need to be kept sorted (e.g., maintaining a sorted list of scores in a game as players finish).",
        ],
      },
      whenNotToUse: {
        description:
          "Avoid Insertion Sort for large, randomly ordered datasets.",
        scenarios: [
          "**Large, unsorted datasets:** Its O(n²) worst-case performance makes it unsuitable for large, randomly ordered arrays, as it will be significantly slower than O(n log n) algorithms.",
          "**When performance on general large data is critical:** For large-scale data processing where the input can be arbitrary, an algorithm like Merge Sort or Quick Sort is preferred.",
        ],
      },
      benefits: [
        "Simple to implement and understand.",
        "Efficient for small datasets and nearly sorted data (O(n) best case).",
        "In-place sorting (O(1) space complexity).",
        "Stable sorting algorithm.",
        "Online algorithm.",
      ],
      cons: [
        "Poor time complexity (O(n²) in average and worst cases) for large, unsorted datasets.",
        "Not parallelizable.",
      ],
    },
  },
  mergeSort: {
    name: "Merge Sort",
    description:
      "Merge Sort is an efficient, general-purpose, comparison-based sorting algorithm. Most implementations produce a stable sort, meaning that the order of equal elements is preserved. It is a divide-and-conquer algorithm. It recursively divides an array into two halves, sorts them, and then merges the sorted halves.",
    steps: [
      {
        step: 1,
        action:
          "If the array has 0 or 1 elements, it is already sorted (base case).",
      },
      {
        step: 2,
        action:
          "Divide the unsorted array into two sub-arrays, each about half the size.",
      },
      {
        step: 3,
        action: "Recursively sort each sub-array using Merge Sort.",
      },
      {
        step: 4,
        action:
          "Merge the two sorted sub-arrays back into a single sorted array.",
      },
    ],
    options: {
      sortingOrder: {
        type: "enum",
        values: ["ascending", "descending"],
        description: "The order in which the array should be sorted.",
        defaultValue: "ascending",
      },
      customComparator: {
        type: "function",
        description:
          "A custom comparison function for defining a specific sorting logic.",
        defaultValue: null,
      },
    },
    Considerations: {
      whenToUse: {
        description:
          "Merge Sort is an excellent choice when guaranteed O(n log n) performance, stability, and handling large datasets (even external) are critical.",
        scenarios: [
          "**Guaranteed performance (worst-case scenario):** When consistent O(n log n) performance is absolutely required, regardless of the input data (e.g., in mission-critical systems where predictable timing is essential).",
          "**Large datasets that don't fit in memory (external sorting):** Merge Sort's sequential access patterns make it ideal for sorting data stored on disk or other slow-access storage, as it minimizes random disk I/O.",
          "**When stability is crucial:** If the relative order of equal elements must be preserved (e.g., sorting a list of students by grade, and if grades are equal, maintaining their original input order), Merge Sort is a top choice.",
          "**Parallel and distributed sorting:** Its divide-and-conquer nature makes it easily parallelizable, fitting well into multi-core and distributed computing environments.",
          "**Sorting linked lists:** Merge Sort can sort linked lists efficiently without requiring extra space for array conversion, unlike Quick Sort or Heap Sort.",
        ],
      },
      whenNotToUse: {
        description:
          "Consider alternatives if auxiliary space is highly constrained or for very small arrays.",
        scenarios: [
          "**Extremely limited memory environments:** The O(n) auxiliary space requirement can be a limitation for devices with very little RAM.",
          "**Very small datasets:** For arrays with a handful of elements, the overhead of recursion and merging might make it slightly slower than simpler O(n²) algorithms like Insertion Sort.",
        ],
      },
      benefits: [
        "Guaranteed O(n log n) time complexity in all cases.",
        "Stable sorting algorithm.",
        "Well-suited for external sorting and linked lists.",
        "Easily parallelizable.",
      ],
      cons: [
        "Requires O(n) additional space.",
        "Slower for very small datasets due to overhead.",
        "More complex to implement.",
      ],
    },
  },
  quickSort: {
    name: "Quick Sort",
    description:
      "Quick Sort is an efficient, in-place, comparison-based sorting algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively. This can be done in-place, requiring small additional amounts of memory during the sort.",
    steps: [
      {
        step: 1,
        action: "Pick an element from the array, called a pivot.",
      },
      {
        step: 2,
        action:
          "Partitioning: Rearrange the array such that all elements less than the pivot come before the pivot, and all elements greater than the pivot come after it. Elements equal to the pivot can go into either sub-array.",
      },
      {
        step: 3,
        action:
          "Recursively apply the above steps to the sub-array of elements with smaller values and separately to the sub-array of elements with greater values.",
      },
    ],
    options: {
      sortingOrder: {
        type: "enum",
        values: ["ascending", "descending"],
        description: "The order in which the array should be sorted.",
        defaultValue: "ascending",
      },
      pivotSelectionStrategy: {
        type: "enum",
        values: ["first", "last", "middle", "random", "median-of-three"],
        description:
          "The strategy for selecting the pivot element. 'Median-of-three' helps mitigate worst-case scenarios.",
        defaultValue: "random",
      },
      customComparator: {
        type: "function",
        description:
          "A custom comparison function for defining a specific sorting logic.",
        defaultValue: null,
      },
    },
    Considerations: {
      whenToUse: {
        description:
          "Quick Sort is widely considered one of the fastest sorting algorithms in practice for general-purpose sorting of arrays.",
        scenarios: [
          "**General-purpose sorting (arrays):** It's the go-to algorithm for sorting arrays in many standard library implementations (e.g., `qsort` in C, `Arrays.sort()` for primitives in Java, part of Timsort in Python and Java for objects). Its average-case O(n log n) performance is excellent, and it has good cache efficiency.",
          "**In-memory sorting with large datasets:** When data fits into memory and space efficiency (O(log n) average auxiliary space) is important, Quick Sort is highly effective.",
          "**When average-case performance is paramount:** In scenarios where worst-case performance is acceptable if it's rare, and excellent average performance is desired.",
        ],
      },
      whenNotToUse: {
        description:
          "Be cautious with Quick Sort in situations where worst-case performance is unacceptable or stability is required.",
        scenarios: [
          "**When guaranteed O(n log n) worst-case performance is critical:** For applications where even rare O(n²) performance could be catastrophic (e.g., real-time operating systems), Merge Sort or Heap Sort are safer choices.",
          "**When stability is required:** Quick Sort is inherently not stable. If the relative order of equal elements must be preserved, use Merge Sort or a stable variant of Quick Sort (which typically sacrifices some performance or space efficiency).",
          "**Very small arrays:** For very small arrays, the overhead of recursion might make Insertion Sort faster (this is why hybrid sorts often switch to Insertion Sort for small partitions).",
        ],
      },
      benefits: [
        "Excellent average-case time complexity (O(n log n)).",
        "In-place sorting (O(log n) average auxiliary space).",
        "Good cache efficiency.",
        "Can be parallelized efficiently.",
      ],
      cons: [
        "Worst-case time complexity is O(n²) (though mitigated by good pivot strategies).",
        "Not a stable sorting algorithm by default.",
        "Performance depends on pivot selection.",
      ],
    },
  },
  heapSort: {
    name: "Heap Sort",
    description:
      "Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure. It is similar to selection sort where we first find the maximum element and place it at the end. We repeat the same process for the remaining elements.",
    steps: [
      {
        step: 1,
        action:
          "Build a max-heap (or min-heap) from the input data (heapify operation).",
      },
      {
        step: 2,
        action:
          "At this point, the largest (or smallest) item is stored at the root of the heap. Swap it with the last item of the heap.",
      },
      {
        step: 3,
        action:
          "Reduce the size of the heap by 1 (effectively removing the now-sorted element).",
      },
      {
        step: 4,
        action:
          "Heapify the root of the tree to restore the heap property for the remaining elements.",
      },
      {
        step: 5,
        action: "Repeat steps 2-4 until the size of the heap is 1.",
      },
    ],
    options: {
      sortingOrder: {
        type: "enum",
        values: ["ascending", "descending"],
        description: "The order in which the array should be sorted.",
        defaultValue: "ascending",
      },
      customComparator: {
        type: "function",
        description:
          "A custom comparison function for defining a specific sorting logic.",
        defaultValue: null,
      },
    },
    Considerations: {
      whenToUse: {
        description:
          "Heap Sort is a solid choice when guaranteed O(n log n) performance and minimal auxiliary space are paramount.",
        scenarios: [
          "**Guaranteed O(n log n) worst-case performance:** Similar to Merge Sort, Heap Sort provides consistent performance, making it suitable for critical applications where unpredictable performance spikes are unacceptable.",
          "**In-place sorting with large datasets:** It's an excellent choice when memory is limited, as it sorts in-place (O(1) auxiliary space), unlike Merge Sort.",
          "**When Quick Sort's worst-case is a concern:** If the input data might trigger Quick Sort's O(n²) worst-case performance, Heap Sort offers a robust alternative.",
          "**Priority Queues:** Although not strictly a sorting use case, the underlying heap data structure is fundamental for implementing efficient priority queues, which have numerous applications (e.g., shortest path algorithms, event simulators).",
        ],
      },
      whenNotToUse: {
        description:
          "Heap Sort might not be the fastest in practice due to poor cache performance and lack of stability.",
        scenarios: [
          "**When stability is required:** Heap Sort is not a stable sorting algorithm. If the relative order of equal elements must be preserved, consider Merge Sort.",
          "**When Quick Sort's average performance is acceptable:** While Heap Sort has a better worst-case, Quick Sort often performs faster on average due to better cache locality.",
          "**For very small arrays:** Like Merge Sort and Quick Sort, the overhead of building and maintaining the heap can make it slower than simpler algorithms for tiny datasets.",
        ],
      },
      benefits: [
        "Guaranteed O(n log n) time complexity in all cases.",
        "In-place sorting (O(1) auxiliary space).",
        "Does not suffer from Quick Sort's worst-case performance issues.",
        "Forms the basis for priority queue data structures.",
      ],
      cons: [
        "Generally not a stable sorting algorithm.",
        "Can be slower in practice than Quick Sort due to less optimal cache usage.",
        "Not adaptive; performance doesn't improve for partially sorted data.",
      ],
    },
  },
};
