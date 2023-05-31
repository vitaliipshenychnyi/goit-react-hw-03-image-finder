import { Component } from 'react';

export class ImageGalleryItem extends Component {
  render() {
    return (
      <li class="gallery-item">
        <p>{this.props.textForSearch}</p>
        <img src="" alt="" />
      </li>
    );
  }
}
