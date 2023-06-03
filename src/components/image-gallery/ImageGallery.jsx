import { Component } from 'react';
import { ImageGalleryItem } from 'components/image-gallery-item/ImageGalleryItem';
import { getPictures } from 'api/api';
import { Loader } from 'components/loader/Loader';
import { Button } from 'components/button/Button';

export class ImageGallery extends Component {
  state = {
    pictures: null,
    error: null,
    status: 'idle',
  };

  async componentDidUpdate(prevProps, _) {
    const { textForSearch, page } = this.props;

    if (prevProps !== this.props) {
      this.setState({ status: 'pending' });
      // this.setState({ pictures: null });
      try {
        const pictures = await getPictures(textForSearch, page);
        if (!pictures.length) {
          this.setState({
            error: `Зображення ${textForSearch} відсутні`,
            status: 'rejected',
          });
        } else {
          this.setState({ pictures, status: 'resolved' });
        }
        // this.props.onSearch(pictures);
      } catch (error) {
        this.setState({ error: error.message, status: 'rejected' });
      }
    }
  }

  render() {
    const { pictures, error, status } = this.state;

    if (status === 'pending') return <Loader />;
    if (status === 'resolved')
      return (
        <ul className="gallery">
          <ImageGalleryItem pictures={pictures} error={error} />
          <Button />
        </ul>
      );
    if (status === 'rejected') return <p>{error}</p>;
  }
}
