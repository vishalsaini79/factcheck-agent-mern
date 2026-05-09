import { useState } from "react";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

function App() {
  const [file, setFile] = useState(null);
  const [report, setReport] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFactCheck = async () => {
    if (!file) {
      setError("Please upload a PDF file first.");
      return;
    }

    setLoading(true);
    setError("");
    setReport(null);

    try {
      const formData = new FormData();
      formData.append("pdf", file);

      const response = await fetch(`${API_BASE_URL}/api/fact-check`, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Fact-check failed");
      }

      setReport(data.report);
      setPreview(data.extractedTextPreview || "");
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const statusClass = (status) => {
    const value = String(status).toLowerCase();
    if (value.includes("verified")) return "verified";
    if (value.includes("false")) return "false";
    return "inaccurate";
  };

  return (
    <div className="page">
      <nav className="navbar">
        <div>
          <h1>Fact-Check Agent</h1>
          <p>PDF claim verification using AI + live web evidence</p>
        </div>
        <span className="badge">Truth Layer</span>
      </nav>

      <section className="hero">
        <div className="heroText">
          <h2>Detect outdated, false, or hallucinated claims in PDFs.</h2>
          <p>
            Upload a document and the system extracts verifiable claims,
            searches evidence, and classifies each claim as Verified,
            Inaccurate, or False.
          </p>
        </div>

        <div className="uploadCard">
          <label className="uploadBox">
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <span>{file ? file.name : "Click to upload PDF"}</span>
          </label>

          <button onClick={handleFactCheck} disabled={loading}>
            {loading ? "Checking Facts..." : "Run Fact Check"}
          </button>

          {error && <p className="error">{error}</p>}
        </div>
      </section>

      {preview && (
        <section className="card">
          <h3>Extracted PDF Text Preview</h3>
          <p className="preview">{preview}</p>
        </section>
      )}

      {report && (
        <section className="card">
          <div className="sectionHeader">
            <h3>Fact-Check Report</h3>
            <span>{report.length} claims found</span>
          </div>

          <div className="tableWrapper">
            <table>
              <thead>
                <tr>
                  <th>Claim</th>
                  <th>Status</th>
                  <th>Reason</th>
                  <th>Correct Fact</th>
                  <th>Source</th>
                </tr>
              </thead>
              <tbody>
                {report.map((item, index) => (
                  <tr key={index}>
                    <td>{item.claim}</td>
                    <td>
                      <span className={`status ${statusClass(item.status)}`}>
                        {item.status}
                      </span>
                    </td>
                    <td>{item.reason}</td>
                    <td>{item.correct_fact}</td>
                    <td>
                      {item.source ? (
                        <a href={item.source} target="_blank" rel="noreferrer">
                          View
                        </a>
                      ) : (
                        "Not found"
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      <footer>
        Built for Management Trainee – Product Management Assessment
      </footer>
    </div>
  );
}

export default App;
