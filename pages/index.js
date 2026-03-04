export default function Home() {
  return (
    <>
      <div style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          Chen Effective
        </h1>

        <p style={{ fontSize: "20px", opacity: 0.7, marginBottom: "40px" }}>
          AI Creative Director · Anime Visual Storytelling · High-Impact Ads
        </p>

        <button
          onClick={() => {
            document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
          }}
          style={{
            padding: "12px 24px",
            fontSize: "18px",
            backgroundColor: "white",
            color: "black",
            border: "none",
            cursor: "pointer"
          }}
        >
          View My Work
        </button>
      </div>

      <div
        id="projects"
        style={{
          backgroundColor: "#111",
          color: "white",
          padding: "100px 20px",
          textAlign: "center"
        }}
      >
        <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>
          My Projects
        </h2>
        <p style={{ opacity: 0.7 }}>
          Your cinematic AI projects will appear here soon.
        </p>
      </div>
    </>
  );
}
