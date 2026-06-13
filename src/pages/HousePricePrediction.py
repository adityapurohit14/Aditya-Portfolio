function HousePricePrediction() {
  return (
    <div
      style={{
        padding: "50px",
        color: "white",
        maxWidth: "1000px",
        margin: "auto",
      }}
    >
      <h1>🏠 House Price Prediction System</h1>

      <h2>Problem Statement</h2>
      <p>
        Property buyers and real estate investors often struggle to estimate
        the fair market value of a house. House prices are influenced by
        multiple factors such as location, area, number of bedrooms,
        amenities, neighborhood facilities, and market trends. Manual
        estimation can often be inaccurate and time-consuming.
      </p>

      <h2>Proposed Solution</h2>
      <p>
        The House Price Prediction System is a Machine Learning-based
        application that predicts the market value of residential properties
        using historical housing data. The system analyzes property features
        and generates accurate price predictions using regression algorithms.
      </p>

      <h2>Technologies Used</h2>
      <ul>
        <li>Python</li>
        <li>Pandas</li>
        <li>NumPy</li>
        <li>Scikit-Learn</li>
        <li>Matplotlib</li>
        <li>Machine Learning</li>
      </ul>

      <h2>Development Process</h2>
      <ul>
        <li>✅ Housing Dataset Collection</li>
        <li>✅ Data Cleaning and Preprocessing</li>
        <li>✅ Missing Value Handling</li>
        <li>✅ Feature Selection</li>
        <li>✅ Model Training using Regression</li>
        <li>✅ Accuracy Evaluation</li>
        <li>✅ Price Prediction Generation</li>
      </ul>

      <h2>Key Features</h2>
      <ul>
        <li>✅ Property Price Estimation</li>
        <li>✅ User-Based Property Inputs</li>
        <li>✅ Data Visualization</li>
        <li>✅ Market Trend Analysis</li>
        <li>✅ Regression-Based Predictions</li>
      </ul>

      <h2>Impact</h2>
      <p>
        The system helps buyers, sellers, and real estate investors make
        informed decisions by providing reliable property price estimates.
        It reduces guesswork and enables data-driven property valuation.
      </p>

      <div style={{ marginTop: "40px" }}>
        <button
          className="btn"
          onClick={() => (window.location.href = "/")}
        >
          ← Back to Portfolio
        </button>
      </div>
    </div>
  );
}

export default HousePricePrediction;