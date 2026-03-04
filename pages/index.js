export default function Home() {
  return (
    <>
      {/* HERO - kept almost the same, just a bit more spacing */}
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
          padding: "40px 20px",
        }}
      >
        <h1 style={{ fontSize: "clamp(36px, 8vw, 64px)", marginBottom: "24px" }}>
          Chen Effective
        </h1>

        <p
          style={{
            fontSize: "clamp(18px, 4vw, 24px)",
            opacity: 0.8,
            maxWidth: "600px",
            marginBottom: "48px",
            lineHeight: 1.5,
          }}
        >
          AI Creative Director · Anime Visual Storytelling · High-Impact Ads & Campaigns
        </p>

        <button
          onClick={() =>
            document
              .getElementById("work")
              .scrollIntoView({ behavior: "smooth" })
          }
          style={{
            padding: "14px 32px",
            fontSize: "18px",
            backgroundColor: "white",
            color: "black",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Explore My Work
        </button>
      </div>

      {/* VIDEO WORK SECTION */}
      <div
        id="work"
        style={{
          backgroundColor: "#0a0a0a",
          color: "white",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "clamp(32px, 6vw, 48px)", marginBottom: "60px" }}>
          Selected Video Work
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "40px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* Example YouTube embed – replace with YOUR links */}
          <div>
            <h3 style={{ marginBottom: "12px", fontSize: "22px" }}>
              Anime AI Campaign Teaser
            </h3>
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%", // 16:9 aspect ratio
                height: 0,
                overflow: "hidden",
                borderRadius: "12px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID_HERE"
                title="Anime AI Campaign"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              ></iframe>
            </div>
            <p style={{ marginTop: "16px", opacity: 0.8, fontSize: "15px" }}>
              Cinematic AI-generated anime ad – 2025
            </p>
          </div>

          {/* Another YouTube example */}
          <div>
            <h3 style={{ marginBottom: "12px", fontSize: "22px" }}>
              Emotional Anime Narrative Reel
            </h3>
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
                overflow: "hidden",
                borderRadius: "12px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
              }}
            >
              <iframe
                src="https://www.youtube.com/embed/ANOTHER_VIDEO_ID"
                title="Visual Storytelling Reel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              ></iframe>
            </div>
            <p style={{ marginTop: "16px", opacity: 0.8, fontSize: "15px" }}>
              Short AI-assisted anime story sequence
            </p>
          </div>

          {/* Example for DIRECTLY UPLOADED video (self-hosted / public URL) */}
          <div>
            <h3 style={{ marginBottom: "12px", fontSize: "22px" }}>
              Experimental AI Motion Piece
            </h3>
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                height: 0,
                overflow: "hidden",
                borderRadius: "12px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
              }}
            >
              <video
                controls
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "inherit",
                }}
              >
                <source src="https://your-public-video-url.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p style={{ marginTop: "16px", opacity: 0.8, fontSize: "15px" }}>
              Raw generative video experiment – direct upload
            </p>
          </div>

          {/* Add 2–6 more similar <div> blocks with your real videos */}
        </div>

        <div style={{ marginTop: "80px" }}>
          <a
            href="mailto:cheneffective@gmail.com"
            style={{
              padding: "14px 36px",
              backgroundColor: "white",
              color: "black",
              textDecoration: "none",
              fontWeight: "bold",
              borderRadius: "6px",
              fontSize: "18px",
            }}
          >
            Let's Collaborate → Contact Me
          </a>
        </div>
      </div>

      {/* Optional simple footer */}
      <footer
        style={{
          backgroundColor: "black",
          color: "#888",
          textAlign: "center",
          padding: "40px 20px",
          fontSize: "14px",
        }}
      >
        © {new Date().getFullYear()} Chen Effective – AI × Anime × Ads
      </footer>
    </>
  );
}
