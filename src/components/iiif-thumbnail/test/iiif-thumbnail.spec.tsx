import { newSpecPage } from '@stencil/core/testing';
import { Thumbnail } from '../iiif-thumbnail';

describe('iiif-thumbnail', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Thumbnail],
      html: `<iiif-thumbnail src="https://iiif-test.github.io/Jan2022/images/IMG_9069/full/504,/0/default.jpg"></iiif-thumbnail>`,
    });
    expect(page.root).toEqualHtml(`
      <iiif-thumbnail  src="https://iiif-test.github.io/Jan2022/images/IMG_9069/full/504,/0/default.jpg">
        <mock:shadow-root>
          <div>
            <img class="thumbnail" src="https://iiif-test.github.io/Jan2022/images/IMG_9069/full/504,/0/default.jpg">
          </div>
        </mock:shadow-root>
      </iiif-thumbnail>
    `);
  });
});
