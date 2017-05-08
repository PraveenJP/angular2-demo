import { MyWebPage } from './app.po';

describe('my-web App', function() {
  let page: MyWebPage;

  beforeEach(() => {
    page = new MyWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
