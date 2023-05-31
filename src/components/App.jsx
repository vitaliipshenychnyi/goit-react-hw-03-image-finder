import { React, Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from './searchbar/Searchbar';
import { ImageGalleryItem } from './image-gallery-item/ImageGalleryItem';

export class App extends Component {
  state = { textForSearch: '' };

  receiveTextForm = text => {
    this.setState({ textForSearch: text });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.receiveTextForm} />
        <ImageGalleryItem textForSearch={this.state.textForSearch} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
