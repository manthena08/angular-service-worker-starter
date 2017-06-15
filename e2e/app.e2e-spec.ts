import { PwaConceptPage } from './app.po';

describe('pwa-concept App', () => {
  let page: PwaConceptPage;

  beforeEach(() => {
    page = new PwaConceptPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
