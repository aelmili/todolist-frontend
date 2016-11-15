import { TodolistFrontendPage } from './app.po';

describe('todolist-frontend App', function() {
  let page: TodolistFrontendPage;

  beforeEach(() => {
    page = new TodolistFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
