import { Component } from 'react';
import { GalleryItem } from './ImageGalleryItem.styled';
import { ModalImg } from 'components/modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
    urlBig: '',
    alt: '',
  };

  // метод вкл/викл модального вікна
  toggleModal = () => {
    this.setState(state => ({ showModal: !this.state.showModal }));
  };

  test = event => {
    this.setState({ urlBig: event.target.dataset.url });
    this.toggleModal();
  };

  render() {
    return (
      <>
        {this.props.error && <p>{this.props.error.message}</p>}

        {this.props.pictures &&
          this.props.pictures.map(picture => (
            <GalleryItem key={picture.id}>
              <img
                src={picture.webformatURL}
                alt={picture.tags}
                data-url={picture.largeImageURL}
                onClick={this.test}
              />
            </GalleryItem>
          ))}

        {this.state.showModal && (
          <ModalImg urlBig={this.state.urlBig} alt={this.state.alt} />
        )}
      </>
    );
  }
}
