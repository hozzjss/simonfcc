import { SimonPage } from './app.po';

describe('simon App', () => {
  let page: SimonPage;

  beforeEach(() => {
    page = new SimonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
