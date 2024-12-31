import React, { useState } from "react";

const artworks = [
  {
    id: 1,
    title: "Set the Table",
    description: "Pencil Drawing, 24x36 cm.",
    imageUrl: "https://res.cloudinary.com/dsbcjtatz/image/upload/v1735550553/anton/image/drawing-7279358_eoem5a.jpg",
    category: "drawing",
  },

  {
    id: 2,
    title: "Golden Globe",
    description: "Video, mp4.",
    imageUrl: "https://res.cloudinary.com/dsbcjtatz/video/upload//w_400,h_300,c_fill/v1735554889/anton/video/3129902-uhd_3840_2160_25fps-guldglob_fte6hg.jpg",
    videoUrl: "https://res.cloudinary.com/dsbcjtatz/video/upload/v1735554889/anton/video/3129902-uhd_3840_2160_25fps-guldglob_fte6hg.mp4",
    category: "video",
  },
  {
    id: 3,
    title: "Sound of Music",
    description: "Photo",
    imageUrl: "https://res.cloudinary.com/dsbcjtatz/image/upload/v1735550418/anton/photo/pexels-mikebirdy-114820_wrfmkg.jpg",
    category: "photo",
  },
  {
    id: 4,
    title: "The Mountain",
    description: "Photo",
    imageUrl: "https://res.cloudinary.com/dsbcjtatz/image/upload/v1735550417/anton/photo/pexels-eberhardgross-1624496_epkm0j.jpg",
    category: "photo",
  },
  {
    id: 5,
    title: "Doggo",
    description: "Pencil Drawing, 15x21 cm.",
    imageUrl: "https://res.cloudinary.com/dsbcjtatz/image/upload/v1735550551/anton/image/dog-8024345_hyyxf3.jpg",
    category: "drawing",
  },
  {
    id: 6,
    title: "Aquarium",
    description: "Video, mp4.",
    imageUrl: "https://res.cloudinary.com/dsbcjtatz/video/upload//w_400,h_300,c_fill/v1735550400/anton/video/3765078-hd_1920_1080_30fps-fiskar_atniqr.jpg",
    videoUrl: "https://res.cloudinary.com/dsbcjtatz/video/upload/v1735550400/anton/video/3765078-hd_1920_1080_30fps-fiskar_atniqr.mp4",
    category: "video",
  },
  {
    id: 7,
    title: "Windows",
    description: "Photo",
    imageUrl: "https://res.cloudinary.com/dsbcjtatz/image/upload/v1735550415/anton/photo/pexels-pixabay-161154_ixjm98.jpg",
    category: "photo",
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
    <>
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
            <option value="video">Videos</option>
            <option value="photo">Photography</option>
            <option value="animation">Animation</option>
            <option value="drawing">Drawing</option>
          </select>
        </div>

        {/* Gallery Grid */}
        {filteredArtworks.length === 0 ? (
          <div className="text-center text-gray-500 mt-8">
            <h2 className="text-2xl font-bold">Oops, nothing found!</h2>
            <p>Try selecting a different category.</p>
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
    </>
  );
};

export default Gallery;
