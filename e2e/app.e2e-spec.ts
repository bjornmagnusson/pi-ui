import { PiUiPage } from './app.po';

describe('pi-ui App', function() {
  let page: PiUiPage;

  beforeEach(() => {
    page = new PiUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
