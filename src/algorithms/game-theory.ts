export const gameTheoryAISearch = {
  minimax: {
    name: "Minimax Algorithm",
    description:
      "Minimax is a decision rule used in artificial intelligence, decision theory, game theory, and statistics for minimizing the possible loss for a worst case (maximum loss) scenario. In zero-sum games (where one player's gain is another's loss), it models optimal play by assuming both players play optimally. It works by recursively exploring all possible moves up to a certain depth, assigning scores to terminal states, and propagating those scores back up the game tree.",
    steps: [
      {
        step: 1,
        action:
          "Define Terminal States: Identify game states where the game ends (e.g., win, loss, draw) and assign a numerical utility value (score) to each terminal state (e.g., +10 for a win, -10 for a loss, 0 for a draw).",
      },
      {
        step: 2,
        action:
          "Build Game Tree: Generate the game tree by recursively exploring all possible moves from the current state up to a specified 'search depth'.",
      },
      {
        step: 3,
        action:
          "Maximize for Player: For MAX nodes (player whose turn it is to move, trying to maximize their score), select the child node with the highest utility value propagated from below.",
      },
      {
        step: 4,
        action:
          "Minimize for Opponent: For MIN nodes (opponent's turn, trying to minimize player's score), select the child node with the lowest utility value propagated from below.",
      },
      {
        step: 5,
        action:
          "Propagate Scores: These utility values are 'backed up' the tree, from the terminal leaves up to the root.",
      },
      {
        step: 6,
        action:
          "Optimal Move: The optimal move for the current player is the one that leads to the child node with the best (maximized) propagated utility value at the root level.",
      },
    ],
    options: {
      gameType: {
        type: "enum",
        values: ["ticTacToe", "connectFourSimple"],
        description: "Choose a simple game for demonstration.",
        defaultValue: "ticTacToe",
      },
      searchDepth: {
        type: "number",
        description:
          "Maximum depth to search in the game tree (impacts complexity).",
        min: 1,
        max: 5,
        defaultValue: 3,
      },
      animationSpeed: {
        type: "number",
        description: "Speed of tree traversal and score propagation.",
        min: 0.5,
        max: 2,
        defaultValue: 1,
      },
      highlightCurrentNode: {
        type: "boolean",
        description: "Highlight the node being evaluated in the game tree.",
        defaultValue: true,
      },
      showUtilityPropagation: {
        type: "boolean",
        description:
          "Display utility values as they are propagated up the tree.",
        defaultValue: true,
      },
      autoPlayOpponent: {
        type: "boolean",
        description: "Automatically play the opponent's move using Minimax.",
        defaultValue: true,
      },
    },
    practicalApplicationsAndConsiderations: {
      whenToUse: {
        description:
          "Minimax is ideal for deterministic, perfect information, zero-sum games with a manageable search space.",
        scenarios: [
          "**Two-player, Zero-Sum Games:** Such as Tic-Tac-Toe, Chess (for limited depth), Checkers, Othello, Go (for small boards/early game).",
          "**Game AI:** Building AI opponents that play optimally or near-optimally.",
          "**Decision Making:** In scenarios where an optimal strategy needs to be found against an intelligent adversary.",
          "**Small Search Spaces:** When the game tree can be fully or deeply explored within reasonable time/memory limits.",
        ],
      },
      whenNotToUse: {
        description:
          "Minimax is not suitable for games with a large branching factor, high depth, imperfect information, or non-zero-sum outcomes.",
        scenarios: [
          "**Games with Large Search Spaces (e.g., Chess beyond shallow depth):** The number of possible game states explodes exponentially (state-space explosion), making full tree traversal impossible. Alpha-Beta Pruning (an optimization of Minimax) or Monte Carlo Tree Search are needed.",
          "**Imperfect Information Games (e.g., Poker, Bridge):** Where players don't have full knowledge of the game state (e.g., opponent's cards). More complex algorithms like game theory equilibrium solvers are needed.",
          "**Non-Zero-Sum Games:** Where players can both gain or both lose (e.g., cooperation games). Different game theory models apply.",
          "**Games with Randomness (e.g., Backgammon, Monopoly):** Minimax struggles with randomness; expectimax or Monte Carlo methods are more appropriate.",
        ],
      },
      benefits: [
        "Guarantees the optimal move for a player in deterministic, perfect-information games within the search depth.",
        "Provides a fundamental understanding of game-playing AI.",
        "Can be optimized with Alpha-Beta Pruning to significantly reduce the number of nodes evaluated.",
        "Relatively straightforward to implement for simple games.",
      ],
      cons: [
        "Suffers from state-space explosion; becomes computationally intractable for complex games.",
        "Requires the entire game tree (or a significant portion) to be built and traversed.",
        "Does not handle games with randomness or imperfect information directly.",
        "Can be inefficient without pruning techniques.",
      ],
    },
  },
  alphaBetaPruning: {
    name: "Alpha-Beta Pruning",
    description:
      "Alpha-Beta Pruning is an optimization technique for the Minimax algorithm. It cuts off branches in the search tree that cannot possibly influence the final decision, significantly improving efficiency. It maintains two values, alpha (the best value found so far for the maximizing player along the current path) and beta (the best value found so far for the minimizing player along the current path).",
    steps: [
      {
        step: 1,
        action:
          "Initialization: Start the Minimax search. For the root node, initialize `alpha = -infinity` and `beta = +infinity`.",
      },
      {
        step: 2,
        action:
          "Recursive Call: When traversing the game tree, pass the current `alpha` and `beta` values down to child nodes.",
      },
      {
        step: 3,
        action: "Maximizing Player (MAX node):",
      },
      {
        step: 3.1,
        action:
          "Iterate through children: For each child, recursively call the Minimax function (for MIN player) to get its value.",
      },
      {
        step: 3.2,
        action: "Update alpha: `alpha = max(alpha, child_value)`.",
      },
      {
        step: 3.3,
        action:
          "Pruning condition: If `alpha >= beta`, then stop evaluating remaining children. This branch can be 'pruned' because the minimizing player already has a better option elsewhere.",
      },
      {
        step: 4,
        action: "Minimizing Player (MIN node):",
      },
      {
        step: 4.1,
        action:
          "Iterate through children: For each child, recursively call the Minimax function (for MAX player) to get its value.",
      },
      {
        step: 4.2,
        action: "Update beta: `beta = min(beta, child_value)`.",
      },
      {
        step: 4.3,
        action:
          "Pruning condition: If `beta <= alpha`, then stop evaluating remaining children. This branch can be 'pruned' because the maximizing player already has a better option elsewhere.",
      },
      {
        step: 5,
        action:
          "Return Value: At each node, return the final `alpha` (for MAX) or `beta` (for MIN) value.",
      },
    ],
    options: {
      gameType: {
        type: "enum",
        values: ["ticTacToe", "smallGameTree"],
        description: "Choose a simple game or a custom small game tree.",
        defaultValue: "smallGameTree",
      },
      searchDepth: {
        type: "number",
        description: "Maximum depth to search in the game tree.",
        min: 2,
        max: 5,
        defaultValue: 3,
      },
      animationSpeed: {
        type: "number",
        description: "Speed of tree traversal and pruning visualization.",
        min: 0.5,
        max: 2,
        defaultValue: 1,
      },
      highlightPrunedBranches: {
        type: "boolean",
        description: "Clearly highlight branches that are pruned.",
        defaultValue: true,
      },
      showAlphaBetaValues: {
        type: "boolean",
        description: "Display current alpha and beta values at each node.",
        defaultValue: true,
      },
      showEvaluatedNodesOnly: {
        type: "boolean",
        description:
          "Only show nodes that were actually evaluated (hide pruned ones at the end).",
        defaultValue: false,
      },
    },
    practicalApplicationsAndConsiderations: {
      whenToUse: {
        description:
          "Alpha-Beta Pruning is crucial for improving the performance of Minimax in games with large search spaces.",
        scenarios: [
          "**Complex Two-player, Zero-Sum Games:** Essential for making AI playable in games like Chess, Checkers, Othello, Go (for specific openings/endings), by allowing deeper searches.",
          "**Game AI:** Standard technique for implementing AI opponents in turn-based strategy games.",
          "**Any Minimax Application:** Whenever you're using Minimax, Alpha-Beta Pruning should almost always be applied to optimize it.",
          "**Optimizing Search:** Applicable in any search problem that can be framed as a two-player, adversarial game.",
        ],
      },
      whenNotToUse: {
        description:
          "Alpha-Beta Pruning, like Minimax, is still not suited for games with imperfect information, randomness, or extremely large branching factors where even pruning isn't enough.",
        scenarios: [
          "**Games with Imperfect Information (e.g., Poker):** Does not handle hidden information. More advanced techniques are needed (e.g., imperfect-information game theory, counterfactual regret minimization).",
          "**Games with Randomness (e.g., Backgammon with dice rolls):** The pruning logic breaks down with probabilistic outcomes. Expectimax or Monte Carlo methods are more appropriate.",
          "**Games with Enormous Branching Factors where even Alpha-Beta is insufficient:** For games like full Go, even Alpha-Beta Pruning cannot explore deep enough within reasonable time. Monte Carlo Tree Search often performs better here.",
          "**Non-adversarial problems:** If the problem isn't a competitive two-player scenario, other search algorithms (e.g., A*, BFS, DFS) are more suitable.",
        ],
      },
      benefits: [
        "Significantly prunes the search tree, dramatically reducing computation time compared to plain Minimax (can reduce search space from O(b^d) to O(b^(d/2)) in best case, where b is branching factor, d is depth).",
        "Does not affect the final decision; it finds the exact same optimal move as Minimax.",
        "Relatively simple to implement as an extension of Minimax.",
        "Fundamental optimization in game-playing AI.",
      ],
      cons: [
        "Still exponential in time complexity, limiting the achievable search depth for very complex games.",
        "Performance is highly dependent on the order of evaluation of child nodes (requires good move ordering for optimal pruning).",
        "Not suitable for games with randomness or hidden information.",
        "Can be slightly more complex to debug than a pure Minimax implementation.",
      ],
    },
  },
};
