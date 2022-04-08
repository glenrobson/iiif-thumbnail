import { newE2EPage } from '@stencil/core/testing';

describe('iiif-thumbnail', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<iiif-thumbnail src="https://iiif-test.github.io/Jan2022/images/IMG_9069/full/504,/0/default.jpg"></iiif-thumbnail>');

    const element = await page.find('iiif-thumbnail');
    expect(element).toHaveClass('hydrated');
  });
});
