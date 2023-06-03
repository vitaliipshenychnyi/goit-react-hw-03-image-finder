import { Component } from 'react';
import { ImageGalleryItem } from 'components/image-gallery-item/ImageGalleryItem';
import { fetchPictures } from 'api/api';

export class ImageGallery extends Component {
  state = {
    pictures: null,
    error: null,
  };

  async componentDidUpdate(prevProps, _) {
    const { textSearch, page } = this.props;

    if (prevProps.textSearch !== textSearch) {
      try {
        const pictures = await fetchPictures(textSearch, page);
        this.setState({ pictures });
        this.props.onSearch(pictures);
      } catch (error) {
        this.setState({ error });
      }
    }
  }

  render() {
    const { pictures, error } = this.state;

    return (
      <ul className="gallery">
        <ImageGalleryItem pictures={pictures} error={error} />
      </ul>
    );
  }
}
