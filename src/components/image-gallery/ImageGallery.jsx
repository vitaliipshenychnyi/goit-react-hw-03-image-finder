import PropTypes from 'prop-types';
import { Component } from 'react';
import { ImageGalleryItem } from 'components/image-gallery-item/ImageGalleryItem';
import { getPictures } from 'api/api';
import { Loader } from 'components/loader/Loader';
import { Button } from 'components/button/Button';
import { GalleryList } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    pictures: null,
    error: null,
    status: 'idle',
  };

  // метод додавання зображень
  addPictures = async page => {
    const { textForSearch } = this.props;

    try {
      const pictures = await getPictures(textForSearch, page);
      if (!pictures.length) {
        this.setState({
          error: `Зображення ${textForSearch} відсутні`,
          status: 'rejected',
        });
      } else {
        this.setState(prevState => ({
          pictures: [...prevState.pictures, ...pictures],
          status: 'resolved',
        }));
      }
    } catch (error) {
      this.setState({ error: error.message, status: 'rejected' });
    }
  };

  async componentDidUpdate(prevProps, _) {
    const { textForSearch } = this.props;

    if (prevProps !== this.props) {
      this.setState({ status: 'pending' });
      try {
        const pictures = await getPictures(textForSearch, this.state.page);
        if (!pictures.length) {
          this.setState({
            error: `Зображення ${textForSearch} відсутні`,
            status: 'rejected',
          });
        } else {
          this.setState({ pictures, status: 'resolved' });
        }
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
        <GalleryList>
          <ImageGalleryItem pictures={pictures} error={error} />
          <Button morePictures={this.addPictures} />
        </GalleryList>
      );
    if (status === 'rejected') return <p>{error}</p>;
  }
}

ImageGallery.propTypes = {
  textForSearch: PropTypes.string.isRequired,
};
