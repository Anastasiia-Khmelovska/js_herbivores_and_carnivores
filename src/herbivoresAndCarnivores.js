'use strict';

class Animal {
  constructor(name, health) {
    this.name = name;
    this.health = 100;
    Animal.alive.push(this);
  }
}

Animal.alive = [];

class Herbivore extends Animal {
  constructor(name, health, hidden) {
    super(name, health);
    this.hidden = false;
    Animal.alive.push(this);
  }
  hide() {
    this.hidden = !this.hidden;
  }
}

class Carnivore extends Animal {
  bite(herbivore) {
    if (herbivore.hidden !== true && herbivore instanceof Herbivore) {
      herbivore.health -= 50;

      if (herbivore.health <= 0) {
        Animal.alive = Animal.alive.filter(animal => animal.health > 0);
      }
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
