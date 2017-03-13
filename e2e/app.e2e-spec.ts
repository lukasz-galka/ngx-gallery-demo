import { NgxGalleryDemoPage } from './app.po';

describe('ngx-gallery-demo App', () => {
  let page: NgxGalleryDemoPage;

  beforeEach(() => {
    page = new NgxGalleryDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
