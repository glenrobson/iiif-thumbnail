import { newSpecPage } from '@stencil/core/testing';
import { IiifThumbnail } from '../iiif-thumbnail';

describe('iiif-thumbnail', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IiifThumbnail],
      html: `<iiif-thumbnail></iiif-thumbnail>`,
    });
    expect(page.root).toEqualHtml(`
      <iiif-thumbnail>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </iiif-thumbnail>
    `);
  });
});
