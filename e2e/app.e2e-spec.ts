import { FrontendGadaiPage } from './app.po';

describe('frontend-gadai App', () => {
  let page: FrontendGadaiPage;

  beforeEach(() => {
    page = new FrontendGadaiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
