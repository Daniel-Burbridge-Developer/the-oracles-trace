export const loadBalancingAlgorithms = {
  roundRobin: {
    name: "Round Robin",
    description:
      "Round Robin is the simplest load balancing algorithm. It distributes client requests sequentially to a group of servers. Each server gets a turn in a circular order, ensuring that all servers are used equally over time, regardless of their current load or capacity.",
    steps: [
      {
        step: 1,
        action: "Maintain a list of active servers.",
      },
      {
        step: 2,
        action:
          "Upon receiving a new client request, assign it to the next server in the predefined sequence.",
      },
      {
        step: 3,
        action:
          "After assigning, move the pointer to the next server in the list (circularly).",
      },
      {
        step: 4,
        action:
          "If a server is unavailable, skip it and proceed to the next active server.",
      },
    ],
    options: {
      numServers: {
        type: "number",
        description: "Number of servers in the pool.",
        min: 2,
        max: 8,
        defaultValue: 3,
      },
      requestsPerSecond: {
        type: "number",
        description: "Simulated number of client requests arriving per second.",
        min: 1,
        max: 10,
        defaultValue: 3,
      },
      serverProcessingTime: {
        type: "array_of_numbers",
        description: "Simulated processing time (in seconds) for each server.",
        defaultValue: [1, 1, 1],
      },
      highlightCurrentServer: {
        type: "boolean",
        description: "Highlight the server currently receiving a request.",
        defaultValue: true,
      },
    },
    practicalApplicationsAndConsiderations: {
      whenToUse: {
        description:
          "Round Robin is best suited for scenarios where servers have similar processing capabilities and handle similar types of requests.",
        scenarios: [
          "**Simple Web Servers:** Distributing requests among identical web servers in a cluster.",
          "**DNS Load Balancing:** DNS servers can be configured to return IP addresses of multiple web servers in a round-robin fashion.",
          "**Identical Backend Services:** When a pool of worker nodes or microservices are considered equivalent and stateless.",
          "**Initial setup for load balancing:** As a baseline for performance before implementing more complex algorithms.",
        ],
      },
      whenNotToUse: {
        description:
          "Round Robin is ineffective if servers have different capacities or if requests vary significantly in processing time.",
        scenarios: [
          "**Heterogeneous Server Capacities:** If some servers are more powerful or have more resources than others, Round Robin will still distribute requests equally, leading to inefficient resource utilization (powerful servers underutilized, weaker servers overloaded).",
          "**Varying Request Complexities:** If requests have wildly different processing requirements, a simple Round Robin can quickly lead to some servers being stuck with long-running tasks while others are idle.",
          "**Stateful applications:** Requires sticky sessions or other mechanisms to ensure client-server affinity, which Round Robin doesn't inherently provide.",
          "**When dynamic scaling is crucial:** Does not account for real-time server load or health.",
        ],
      },
      benefits: [
        "Extremely simple to implement.",
        "Ensures fair distribution of requests over time.",
        "No overhead for calculating server load.",
        "Guarantees that every server gets a turn.",
      ],
      cons: [
        "Does not consider server load or health, potentially overloading busy servers.",
        "Inefficient for heterogeneous server environments.",
        "Can lead to poor performance if request processing times vary widely.",
      ],
    },
  },
  leastConnections: {
    name: "Least Connections",
    description:
      "Least Connections is a dynamic load balancing algorithm that directs new client requests to the server with the fewest active connections. This method is effective when traffic is unevenly distributed among servers or when servers have varying processing capabilities, as it attempts to balance the current workload.",
    steps: [
      {
        step: 1,
        action: "Maintain a count of active connections for each server.",
      },
      {
        step: 2,
        action:
          "Upon receiving a new client request, identify all active servers.",
      },
      {
        step: 3,
        action:
          "Select the server that currently has the lowest number of active connections.",
      },
      {
        step: 4,
        action:
          "Assign the new request to the selected server and increment its active connection count.",
      },
      {
        step: 5,
        action:
          "When a connection closes, decrement the server's active connection count.",
      },
    ],
    options: {
      numServers: {
        type: "number",
        description: "Number of servers in the pool.",
        min: 2,
        max: 8,
        defaultValue: 3,
      },
      requestsPerSecond: {
        type: "number",
        description: "Simulated number of client requests arriving per second.",
        min: 1,
        max: 10,
        defaultValue: 3,
      },
      serverConnectionDurations: {
        type: "array_of_numbers",
        description:
          "Simulated duration (in seconds) each connection stays active on a server.",
        defaultValue: [5, 5, 5],
      },
      highlightSelectedServer: {
        type: "boolean",
        description:
          "Highlight the server chosen by the algorithm for each request.",
        defaultValue: true,
      },
      showConnectionCounts: {
        type: "boolean",
        description: "Display the active connection count for each server.",
        defaultValue: true,
      },
    },
    practicalApplicationsAndConsiderations: {
      whenToUse: {
        description:
          "Least Connections is highly effective for dynamic workloads and when servers may have different processing speeds or varying request complexities.",
        scenarios: [
          "**Web and Application Servers with Stateful Connections:** Ideal for applications where connections persist for varying durations (e.g., chat applications, streaming services).",
          "**Database Servers:** Distributing database queries where some queries might be more complex and keep connections open longer.",
          "**Heterogeneous Server Environments:** When servers have different capacities, Least Connections naturally directs more traffic to less busy (and potentially more powerful) servers.",
          "**Dynamic Workloads:** Adapts better to fluctuating traffic patterns compared to static algorithms like Round Robin.",
        ],
      },
      whenNotToUse: {
        description:
          "Least Connections primarily balances the number of connections, not necessarily the actual processing load or server health.",
        scenarios: [
          "**When connection count doesn't accurately reflect load:** A server might have few connections, but those connections are handling very resource-intensive tasks, making it appear 'least connected' but actually busy.",
          "**UDP-based services (connectionless):** Since UDP is connectionless, 'active connections' might not be a meaningful metric. Other metrics (e.g., packet rate, CPU usage) would be more appropriate.",
          "**When simple, stateless requests are dominant:** For extremely short-lived, uniform requests, the overhead of tracking connections might not justify the complexity over simpler algorithms like Round Robin.",
        ],
      },
      benefits: [
        "More intelligent than Round Robin, considering current server load (via connections).",
        "Distributes traffic more evenly in dynamic and heterogeneous environments.",
        "Helps prevent server overload.",
        "Adapts to varying request complexities if complex requests hold connections longer.",
      ],
      cons: [
        "More complex to implement than Round Robin (requires connection tracking).",
        "Connection count might not always accurately reflect actual server processing load (e.g., one connection with a heavy task vs. many connections with light tasks).",
        "Can still send traffic to an unhealthy server if it reports few connections (requires health checks).",
      ],
    },
  },
};
