export const machineLearningBasicAlgorithms = {
  kMeansClustering: {
    name: "K-Means Clustering",
    description:
      "K-Means is an unsupervised machine learning algorithm used for clustering data points into K distinct groups (clusters). It iteratively assigns data points to the nearest cluster centroid and then updates the centroids based on the mean of the assigned points, aiming to minimize the variance within clusters.",
    steps: [
      {
        step: 1,
        action:
          "Initialize K centroids randomly (or using a specific strategy) within the data range.",
      },
      {
        step: 2,
        action: "Iteration Loop (repeat until convergence or max iterations):",
      },
      {
        step: 3,
        action:
          "Assignment Step: For each data point, calculate its distance to all K centroids and assign it to the cluster whose centroid is closest.",
      },
      {
        step: 4,
        action:
          "Update Step: Recalculate each cluster centroid as the mean of all data points assigned to that cluster.",
      },
      {
        step: 5,
        action:
          "Check for Convergence: If centroids no longer move significantly or a maximum number of iterations is reached, stop.",
      },
    ],
    options: {
      numberOfClustersK: {
        type: "number",
        description: "The number of clusters (K) to form.",
        min: 2,
        max: 10,
        defaultValue: 3,
      },
      initializationMethod: {
        type: "enum",
        values: ["random", "kmeans++"],
        description: "Method for initializing centroids.",
        defaultValue: "random",
      },
      showIterations: {
        type: "boolean",
        description:
          "Animate the assignment and update steps for each iteration.",
        defaultValue: true,
      },
      datasetType: {
        type: "enum",
        values: ["random_2d", "concentric_circles", "blobs"],
        description: "Generate different types of 2D datasets to cluster.",
        defaultValue: "random_2d",
      },
    },
    practicalApplicationsAndConsiderations: {
      whenToUse: {
        description:
          "K-Means is effective for partitioning data into a predefined number of clusters when clusters are expected to be spherical and equally sized.",
        scenarios: [
          "**Customer Segmentation:** Grouping customers with similar purchasing behaviors for targeted marketing.",
          "**Image Segmentation:** Dividing an image into regions of similar colors or textures.",
          "**Document Clustering:** Grouping similar documents or articles.",
          "**Anomaly Detection:** Identifying outliers that don't fit into any cluster.",
          "**Pre-processing for other algorithms:** Reducing the size of a dataset by replacing clusters with their centroids.",
        ],
      },
      whenNotToUse: {
        description:
          "K-Means struggles with non-spherical clusters, varying cluster sizes/densities, and requires K to be known beforehand.",
        scenarios: [
          "**Non-spherical or irregularly shaped clusters:** K-Means assumes clusters are convex and isotropic; it will struggle with elongated, intertwined, or arbitrary shapes.",
          "**Clusters of varying densities or sizes:** It tends to create clusters of roughly equal size.",
          "**When the number of clusters (K) is unknown:** You need to pre-specify K, which can be a challenge. Other algorithms (e.g., DBSCAN) can find clusters without knowing K.",
          "**Outlier sensitivity:** K-Means is sensitive to outliers, which can significantly affect centroid positions.",
        ],
      },
      benefits: [
        "Simple to understand and implement.",
        "Relatively fast for large datasets (especially with efficient implementations like Mini-Batch K-Means).",
        "Scalable to a large number of data points.",
        "Provides easily interpretable clusters (mean of points).",
      ],
      cons: [
        "Requires specifying the number of clusters (K) beforehand.",
        "Sensitive to initial centroid placement (can lead to suboptimal local optima).",
        "Struggles with non-convex or irregularly shaped clusters.",
        "Sensitive to outliers.",
        "Can struggle with high-dimensional data without dimensionality reduction.",
      ],
    },
  },
  linearRegression: {
    name: "Linear Regression",
    description:
      "Linear Regression is a supervised learning algorithm that models the relationship between a dependent variable (target) and one or more independent variables (features) by fitting a linear equation to the observed data. It aims to find the best-fitting straight line (or hyperplane) that minimizes the sum of squared residuals.",
    steps: {
      gradient_descent_optimization: [
        {
          step: 1,
          action:
            "Initialize model parameters (slope 'm' and intercept 'b') randomly or to zero.",
        },
        {
          step: 2,
          action:
            "Iteration Loop (repeat for a fixed number of epochs or until convergence):",
        },
        {
          step: 3,
          action:
            "Calculate predictions: `y_pred = m * x + b` for all data points.",
        },
        {
          step: 4,
          action:
            "Calculate the 'loss' (e.g., Mean Squared Error) between `y_pred` and actual `y`.",
        },
        {
          step: 5,
          action:
            "Calculate gradients: Determine how much 'm' and 'b' need to change to reduce the loss.",
        },
        {
          step: 6,
          action:
            "Update parameters: `m = m - learning_rate * gradient_m`, `b = b - learning_rate * gradient_b`.",
        },
        {
          step: 7,
          action:
            "Visualize the line moving closer to the optimal fit with each update.",
        },
      ],
    },
    options: {
      learningRate: {
        type: "number",
        description:
          "The step size for updating parameters during gradient descent.",
        min: 0.001,
        max: 0.1,
        step: 0.001,
        defaultValue: 0.01,
      },
      numberOfIterations: {
        type: "number",
        description: "Maximum number of gradient descent iterations.",
        min: 50,
        max: 500,
        defaultValue: 200,
      },
      showLoss: {
        type: "boolean",
        description: "Display the loss value changing over iterations.",
        defaultValue: true,
      },
      datasetNoise: {
        type: "number",
        description: "Amount of random noise to add to the generated data.",
        min: 0,
        max: 50,
        defaultValue: 10,
      },
    },
    practicalApplicationsAndConsiderations: {
      whenToUse: {
        description:
          "Linear Regression is a foundational algorithm for modeling linear relationships and making predictions.",
        scenarios: [
          "**Trend Forecasting:** Predicting future sales based on historical data, predicting stock prices (simplified).",
          "**Medical Applications:** Modeling the relationship between drug dosage and patient outcomes.",
          "**Economic Forecasting:** Predicting GDP growth, inflation, or unemployment rates.",
          "**Housing Price Prediction:** Estimating house prices based on features like size, number of bedrooms, etc. (often requires more complex models in reality).",
          "**Simple Predictive Models:** When a linear relationship between variables is assumed or sufficient.",
        ],
      },
      whenNotToUse: {
        description:
          "Linear Regression is limited to linear relationships and can be sensitive to outliers and multicollinearity.",
        scenarios: [
          "**Non-linear relationships:** If the relationship between variables is inherently non-linear (e.g., S-curves, exponential growth), linear regression will provide a poor fit. Use polynomial regression or other non-linear models.",
          "**Outliers:** Linear regression is sensitive to outliers, which can disproportionately influence the regression line.",
          "**Multicollinearity:** When independent variables are highly correlated, it can make the model unstable and hard to interpret.",
          "**Categorical dependent variable:** For classification problems (e.g., yes/no outcomes), Logistic Regression or other classification algorithms are appropriate.",
          "**Complex, high-dimensional data:** For very complex patterns, more sophisticated machine learning models are typically needed.",
        ],
      },
      benefits: [
        "Simple to understand and interpret.",
        "Fast to train and make predictions.",
        "Provides a clear relationship (slope and intercept) between variables.",
        "Foundation for many more complex statistical and machine learning models.",
      ],
      cons: [
        "Assumes a linear relationship between variables.",
        "Sensitive to outliers.",
        "Assumes errors are normally distributed and homoscedastic.",
        "Can suffer from multicollinearity.",
      ],
    },
  },
};
