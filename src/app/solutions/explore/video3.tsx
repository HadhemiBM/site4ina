import React from "react";

export default function Video3(): React.ReactNode {
  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "91vh", overflow: "hidden", zIndex: -1 }}>
      <video
        src="https://res.cloudinary.com/ddngbriyu/video/upload/v1730891782/Coming_soon_Glitch_video_effects_iuxkcm.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          height: "100vh", 
          objectFit: "cover",
          position: "absolute",
          top: 0,
          zIndex: 0,
        }}
      >
        Your browser does not support the video tag...
      </video>
    </div>
  );
}
