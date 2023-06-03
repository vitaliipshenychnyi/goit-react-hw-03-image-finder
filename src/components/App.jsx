import { React, Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from './searchbar/Searchbar';
import { ImageGallery } from './image-gallery/ImageGallery';
import { Wrapper } from './App.styled';

export class App extends Component {
  state = { textForSearch: '' };

  // метод отримання та збереження у state тексту для пошуку зображення
  receiveTextForSearch = text => {
    this.setState({ textForSearch: text });
  };

  render() {
    return (
      <Wrapper>
        <Searchbar onSubmit={this.receiveTextForSearch} />
        <ImageGallery textForSearch={this.state.textForSearch} />

        <ToastContainer autoClose={3000} />
      </Wrapper>
    );
  }
}
