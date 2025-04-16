import Modal from "react-modal";
import s from "./ImageModal.module.css"

function ImageModal({ customStyles, isOpen, closeModal, images }) {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {images ? (
          <img
            src={images.urls.regular}
            alt={images.alt_description}
            className={s.image}
          />
        ) : (
          <p>Image not found...</p>
        )}
      </Modal>
    </div>
  );
}

export default ImageModal;
