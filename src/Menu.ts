import { MenuElement } from "./MenuElement";
import { Choice, Input, SelectChoice } from "./Input";

export class Menu {
  mainMenu: SelectChoice[] = [];
  soupMenu: Choice[] = [];
  chefSpecialsMenu: Choice[] = [];
  chickenMenu: Choice[] = [];
  beefMenu: Choice[] = [];
  beveragesMenu: Choice[] = [];
  soupOptions: MenuElement[] = [];
  chefSpecialsOptions: MenuElement[] = [];
  chickenOptions: MenuElement[] = [];
  beefOptions: MenuElement[] = [];
  beveragesOptions: MenuElement[] = [];

  constructor() {
    this.fillMainMenu();
    this.fillOptions();
    this.fillSubMenus();
  }

  fillMainMenu() {
    this.mainMenu = [
      { option: 1, message: "Soup" },
      { option: 2, message: "Chef's Specials" },
      { option: 3, message: "Chiken" },
      { option: 4, message: "Beef" },
      { option: 5, message: "Beverages" },
      { option: 6, message: "Exit" },
    ];
  }

  fillOptions() {
    this.soupOptions = [
      new MenuElement("Wonton Soup (Chicken)", 2.25, "🥣"),
      new MenuElement("Chicken Corn Soup", 1.95, "🍛"),
      new MenuElement("Vegetable Corn Soup", 2.25, "🥗"),
    ];

    this.chefSpecialsOptions = [
      new MenuElement("Orange Beef", 8.95, "🍝"),
      new MenuElement("Kung Pao Shrimp", 8.5, "🍤"),
    ];

    this.chickenOptions = [
      new MenuElement("Lemon Chicken", 9.95, "🍗"),
      new MenuElement("Sesame Chicken", 9.95, "🍠"),
      new MenuElement("Hunan Chicken", 10.5, "🥠"),
    ];

    this.beefOptions = [
      new MenuElement("Pepper Steak", 9.95, "🥩"),
      new MenuElement("Manchurian Beef", 11.95, "🍖"),
    ];

    this.beveragesOptions = [
      new MenuElement("Piña Colada", 3.0, "🧉"),
      new MenuElement("Spanish Coffee", 5.5, "☕"),
    ];
  }

  fillSubMenus() {
    this.soupMenu = this.soupOptions.map((choice: MenuElement) => ({
      name: choice.getId(),
      message: choice.printOption(),
    }));

    this.chefSpecialsMenu = this.chefSpecialsOptions.map(
      (choice: MenuElement) => ({
        name: choice.getId(),
        message: choice.printOption(),
      })
    );

    this.chickenMenu = this.chickenOptions.map((choice: MenuElement) => ({
      name: choice.getId(),
      message: choice.printOption(),
    }));

    this.beefMenu = this.beefOptions.map((choice: MenuElement) => ({
      name: choice.getId(),
      message: choice.printOption(),
    }));

    this.beveragesMenu = this.beveragesOptions.map((choice: MenuElement) => ({
      name: choice.getId(),
      message: choice.printOption(),
    }));
  }

  async showMainMenu() {
    let menu = await Input.getSelect("Select a menu option", this.mainMenu);
    while (menu.data !== 6) {
      switch (menu.data) {
        case 1: {
          await this.showSubMenu("Select your Soup", this.soupMenu, this.soupOptions);
          break;
        }
        case 2: {
          await this.showSubMenu("Select your Chef's Specials", this.chefSpecialsMenu, this.chefSpecialsOptions);
          break;
        }
        case 3: {
          await this.showSubMenu("Select your Chicken", this.chickenMenu, this.chickenOptions);
          break;
        }
        case 4: {
          await this.showSubMenu("Select your Beef", this.beefMenu, this.beefOptions);
          break;
        }
        case 5: {
          await this.showSubMenu("Select your Beverages", this.beveragesMenu, this.beveragesOptions);
          break;
        }
      }

      menu = await Input.getSelect("Select a menu option", this.mainMenu);
    }
  }

  async showSubMenu(message: string, subMenu: Choice[], subMenuOptions: MenuElement[]) {
    let id = await Input.getSelectById(message, subMenu);
    for(let option of subMenuOptions){
      if(option.getId() === id.data){
        console.log(`
        =====================================================
           Here is your ${option.getEmoji()} at a $${option.getPrice()} cost
        =====================================================
        `);
        return;
      }
    }
  }
}
