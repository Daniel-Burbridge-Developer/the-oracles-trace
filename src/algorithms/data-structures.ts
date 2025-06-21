export const dataStructureOperations = {
  stacks: {
    name: "Stacks (LIFO)",
    description:
      "A stack is a linear data structure that follows the Last-In, First-Out (LIFO) principle. Elements are added to the top (push) and removed from the top (pop).",
    steps: {
      push: [
        {
          step: 1,
          action:
            "Check if the stack is full. If so, indicate 'Stack Overflow'.",
        },
        {
          step: 2,
          action: "Increment the 'top' pointer (or index).",
        },
        {
          step: 3,
          action: "Place the new element at the 'top' position.",
        },
      ],
      pop: [
        {
          step: 1,
          action:
            "Check if the stack is empty. If so, indicate 'Stack Underflow'.",
        },
        {
          step: 2,
          action: "Retrieve the element at the 'top' position.",
        },
        {
          step: 3,
          action: "Decrement the 'top' pointer (or index).",
        },
        {
          step: 4,
          action: "Return the retrieved element.",
        },
      ],
      peek: [
        {
          step: 1,
          action: "Check if the stack is empty. If so, indicate 'Stack Empty'.",
        },
        {
          step: 2,
          action:
            "Retrieve the element at the 'top' position without removing it.",
        },
        {
          step: 3,
          action: "Return the retrieved element.",
        },
      ],
    },
    options: {
      operationType: {
        type: "enum",
        values: ["push", "pop", "peek"],
        description: "Select the stack operation to visualize.",
        defaultValue: "push",
      },
      valueToPush: {
        type: "number",
        description: "The value to push onto the stack.",
        defaultValue: 10,
      },
      stackCapacity: {
        type: "number",
        description:
          "Maximum capacity of the stack (for array-based implementations).",
        defaultValue: 5,
      },
    },
    practicalApplicationsAndConsiderations: {
      whenToUse: {
        description:
          "Stacks are used when the order of processing elements is strictly LIFO, often for managing function calls or parsing expressions.",
        scenarios: [
          "**Function Call Stack:** The most common use. When a function is called, its state is pushed onto the stack. When it returns, its state is popped.",
          "**Undo/Redo Functionality:** Storing operations in an editor; 'undo' pops the last operation.",
          "**Expression Evaluation:** Converting infix to postfix/prefix, and evaluating postfix/prefix expressions.",
          "**Backtracking Algorithms (DFS):** Managing paths in Depth-First Search (e.g., maze solving, finding paths in graphs).",
          "**Browser History:** 'Back' button uses a stack to navigate previously visited pages.",
        ],
      },
      whenNotToUse: {
        description:
          "Avoid stacks when FIFO order is needed or random access is a requirement.",
        scenarios: [
          "**When FIFO order is required:** Use a queue instead (e.g., print queue, task scheduling).",
          "**When random access to elements is needed:** Stacks only allow access to the top element.",
          "**For searching elements other than the top:** Iterating through a stack for search is inefficient.",
        ],
      },
      benefits: [
        "Simple to implement.",
        "Extremely fast O(1) time complexity for push, pop, and peek operations.",
        "Memory efficient.",
      ],
      cons: [
        "Limited functionality (only top element accessible).",
        "Can lead to stack overflow if not properly managed (for recursion or large data pushes).",
      ],
    },
  },
  queues: {
    name: "Queues (FIFO)",
    description:
      "A queue is a linear data structure that follows the First-In, First-Out (FIFO) principle. Elements are added to the rear (enqueue) and removed from the front (dequeue).",
    steps: {
      enqueue: [
        {
          step: 1,
          action:
            "Check if the queue is full. If so, indicate 'Queue Overflow'.",
        },
        {
          step: 2,
          action: "Place the new element at the 'rear' of the queue.",
        },
        {
          step: 3,
          action: "Increment the 'rear' pointer (or index).",
        },
      ],
      dequeue: [
        {
          step: 1,
          action:
            "Check if the queue is empty. If so, indicate 'Queue Underflow'.",
        },
        {
          step: 2,
          action: "Retrieve the element from the 'front' of the queue.",
        },
        {
          step: 3,
          action: "Increment the 'front' pointer (or index).",
        },
        {
          step: 4,
          action: "Return the retrieved element.",
        },
      ],
      peek: [
        {
          step: 1,
          action: "Check if the queue is empty. If so, indicate 'Queue Empty'.",
        },
        {
          step: 2,
          action:
            "Retrieve the element at the 'front' position without removing it.",
        },
        {
          step: 3,
          action: "Return the retrieved element.",
        },
      ],
    },
    options: {
      operationType: {
        type: "enum",
        values: ["enqueue", "dequeue", "peek"],
        description: "Select the queue operation to visualize.",
        defaultValue: "enqueue",
      },
      valueToEnqueue: {
        type: "number",
        description: "The value to enqueue onto the queue.",
        defaultValue: 20,
      },
      queueCapacity: {
        type: "number",
        description:
          "Maximum capacity of the queue (for array-based implementations).",
        defaultValue: 5,
      },
    },
    practicalApplicationsAndConsiderations: {
      whenToUse: {
        description:
          "Queues are essential for managing processes, tasks, or data in a strict FIFO order.",
        scenarios: [
          "**Operating System Schedulers:** Managing processes waiting for CPU time.",
          "**Print Spooling:** Documents waiting to be printed.",
          "**Buffering:** Handling data streams (e.g., in networking or multimedia) to smooth out varying data rates.",
          "**Breadth-First Search (BFS):** Used to explore nodes level by level in a graph or tree.",
          "**Web Servers:** Handling requests in the order they arrive.",
          "**Call Center Systems:** Managing incoming customer calls.",
        ],
      },
      whenNotToUse: {
        description:
          "Avoid queues when LIFO order is needed or random access is a requirement.",
        scenarios: [
          "**When LIFO order is required:** Use a stack instead (e.g., undo functionality).",
          "**When random access to elements is needed:** Queues only allow access to the front element.",
          "**For searching elements other than the front:** Iterating through a queue for search is inefficient.",
        ],
      },
      benefits: [
        "Simple to implement.",
        "Extremely fast O(1) time complexity for enqueue, dequeue, and peek operations.",
        "Ensures fair processing (FIFO order).",
      ],
      cons: [
        "Limited functionality (only front/rear elements accessible).",
        "Can be less memory efficient than circular arrays if not managed carefully (for array-based implementations).",
      ],
    },
  },
  linkedLists: {
    name: "Linked Lists (Singly & Doubly)",
    description:
      "A linked list is a linear data structure where elements are stored in nodes, and each node contains data and a reference (or 'pointer') to the next node in the sequence. Doubly linked lists also contain a reference to the previous node.",
    steps: {
      singly_insertionAtHead: [
        {
          step: 1,
          action: "Create a new node with the given data.",
        },
        {
          step: 2,
          action:
            "Set the `next` pointer of the new node to the current `head`.",
        },
        {
          step: 3,
          action: "Update the `head` of the list to point to the new node.",
        },
      ],
      singly_insertionAtTail: [
        {
          step: 1,
          action: "Create a new node with the given data.",
        },
        {
          step: 2,
          action: "If the list is empty, the new node becomes the `head`.",
        },
        {
          step: 3,
          action: "Else, traverse the list to find the last node.",
        },
        {
          step: 4,
          action: "Set the `next` pointer of the last node to the new node.",
        },
      ],
      singly_deletion: [
        {
          step: 1,
          action: "If deleting the `head` node, update `head` to `head.next`.",
        },
        {
          step: 2,
          action:
            "Else, traverse the list to find the node preceding the one to be deleted.",
        },
        {
          step: 3,
          action:
            "Update the `next` pointer of the preceding node to skip the node to be deleted.",
        },
      ],
    },
    options: {
      listType: {
        type: "enum",
        values: ["singly", "doubly"],
        description: "Choose between singly or doubly linked list operations.",
        defaultValue: "singly",
      },
      operationType: {
        type: "enum",
        values: [
          "insertionAtHead",
          "insertionAtTail",
          "deletion",
          "insertionAtPosition",
        ],
        description: "Select the linked list operation to visualize.",
        defaultValue: "insertionAtTail",
      },
      valueToOperate: {
        type: "number",
        description: "The value to insert or delete.",
        defaultValue: 15,
      },
      position: {
        type: "number",
        description:
          "For 'insertionAtPosition', the 0-indexed position to insert at.",
        defaultValue: 1,
      },
      showPointers: {
        type: "boolean",
        description: "Visualize the `next` and `prev` pointers between nodes.",
        defaultValue: true,
      },
    },
    practicalApplicationsAndConsiderations: {
      whenToUse: {
        description:
          "Linked lists are highly flexible for dynamic data, especially when frequent insertions/deletions occur at arbitrary positions.",
        scenarios: [
          "**Dynamic Memory Allocation:** Used in some operating systems for memory management where blocks of memory are linked.",
          "**Implementing Stacks and Queues:** Linked lists provide efficient O(1) enqueue/dequeue (at ends) and push/pop (at head) without fixed size limitations.",
          "**Image Viewers (Doubly Linked List):** Allowing navigation back and forth between images.",
          "**Music Playlists:** Songs can be easily added or removed, and you can jump to the next/previous song.",
          "**Browser History (Doubly Linked List):** Storing visited URLs to allow forward and backward navigation.",
        ],
      },
      whenNotToUse: {
        description:
          "Linked lists are inefficient for random access and can consume more memory per element than arrays.",
        scenarios: [
          "**When frequent random access is needed:** Accessing an element by index in a linked list requires traversing from the beginning (O(N)), unlike arrays (O(1)).",
          "**For cache efficiency:** Nodes are not necessarily contiguous in memory, leading to poorer cache performance compared to arrays.",
          "**When memory overhead per element is a concern:** Each node requires extra space for pointers, which can add up for many small elements.",
          "**When simple iteration is enough:** For iterating through all elements, arrays are often simpler and faster.",
        ],
      },
      benefits: [
        "Efficient insertion and deletion (O(1) if position is known, O(N) if searching).",
        "Dynamic size, no need to pre-allocate fixed memory.",
        "Can easily implement other data structures like stacks and queues.",
      ],
      cons: [
        "No direct random access (O(N) for access by index).",
        "Higher memory overhead per element due to pointers.",
        "Poorer cache performance compared to arrays.",
      ],
    },
  },
  hashTables: {
    name: "Hash Tables (Dictionaries/Hash Maps)",
    description:
      "A hash table (or hash map) is a data structure that maps keys to values using a hash function to compute an index into an array of buckets or slots, from which the desired value can be found. It provides average O(1) time complexity for insertion, deletion, and search.",
    steps: {
      insertion: [
        {
          step: 1,
          action:
            "Apply the hash function to the key to get a hash code (integer).",
        },
        {
          step: 2,
          action:
            "Use the hash code to determine the bucket index (e.g., `hash_code % array_size`).",
        },
        {
          step: 3,
          action:
            "Place the key-value pair into the bucket. If a collision occurs (another item hashes to the same bucket), handle it using a collision resolution strategy (e.g., chaining with linked lists or open addressing).",
        },
      ],
      search: [
        {
          step: 1,
          action: "Apply the hash function to the key to get a hash code.",
        },
        {
          step: 2,
          action: "Use the hash code to determine the bucket index.",
        },
        {
          step: 3,
          action:
            "Search within the identified bucket for the key. If using chaining, traverse the linked list. If using open addressing, probe for the key.",
        },
        {
          step: 4,
          action:
            "Return the associated value if found, or indicate not found.",
        },
      ],
      deletion: [
        {
          step: 1,
          action: "Apply the hash function to the key to get a hash code.",
        },
        {
          step: 2,
          action: "Use the hash code to determine the bucket index.",
        },
        {
          step: 3,
          action:
            "Locate the key-value pair within the bucket. Remove it and handle any implications of deletion (e.g., tombstone for open addressing).",
        },
      ],
    },
    options: {
      hashFunction: {
        type: "enum",
        values: ["modulo", "multiplication", "polynomial"],
        description: "The hash function to use for mapping keys to indices.",
        defaultValue: "modulo",
      },
      collisionResolution: {
        type: "enum",
        values: ["chaining", "linear_probing", "quadratic_probing"],
        description:
          "The strategy to handle collisions when multiple keys map to the same bucket.",
        defaultValue: "chaining",
      },
      tableSize: {
        type: "number",
        description:
          "The initial size of the hash table array (number of buckets).",
        defaultValue: 10,
      },
      operationType: {
        type: "enum",
        values: ["insertion", "search", "deletion"],
        description: "Select the hash table operation to visualize.",
        defaultValue: "insertion",
      },
      keyToOperate: {
        type: "string",
        description: "The key (e.g., a word) to insert, search for, or delete.",
        defaultValue: "apple",
      },
      valueToOperate: {
        type: "string",
        description: "The value associated with the key (for insertion).",
        defaultValue: "fruit",
      },
    },
    practicalApplicationsAndConsiderations: {
      whenToUse: {
        description:
          "Hash tables are ideal for fast lookups, insertions, and deletions when key-value mapping is needed.",
        scenarios: [
          "**Dictionaries/Maps:** Fundamental data structure for mapping unique keys to values (e.g., `HashMap` in Java, `dict` in Python, `Object` in JavaScript).",
          "**Database Indexing:** Used for quick access to records based on primary keys.",
          "**Caching:** Storing frequently accessed data for quick retrieval.",
          "**Symbol Tables in Compilers:** Storing identifiers and their properties.",
          "**Set Implementations:** Efficiently storing unique elements.",
          "**Network Routers:** Mapping IP addresses to physical ports.",
        ],
      },
      whenNotToUse: {
        description:
          "Avoid hash tables when ordered data is needed, or if worst-case performance is critical and collisions are frequent.",
        scenarios: [
          "**When data needs to be ordered or range queries are frequent:** Hash tables do not maintain sorted order. Use Binary Search Trees (or balanced variants) for such cases.",
          "**When worst-case O(N) performance is unacceptable:** In a worst-case scenario (many collisions due to a bad hash function or malicious input), operations can degenerate to O(N).",
          "**For very small, fixed datasets:** Simple arrays or lists might be more memory-efficient due to less overhead for hashing and collision resolution.",
          "**Cryptographic hashing:** While hash functions are involved, cryptographic hash functions (like SHA-256) are different in purpose and properties from those used in hash tables.",
        ],
      },
      benefits: [
        "Average-case O(1) time complexity for insertion, deletion, and search (with a good hash function).",
        "Highly efficient for mapping and lookup tasks.",
        "Flexible with key types (as long as they can be hashed).",
      ],
      cons: [
        "Worst-case O(N) time complexity (due to collisions).",
        "Space complexity can be higher due to empty buckets or collision resolution structures.",
        "Performance highly dependent on the quality of the hash function.",
        "No inherent ordering of elements.",
      ],
    },
  },
  heaps: {
    name: "Heaps (Min-Heap / Max-Heap)",
    description:
      "A heap is a specialized tree-based data structure that satisfies the heap property: for a Max-Heap, the value of each node is greater than or equal to the value of its children, and for a Min-Heap, the value of each node is less than or equal to the value of its children. Heaps are typically implemented using an array, making them a complete binary tree.",
    steps: {
      insertion: [
        {
          step: 1,
          action:
            "Insert the new element at the first available position (end of the array).",
        },
        {
          step: 2,
          action:
            "Perform 'heapify-up' (or 'bubble-up'): Compare the new element with its parent. If it violates the heap property (e.g., child > parent in a Max-Heap), swap them.",
        },
        {
          step: 3,
          action:
            "Repeat step 2 until the heap property is restored or the root is reached.",
        },
      ],
      deletion_root: [
        {
          step: 1,
          action: "Remove the root element (which is the max/min element).",
        },
        {
          step: 2,
          action:
            "Replace the root with the last element in the heap (last element in the array).",
        },
        {
          step: 3,
          action: "Decrement the size of the heap.",
        },
        {
          step: 4,
          action:
            "Perform 'heapify-down' (or 'bubble-down'): Compare the new root with its children. If it violates the heap property, swap it with its largest/smallest child.",
        },
        {
          step: 5,
          action:
            "Repeat step 4 until the heap property is restored or a leaf node is reached.",
        },
      ],
      build_heap: [
        {
          step: 1,
          action:
            "Start from the last non-leaf node (floor(N/2) - 1 for a 0-indexed array of N elements).",
        },
        {
          step: 2,
          action:
            "Perform 'heapify-down' operation on this node to ensure its subtree satisfies the heap property.",
        },
        {
          step: 3,
          action: "Move to the previous non-leaf node and repeat step 2.",
        },
        {
          step: 4,
          action:
            "Continue this process up to the root (index 0). After this, the entire array represents a valid heap.",
        },
      ],
    },
    options: {
      heapType: {
        type: "enum",
        values: ["max-heap", "min-heap"],
        description: "Choose to visualize a Max-Heap or a Min-Heap.",
        defaultValue: "max-heap",
      },
      operationType: {
        type: "enum",
        values: ["insertion", "deletion_root", "build_heap"],
        description: "Select the heap operation to visualize.",
        defaultValue: "insertion",
      },
      valueToOperate: {
        type: "number",
        description: "The value to insert.",
        defaultValue: 70,
      },
      initialArray: {
        type: "array_of_numbers",
        description:
          "The initial array to build a heap from (for 'build_heap' operation).",
        defaultValue: [1, 12, 9, 5, 6, 10],
      },
    },
    practicalApplicationsAndConsiderations: {
      whenToUse: {
        description:
          "Heaps are critical for priority queues and efficient selection of min/max elements, as well as the Heap Sort algorithm.",
        scenarios: [
          "**Priority Queues:** The most common application. Heaps are used to efficiently retrieve the element with the highest/lowest priority (e.g., in operating system process scheduling, event simulations, Dijkstra's algorithm, Prim's algorithm).",
          "**Heap Sort Algorithm:** Sorting an array (O(N log N) time complexity, O(1) space).",
          "**Finding K-th Largest/Smallest Element:** Efficiently finding the K largest or smallest elements in a stream or large dataset.",
          "**Median Finder:** Maintaining the median of a stream of numbers.",
          "**Graph Algorithms:** Optimizing greedy algorithms like Dijkstra's and Prim's (using a min-priority queue to select the next vertex/edge).",
        ],
      },
      whenNotToUse: {
        description:
          "Heaps are not ideal for general searching, random access, or when strict ordering (like in a BST) is needed beyond the min/max element.",
        scenarios: [
          "**For general searching (finding an arbitrary element):** Heaps are not designed for quick search of arbitrary elements (O(N) worst-case). Use a hash table or BST.",
          "**When random access to elements is needed:** Accessing elements by index (other than the root) in a way that respects the heap property is not direct.",
          "**When sorted iteration is needed (beyond min/max):** To get all elements in sorted order, you essentially perform Heap Sort, which is an O(N log N) operation, not O(1) per element like iterating a sorted array.",
          "**For maintaining a balanced tree for general dictionary operations:** While trees, they don't provide the same API and balance as BSTs for arbitrary element lookup.",
        ],
      },
      benefits: [
        "Efficient O(log N) time complexity for insertion and deletion (of root/max/min element).",
        "Building a heap from an array takes O(N) time.",
        "O(1) auxiliary space complexity when implemented as an array (in-place).",
        "Provides a continuous stream of min/max elements.",
      ],
      cons: [
        "Not suitable for quick search of arbitrary elements.",
        "No direct random access by index to maintain heap properties efficiently.",
        "Not a stable data structure (like other array-based structures, element order can change during heapify).",
      ],
    },
  },
};
