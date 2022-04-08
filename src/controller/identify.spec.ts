import { identify } from './identify';

describe('identify', () => {
    it('Expected image URL to be returned', () => {
        const url = 'https://iiif-test.github.io/Jan2022/images/IMG_9069/full/504,/0/default.jpg';
        identify(url, 0, 0).then(response =>
            expect(response).toEqual(url)
        );
    });
});
