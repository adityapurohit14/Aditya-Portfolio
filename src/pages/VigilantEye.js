function VigilantEye() {
return (
<div
style={{
padding: "50px",
color: "white",
maxWidth: "1000px",
margin: "auto",
}}
> <h1>🛡️ Vigilant Eye 2.0</h1>

  <h2>Problem Statement</h2>
  <p>
    Traditional surveillance systems only record footage and require
    continuous human monitoring. Security personnel may miss suspicious
    activities, intruders, or animal movements due to monitoring fatigue.
    There is a need for an intelligent system capable of detecting threats
    automatically and generating instant alerts.
  </p>

  <h2>Proposed Solution</h2>
  <p>
    Vigilant Eye 2.0 is an AI-powered surveillance platform developed using
    Computer Vision and Deep Learning technologies. The system continuously
    monitors live camera feeds, detects intruders, recognizes faces,
    identifies animals, and generates real-time alerts.
  </p>

  <h2>Technologies Used</h2>
  <ul>
    <li>Python</li>
    <li>YOLOv8</li>
    <li>OpenCV</li>
    <li>MySQL</li>
    <li>CustomTkinter</li>
  </ul>

  <h2>Key Features</h2>
  <ul>
    <li>✅ Real-Time Face Detection</li>
    <li>✅ Animal Detection</li>
    <li>✅ Intruder Alert System</li>
    <li>✅ Database Logging</li>
    <li>✅ Interactive GUI Dashboard</li>
  </ul>

  <h2>Impact</h2>
  <p>
    The system minimizes manual surveillance efforts and improves
    security response times.
  </p>

  <h2>Project Resources</h2>

  <div
    style={{
      display: "flex",
      gap: "15px",
      marginTop: "20px",
      flexWrap: "wrap",
    }}
  >
    <a
      href="/VigilantEye.pdf"
      target="_blank"
      rel="noreferrer"
      className="btn"
    >
      📄 Documentation
    </a>

    <a
      href="https://github.com/adityapurohit14/VigilantEye2.0"
      target="_blank"
      rel="noreferrer"
      className="btn"
    >
      💻 GitHub
    </a>

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

export default VigilantEye;
