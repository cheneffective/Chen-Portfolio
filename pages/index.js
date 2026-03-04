export default function Home() {
  return (
    <>
      {/* HERO */}
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Arial",
          textAlign: "center",
          padding: "20px"
        }}
      >
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          Chen Effective
        </h1>

        <p style={{ fontSize: "20px", opacity: 0.7, marginBottom: "40px" }}>
          AI Creative Director · Anime Visual Storytelling · High-Impact Ads
        </p>

        <button
          onClick={() =>
            document
              .getElementById("projects")
              .scrollIntoView({ behavior: "smooth" })
          }
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

      {/* PROJECTS */}
      <div
        id="projects"
        style={{
          backgroundColor: "#111",
          color: "white",
          padding: "100px 20px",
          textAlign: "center"
        }}
      >
        <h2 style={{ fontSize: "36px", marginBottom: "40px" }}>
          Featured Projects
        </h2>

        <div
          style={{
            display: "grid",
            gap: "30px",
            maxWidth: "800px",
            margin: "0 auto"
          }}
        >
          <div
            style={{
              background: "#1c1c1c",
              padding: "30px",
              borderRadius: "10px"
            }}
          >
            <h3>Anime AI Campaign</h3>
            <p style={{ opacity: 0.7 }}>
              High-impact AI-generated cinematic ad campaign.
            </p>
          </div>

          <div
            style={{
              background: "#1c1c1c",
              padding: "30px",
              borderRadius: "10px"
            }}
          >
            <h3>Visual Storytelling Reel</h3>
            <p style={{ opacity: 0.7 }}>
              Emotional anime-style narrative built with generative tools.
            </p>
          </div>
        </div>

        <div style={{ marginTop: "60px" }}>
          <a
            href="mailto:cheneffective@gmail.com"
            style={{
              padding: "12px 24px",
              backgroundColor: "white",
              color: "black",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Contact Me
          </a>
        </div>
      </div>
    </>
  );
}
