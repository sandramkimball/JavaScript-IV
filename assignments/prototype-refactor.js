/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*
              === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

/*
            === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

/*
            === Humanoid ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

function Humanoid(attr){
    this.newCreatedAt = attr.createdAt,
    this.dimensions = attr.dimensions,
    this.healthPoints = attr.healthPoints,
    this.name = attr.name,
    this.team = attr.team,
    this.weapons = attr.weapons,
    this.language = attr.language
  }
  
  function Villain(attr){
    this.dimensions = attr.dimensions,
    this.healthPoints = attr.healthPoints,
    this.name = attr.name,
    this.team = attr.team,
    this.attack = attr.attack
  }
  
  /*function Hero(attr){
    this.dimensions = attr.dimensions,
    this.healthPoints = attr.healthPoints,
    this.name = attr.name,
    this.team = attr.team,
    this.attack = attr.attack,
    this.language = attr.language
  }*/
  
  Date.prototype.createdAt = function() {
    return Date;
  }
  
  Humanoid.prototype.destroy = function(){
    return `${this.name} was removed from the game.`;
  }
  
  Humanoid.prototype.takeDamage = function(){
    return `${this.name} took damage.`;
  }
  
  Humanoid.prototype.greet = function(){
    return `${this.name} offers a greeting in ${this.language}.`;
  }
  
  Villain.prototype.attack = function(Humanoid){
    if(Humanoid.healthPoints <= this.attackPoints){
      return `${this.name} has destroyed ${Humanoid.name}!`;
    } else {
      return `${Humanoid.name} still lives!`;
    }
  }
  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
  
    const theMeg = new Villain({
      healthPoints: 20,
      name: 'The Meg',
      team: 'Villains',
      attackPoints: 12,
      dimensions: {
        length: 5,
        width: 6,
        height: 10
      },
    });
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
    console.log(theMeg.attack(mage));
  
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!