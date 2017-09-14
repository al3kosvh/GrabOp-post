import { GrabOpPostPage } from './app.po';

describe('grab-op-post App', () => {
  let page: GrabOpPostPage;

  beforeEach(() => {
    page = new GrabOpPostPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
