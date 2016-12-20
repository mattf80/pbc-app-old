import { PbcAppPage } from './app.po';

describe('pbc-app App', function() {
  let page: PbcAppPage;

  beforeEach(() => {
    page = new PbcAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
