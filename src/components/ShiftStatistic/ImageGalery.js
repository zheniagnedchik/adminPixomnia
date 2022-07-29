import React, { useState, useCallback, useEffect } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ImageGalery = ({ urls, setUrls }) => {
  const [photos, setPhotos] = useState();
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  useEffect(() => {
    const items = urls.map((item) => {
      return { src: item, width: 1, height: 1 };
    });
    setPhotos(items);
  }, [setPhotos]);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          width: 70,
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          marginTop: 20,
          marginLeft: 20,
          paddingBottom: 20,
        }}
        onClick={() => setUrls(false)}
      >
        <ArrowBackIcon /> back
      </div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

export default ImageGalery;
