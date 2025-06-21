export const recursionAlgorithms = {
  factorial: {
    name: "Factorial Calculation",
    description:
      "The factorial of a non-negative integer 'n', denoted by n!, is the product of all positive integers less than or equal to n. The recursive definition is n! = n * (n-1)!, with base cases 0! = 1 and 1! = 1. It elegantly demonstrates the concept of recursion.",
    steps: [
      {
        step: 1,
        action: "Define a recursive function `factorial(n)`.",
      },
      {
        step: 2,
        action: "Base Case: If `n` is 0 or 1, return 1.",
      },
      {
        step: 3,
        action: "Recursive Step: Else, return `n * factorial(n-1)`.",
      },
      {
        step: 4,
        action:
          "The function calls itself with a smaller input (`n-1`) until it reaches the base case, then unwinds the results.",
      },
    ],
    options: {
      nValue: {
        type: "number",
        description:
          "The non-negative integer for which to calculate the factorial.",
        min: 0,
        max: 15,
        defaultValue: 5,
      },
      showCallStack: {
        type: "boolean",
        description:
          "Visualize the function call stack (pushing and popping frames).",
        defaultValue: true,
      },
      highlightCurrentCall: {
        type: "boolean",
        description: "Highlight the active function call in the stack.",
        defaultValue: true,
      },
    },
    practicalApplicationsAndConsiderations: {
      whenToUse: {
        description:
          "Factorial is a simple example to teach recursion. Recursion is generally used when a problem can be broken down into identical smaller subproblems.",
        scenarios: [
          "**Teaching Recursion:** It's a perfect, simple example to illustrate base cases, recursive steps, and how the call stack works.",
          "**Mathematical Functions:** Any function defined recursively (e.g., Fibonacci, Ackermann function).",
          "**Tree and Graph Traversal:** Many tree (pre-order, in-order, post-order) and graph (DFS) traversals are naturally expressed recursively.",
        ],
      },
      whenNotToUse: {
        description:
          "For factorial specifically, an iterative solution is more efficient. More broadly, avoid recursion for problems where iterative solutions are simpler, more efficient, or stack overflow is a risk.",
        scenarios: [
          "**When an iterative solution is more efficient:** For factorial, an iterative loop is generally faster and consumes less memory (O(1) space vs. O(N) stack space).",
          "**For very large 'n' values:** Deep recursion can lead to 'Stack Overflow' errors due to excessive memory consumption on the call stack.",
          "**When performance is critical and iteration is straightforward:** The overhead of function calls in recursion can be higher than simple loops.",
        ],
      },
      benefits: [
        "Elegant and concise code for certain problems.",
        "Directly reflects mathematical definitions.",
        "Good for problems that naturally break down into smaller, self-similar instances.",
      ],
      cons: [
        "Can be less efficient than iterative solutions due to function call overhead.",
        "Risk of stack overflow for deep recursion.",
        "Can be harder to debug if not understood well.",
      ],
    },
  },
  towersOfHanoi: {
    name: "Towers of Hanoi",
    description:
      "The Towers of Hanoi is a mathematical puzzle with three pegs and a number of disks of different sizes, which can slide onto any peg. The puzzle starts with the disks in a neat stack in ascending order of size on one peg, the smallest at the top, thus making a conical shape. The objective is to move the entire stack to another peg, obeying three simple rules: 1) Only one disk can be moved at a time. 2) Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty peg. 3) No disk may be placed on top of a smaller disk.",
    steps: [
      {
        step: 1,
        action:
          "Define a recursive function `hanoi(n, source_peg, auxiliary_peg, destination_peg)`.",
      },
      {
        step: 2,
        action:
          "Base Case: If `n` is 1 (only one disk), move it directly from `source_peg` to `destination_peg`.",
      },
      {
        step: 3,
        action:
          "Recursive Step 1: Move `n-1` disks from `source_peg` to `auxiliary_peg` using `destination_peg` as auxiliary.",
      },
      {
        step: 4,
        action:
          "Move the `n`-th (largest) disk from `source_peg` to `destination_peg`.",
      },
      {
        step: 5,
        action:
          "Recursive Step 2: Move `n-1` disks from `auxiliary_peg` to `destination_peg` using `source_peg` as auxiliary.",
      },
    ],
    options: {
      numberOfDisks: {
        type: "number",
        description: "The number of disks to solve the puzzle with.",
        min: 1,
        max: 10,
        defaultValue: 3,
      },
      showMoves: {
        type: "boolean",
        description: "Animate each disk movement.",
        defaultValue: true,
      },
      showCallStack: {
        type: "boolean",
        description: "Visualize the recursive function call stack.",
        defaultValue: false,
      },
    },
    practicalApplicationsAndConsiderations: {
      whenToUse: {
        description:
          "Towers of Hanoi is a classic recursive puzzle. Recursion is powerful for problems that exhibit a self-similar structure.",
        scenarios: [
          "**Teaching Recursion and Divide & Conquer:** An excellent visual example to understand recursive problem-solving and how complex problems are broken down.",
          "**Algorithm Design:** Illustrates how a problem can be reduced to smaller instances of the same problem.",
        ],
      },
      whenNotToUse: {
        description:
          "The problem has exponential complexity, making it impractical for a large number of disks.",
        scenarios: [
          "**Large number of disks:** The number of moves required is $2^n - 1$. For even a moderately large number of disks (e.g., 20), the number of moves becomes astronomically high, making it computationally infeasible to simulate.",
          "**Performance-critical applications:** The inherent exponential time complexity limits its practical use for large inputs.",
        ],
      },
      benefits: [
        "Clear illustration of recursive thinking and divide-and-conquer strategy.",
        "Elegant solution for a classic puzzle.",
      ],
      cons: [
        "Exponential time complexity (O($2^n$)), making it impractical for large inputs.",
        "High number of moves required for even moderate disk counts.",
      ],
    },
  },
  nQueensProblem: {
    name: "N-Queens Problem (Backtracking)",
    description:
      "The N-Queens problem is the challenge of placing N non-attacking queens on an N×N chessboard. A queen can attack horizontally, vertically, and diagonally. The goal is to find all possible configurations or one valid configuration.",
    steps: [
      {
        step: 1,
        action:
          "Define a recursive function `solveNQueens(row)` that attempts to place a queen in the current `row`.",
      },
      {
        step: 2,
        action:
          "Base Case: If `row` equals N, a valid solution has been found. Record it.",
      },
      {
        step: 3,
        action: "Iterate through each `column` in the current `row`:",
      },
      {
        step: 4,
        action:
          "Check if placing a queen at `(row, column)` is safe (not attacked by existing queens).",
      },
      {
        step: 5,
        action:
          "If safe: Place the queen, mark positions as attacked, and recursively call `solveNQueens(row + 1)`.",
      },
      {
        step: 6,
        action:
          "Backtrack: After the recursive call returns, remove the queen from `(row, column)` and unmark attacked positions (to explore other possibilities).",
      },
      {
        step: 7,
        action:
          "If no safe position is found in the current row, the function returns, triggering backtracking in the previous row.",
      },
    ],
    options: {
      boardSize: {
        type: "number",
        description: "The size of the chessboard (N x N).",
        min: 4,
        max: 10,
        defaultValue: 4,
      },
      showAllSolutions: {
        type: "boolean",
        description: "Find and display all possible solutions.",
        defaultValue: true,
      },
      showBacktracking: {
        type: "boolean",
        description:
          "Animate the placement and removal of queens as backtracking occurs.",
        defaultValue: true,
      },
    },
    practicalApplicationsAndConsiderations: {
      whenToUse: {
        description:
          "The N-Queens problem is a canonical example of backtracking, useful for solving constraint satisfaction problems.",
        scenarios: [
          "**Constraint Satisfaction Problems (CSPs):** Solving puzzles like Sudoku, cryptarithmetic, or scheduling problems where items must be placed under specific rules.",
          "**Combinatorial Optimization:** Exploring permutations and combinations to find valid arrangements (e.g., finding all Hamiltonian cycles in a graph).",
          "**Automated Planning and Scheduling:** Generating possible sequences of actions or resource allocations that meet given constraints.",
        ],
      },
      whenNotToUse: {
        description:
          "Backtracking can be very slow for problems with a large search space and many constraints.",
        scenarios: [
          "**When exact solutions are not feasible for large N:** The time complexity is factorial (roughly O(N!)), making it impractical for N values much larger than 12-15.",
          "**When only an optimal solution (not all solutions) is needed for a very large search space:** Often, optimization algorithms (e.g., genetic algorithms, simulated annealing) or heuristics are used instead of exhaustive backtracking.",
          "**For problems that can be solved with polynomial-time algorithms:** Don't use backtracking if a more efficient algorithm exists.",
        ],
      },
      benefits: [
        "Finds all (or one) solutions for constraint satisfaction problems.",
        "Systematic exploration of the solution space.",
        "Clear demonstration of recursive backtracking.",
      ],
      cons: [
        "Exponential time complexity (roughly O(N!)), very slow for larger inputs.",
        "Can be complex to implement correctly, especially backtracking logic.",
        "Requires careful management of state and constraints.",
      ],
    },
  },
};
