import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'iiif-thumbnail',
  styleUrl: 'iiif-thumbnail.css',
  shadow: true,
})
export class Thumbnail {

  // Indicate that name should be a public property on the component
  @Prop() src: string;

  render() {
    return (
        <img src={this.src} />
    );
  }
}
