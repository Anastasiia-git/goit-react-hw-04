function ImageCart({ images, openModal }) {
  return (
    <div>
      <img
        src={images.urls.small}
        alt={images.alt_description}
        onClick={() => openModal(images)}
      />
    </div>
  );
}

export default ImageCart