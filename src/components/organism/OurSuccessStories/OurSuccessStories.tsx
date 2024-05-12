import React from "react";
import "./OurSuccessStories.css";

interface OurSuccessStoriesProps {
  embedId: string;
}

export const OurSuccessStories = ({ embedId }: OurSuccessStoriesProps) => {
  const playVideo = () => {
    // Your logic to play the video
  };

  return (
    <div className="success-stories my-5">
      <div className="video-container">
        <h1 className="text-center">
          <div className="text-secondary">Our Success Stories</div>
          Changes that inspire Us
        </h1>
        <div className="video-responsive">
          <iframe
            width="853"
            height="480"
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </div>
    </div>
  );
};
