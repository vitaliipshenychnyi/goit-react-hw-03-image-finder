import { React, Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Searchbar } from './searchbar/Searchbar';
import { ImageGallery } from './image-gallery/ImageGallery';
import { Button } from './button/Button';

export class App extends Component {
  state = { textForSearch: '', picturesCollection: '', page: 1 };

  // метод отримання та збереження у state тексту для пошуку зображення
  receiveTextForm = text => {
    this.setState({ textForSearch: text });
  };

  // метод отримання та збереження у state знайдені зображення
  receivePictures = pictures => {
    this.setState({ picturesCollection: pictures });
    console.log(this.state.picturesCollection);
  };

  // метод отримання та збереження у state номер page
  receiveMorePictures = page => {
    this.setState({ page });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.receiveTextForm} />
        <ImageGallery
          textSearch={this.state.textForSearch}
          page={this.state.page}
          onSearch={this.receivePictures}
        />
        {this.state.picturesCollection.length >= 1 && (
          <Button add={this.receiveMorePictures} />
        )}

        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
