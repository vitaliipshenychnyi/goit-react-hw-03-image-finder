import { React, Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from './searchbar/Searchbar';
import { ImageGallery } from './image-gallery/ImageGallery';

export class App extends Component {
  state = { textForSearch: '' };

  // метод отримання та збереження у state тексту для пошуку зображення
  receiveTextForSearch = text => {
    this.setState({ textForSearch: text });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.receiveTextForSearch} />
        <ImageGallery textForSearch={this.state.textForSearch} />

        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
