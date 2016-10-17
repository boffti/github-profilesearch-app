import { GithubProfilesearchAppPage } from './app.po';

describe('github-profilesearch-app App', function() {
  let page: GithubProfilesearchAppPage;

  beforeEach(() => {
    page = new GithubProfilesearchAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
