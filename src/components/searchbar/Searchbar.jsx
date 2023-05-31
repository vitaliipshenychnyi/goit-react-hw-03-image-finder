import { Component } from 'react';
import { toast } from 'react-toastify';

export class Searchbar extends Component {
  state = { text: '' };

  // отримання значення з поля введення та запис до state
  handleSearch = event => {
    this.setState({ text: event.currentTarget.value.toLowerCase() });
  };

  // функція відправки даних до App
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.text.trim() === '') {
      return toast.warn('Ви не ввели текст для пошуку!');
    }
    this.props.onSubmit(this.state.text);
    this.setState({ text: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button className="button" type="submit">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            name="text"
            value={this.state.text}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleSearch}
          />
        </form>
      </header>
    );
  }
}
