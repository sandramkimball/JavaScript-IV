/* 

Prototype Refactor

Refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
              === GameObject ===
  * createdAt
  * name
  * dimensions 
  * destroy()`
*/

/*
            === CharacterStats ===
  * healthPoints
  * takeDamage() 
  * should inherit destroy() 
*/

/*
            === Humanoid ===
  * team
  * weapons
  * language
  * greet() 
  * should inherit destroy() 
  * should inherit takeDamage() 
*/
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
*/

class Humanoid{
    constructor(attr){
        this.newCreatedAt = attr.createdAt,
        this.dimensions = attr.dimensions,
        this.healthPoints = attr.healthPoints,
        this.name = attr.name,
        this.team = attr.team,
        this.weapons = attr.weapons,
        this.language = attr.language
  }
  destroy(){
    return `${this.name} was removed from the game.`;
  };
  
  takeDamage(){
    return `${this.name} took damage.`;
  }
  
  greet(){
    return `${this.name} offers a greeting in ${this.language}.`;
  };

  createdAt() {
    return Date;
  }
}
  
  class Villain extends Humanoid{
      constructor(attr){
        super(attr);
        this.attack = attr.attack
    }
    attack(victim){
        if(victim.healthPoints - this.attackPoints <= 0){
          return `${this.name} has eaten ${victim.name}!`;
        } else {
          return `${victim.name} survived the attack!`;
        }
      };
  }
  
  
  
        //CHARACTERS
  
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
      createdAt: new Date(),
      dimensions: {
        length: 25,
        width: 10,
        height: 10,
      },
      healthPoints: 20,
      name: 'The Meg',
      team: 'Sharks',
      weapons: [
        'Jaws',
      ],
      language: 'none',
      attackPoints: 12,
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