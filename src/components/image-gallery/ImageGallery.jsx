import { Component } from 'react';
import { ImageGalleryItem } from 'components/image-gallery-item/ImageGalleryItem';

const URL = 'https://pixabay.com/api/';

export class ImageGallery extends Component {
  state = {
    pictures: null,
    error: null,
  };

  componentDidUpdate(prevProps, _) {
    const { textSearch } = this.props;
    if (prevProps.textSearch !== textSearch) {
      fetch(
        `${URL}?q=${textSearch}&page=1&key=35659797-8cc42750c81fcd96097728ed9&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(
            new Error(`Зображення з назвою ${textSearch} відсутні`)
          );
        })
        .then(pictures => this.setState({ pictures }))
        .catch(error => this.setState({ error }));
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
