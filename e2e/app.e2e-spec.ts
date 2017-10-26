import { MEANAppPage } from './app.po';

describe('meanapp App', function() {
  let page: MEANAppPage;

  beforeEach(() => {
    page = new MEANAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
