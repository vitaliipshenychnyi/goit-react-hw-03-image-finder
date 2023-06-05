import { GalleryItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ pictures, error }) => {
  // test = () => {
  //  console.log(true)
  // };
  return (
    <>
      {error && <p>{error.message}</p>}

      {pictures &&
        pictures.map(picture => (
          <GalleryItem key={picture.id}>
            <img src={picture.webformatURL} alt={picture.tags} />
            {/* <img src={picture.webformatURL} alt={picture.tags} id={picture.id} onClick={this.test}/> */}
          </GalleryItem>
        ))}
    </>
  );
};
