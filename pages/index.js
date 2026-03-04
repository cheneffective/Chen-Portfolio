export default function Home() {
  return (
    <div style={{
      backgroundColor: "black",
      color: "white",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial"
    }}>
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
        Chen Effective
      </h1>

      <p style={{ fontSize: "20px", opacity: 0.7, marginBottom: "40px" }}>
        AI Creative Director · Anime Visual Storytelling · High-Impact Ads
      </p>

      <button style={{
        padding: "12px 24px",
        fontSize: "18px",
        backgroundColor: "white",
        color: "black",
        border: "none",
        cursor: "pointer"
      }}>
        View My Work
      </button>
    </div>
  );
}
