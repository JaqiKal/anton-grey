import React, { useState } from "react";

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(""); // Track the currently selected video

  const videoReels = [
    {
      id: 1,
      thumbnail: "https://res.cloudinary.com/dsbcjtatz/image/upload/v1735598877/anton/thumbnail/goldenglobe-thumbnail_dquugu.webp", // Thumbnail URL
      videoUrl: "https://res.cloudinary.com/dsbcjtatz/video/upload/v1735554889/anton/video/3129902-uhd_3840_2160_25fps-guldglob_fte6hg.mp4", // Video URL
    },
    {
      id: 2,
      thumbnail: "https://res.cloudinary.com/dsbcjtatz/image/upload/v1735599514/anton/thumbnail/rockring_qvcos3.webp", // Replace with the second thumbnail URL
      videoUrl: "https://res.cloudinary.com/dsbcjtatz/video/upload/v1735550402/anton/video/12832973_1440_1080_60fps-rockring_krckmb.mp4", // Replace with the second video URL
    },
  ];

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-slate-400 via-slate-600 to-slate-700 text-white">
      <h1 className="text-5xl font-bold mb-6">Welcome to My Portfolio</h1>
      <p className="text-xl mb-8">Hover over the thumbnails to play the video reels.</p>

      {/* Video Thumbnails */}
      <div className="flex space-x-8">
        {videoReels.map((reel) => (
          <div
            key={reel.id}
            className="relative w-64 h-36 bg-gray-800 rounded-lg shadow-lg cursor-pointer overflow-hidden group"
            onClick={() => {
              setCurrentVideo(reel.videoUrl); // Set the current video
              setIsModalOpen(true); // Open the modal
            }}
          >
            <img
              src={reel.thumbnail}
              alt={`Video Reel ${reel.id}`}
              className="absolute inset-0 w-full h-full object-cover group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white text-xl font-bold">Play Video</span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)} // Close modal on overlay click
        >
          <div
            className="relative bg-white rounded-lg shadow-lg p-4 max-w-3xl mx-auto"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
          >
            <video
              controls
              autoPlay
              className="w-full h-auto"
            >
              <source
                src={currentVideo}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 bg-gray-200 text-gray-700 rounded-full px-3 py-1 hover:bg-gray-300"
              onClick={() => setIsModalOpen(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
