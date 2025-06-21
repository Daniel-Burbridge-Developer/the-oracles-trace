export const stringAlgorithms = {
  kmpStringMatching: {
    name: "Knuth-Morris-Pratt (KMP) String Matching",
    description:
      "The KMP algorithm is an efficient string-searching algorithm that finds occurrences of a 'pattern' within a 'text' by avoiding re-examining characters of the text that have already been matched. It preprocesses the pattern to build a 'Longest Proper Prefix which is also Suffix' (LPS) array, which guides the shifts of the pattern.",
    steps: {
      build_lps_array: [
        {
          step: 1,
          action:
            "Create an LPS array (also known as 'failure function' or 'pi table') of the same length as the pattern, initialized with zeros.",
        },
        {
          step: 2,
          action: "Iterate through the pattern from the second character.",
        },
        {
          step: 3,
          action:
            "If `pattern[i]` matches `pattern[length_of_previous_lps_value]`, increment `lps[i]` and `length_of_previous_lps_value`.",
        },
        {
          step: 4,
          action:
            "If they don't match, and `length_of_previous_lps_value` is not 0, set `length_of_previous_lps_value` to `lps[length_of_previous_lps_value - 1]` (backtrack). Else, set `lps[i] = 0`.",
        },
      ],
      search: [
        {
          step: 1,
          action:
            "Initialize two pointers: `i` for text (0) and `j` for pattern (0).",
        },
        {
          step: 2,
          action: "While `i < length(text)`:",
        },
        {
          step: 3,
          action:
            "If `pattern[j]` matches `text[i]`, increment both `i` and `j`.",
        },
        {
          step: 4,
          action:
            "If `j` reaches `length(pattern)` (match found), record the match, then set `j = lps[j-1]` to continue searching.",
        },
        {
          step: 5,
          action:
            "Else (mismatch): If `j != 0`, set `j = lps[j-1]` (shift pattern). Else, increment `i`.",
        },
      ],
    },
    options: {
      text: {
        type: "string",
        description: "The main text to search within.",
        defaultValue: "ABABDABACDABABCABAB",
      },
      pattern: {
        type: "string",
        description: "The pattern string to search for.",
        defaultValue: "ABABCABAB",
      },
      showLPSBuilding: {
        type: "boolean",
        description: "Visualize the process of building the LPS array.",
        defaultValue: true,
      },
      highlightMatches: {
        type: "boolean",
        description: "Highlight the matched occurrences in the text.",
        defaultValue: true,
      },
    },
    practicalApplicationsAndConsiderations: {
      whenToUse: {
        description:
          "KMP is highly efficient for single pattern matching, especially when patterns are long or repeat frequently within the text.",
        scenarios: [
          "**Text Editors:** Finding all occurrences of a word or phrase in a document.",
          "**Bioinformatics:** Searching for specific DNA or protein sequences within longer genetic codes.",
          "**Intrusion Detection Systems:** Identifying malicious patterns in network traffic.",
          "**Plagiarism Detection (as a component):** Part of systems that find exact matches of phrases.",
          "**When performance is critical for single pattern search:** KMP guarantees linear time complexity O(N+M) in all cases, unlike naive string matching (O(NM)) or even Boyer-Moore in its worst case.",
        ],
      },
      whenNotToUse: {
        description:
          "KMP has overhead for pattern preprocessing and is not designed for multiple patterns or approximate matching.",
        scenarios: [
          "**When searching for multiple patterns simultaneously:** Aho-Corasick algorithm is more efficient for this.",
          "**When approximate string matching is needed:** KMP finds exact matches. For matches with errors, Levenshtein distance or other fuzzy matching algorithms are needed.",
          "**Very short patterns in very short texts:** The preprocessing overhead might make it slightly slower than naive search for trivial cases (though asymptotically better).",
          "**When the text is constantly changing:** The preprocessing part is for a fixed pattern.",
        ],
      },
      benefits: [
        "Linear time complexity O(N+M) in the worst case (N = text length, M = pattern length), making it very efficient.",
        "Does not backtrack in the text (scans text only once).",
        "Guaranteed performance, unlike some other string matching algorithms that can have quadratic worst cases.",
      ],
      cons: [
        "Requires preprocessing the pattern (building the LPS array).",
        "More complex to implement than naive string matching.",
        "Not designed for multiple patterns or approximate matching.",
      ],
    },
  },
  rabinKarpStringMatching: {
    name: "Rabin-Karp String Matching",
    description:
      "The Rabin-Karp algorithm is a string-searching algorithm that uses hashing to find any one of a set of pattern strings in a text. It uses a rolling hash function to quickly compare hash values of the pattern and substrings of the text. When hash values match, a character-by-character comparison is performed to confirm a true match.",
    steps: [
      {
        step: 1,
        action:
          "Choose a large prime number `q` and a base `d` (e.g., 256 for ASCII).",
      },
      {
        step: 2,
        action: "Calculate the hash value of the pattern `P`.",
      },
      {
        step: 3,
        action:
          "Calculate the hash value of the first `length(P)` characters of the text `T`.",
      },
      {
        step: 4,
        action:
          "Iterate through the text, comparing the pattern's hash with the current text window's hash.",
      },
      {
        step: 5,
        action:
          "If hashes match, perform a character-by-character comparison to check for a true match (to handle 'spurious hits' or hash collisions).",
      },
      {
        step: 6,
        action:
          "For the next window, update the hash value efficiently using a 'rolling hash' technique: `new_hash = (d * (old_hash - text[i] * d_pow_m_minus_1) + text[i+m]) % q`.",
      },
      {
        step: 7,
        action: "Repeat until the end of the text.",
      },
    ],
    options: {
      text: {
        type: "string",
        description: "The main text to search within.",
        defaultValue: "GEEKSFORGEEKS",
      },
      pattern: {
        type: "string",
        description: "The pattern string to search for.",
        defaultValue: "GEEK",
      },
      primeModulus: {
        type: "number",
        description: "A large prime number (q) for the hash function.",
        defaultValue: 101,
      },
      base: {
        type: "number",
        description:
          "The base (d) for the hash function (e.g., 256 for ASCII).",
        defaultValue: 256,
      },
      showHashValues: {
        type: "boolean",
        description: "Display the hash values of the pattern and text windows.",
        defaultValue: true,
      },
      highlightMatches: {
        type: "boolean",
        description: "Highlight the matched occurrences in the text.",
        defaultValue: true,
      },
    },
    practicalApplicationsAndConsiderations: {
      whenToUse: {
        description:
          "Rabin-Karp is particularly useful when searching for multiple patterns in a large text or for plagiarism detection.",
        scenarios: [
          "**Plagiarism Detection:** Can efficiently compare documents to find copied sections by hashing blocks of text.",
          "**Detecting Duplicates:** Finding duplicate files by hashing their contents.",
          "**Spam Filtering:** Identifying known spam patterns in email messages.",
          "**Bioinformatics (Approximate Matching):** Though primarily exact, its hashing concept can be extended for approximate matches.",
          "**When searching for multiple patterns:** By precomputing hashes for all patterns, you can check for all of them in a single pass of the text (though this is more complex to visualize in basic form).",
        ],
      },
      whenNotToUse: {
        description:
          "Rabin-Karp can suffer from performance degradation with frequent hash collisions or poor hash function choices.",
        scenarios: [
          "**When only searching for a single pattern and guaranteed worst-case performance is crucial:** KMP is generally preferred due to its strict linear time complexity without relying on hash properties.",
          "**For very short patterns where hashing overhead might dominate:** Naive string matching might be simpler and faster for very small patterns.",
          "**When a very high number of hash collisions occur:** A poorly chosen hash function or specific input data can lead to many spurious hits, degrading performance to O(NM) in the worst case (though rare in practice with good parameters).",
        ],
      },
      benefits: [
        "Average-case time complexity of O(N+M) (N = text length, M = pattern length), highly efficient in practice.",
        "Efficient for searching multiple patterns simultaneously (can be extended).",
        "Simple to implement compared to KMP's LPS array.",
        "Good for detecting exact matches of substrings.",
      ],
      cons: [
        "Worst-case time complexity of O(NM) if many hash collisions occur (rare with good hash functions).",
        "Relies on the choice of prime number and base for hashing.",
        "Requires handling 'spurious hits' (hash collisions) with character-by-character verification.",
      ],
    },
  },
};
