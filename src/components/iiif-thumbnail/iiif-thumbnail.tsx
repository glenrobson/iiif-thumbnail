import { Component, Prop, h } from '@stencil/core';
import { identify } from '../../controller/identify';

@Component({
  tag: 'iiif-thumbnail',
  styleUrl: 'iiif-thumbnail.css',
  shadow: true,
})
export class Thumbnail {

  // Indicate that name should be a public property on the component
  @Prop() src: string;
  @Prop() width: string ;
  @Prop() height: string;
  private url: string;

  convertDimensions(dimension: string):number {
    if (!dimension) {
        return -1;
    } else {
        if (dimension.includes('px')) {
            return Number(dimension.replace("px",""));
        } else {
            return Number(dimension);
        }
    }
  }

  componentWillLoad() {
    return identify(this.src, this.convertDimensions(this.width), this.convertDimensions(this.height)).then(
        response => this.url = response
    );
  }

  render() {
    // set width and height of parent to width and height
    // set image to:
    // width: 100%;
    // height: 100%;
    // object-fit: contain;
    const dimensions = {
        "width": this.width,
        "height": this.height
    };
    return (
        <div style={dimensions}>
            <img src={this.url} class="thumbnail"/>
        </div>
    );
  }
}
