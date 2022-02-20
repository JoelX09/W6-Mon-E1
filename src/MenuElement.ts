import { v4 as uuidv4 } from 'uuid';

export class MenuElement {
  private id: string;
  private name: string;
  private price: number;
  private emoji: string;

  constructor(name: string, price: number, emoji: string) {
    this.id = uuidv4();
    this.name = name;
    this.price = price;
    this.emoji = emoji;
  }

  printOption() {
    return `${this.name}.... $${this.price}`;
  }

  getId(){
    return this.id;
  }

  getEmoji(){
    return this.emoji;
  }

  getPrice(){
    return this.price;
  }
}
