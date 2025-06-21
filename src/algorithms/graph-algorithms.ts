export const graphAlgorithms = {
  bfs: {
    name: "Breadth-First Search (BFS)",
    description:
      "Breadth-First Search (BFS) is an algorithm for traversing or searching tree or graph data structures. It starts at the tree root (or some arbitrary node of a graph, sometimes referred to as a 'search key') and explores all of the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level.",
    steps: [
      {
        step: 1,
        action:
          "Create a queue and add the starting node to it. Mark the starting node as visited.",
      },
      {
        step: 2,
        action: "While the queue is not empty:",
      },
      {
        step: 3,
        action: "Dequeue a node (let's call it 'current_node').",
      },
      {
        step: 4,
        action:
          "Process 'current_node' (e.g., add to visited list, check if it's the target).",
      },
      {
        step: 5,
        action: "For each unvisited neighbor of 'current_node':",
      },
      {
        step: 6,
        action: "Mark the neighbor as visited and enqueue it.",
      },
    ],
    options: {
      startNode: {
        type: "node_id",
        description: "The starting node for the BFS traversal.",
        defaultValue: "random",
      },
      targetNode: {
        type: "node_id",
        description:
          "An optional target node to search for. If found, the algorithm can stop early.",
        defaultValue: null,
      },
      showTraversalOrder: {
        type: "boolean",
        description: "Visualize the order in which nodes are visited.",
        defaultValue: true,
      },
      trackPath: {
        type: "boolean",
        description:
          "Store the path from the start node to the target node if found.",
        defaultValue: false,
      },
      graphType: {
        type: "enum",
        values: ["undirected", "directed"],
        description:
          "Specifies whether the graph is undirected or directed, affecting neighbor traversal.",
        defaultValue: "undirected",
      },
    },
    Considerations: {
      whenToUse: {
        description:
          "BFS is ideal for finding the shortest path in an unweighted graph, exploring all nodes at a given depth, and network analysis.",
        scenarios: [
          "**Shortest Path in Unweighted Graphs:** Finding the minimum number of edges to get from a source node to a target node (e.g., 'six degrees of separation' in social networks, shortest unweighted path in a maze).",
          "**Web Crawlers:** Used by search engines to index web pages by exploring links level by level.",
          "**Network Broadcasting:** Sending a message to all reachable nodes in a network, ensuring all closer nodes receive it first.",
          "**Finding all nodes within a certain distance:** Useful in social network analysis or mapping applications.",
          "**Garbage Collection (Mark-and-Sweep):** Used in memory management to identify all reachable objects.",
        ],
      },
      whenNotToUse: {
        description:
          "BFS is less suitable for finding paths in weighted graphs or when memory is extremely constrained for deep graphs.",
        scenarios: [
          "**Shortest Path in Weighted Graphs:** For graphs with edge weights, Dijkstra's algorithm or A* search are more appropriate.",
          "**Deep Graphs with Many Nodes at Shallow Levels:** In very deep graphs with a high branching factor, BFS can consume significant memory due to storing many nodes in the queue at once.",
          "**Finding specific paths where 'depth' isn't the primary concern:** If you need a path that optimizes a different metric (e.g., least cost), BFS might not be suitable on its own.",
        ],
      },
      benefits: [
        "Guaranteed to find the shortest path in an unweighted graph.",
        "Complete: will always find a solution if one exists.",
        "Optimal for unweighted graphs.",
        "Systematic exploration of levels.",
      ],
      cons: [
        "Can require significant memory (O(V+E) in worst case for storing graph and queue).",
        "Can be slow for very deep or wide graphs.",
        "Not suitable for finding shortest paths in weighted graphs.",
      ],
    },
  },
  dfs: {
    name: "Depth-First Search (DFS)",
    description:
      "Depth-First Search (DFS) is an algorithm for traversing or searching tree or graph data structures. The algorithm starts at the root (or some arbitrary node) and explores as far as possible along each branch before backtracking.",
    steps: [
      {
        step: 1,
        action:
          "Create a stack (or use recursion) and add the starting node to it. Mark the starting node as visited.",
      },
      {
        step: 2,
        action: "While the stack is not empty:",
      },
      {
        step: 3,
        action: "Pop a node (let's call it 'current_node').",
      },
      {
        step: 4,
        action: "Process 'current_node'.",
      },
      {
        step: 5,
        action: "For each unvisited neighbor of 'current_node':",
      },
      {
        step: 6,
        action: "Mark the neighbor as visited and push it onto the stack.",
      },
    ],
    options: {
      startNode: {
        type: "node_id",
        description: "The starting node for the DFS traversal.",
        defaultValue: "random",
      },
      targetNode: {
        type: "node_id",
        description:
          "An optional target node to search for. If found, the algorithm can stop early.",
        defaultValue: null,
      },
      traversalMethod: {
        type: "enum",
        values: ["iterative (stack)", "recursive"],
        description:
          "Choose between an iterative (explicit stack) or recursive implementation.",
        defaultValue: "recursive",
      },
      showTraversalOrder: {
        type: "boolean",
        description: "Visualize the order in which nodes are visited.",
        defaultValue: true,
      },
      trackPath: {
        type: "boolean",
        description:
          "Store the path from the start node to the target node if found.",
        defaultValue: false,
      },
      graphType: {
        type: "enum",
        values: ["undirected", "directed"],
        description:
          "Specifies whether the graph is undirected or directed, affecting neighbor traversal.",
        defaultValue: "undirected",
      },
    },
    Considerations: {
      whenToUse: {
        description:
          "DFS is excellent for detecting cycles, topological sorting, connected components, and problems involving permutations and combinations (like solving mazes or puzzles).",
        scenarios: [
          "**Cycle Detection:** Used to detect cycles in a graph (important for directed acyclic graphs - DAGs).",
          "**Topological Sorting:** Ordering nodes in a directed acyclic graph based on dependencies (e.g., task scheduling, course prerequisites).",
          "**Finding Connected Components:** Identifying all reachable nodes from a given node in an undirected graph.",
          "**Solving Puzzles/Mazes:** Exploring all possible paths in a maze or finding a solution to a puzzle (e.g., N-Queens, Sudoku solver - often combined with backtracking).",
          "**Path Existence:** Checking if a path exists between two nodes (not necessarily the shortest).",
          "**Tree Traversal:** Often used for pre-order, in-order, and post-order traversals of trees.",
        ],
      },
      whenNotToUse: {
        description:
          "DFS is not suitable for finding the shortest path in unweighted graphs or when paths could be infinitely long.",
        scenarios: [
          "**Shortest Path (Unweighted):** BFS is preferred for finding the shortest path in unweighted graphs.",
          "**Very Deep Graphs (Recursive Overflow):** A purely recursive DFS on extremely deep graphs can lead to stack overflow errors, requiring an iterative implementation with an explicit stack.",
          "**Infinite Paths:** If the graph contains cycles and no mechanism to track visited nodes, a DFS might get stuck in an infinite loop.",
        ],
      },
      benefits: [
        "Memory efficient (O(V) for recursion stack or explicit stack in worst case, compared to BFS's O(V+E)).",
        "Can find a solution faster than BFS if the solution is deep in the graph.",
        "Naturally lends itself to recursive implementations.",
        "Useful for many graph problems beyond simple traversal.",
      ],
      cons: [
        "Does not guarantee the shortest path in unweighted graphs.",
        "Can get stuck in infinite loops in graphs with cycles if not carefully implemented (i.e., without tracking visited nodes).",
        "Recursive version can lead to stack overflow for very deep graphs.",
      ],
    },
  },
  dijkstrasAlgorithm: {
    name: "Dijkstra's Algorithm",
    description:
      "Dijkstra's algorithm is an algorithm for finding the shortest paths between nodes in a graph, which may have non-negative edge weights. It produces a shortest path tree with a given source node.",
    steps: [
      {
        step: 1,
        action:
          "Initialize distances: Set the distance to the source node as 0 and all other nodes as infinity. Initialize an empty set for visited nodes.",
      },
      {
        step: 2,
        action: "While there are unvisited nodes:",
      },
      {
        step: 3,
        action:
          "Select the unvisited node with the smallest current distance (greedy choice).",
      },
      {
        step: 4,
        action: "Mark the selected node as visited.",
      },
      {
        step: 5,
        action: "For each unvisited neighbor of the selected node:",
      },
      {
        step: 6,
        action:
          "Calculate the alternative distance: current_node_distance + edge_weight. If this is smaller than the neighbor's current distance, update the neighbor's distance and set the current node as its predecessor.",
      },
      {
        step: 7,
        action:
          "Once all nodes are visited or the target node is visited, the shortest paths are found.",
      },
    ],
    options: {
      startNode: {
        type: "node_id",
        description: "The starting node from which to find shortest paths.",
        defaultValue: "random",
      },
      targetNode: {
        type: "node_id",
        description:
          "An optional target node. The algorithm can stop once the shortest path to this node is found.",
        defaultValue: null,
      },
      showDistances: {
        type: "boolean",
        description: "Visualize the current shortest distance to each node.",
        defaultValue: true,
      },
      showPredecessors: {
        type: "boolean",
        description:
          "Visualize the predecessor pointers to reconstruct the shortest path.",
        defaultValue: true,
      },
      usePriorityQueue: {
        type: "boolean",
        description:
          "Use a priority queue for efficient selection of the next unvisited node (recommended for better performance).",
        defaultValue: true,
      },
    },
    Considerations: {
      whenToUse: {
        description:
          "Dijkstra's algorithm is the most common choice for finding the shortest paths in graphs with non-negative edge weights.",
        scenarios: [
          "**GPS and Mapping Applications:** Finding the shortest route between two locations on a map (roads often have 'weights' like time or distance).",
          "**Network Routing Protocols:** Determining the best path for data packets to travel across a network.",
          "**Finding Shortest Paths in Game Maps:** In video games, calculating the shortest path for AI characters to navigate a weighted map.",
          "**Traffic Flow Optimization:** Finding routes that minimize travel time in a city network.",
          "**Resource Allocation:** Optimizing resource delivery where edges represent costs or time.",
        ],
      },
      whenNotToUse: {
        description:
          "Dijkstra's algorithm fails with negative edge weights and can be slow for very dense graphs without a priority queue.",
        scenarios: [
          "**Graphs with Negative Edge Weights:** Dijkstra's algorithm cannot handle negative edge weights. For such graphs, algorithms like Bellman-Ford or SPFA are needed.",
          "**Finding all-pairs shortest paths:** For finding shortest paths between all pairs of nodes, algorithms like Floyd-Warshall are more efficient.",
          "**When memory is extremely constrained:** While not as memory-intensive as BFS in some scenarios, its data structures (distance array, predecessor array, priority queue) still require memory proportional to the number of vertices and edges.",
        ],
      },
      benefits: [
        "Finds the shortest path in graphs with non-negative edge weights.",
        "Guaranteed to be correct for its applicable graph types.",
        "Relatively efficient, especially with a priority queue (O(E log V) or O(E + V log V)).",
      ],
      cons: [
        "Cannot handle negative edge weights.",
        "Can be slower than BFS for unweighted graphs (BFS is O(V+E)).",
        "Requires more complex data structures (priority queue) for optimal performance.",
      ],
    },
  },
  primsAlgorithm: {
    name: "Prim's Algorithm",
    description:
      "Prim's algorithm is a greedy algorithm that finds a Minimum Spanning Tree (MST) for a weighted undirected graph. It starts from an arbitrary vertex and grows the MST by iteratively adding the cheapest edge that connects a vertex already in the MST to a vertex outside the MST.",
    steps: [
      {
        step: 1,
        action:
          "Initialize an empty MST set. Choose an arbitrary starting vertex and add it to the MST set.",
      },
      {
        step: 2,
        action:
          "Maintain a min-priority queue of all edges connecting vertices in the MST set to vertices outside the MST set.",
      },
      {
        step: 3,
        action: "While the MST set does not include all vertices:",
      },
      {
        step: 4,
        action:
          "Extract the edge with the minimum weight from the priority queue.",
      },
      {
        step: 5,
        action:
          "If the extracted edge connects a vertex in the MST set to a vertex outside it, add this edge and the new vertex to the MST set.",
      },
      {
        step: 6,
        action:
          "For all edges connected to the newly added vertex, if they connect to an unvisited vertex, add them to the priority queue.",
      },
    ],
    options: {
      startNode: {
        type: "node_id",
        description:
          "The arbitrary starting node for building the MST. The final MST is independent of this choice.",
        defaultValue: "random",
      },
      showEdgeWeights: {
        type: "boolean",
        description: "Display the weights of edges in the graph.",
        defaultValue: true,
      },
      highlightMST: {
        type: "boolean",
        description:
          "Highlight the edges that are part of the Minimum Spanning Tree.",
        defaultValue: true,
      },
    },
    Considerations: {
      whenToUse: {
        description:
          "Prim's algorithm is best suited for finding an MST in dense graphs or when you need to grow the MST from a specific starting point.",
        scenarios: [
          "**Network Design:** Designing a cost-effective network (e.g., fiber optic cables, power lines) that connects all points with the minimum total cable/line length.",
          "**Clustering:** Forming clusters of similar data points by connecting them with minimum 'distance' edges.",
          "**Circuit Design:** Finding the minimum amount of wire needed to connect a set of pins on a circuit board.",
          "**Image Segmentation:** Grouping pixels into regions based on intensity differences, where edges represent dissimilarity.",
          "**Dense Graphs:** Tends to perform better than Kruskal's on dense graphs (graphs with many edges relative to vertices) when implemented with a Fibonacci heap.",
        ],
      },
      whenNotToUse: {
        description:
          "Prim's algorithm is less efficient for very sparse graphs and requires connected graphs.",
        scenarios: [
          "**Disconnected Graphs:** Prim's algorithm will only find an MST for the connected component of the starting node. If the graph is disconnected, it won't find an MST for the entire graph.",
          "**Very Sparse Graphs:** For graphs with very few edges, Kruskal's algorithm often performs better because its efficiency depends more on the number of edges than vertices (when edges are sorted).",
          "**When MST is not required:** If you need shortest paths (e.g., for navigation), Dijkstra's or A* are more appropriate.",
        ],
      },
      benefits: [
        "Guaranteed to find a Minimum Spanning Tree for connected, weighted, undirected graphs.",
        "Efficient, especially for dense graphs when implemented with a priority queue (O(E log V) or O(E + V log V)).",
        "Can start from any arbitrary vertex.",
        "Builds the MST by continuously expanding from the current tree.",
      ],
      cons: [
        "Not suitable for directed graphs.",
        "Does not work on disconnected graphs (only finds MST for the connected component).",
        "Can be slightly less efficient than Kruskal's for very sparse graphs.",
      ],
    },
  },
  kruskalsAlgorithm: {
    name: "Kruskal's Algorithm",
    description:
      "Kruskal's algorithm is a greedy algorithm that finds a Minimum Spanning Tree (MST) for a weighted undirected graph. It builds the MST by adding edges in increasing order of weights, provided that adding an edge does not form a cycle.",
    steps: [
      {
        step: 1,
        action:
          "Create a list of all edges in the graph and sort them in non-decreasing order of their weights.",
      },
      {
        step: 2,
        action:
          "Initialize a Disjoint Set Union (DSU) data structure, where each vertex is in its own set.",
      },
      {
        step: 3,
        action: "Initialize an empty MST set.",
      },
      {
        step: 4,
        action: "For each edge (u, v) in the sorted list:",
      },
      {
        step: 5,
        action:
          "If u and v are not already in the same set (i.e., adding this edge would not form a cycle):",
      },
      {
        step: 6,
        action: "Add the edge (u, v) to the MST set.",
      },
      {
        step: 7,
        action: "Union the sets containing u and v (merge their components).",
      },
      {
        step: 8,
        action:
          "Repeat until |V|-1 edges are in the MST set or all edges are processed.",
      },
    ],
    options: {
      showEdgeWeights: {
        type: "boolean",
        description: "Display the weights of edges in the graph.",
        defaultValue: true,
      },
      highlightMST: {
        type: "boolean",
        description:
          "Highlight the edges that are part of the Minimum Spanning Tree.",
        defaultValue: true,
      },
      showDisjointSets: {
        type: "boolean",
        description:
          "Visualize the disjoint sets as they are merged during the algorithm.",
        defaultValue: false,
      },
    },
    Considerations: {
      whenToUse: {
        description:
          "Kruskal's algorithm is generally preferred for finding an MST in sparse graphs or when the graph may be disconnected.",
        scenarios: [
          "**Network Design:** Similar to Prim's, but often preferred for very large, sparse networks where sorting edges is more efficient than maintaining a priority queue over all vertices.",
          "**Finding MST in Disconnected Graphs:** Kruskal's can naturally find a Minimum Spanning Forest (a set of MSTs for each connected component) if the graph is disconnected, which Prim's cannot directly do in a single run.",
          "**Cluster Analysis:** Identifying natural groupings in data by finding the minimum spanning forest of a graph where nodes are data points and edges are distances.",
          "**Image Processing:** Used in some image processing tasks, like image segmentation, by considering pixels as vertices and edge weights as dissimilarities.",
        ],
      },
      whenNotToUse: {
        description:
          "Kruskal's algorithm can be less efficient for dense graphs due to the initial sorting step and Disjoint Set Union operations.",
        scenarios: [
          "**Very Dense Graphs:** The initial sorting of all edges (O(E log E)) can make it less efficient than Prim's for dense graphs where E is close to V².",
          "**When a specific starting point is required:** Unlike Prim's, Kruskal's does not naturally grow from a specific source vertex; it considers edges globally.",
          "**For directed graphs:** Like Prim's, it is designed for undirected graphs.",
        ],
      },
      benefits: [
        "Guaranteed to find a Minimum Spanning Tree for connected, weighted, undirected graphs.",
        "Naturally handles disconnected graphs by finding a Minimum Spanning Forest.",
        "Often simpler to understand conceptually than Prim's (sort edges, add if no cycle).",
        "Efficient for sparse graphs (O(E log E) or O(E log V) with efficient DSU).",
      ],
      cons: [
        "Not suitable for directed graphs.",
        "Requires sorting all edges initially.",
        "Relies on a Disjoint Set Union data structure, which can be complex to implement efficiently.",
      ],
    },
  },
  pageRank: {
    name: "PageRank Algorithm",
    description:
      "PageRank assigns a numerical weighting to each element (e.g., a web page) of a hyperlinked set of documents, with the purpose of 'ranking' them by importance. It operates on the principle that links from important pages are more valuable than links from less important pages.",
    steps: [
      {
        step: 1,
        action:
          "Initialize: Assign an initial PageRank value (e.g., 1/N for N pages) to all pages. A 'damping factor' (d, typically 0.85) is also set, representing the probability that a 'random surfer' will continue clicking links rather than jumping to a random page.",
      },
      {
        step: 2,
        action:
          "Iterate: Repeatedly update the PageRank of each page until the values converge (i.e., the change in PageRank between iterations becomes very small).",
      },
      {
        step: 3,
        action:
          "For each page P, its new PageRank is calculated based on the PageRank of pages 'T' that link to it: `PR(P) = (1-d) + d * Sum(PR(T)/C(T))` where `C(T)` is the number of outgoing links from page T.",
      },
      {
        step: 4,
        action:
          "Contribution: Each page `T` distributes its current PageRank evenly among its outgoing links. Page `P` receives a fraction of PageRank from each page `T` that links to it.",
      },
      {
        step: 5,
        action:
          "Random Jump: The `(1-d)` component accounts for a 'random surfer' who, at any step, jumps to a random page rather than following a link. This prevents 'dead ends' or 'rank sinks' from trapping PageRank.",
      },
      {
        step: 6,
        action:
          "Convergence: Stop when PageRank values stabilize across iterations, indicating a steady state of 'importance'.",
      },
    ],
    options: {
      numPages: {
        type: "number",
        description: "Number of web pages (nodes in the graph).",
        min: 5,
        max: 15,
        defaultValue: 8,
      },
      dampingFactor: {
        type: "number",
        description:
          "Probability of a 'random surfer' following a link (0.0 to 1.0).",
        min: 0.5,
        max: 0.95,
        step: 0.05,
        defaultValue: 0.85,
      },
      numIterations: {
        type: "number",
        description: "Number of iterations for PageRank calculation.",
        min: 5,
        max: 50,
        defaultValue: 20,
      },
      showPageRankValues: {
        type: "boolean",
        description:
          "Display the PageRank value for each page during iterations.",
        defaultValue: true,
      },
      highlightContributions: {
        type: "boolean",
        description: "Highlight the flow of PageRank from one page to another.",
        defaultValue: true,
      },
    },
    practicalApplicationsAndConsiderations: {
      whenToUse: {
        description:
          "PageRank is suitable for ranking nodes in a directed graph based on connectivity and importance.",
        scenarios: [
          "**Web Page Ranking:** The original and most famous application, to determine the authority and importance of web pages for search results.",
          "**Social Network Analysis:** Identifying influential users or central figures within a social network.",
          "**Citation Analysis:** Ranking the importance of scientific papers based on citations.",
          "**Recommendation Systems:** Ranking items or users in a graph-based recommendation system.",
          "**Network Centrality Measures:** Providing a measure of importance in various types of networks (e.g., biological networks, transportation networks).",
        ],
      },
      whenNotToUse: {
        description:
          "PageRank might not be ideal when the graph structure is irrelevant or when real-time, highly dynamic ranking is needed without iterative convergence.",
        scenarios: [
          "**Unconnected Graphs (without modification):** The basic algorithm assumes a connected graph where every page is reachable. Modifications are needed for disconnected components.",
          "**When Link Spam/Manipulation is Rife:** PageRank can be susceptible to link manipulation (e.g., link farms) if not combined with other sophisticated anti-spam measures.",
          "**When Real-time Updates are Required:** The iterative nature of PageRank means it's not ideal for highly dynamic graphs where rankings need to be recomputed constantly and instantly.",
          "**When a simple count of incoming links is sufficient:** For very basic importance measures, a simple in-degree count might suffice if the graph is small and quality of links is not a factor.",
        ],
      },
      benefits: [
        "Provides a robust, globally consistent measure of importance.",
        "Resistant to simple link spam due to the iterative nature and damping factor.",
        "Fundamental to understanding modern search engines.",
        "Adaptable to various network analysis problems beyond web pages.",
      ],
      cons: [
        "Computationally intensive for very large graphs (requires iterative matrix operations).",
        "Does not account for the *content* or *topic* of pages, only their link structure.",
        "Can be manipulated (though modern search engines use many other signals alongside PageRank).",
        "Rank dilution in very large graphs.",
      ],
    },
  },
};
