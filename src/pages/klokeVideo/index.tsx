import React from "react";
import video from "../../assets/videos/kloke.mp4";
const KlokeVideo: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "1rem" }}>
      <h1>Apresentação do Kloke</h1>
      <video
        controls
        style={{ maxWidth: "720px", borderRadius: "12px", maxHeight:"90vh" , boxShadow: "0 4px 12px rgba(0,0,0,0.2)" }}
      >
        <source src={video} type="video/mp4" />
        Seu navegador não suporta vídeo HTML5.
      </video>
    </div>
  );
};

export default KlokeVideo;
