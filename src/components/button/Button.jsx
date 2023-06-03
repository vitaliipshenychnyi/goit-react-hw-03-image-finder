import { Component } from 'react';

export class Button extends Component {
  state = { page: 2 };

  // функція відправки даних до Арр
  addPictures = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    this.props.add(this.state.page);
  };

  render() {
    return (
      <button type="button" onClick={this.addPictures}>
        Load more
      </button>
    );
  }
}
