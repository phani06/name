import { ImageResponse } from "next/image"

// Route segment config
export const runtime = "edge"

// Image metadata
export const alt = "Phanindhar Telukuntla - Tech Portfolio"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

// Image generation
export default async function Image() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 128,
        background: "linear-gradient(to bottom right, #121212, #1a1a1a)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#ffffff",
        padding: "40px",
      }}
    >
      <div style={{ fontSize: "64px", color: "#00e6ff", marginBottom: "20px" }}>Phanindhar Telukuntla</div>
      <div style={{ fontSize: "32px", color: "#cccccc" }}>Software Developer & Tech Enthusiast</div>
    </div>,
    // ImageResponse options
    {
      ...size,
    },
  )
}
