import ImageCart from "../ImageCard/ImageCart"
import s from "./ImageGallery.module.css"

function ImageGallery({ images, openModal }) {
  return (
    <ul className={s.box}>
      {images.map((item) => (
        <li key={item.id}>
          <ImageCart images={item} openModal={openModal} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery