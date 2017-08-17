import { SsiPage } from './app.po';

describe('ssi App', function() {
  let page: SsiPage;

  beforeEach(() => {
    page = new SsiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
