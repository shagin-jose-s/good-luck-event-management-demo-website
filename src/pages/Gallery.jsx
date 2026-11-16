import React, { useMemo, useState } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import "./Gallery.css";

// Automatically import all images inside gallery subfolders
const imageModules = import.meta.glob(
  "../assets/gallery/**/*.{jpg,jpeg,png,webp,avif}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

// Category configuration
const categories = [
  { id: "all", label: "All" },
  { id: "weddings", label: "Weddings" },
  { id: "birthdays", label: "Birthdays" },
  { id: "celebrations", label: "Celebrations" },
  { id: "corporate", label: "Corporate" },
  { id: "decor", label: "Décor" },
];

// Convert filename into readable title
const formatTitle = (filename) => {
  return filename
    .replace(/\.[^/.]+$/, "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
};

// Automatically create gallery data
const galleryImages = Object.entries(imageModules)
  .map(([path, imageUrl], index) => {
    const parts = path.split("/");
    const category = parts[parts.length - 2];
    const filename = parts[parts.length - 1];

    return {
      id: index + 1,
      image: imageUrl,
      category,
      title: formatTitle(filename),
    };
  })
  .filter((image) =>
    categories.some((category) => category.id === image.category)
  )
  .sort((a, b) => a.title.localeCompare(b.title));

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = useMemo(() => {
    if (activeCategory === "all") {
      return galleryImages;
    }

    return galleryImages.filter(
      (image) => image.category === activeCategory
    );
  }, [activeCategory]);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const showNext = () => {
    const currentIndex = filteredImages.findIndex(
      (image) => image.id === selectedImage.id
    );

    const nextIndex = (currentIndex + 1) % filteredImages.length;

    setSelectedImage(filteredImages[nextIndex]);
  };

  const showPrevious = () => {
    const currentIndex = filteredImages.findIndex(
      (image) => image.id === selectedImage.id
    );

    const previousIndex =
      (currentIndex - 1 + filteredImages.length) %
      filteredImages.length;

    setSelectedImage(filteredImages[previousIndex]);
  };

  return (
    <main className="gallery-page">

      {/* GALLERY HEADER */}
      <section className="gallery-header">
        <span className="gallery-eyebrow">
          <span></span>
          OUR GALLERY
          <span></span>
        </span>

        <h1>Gallery</h1>

        <p>
          A glimpse of our beautifully crafted events.
        </p>
      </section>

      {/* CATEGORY FILTER */}
      <section className="gallery-filter-section">
        <div className="gallery-filters">
          {categories.map((category) => (
            <button
              key={category.id}
              className={
                activeCategory === category.id ? "active" : ""
              }
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
      </section>

      {/* GALLERY IMAGES */}
      <section className="gallery-content">

        {filteredImages.length > 0 ? (
          <div className="gallery-masonry">
            {filteredImages.map((item) => (
              <article
                className="gallery-item"
                key={item.id}
                onClick={() => openLightbox(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />

                <div className="gallery-item-overlay">
                  <div>
                    <span>
                      {item.category}
                    </span>

                    <h3>{item.title}</h3>
                  </div>

                  <button aria-label="View image">
                    <Maximize2 size={19} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="gallery-empty">
            <h3>No images available</h3>
            <p>
              Add images to the selected category folder
              to display them here.
            </p>
          </div>
        )}

      </section>

      {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="gallery-lightbox"
          onClick={closeLightbox}
        >
          <button
            className="lightbox-close"
            onClick={closeLightbox}
            aria-label="Close image"
          >
            <X size={25} />
          </button>

          <button
            className="lightbox-navigation lightbox-prev"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={30} />
          </button>

          <div
            className="lightbox-image-container"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
            />

            <div className="lightbox-caption">
              <span>{selectedImage.category}</span>
              <h3>{selectedImage.title}</h3>
            </div>
          </div>

          <button
            className="lightbox-navigation lightbox-next"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
          >
            <ChevronRight size={30} />
          </button>
        </div>
      )}

    </main>
  );
};

export default Gallery;