import roofingVideo from "../assets/videos/roofing.mp4";

function VideoSection() {
  return (
    <section id="video" className="video">
      <h2>Building Strong Roofs, Building Trust</h2>

      <div className="video-container">
        <video
          src={roofingVideo}
          controls
          muted
          autoPlay
          loop
          playsInline
        />
      </div>
    </section>
  );
}

export default VideoSection;
