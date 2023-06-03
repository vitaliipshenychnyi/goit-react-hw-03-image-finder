export const ImageGalleryItem = ({ pictures, error }) => {
  return (
    <>
      {error && <p>{error.message}</p>}
      
      {pictures &&
        pictures.map(picture => (
          <li className="gallery-item" key={picture.id}>
            <img src={picture.webformatURL} alt={picture.tags} width={300} />
          </li>
        ))}
    </>
  );
};
