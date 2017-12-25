import { ShoppingListRecipeAppPage } from './app.po';

describe('shopping-list-recipe-app App', () => {
  let page: ShoppingListRecipeAppPage;

  beforeEach(() => {
    page = new ShoppingListRecipeAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
