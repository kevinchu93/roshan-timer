import { DotaAppPage } from './app.po';

describe('dota-app App', () => {
  let page: DotaAppPage;

  beforeEach(() => {
    page = new DotaAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
