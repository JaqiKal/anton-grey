import React, { useState } from "react";

const artworks = [
  {
    id: 1,
    title: "2D Animation Showreel by Anton Skogsberg",
    description: "Video, mp4.",
    imageUrl: "https://res.cloudinary.com/dsbcjtatz/image/upload/v1735807737/anton/2D/antonSkogsberg_2DThumbnail_v001_b4u6ha.png",
    videoUrl: "https://res.cloudinary.com/dsbcjtatz/video/upload/v1735807745/anton/2D/antonSkogsberg_2DShowreel_v003_kd941l.mp4",
    category: "2D",
  },

  {
    id: 2,
    title: "3D Animation Showreel by Anton Skogsberg",
    description: "Video, mp4.",
    imageUrl: "https://res.cloudinary.com/dsbcjtatz/image/upload/v1735807074/anton/3D/antonSkogsberg_3DThumbnail_v001_efmy9d.png",
    videoUrl: "https://res.cloudinary.com/dsbcjtatz/video/upload/v1735807083/anton/3D/antonSkogsberg_3DShowreel_v006_lcpenm.mp4",
    category: "3D",
  },
];

const Gallery = () => {
  const [filter, setFilter] = useState("all");

  const filteredArtworks = filter === "all" ? artworks : artworks.filter((art) => art.category === filter);

  const handleMouseEnter = (e) => {
    if (e.target.readyState >= 2) {
      // Ensure the video is ready to play
      e.target.play();
    }
  };

  const handleMouseLeave = (e) => {
    e.target.pause();
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 hidden">Gallery</h1>

      {/* Dropdown Menu */}
      <div className="flex justify-end mb-8">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 bg-gray-100 rounded-lg border border-gray-300 shadow-sm"
        >
          <option value="all">Show All</option>
          <option value="2D">2D animation</option>
          <option value="3D">3D animation</option>
          <option value="char">Character Design</option>
        </select>
      </div>

      {/* Gallery Grid */}
      {filteredArtworks.length === 0 ? (
        <div className="text-center text-fuchsia-100 mt-24">
          <h2 className="text-2xl font-bold">🚧 Work in Progress! 🚧</h2>
          <p className="mt-2">Great things are on the way! Grab a coffee and check back soon. ☕</p>
        </div>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredArtworks.map((art) => (
            <div
              key={art.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              {art.category === "video" ? (
                <video
                  src={art.videoUrl}
                  poster={art.imageUrl}
                  muted
                  loop
                  loading="lazy"
                  className="w-full h-48 object-cover"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              ) : (
                <img
                  src={art.imageUrl}
                  alt={art.title}
                  loading="lazy"
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2">{art.title}</h2>
                <p className="text-gray-700">{art.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
