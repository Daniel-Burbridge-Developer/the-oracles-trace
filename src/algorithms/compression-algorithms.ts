export const compressionAlgorithms = {
  runLengthEncoding: {
    name: "Run-Length Encoding (RLE)",
    description:
      "Run-Length Encoding (RLE) is a form of lossless data compression in which runs of data (sequences in which the same data value occurs in many consecutive data elements) are stored as a single data value and count, rather than as the original run.",
    steps: {
      encode: [
        {
          step: 1,
          action: "Initialize an empty encoded string/list.",
        },
        {
          step: 2,
          action: "Iterate through the input string, character by character.",
        },
        {
          step: 3,
          action:
            "For each character, count how many times it consecutively repeats.",
        },
        {
          step: 4,
          action:
            "Append the count and the character to the encoded string (e.g., '3A' for 'AAA').",
        },
        {
          step: 5,
          action: "Move to the next unique character.",
        },
      ],
      decode: [
        {
          step: 1,
          action: "Initialize an empty decoded string/list.",
        },
        {
          step: 2,
          action:
            "Iterate through the encoded string, extracting count and character pairs.",
        },
        {
          step: 3,
          action:
            "Append the character to the decoded string, repeated 'count' times.",
        },
      ],
    },
    options: {
      operationType: {
        type: "enum",
        values: ["encode", "decode"],
        description: "Choose to visualize encoding or decoding.",
        defaultValue: "encode",
      },
      inputData: {
        type: "string",
        description:
          "The input string for encoding (e.g., 'AAABBCDDD') or decoding (e.g., '3A2B1C3D').",
        defaultValue: "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB",
      },
      delimiter: {
        type: "string",
        description:
          "Character separating count and value in encoded string (if applicable).",
        defaultValue: "",
      },
    },
    practicalApplicationsAndConsiderations: {
      whenToUse: {
        description:
          "RLE is highly effective for data with long sequences of repeating characters or values.",
        scenarios: [
          "**Simple Image Compression (e.g., FAX images):** Images with large areas of single colors (like black and white documents) compress very well with RLE.",
          "**Icons and Simple Graphics:** Where blocks of identical pixels are common.",
          "**Storing and Transmitting Bitmap Images:** Especially for images with limited color palettes.",
          "**Data Transfer Protocols:** Reducing redundant data in certain communication protocols.",
        ],
      },
      whenNotToUse: {
        description:
          "RLE can actually increase data size for non-repeating data and is not suitable for complex data patterns.",
        scenarios: [
          "**Text with diverse characters (e.g., natural language):** RLE will likely increase the file size because it represents each character as '1C' (e.g., 'ABC' becomes '1A1B1C', which is longer).",
          "**Complex images (e.g., photographs):** These have highly varied pixel data, making RLE ineffective.",
          "**When higher compression ratios are needed:** More advanced algorithms like Huffman, LZ77/LZ78, or JPEG/MPEG for images/video provide much better compression for general data.",
        ],
      },
      benefits: [
        "Extremely simple to implement.",
        "Very fast compression and decompression.",
        "Lossless compression.",
        "Highly effective for data with long runs of identical values.",
      ],
      cons: [
        "Ineffective or can even increase size for data with few or no repetitions.",
        "Limited to sequential repetitions, doesn't exploit other data patterns.",
      ],
    },
  },
  huffmanCoding: {
    name: "Huffman Coding",
    description:
      "Huffman coding is a lossless data compression algorithm. It constructs a variable-length code table for encoding a source message based on the relative frequencies of the characters. The idea is to assign shorter codes to more frequent characters and longer codes to less frequent ones, resulting in a minimum-length encoded message.",
    steps: [
      {
        step: 1,
        action:
          "Calculate the frequency of each unique character in the input data.",
      },
      {
        step: 2,
        action:
          "Create a leaf node for each character and add it to a min-priority queue (prioritized by frequency).",
      },
      {
        step: 3,
        action: "While there is more than one node in the priority queue:",
      },
      {
        step: 4,
        action:
          "Extract the two nodes with the lowest frequencies from the queue.",
      },
      {
        step: 5,
        action:
          "Create a new internal node with these two nodes as children. Its frequency is the sum of their frequencies. Add this new node to the priority queue.",
      },
      {
        step: 6,
        action:
          "The last remaining node in the queue is the root of the Huffman tree.",
      },
      {
        step: 7,
        action:
          "Traverse the Huffman tree (assigning '0' for left branch and '1' for right branch) to generate the variable-length codes for each character.",
      },
      {
        step: 8,
        action:
          "Encode the original message using the generated Huffman codes.",
      },
    ],
    options: {
      operationType: {
        type: "enum",
        values: ["encode", "decode"],
        description: "Choose to visualize encoding or decoding.",
        defaultValue: "encode",
      },
      inputText: {
        type: "string",
        description:
          "The input text for encoding (e.g., 'this is an example of a huffman tree') or encoded bitstring for decoding.",
        defaultValue: "this is an example of a huffman tree",
      },
      showFrequencyTable: {
        type: "boolean",
        description: "Display the character frequencies.",
        defaultValue: true,
      },
      showHuffmanTreeBuild: {
        type: "boolean",
        description: "Animate the construction of the Huffman tree.",
        defaultValue: true,
      },
      showCodeTable: {
        type: "boolean",
        description: "Display the generated Huffman codes for each character.",
        defaultValue: true,
      },
    },
    practicalApplicationsAndConsiderations: {
      whenToUse: {
        description:
          "Huffman Coding is excellent for lossless compression of data where character frequencies are highly skewed.",
        scenarios: [
          "**File Compression (e.g., .zip, .gzip):** Often used as part of larger compression formats (like Deflate algorithm in ZIP) to compress text, executables, and other files.",
          "**Fax Machines:** Early fax machines used Huffman coding for efficient transmission of black and white image data.",
          "**Image Formats (JPEG, PNG):** While JPEG is primarily lossy, it often uses Huffman coding for its final lossless compression step on quantized coefficients. PNG uses it as well.",
          "**Text Compression:** Any application where text or data streams have repetitive characters or symbols.",
        ],
      },
      whenNotToUse: {
        description:
          "Huffman coding is not ideal for data with uniform character distribution or when dealing with highly dynamic data.",
        scenarios: [
          "**Data with uniform character distribution:** If all characters appear with roughly the same frequency, Huffman coding provides little to no compression benefit.",
          "**Real-time streaming where dictionary needs to be updated:** Building the Huffman tree is a preprocessing step. For highly dynamic data where character frequencies change constantly, adaptive Huffman coding variants (more complex) might be needed.",
          "**For very high compression ratios on general data:** More advanced algorithms (e.g., Lempel-Ziv variants) often provide better compression by exploiting pattern repetition beyond single characters.",
        ],
      },
      benefits: [
        "Optimal prefix code (no code is a prefix of another code) for a given set of character frequencies.",
        "Lossless compression, data can be perfectly reconstructed.",
        "Relatively simple to understand and implement compared to more complex compression algorithms.",
      ],
      cons: [
        "Requires a preprocessing step to build the frequency table and Huffman tree.",
        "The Huffman tree (or code table) must be transmitted along with the compressed data, adding overhead.",
        "Less effective for data with flat frequency distributions.",
        "Does not exploit pattern repetitions beyond individual characters.",
      ],
    },
  },
};
