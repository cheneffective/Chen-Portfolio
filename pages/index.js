export default function Home() {
  return (
    <>
      <div
        style={{
          background: "#000",
          color: "#fff",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
          padding: "clamp(3rem, 8vw, 6rem) 1.5rem",
        }}
      >
        <h1 style={{
          fontSize: "clamp(3.5rem, 12vw, 7rem)",
          fontWeight: 900,
          margin: "0 0 1.5rem",
          letterSpacing: "-2px",
        }}>
          Chen Effective
        </h1>

        <p style={{
          fontSize: "clamp(1.4rem, 5vw, 2rem)",
          opacity: 0.9,
          maxWidth: "720px",
          lineHeight: 1.5,
          margin: "0 0 3rem",
        }}>
          AI Creative Director  
          Anime Visual Storytelling  
          High-Impact Ads & Campaigns
        </p>

        <button
          onClick={() => document.getElementById("videos")?.scrollIntoView({ behavior: "smooth" })}
          style={{
            padding: "1rem 3rem",
            fontSize: "1.3rem",
            fontWeight: "bold",
            background: "#fff",
            color: "#000",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            transition: "all 0.25s ease",
          }}
          onMouseEnter={e => Object.assign(e.currentTarget.style, { transform: "scale(1.08)", boxShadow: "0 10px 30px rgba(255,255,255,0.2)" })}
          onMouseLeave={e => Object.assign(e.currentTarget.style, { transform: "scale(1)", boxShadow: "none" })}
        >
          Explore My AI Videos
        </button>
      </div>

      <section
        id="videos"
        style={{
          background: "#0a0a0a",
          color: "#fff",
          padding: "clamp(5rem, 10vw, 10rem) 1.5rem",
          textAlign: "center",
        }}
      >
        <h2 style={{
          fontSize: "clamp(3rem, 9vw, 5rem)",
          margin: "0 0 5rem",
          fontWeight: 800,
        }}>
          Selected Works
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(380px, 1fr))",
          gap: "clamp(2.5rem, 5vw, 4rem)",
          maxWidth: "1600px",
          margin: "0 auto",
        }}>
          {/* VIDEO 1 – replace ID, title, desc */}
          <div>
            <h3 style={{ fontSize: "1.8rem", margin: "0 0 1.2rem", fontWeight: 600 }}>
              Anime AI Campaign Teaser
            </h3>
            <div style={{
              position: "relative",
              paddingBottom: "56.25%",
              height: 0,
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.9)",
              background: "#111",
            }}>
              <iframe
                loading="lazy"
                src="https://www.youtube.com/embed/https://www.youtube.com/@cheneffective1983"
                title="Anime AI Campaign Teaser"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0, left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
              />
            </div>
            <p style={{ margin: "1.2rem 0 0", opacity: 0.8, fontSize: "1.1rem" }}>
              Cinematic AI-generated anime ad – 2025
            </p>
          </div>

          {/* VIDEO 2 – copy-paste more blocks like this */}
          <div>
            <h3 style={{ fontSize: "1.8rem", margin: "0 0 1.2rem", fontWeight: 600 }}>
              Emotional Anime Narrative Reel
            </h3>
            <div style={{
              position: "relative",
              paddingBottom: "56.25%",
              height: 0,
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.9)",
              background: "#111",
            }}>
              <iframe
                loading="lazy"
                src="https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID_HERE"
                title="Emotional Anime Narrative Reel"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
              />
            </div>
            <p style={{ margin: "1.2rem 0 0", opacity: 0.8, fontSize: "1.1rem" }}>
              AI-assisted anime-style emotional short
            </p>
          </div>

          {/* VIDEO 3 – example with self-hosted MP4 (uncomment & use if you have direct link) */}
          {/* 
          <div>
            <h3 style={{ fontSize: "1.8rem", margin: "0 0 1.2rem", fontWeight: 600 }}>
              Experimental AI Motion Piece
            </h3>
            <div style={{
              position: "relative",
              paddingBottom: "56.25%",
              height: 0,
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.9)",
              background: "#111",
            }}>
              <video
                controls
                preload="metadata"
                style={{
                  position: "absolute",
                  top: 0, left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "16px",
                }}
              >
                <source src="https://your-direct-mp4-link-here.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p style={{ margin: "1.2rem 0 0", opacity: 0.8, fontSize: "1.1rem" }}>
              Raw generative AI video experiment
            </p>
          </div>
          */}

          {/* Add 2–6 more <div> blocks here with your videos */}
        </div>

        <div style={{ margin: "clamp(5rem, 10vw, 8rem) 0 0" }}>
          <a
            href="mailto:cheneffective@gmail.com?subject=AI%20Creative%20Collaboration"
            style={{
              display: "inline-block",
              padding: "1.2rem 3.5rem",
              fontSize: "1.4rem",
              fontWeight: "bold",
              background: "#fff",
              color: "#000",
              textDecoration: "none",
              borderRadius: "50px",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={e => Object.assign(e.currentTarget.style, { background: "#f0f0f0", transform: "scale(1.08)" })}
            onMouseLeave={e => Object.assign(e.currentTarget.style, { background: "#fff", transform: "scale(1)" })}
          >
            Contact Me for Projects
          </a>
        </div>
      </section>

      <footer style={{
        background: "#000",
        color: "#666",
        textAlign: "center",
        padding: "4rem 1.5rem",
        fontSize: "1rem",
      }}>
        © {new Date().getFullYear()} Chen Effective  
        AI × Anime × High-Impact Creative
      </footer>
    </>
  );
}
