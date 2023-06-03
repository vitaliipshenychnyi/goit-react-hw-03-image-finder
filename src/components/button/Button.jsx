import { Component } from 'react';

export class Button extends Component {
  state = { page: 2 };

  // функція додавання page та відправки даних до ImageGallery
  addPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    this.props.morePictures(this.state.page);
  };

  render() {
    return (
      <button type="button" onClick={this.addPage}>
        Load more
      </button>
    );
  }
}
