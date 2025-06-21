export const treeAlgorithms = {
  bstOperations: {
    name: "Binary Search Tree (BST) Operations",
    description:
      "A Binary Search Tree (BST) is a node-based binary tree data structure where each node has at most two children. For each node, all elements in its left subtree are less than the node's value, and all elements in its right subtree are greater than the node's value. BST operations include insertion, deletion, and search.",
    steps: {
      insertion: [
        {
          step: 1,
          action: "Start at the root node.",
        },
        {
          step: 2,
          action: "If the tree is empty, the new node becomes the root.",
        },
        {
          step: 3,
          action: "Compare the new node's value with the current node's value.",
        },
        {
          step: 4,
          action:
            "If the new node's value is less, move to the left child. Else, move to the right child.",
        },
        {
          step: 5,
          action:
            "Repeat until an empty spot (null child) is found, then insert the new node there.",
        },
      ],
      search: [
        {
          step: 1,
          action: "Start at the root node.",
        },
        {
          step: 2,
          action:
            "If the tree is empty or the current node is null, the value is not found.",
        },
        {
          step: 3,
          action:
            "If the target value matches the current node's value, the value is found.",
        },
        {
          step: 4,
          action:
            "If the target value is less than the current node's value, move to the left child.",
        },
        {
          step: 5,
          action: "Else (target value is greater), move to the right child.",
        },
        {
          step: 6,
          action:
            "Repeat until the value is found or an empty spot is reached.",
        },
      ],
      deletion: [
        {
          step: 1,
          action: "Find the node to be deleted.",
        },
        {
          step: 2,
          action: "Case 1: Node has no children (leaf node): Simply remove it.",
        },
        {
          step: 3,
          action:
            "Case 2: Node has one child: Replace the node with its child.",
        },
        {
          step: 4,
          action:
            "Case 3: Node has two children: Find its in-order successor (smallest in right subtree) or predecessor (largest in left subtree). Replace the node's value with the successor/predecessor's value, then delete the successor/predecessor node (which will fall into Case 1 or 2).",
        },
      ],
    },
    options: {
      operationType: {
        type: "enum",
        values: ["insertion", "search", "deletion"],
        description: "Select the BST operation to visualize.",
        defaultValue: "insertion",
      },
      valueToOperate: {
        type: "number",
        description: "The numeric value to insert, search for, or delete.",
        defaultValue: 50,
      },
      showBalanceFactor: {
        type: "boolean",
        description:
          "For self-balancing trees (like AVL/Red-Black), show the balance factor or color of nodes.",
        defaultValue: false,
      },
    },
    practicalApplicationsAndConsiderations: {
      whenToUse: {
        description:
          "BSTs are efficient for dynamic sets of data where insertions, deletions, and searches are common, and data needs to be kept in sorted order.",
        scenarios: [
          "**Dictionaries/Symbol Tables:** Storing key-value pairs where keys need to be looked up efficiently and kept sorted.",
          "**Database Indexing:** Used to organize data for fast retrieval based on key values.",
          "**File Systems:** Organizing files and directories hierarchically.",
          "**Implementations of Sets and Maps:** Providing efficient add, remove, and contains operations.",
        ],
      },
      whenNotToUse: {
        description:
          "Vanilla BSTs can become unbalanced, leading to worst-case O(N) performance; consider balanced trees for guarantees.",
        scenarios: [
          "**When worst-case performance must be O(log N):** If data is inserted in a sorted or reverse-sorted order, a vanilla BST degenerates into a linked list, making operations O(N). Use self-balancing BSTs (AVL, Red-Black) instead.",
          "**For extremely large, static datasets where only searching is needed:** A sorted array with binary search might be simpler and cache-friendlier if no modifications are expected.",
          "**When order doesn't matter and only fast lookups are needed:** Hash tables might offer O(1) average time complexity for searches.",
        ],
      },
      benefits: [
        "Average-case time complexity of O(log N) for search, insert, and delete operations.",
        "Allows data to be kept in sorted order, enabling efficient range queries.",
        "Relatively simple to implement compared to self-balancing trees.",
      ],
      cons: [
        "Worst-case time complexity of O(N) if the tree becomes skewed (unbalanced).",
        "Requires careful implementation for deletion, especially with two children.",
        "Can be less cache-friendly than arrays due to scattered memory access.",
      ],
    },
  },
  treeTraversals: {
    name: "Tree Traversals",
    description:
      "Tree traversals are methods for visiting each node in a tree data structure exactly once. Common traversals include In-order, Pre-order, and Post-order for binary trees, and Breadth-First (Level-Order) traversal.",
    steps: {
      inorder: [
        {
          step: 1,
          action: "Recursively traverse the left subtree.",
        },
        {
          step: 2,
          action: "Visit the current node (process its data).",
        },
        {
          step: 3,
          action: "Recursively traverse the right subtree.",
        },
      ],
      preorder: [
        {
          step: 1,
          action: "Visit the current node (process its data).",
        },
        {
          step: 2,
          action: "Recursively traverse the left subtree.",
        },
        {
          step: 3,
          action: "Recursively traverse the right subtree.",
        },
      ],
      postorder: [
        {
          step: 1,
          action: "Recursively traverse the left subtree.",
        },
        {
          step: 2,
          action: "Recursively traverse the right subtree.",
        },
        {
          step: 3,
          action: "Visit the current node (process its data).",
        },
      ],
      "levelOrder (BFS)": [
        {
          step: 1,
          action:
            "Create a queue and enqueue the root node. Mark the root as visited (conceptually).",
        },
        {
          step: 2,
          action: "While the queue is not empty:",
        },
        {
          step: 3,
          action: "Dequeue a node.",
        },
        {
          step: 4,
          action: "Visit the dequeued node (process its data).",
        },
        {
          step: 5,
          action: "Enqueue its left child (if exists).",
        },
        {
          step: 6,
          action: "Enqueue its right child (if exists).",
        },
      ],
    },
    options: {
      traversalType: {
        type: "enum",
        values: ["inorder", "preorder", "postorder", "levelOrder (BFS)"],
        description: "Select the type of tree traversal to visualize.",
        defaultValue: "inorder",
      },
      showVisitedOrder: {
        type: "boolean",
        description: "Display the sequence of nodes as they are visited.",
        defaultValue: true,
      },
    },
    practicalApplicationsAndConsiderations: {
      whenToUse: {
        description:
          "Different tree traversals are used for specific purposes, such as generating sorted output, creating copies, or evaluating expressions.",
        scenarios: [
          `**In-order Traversal:**
  * **When to Use:** To get nodes in sorted order from a Binary Search Tree. Also used to create a sorted copy of the tree's elements.
  * **Example:** Displaying all files in a directory alphabetically if the directory structure is represented as a BST.`,
          `**Pre-order Traversal:**
  * **When to Use:** To create a prefix expression (Polish notation) of an expression tree. Used to make a copy of a tree or serialize a tree for storage.
  * **Example:** Exporting a tree structure to a file in a way that allows it to be perfectly reconstructed later.`,
          `**Post-order Traversal:**
  * **When to Use:** To create a postfix expression (Reverse Polish notation) of an expression tree. Used to delete a tree (delete children first, then parent to avoid dangling pointers).
  * **Example:** Calculating the total size of a directory by summing the sizes of all files within it (children sizes computed before parent).`,
          `**Level-order Traversal (BFS):**
  * **When to Use:** To visit nodes level by level. Useful for finding the shortest path in an unweighted tree or for visualizing tree layers.
  * **Example:** Printing a tree in a breadth-first manner, or analyzing network layers where connections form a tree-like structure.`,
        ],
      },
      whenNotToUse: {
        description:
          "Traversals are specific; choosing the wrong one won't give the desired output.",
        scenarios: [
          "**Using In-order for tree copying:** While it gets values in sorted order, it won't preserve the tree structure. Use pre-order for copying.",
          "**Using recursive traversals for extremely deep trees:** Can lead to stack overflow; iterative versions are safer for very deep trees.",
          "**Using DFS traversals for shortest path in unweighted trees:** BFS (Level-Order) is optimal for finding shortest paths in terms of edges.",
        ],
      },
      benefits: [
        "Provides systematic ways to visit every node.",
        "Each traversal type serves distinct purposes for data manipulation or output.",
        "Simple recursive implementations for In-order, Pre-order, Post-order.",
      ],
      cons: [
        "Recursive implementations can lead to stack overflow for very deep trees.",
        "Level-order requires a queue, consuming more memory than depth-first traversals in some cases.",
      ],
    },
  },
  avlTrees: {
    name: "AVL Trees (Self-Balancing BST)",
    description:
      "An AVL tree is a self-balancing binary search tree. It maintains a height balance factor (the difference between the heights of the left and right subtrees) for every node, which must be -1, 0, or 1. If an insertion or deletion causes the balance factor to deviate, the tree performs rotations to rebalance itself.",
    steps: [
      {
        step: 1,
        action: "Perform standard BST insertion/deletion.",
      },
      {
        step: 2,
        action:
          "After insertion/deletion, traverse back up the path from the inserted/deleted node to the root.",
      },
      {
        step: 3,
        action:
          "For each node on this path, update its height and calculate its balance factor.",
      },
      {
        step: 4,
        action:
          "If a node's balance factor becomes -2 or +2, perform rotations (LL, RR, LR, RL) to rebalance the subtree rooted at that node.",
      },
      {
        step: 5,
        action: "Continue rebalancing up to the root if necessary.",
      },
    ],
    options: {
      operationType: {
        type: "enum",
        values: ["insertion", "deletion"],
        description: "Select the AVL tree operation to visualize.",
        defaultValue: "insertion",
      },
      valueToOperate: {
        type: "number",
        description: "The numeric value to insert or delete.",
        defaultValue: 50,
      },
      showBalanceFactor: {
        type: "boolean",
        description: "Display the balance factor for each node.",
        defaultValue: true,
      },
      showRotations: {
        type: "boolean",
        description: "Animate and highlight rotations as they occur.",
        defaultValue: true,
      },
    },
    practicalApplicationsAndConsiderations: {
      whenToUse: {
        description:
          "AVL trees are chosen when strict balance and guaranteed O(log N) performance for all operations are critical, often in read-heavy scenarios.",
        scenarios: [
          "**Databases and Indexing Systems:** Where guaranteed logarithmic time complexity for search, insertion, and deletion is crucial for performance predictability.",
          "**High-performance dictionaries/sets:** When robust, fast operations are needed, and memory overhead is acceptable.",
          "**Systems requiring highly predictable performance:** Unlike QuickSort or vanilla BSTs, AVL trees guarantee O(log N) for all operations.",
          "**Read-heavy applications:** AVL trees tend to be more strictly balanced than Red-Black trees, leading to faster search times, though with more expensive updates (rotations).",
        ],
      },
      whenNotToUse: {
        description:
          "AVL trees have higher overhead for insertions/deletions and are more complex to implement than simpler BSTs.",
        scenarios: [
          "**When updates (insertions/deletions) are very frequent:** The strict balancing rules mean more rotations are performed, leading to higher constant factors for update operations compared to Red-Black trees.",
          "**Memory-constrained environments:** The storage of balance factors or height information adds a small overhead per node.",
          "**When implementation simplicity is preferred:** They are more complex to implement than vanilla BSTs.",
          "**When data is mostly static:** If few modifications are expected, a simple BST might suffice, or a hash table if sorted order isn't required.",
        ],
      },
      benefits: [
        "Guaranteed O(log N) time complexity for search, insertion, and deletion in all cases (due to strict balance).",
        "Faster lookups than Red-Black trees in practice due to being more strictly balanced.",
        "Good for applications requiring predictable performance.",
      ],
      cons: [
        "Higher constant factors for insertions and deletions compared to Red-Black trees (more rotations).",
        "More complex to implement than basic BSTs.",
        "Requires storing balance factor or height at each node, adding a small memory overhead.",
      ],
    },
  },
  redBlackTrees: {
    name: "Red-Black Trees (Self-Balancing BST)",
    description:
      "A Red-Black Tree is a self-balancing binary search tree that maintains balance by enforcing properties on the 'color' (red or black) of each node. These properties ensure that no path from the root to a leaf is more than twice as long as any other, guaranteeing O(log N) time complexity for operations.",
    steps: [
      {
        step: 1,
        action: "Perform standard BST insertion/deletion.",
      },
      {
        step: 2,
        action: "After insertion, new node is always colored RED.",
      },
      {
        step: 3,
        action:
          "Check Red-Black properties. If violated, perform rotations and recoloring to restore properties.",
      },
      {
        step: 4,
        action:
          "Deletion is more complex, often involving finding a successor/predecessor and then fixing violations.",
      },
    ],
    options: {
      operationType: {
        type: "enum",
        values: ["insertion", "deletion"],
        description: "Select the Red-Black tree operation to visualize.",
        defaultValue: "insertion",
      },
      valueToOperate: {
        type: "number",
        description: "The numeric value to insert or delete.",
        defaultValue: 50,
      },
      showNodeColors: {
        type: "boolean",
        description: "Display the 'red' or 'black' color of each node.",
        defaultValue: true,
      },
      showRotationsAndRecoloring: {
        type: "boolean",
        description:
          "Animate and highlight rotations and recoloring as they occur.",
        defaultValue: true,
      },
    },
    practicalApplicationsAndConsiderations: {
      whenToUse: {
        description:
          "Red-Black trees are widely used in practical applications where efficient search, insertion, and deletion are needed, and the number of updates might be higher than searches.",
        scenarios: [
          "**Standard Library Implementations:** Many language libraries use Red-Black trees for their `std::map`, `std::set` (C++), `TreeMap`, `TreeSet` (Java) due to their good balance of performance across all operations.",
          "**Operating System Schedulers:** Managing processes, where frequent additions and removals are common.",
          "**Databases and In-Memory Data Structures:** For indexing and managing data where modifications are frequent.",
          "**Computational Geometry:** Used in algorithms like line segment intersection.",
          "**Hybrid systems (e.g., File systems):** Some file systems use variations for efficient directory lookups.",
        ],
      },
      whenNotToUse: {
        description:
          "While versatile, they are more complex than vanilla BSTs and slightly less optimal for purely search-heavy workloads than AVL trees.",
        scenarios: [
          "**When strictly optimal search time is the only concern:** AVL trees are typically slightly more balanced, leading to marginally faster searches, though often negligible in practice.",
          "**For extremely simple, static data storage:** The overhead of balancing might not be worth it if data rarely changes and is small.",
          "**When implementation simplicity is paramount:** More complex to implement correctly than AVL trees, especially deletion.",
        ],
      },
      benefits: [
        "Guaranteed O(log N) time complexity for search, insertion, and deletion in all cases.",
        "Better amortized time complexity for insertions and deletions than AVL trees (fewer rotations on average).",
        "Good balance of performance for mixed workloads (search, insert, delete).",
        "Widely adopted in practical system implementations.",
      ],
      cons: [
        "More complex to implement correctly than AVL trees or basic BSTs.",
        "Slightly less strictly balanced than AVL trees, potentially leading to marginally slower searches.",
        "Debugging can be challenging due to complex rules.",
      ],
    },
  },
};
