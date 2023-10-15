export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (!this.members.has(character)) {
      this.members.add(character);
    } else {
      throw new Error('Такой персонаж уже есть в команде');
    }
  }

  addAll(...characters) {
    for (const character of characters) {
      this.add(character);
    }
  }

  toArray() {
    return Array.from(this.members);
  }
}
