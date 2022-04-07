import { newE2EPage } from '@stencil/core/testing';

describe('iiif-thumbnail', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<iiif-thumbnail></iiif-thumbnail>');

    const element = await page.find('iiif-thumbnail');
    expect(element).toHaveClass('hydrated');
  });
});
