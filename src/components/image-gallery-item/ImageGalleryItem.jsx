import { GalleryItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ pictures, error }) => {
  return (
    <>
      {error && <p>{error.message}</p>}

      {pictures &&
        pictures.map(picture => (
          <GalleryItem key={picture.id}>
            <img src={picture.webformatURL} alt={picture.tags} />
          </GalleryItem>
        ))}
    </>
  );
};
