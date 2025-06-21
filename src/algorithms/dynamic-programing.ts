export const dynamicProgrammingAlgorithms = {
  fibonacci: {
    name: "Fibonacci Sequence (with Memoization/Tabulation)",
    description:
      "The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1. Dynamic Programming optimizes its computation by storing previously calculated values to avoid redundant calculations.",
    steps: {
      "memoization (top-down)": [
        {
          step: 1,
          action: "Define a function `fib(n)`.",
        },
        {
          step: 2,
          action:
            "Create a memoization table (e.g., an array or hash map) initialized with a sentinel value (e.g., -1 or null).",
        },
        {
          step: 3,
          action: "Base cases: If `n` is 0, return 0. If `n` is 1, return 1.",
        },
        {
          step: 4,
          action:
            "If `fib(n)` is already computed and stored in the memoization table, return the stored value.",
        },
        {
          step: 5,
          action:
            "Else, compute `fib(n) = fib(n-1) + fib(n-2)`. Store the result in the memoization table and return it.",
        },
      ],
      "tabulation (bottom-up)": [
        {
          step: 1,
          action: "Create a DP table (e.g., an array `dp`) of size `n+1`.",
        },
        {
          step: 2,
          action: "Base cases: `dp[0] = 0`, `dp[1] = 1`.",
        },
        {
          step: 3,
          action: "Iterate from `i = 2` up to `n`:",
        },
        {
          step: 4,
          action: "Compute `dp[i] = dp[i-1] + dp[i-2]`.",
        },
        {
          step: 5,
          action: "Return `dp[n]`.",
        },
      ],
    },
    options: {
      nValue: {
        type: "number",
        description:
          "The 'n' value for which to calculate the Fibonacci number.",
        min: 0,
        max: 50,
        defaultValue: 10,
      },
      approach: {
        type: "enum",
        values: ["memoization (top-down)", "tabulation (bottom-up)"],
        description: "Choose the DP approach.",
        defaultValue: "tabulation (bottom-up)",
      },
      showTable: {
        type: "boolean",
        description:
          "Visualize the DP table or memoization array being filled.",
        defaultValue: true,
      },
    },
    practicalApplicationsAndConsiderations: {
      whenToUse: {
        description:
          "Illustrates the core concept of DP for problems with overlapping subproblems.",
        scenarios: [
          "**Teaching Dynamic Programming:** It's the classic example to demonstrate the inefficiencies of pure recursion and how memoization/tabulation can optimize it from exponential to linear time.",
          "**Simple sequence generation:** For generating Fibonacci numbers or similar linear recurrence relations efficiently.",
        ],
      },
      whenNotToUse: {
        description:
          "For extremely large N, specialized matrix exponentiation might be needed.",
        scenarios: [
          "**Extremely large N:** While O(N) is efficient, for `N` values reaching billions, matrix exponentiation (O(log N)) is faster.",
          "**When constant space is critical for very large N:** The simple iterative approach can be optimized to O(1) space, but this specific visualization often shows the O(N) table.",
        ],
      },
      benefits: [
        "Transforms exponential time complexity of naive recursion to linear (O(N)).",
        "Clear demonstration of memoization (top-down) and tabulation (bottom-up) concepts.",
        "Easy to understand and implement.",
      ],
      cons: [
        "O(N) space complexity for storing intermediate results (can be optimized to O(1) for this specific problem).",
        "Not the most efficient for extremely large N (matrix exponentiation is O(log N)).",
      ],
    },
  },
  knapsack01: {
    name: "0/1 Knapsack Problem",
    description:
      "Given a set of items, each with a weight and a value, and a maximum weight capacity for a knapsack, determine the subset of items to include in the knapsack such that the total value is maximized and the total weight does not exceed the capacity. Each item can either be taken or not taken (0/1 decision).",
    steps: [
      {
        step: 1,
        action:
          "Create a 2D DP table, `dp[i][w]`, where `i` is the item index and `w` is the current weight capacity.",
      },
      {
        step: 2,
        action: "Initialize `dp[0][w] = 0` for all `w` (no items, no value).",
      },
      {
        step: 3,
        action: "For each item `i` from 1 to N (number of items):",
      },
      {
        step: 4,
        action: "For each weight `w` from 0 to W (max capacity):",
      },
      {
        step: 5,
        action:
          "If the weight of item `i` is greater than `w`, then `dp[i][w] = dp[i-1][w]` (cannot include item `i`).",
      },
      {
        step: 6,
        action:
          "Else (can include item `i`), `dp[i][w] = max(dp[i-1][w], value[i] + dp[i-1][w - weight[i]])` (choose max of not taking vs. taking item `i`).",
      },
      {
        step: 7,
        action: "The maximum value is `dp[N][W]`.",
      },
    ],
    options: {
      items: {
        type: "array_of_objects",
        description: "List of items, each with 'weight' and 'value'.",
        defaultValue: [
          { weight: 2, value: 10 },
          { weight: 3, value: 15 },
          { weight: 5, value: 20 },
        ],
      },
      capacity: {
        type: "number",
        description: "Maximum weight capacity of the knapsack.",
        defaultValue: 8,
      },
      showDPTable: {
        type: "boolean",
        description: "Visualize the filling of the 2D DP table.",
        defaultValue: true,
      },
      highlightOptimalPath: {
        type: "boolean",
        description:
          "After computation, highlight the cells that lead to the optimal solution (which items are taken).",
        defaultValue: false,
      },
    },
    practicalApplicationsAndConsiderations: {
      whenToUse: {
        description:
          "The 0/1 Knapsack problem is a classic optimization problem with applications in resource allocation and selection.",
        scenarios: [
          "**Resource Allocation:** Maximizing profit given limited resources (e.g., budget, time, space), where each task/project has a cost and benefit, and you can either do it or not.",
          "**Investment Optimization:** Choosing a subset of investments to maximize returns within a fixed budget.",
          "**Cargo Loading:** Selecting items to load onto a ship or plane to maximize value without exceeding weight/volume limits.",
          "**Cutting Stock Problem:** Optimizing how to cut larger pieces of material into smaller required pieces to minimize waste.",
        ],
      },
      whenNotToUse: {
        description:
          "The Knapsack problem becomes computationally intensive with very large weights/capacities or if items can be taken fractionally.",
        scenarios: [
          "**Fractional Knapsack Problem:** If items can be taken partially (e.g., taking half of an item), a greedy approach (take items with highest value/weight ratio) is simpler and more efficient.",
          "**Very large capacities:** The DP approach has a time complexity dependent on the capacity (O(N*W)), so if `W` is extremely large, other approaches (e.g., branch and bound, approximation algorithms) might be necessary.",
          "**Unbounded Knapsack:** If items can be taken multiple times, the DP recurrence relation changes (unbounded knapsack).",
        ],
      },
      benefits: [
        "Provides an exact optimal solution for the 0/1 Knapsack problem.",
        "Clear demonstration of DP table filling.",
        "Solves a wide range of real-world optimization problems.",
      ],
      cons: [
        "Time complexity is O(N*W), which can be large if `W` (capacity) is very high.",
        "Space complexity is O(N*W) (can be optimized to O(W)).",
      ],
    },
  },
  longestCommonSubsequence: {
    name: "Longest Common Subsequence (LCS)",
    description:
      "Given two sequences, find the length of the longest subsequence common to both. A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.",
    steps: [
      {
        step: 1,
        action:
          "Create a 2D DP table, `dp[i][j]`, where `dp[i][j]` stores the length of the LCS of `text1[0...i-1]` and `text2[0...j-1]`.",
      },
      {
        step: 2,
        action:
          "Initialize `dp[0][j] = 0` and `dp[i][0] = 0` (empty strings have LCS length 0).",
      },
      {
        step: 3,
        action: "For `i` from 1 to `length(text1)`:",
      },
      {
        step: 4,
        action: "For `j` from 1 to `length(text2)`:",
      },
      {
        step: 5,
        action:
          "If `text1[i-1]` == `text2[j-1]` (characters match): `dp[i][j] = 1 + dp[i-1][j-1]`.",
      },
      {
        step: 6,
        action:
          "Else (characters don't match): `dp[i][j] = max(dp[i-1][j], dp[i][j-1])`.",
      },
      {
        step: 7,
        action: "The length of the LCS is `dp[length(text1)][length(text2)]`.",
      },
      {
        step: 8,
        action:
          "To reconstruct the subsequence, backtrack from `dp[length(text1)][length(text2)]`.",
      },
    ],
    options: {
      string1: {
        type: "string",
        description: "The first input string.",
        defaultValue: "AGGTAB",
      },
      string2: {
        type: "string",
        description: "The second input string.",
        defaultValue: "GXTXAYB",
      },
      showDPTable: {
        type: "boolean",
        description: "Visualize the filling of the 2D DP table.",
        defaultValue: true,
      },
      showLCSReconstruction: {
        type: "boolean",
        description: "Animate the backtracking process to show the actual LCS.",
        defaultValue: true,
      },
    },
    practicalApplicationsAndConsiderations: {
      whenToUse: {
        description:
          "LCS is a versatile algorithm for comparing sequences and finding commonalities, particularly in bioinformatics and version control.",
        scenarios: [
          "**Bioinformatics:** Comparing DNA or protein sequences to find similarities and evolutionary relationships.",
          "**Diff Utilities:** Identifying differences between two versions of a file (e.g., `diff` command in Unix) by finding the longest common parts and then highlighting the changes.",
          "**Plagiarism Detection:** Finding commonalities between two text documents.",
          "**Version Control Systems:** Optimizing storage by only storing the differences between file versions (delta encoding).",
        ],
      },
      whenNotToUse: {
        description:
          "LCS is not suitable for finding exact substrings or when sequences are extremely long.",
        scenarios: [
          "**Finding Longest Common Substring:** LCS finds a subsequence (elements can be non-contiguous), not a contiguous substring. For substrings, different algorithms are needed.",
          "**Extremely long sequences:** The O(MN) time and space complexity means it can be slow and memory-intensive for very long strings. More optimized algorithms or heuristics might be required for genomic sequences.",
        ],
      },
      benefits: [
        "Provides the exact length of the longest common subsequence.",
        "Can be extended to reconstruct the subsequence itself.",
        "Widely applicable in sequence comparison problems.",
      ],
      cons: [
        "Time complexity O(MN) and space complexity O(MN) (where M and N are lengths of strings).",
        "Not suitable for finding contiguous common substrings.",
      ],
    },
  },
  editDistance: {
    name: "Edit Distance (Levenshtein Distance)",
    description:
      "Edit distance (specifically Levenshtein distance) measures the minimum number of single-character edits (insertions, deletions, or substitutions) required to change one word into the other. It's a fundamental measure of string similarity.",
    steps: [
      {
        step: 1,
        action:
          "Create a 2D DP table, `dp[i][j]`, where `dp[i][j]` is the edit distance between `word1[0...i-1]` and `word2[0...j-1]`.",
      },
      {
        step: 2,
        action:
          "Initialize base cases: `dp[i][0] = i` (to transform string1 prefix to empty) and `dp[0][j] = j` (to transform empty to string2 prefix).",
      },
      {
        step: 3,
        action: "For `i` from 1 to `length(word1)`:",
      },
      {
        step: 4,
        action: "For `j` from 1 to `length(word2)`:",
      },
      {
        step: 5,
        action:
          "If `word1[i-1]` == `word2[j-1]` (characters match): `cost = 0`. Else: `cost = 1`.",
      },
      {
        step: 6,
        action:
          "Compute `dp[i][j] = min(dp[i-1][j] + 1 (deletion), dp[i][j-1] + 1 (insertion), dp[i-1][j-1] + cost (substitution/match))`.",
      },
      {
        step: 7,
        action: "The edit distance is `dp[length(word1)][length(word2)]`.",
      },
    ],
    options: {
      word1: {
        type: "string",
        description: "The first input word.",
        defaultValue: "kitten",
      },
      word2: {
        type: "string",
        description: "The second input word.",
        defaultValue: "sitting",
      },
      showDPTable: {
        type: "boolean",
        description: "Visualize the filling of the 2D DP table.",
        defaultValue: true,
      },
    },
    practicalApplicationsAndConsiderations: {
      whenToUse: {
        description:
          "Edit distance is fundamental for measuring string similarity and plays a crucial role in spell checking and natural language processing.",
        scenarios: [
          "**Spell Checkers and Autocorrection:** Suggesting correct spellings for misspelled words by finding words in a dictionary with a small edit distance.",
          "**DNA Sequence Comparison:** Measuring the 'distance' or evolutionary divergence between two DNA sequences.",
          "**Plagiarism Detection:** Quantifying the similarity between two texts.",
          "**Natural Language Processing (NLP):** Used in various tasks like machine translation evaluation, speech recognition, and information retrieval.",
          "**Approximate String Matching:** Finding occurrences of a pattern in text with a certain number of allowed errors.",
        ],
      },
      whenNotToUse: {
        description:
          "While versatile, it's not ideal for very long strings or when different edit costs are required.",
        scenarios: [
          "**Extremely long strings:** The O(MN) time and space complexity can be prohibitive for very long texts. More advanced string matching algorithms or approximate matching techniques might be needed.",
          "**When different costs for operations are needed:** The standard Levenshtein distance assumes uniform cost for insertion, deletion, and substitution. Other edit distance variants (e.g., Damerau-Levenshtein for transpositions) exist for different cost models.",
        ],
      },
      benefits: [
        "Provides a quantitative measure of string similarity.",
        "Widely applicable in fields like NLP and bioinformatics.",
        "Relatively straightforward DP formulation.",
      ],
      cons: [
        "Time complexity O(MN) and space complexity O(MN).",
        "Assumes uniform costs for edit operations.",
      ],
    },
  },
  coinChange: {
    name: "Coin Change Problem (Minimum Coins)",
    description:
      "Given a set of coin denominations and a target amount, find the minimum number of coins needed to make up that amount. This is a classic dynamic programming problem with two common variations: finding the minimum number of coins, or finding the total number of ways to make change.",
    steps: [
      {
        step: 1,
        action:
          "Create a 1D DP array, `dp[amount]`, initialized with infinity (or a very large number), except `dp[0] = 0` (0 coins for amount 0).",
      },
      {
        step: 2,
        action: "For each `i` from 1 to `targetAmount`:",
      },
      {
        step: 3,
        action: "For each `coin` in the given `coins` denominations:",
      },
      {
        step: 4,
        action: "If `i - coin >= 0` (current coin can be used):",
      },
      {
        step: 5,
        action: "`dp[i] = min(dp[i], 1 + dp[i - coin])`.",
      },
      {
        step: 6,
        action:
          "The minimum number of coins is `dp[targetAmount]` (or infinity if not possible).",
      },
    ],
    options: {
      coins: {
        type: "array_of_numbers",
        description: "Available coin denominations.",
        defaultValue: [1, 2, 5],
      },
      targetAmount: {
        type: "number",
        description: "The target amount to make change for.",
        defaultValue: 11,
      },
      problemType: {
        type: "enum",
        values: ["minimum coins", "number of ways"],
        description:
          "Choose to find the minimum number of coins or the total number of ways to make change.",
        defaultValue: "minimum coins",
      },
      showDPTable: {
        type: "boolean",
        description: "Visualize the filling of the 1D DP table.",
        defaultValue: true,
      },
    },
    practicalApplicationsAndConsiderations: {
      whenToUse: {
        description:
          "The Coin Change problem is a fundamental DP problem for resource optimization with discrete units.",
        scenarios: [
          "**Cash Registers/ATMs:** Optimizing the number of coins/bills dispensed.",
          "**Inventory Management:** Minimizing the number of stock items needed to fulfill orders.",
          "**Cutting Stock Problem (variation):** Optimizing how to cut pieces from a stock of material.",
          "**Scheduling Problems:** Minimizing resources (e.g., machines, time slots) to complete a set of tasks.",
        ],
      },
      whenNotToUse: {
        description:
          "The DP approach assumes an unlimited supply of each coin and may be slow for extremely large amounts or many denominations.",
        scenarios: [
          "**When only a limited number of each coin is available:** Requires a slightly modified DP approach or different algorithms (e.g., 0/1 knapsack if each coin is unique).",
          "**Greedy approach is sufficient (specific coin sets):** For some specific coin systems (e.g., US currency), a greedy approach (always pick the largest possible coin) works, but this is not true for all coin sets (e.g., coins: {1, 3, 4}, target: 6; greedy gives 4+1+1=3 coins, optimal is 3+3=2 coins). The DP solution is general.",
          "**Extremely large target amounts:** The O(amount * num_coins) complexity can be too slow for very large amounts.",
        ],
      },
      benefits: [
        "Provides the optimal solution (minimum coins/number of ways) for any valid set of coin denominations and amount.",
        "Illustrates bottom-up dynamic programming.",
        "Solves a common optimization problem.",
      ],
      cons: [
        "Time complexity O(amount * num_coins).",
        "Space complexity O(amount).",
      ],
    },
  },
};
