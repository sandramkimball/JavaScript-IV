// CODE here for your Lambda Classes
/*
person
-instructor
    -team lead
-students

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});
 */

 class Person{
    constructor(attr){
        this.newName = attr.name;
        this.newAge = attr.age;
        this.newLocation = attr.location;
    }
    speak(){
        return `Hello. My name is ${this.newName}, I am from ${this.newLocation}.`
    }
 }

 class Instructors extends Person{
     constructor(attr){
         super(attr);
         this.newSpecialty = attr.specialty;
         this.newFavLanguage = attr.faveLanguage;
         this.newCatchPhrase = attr.catchPhrase;
     }
     demo(subject){
         return `Today we are learning about ${subject}.`
     }
     grade(student, subject){
         return `${student.name} receives a perfect score on ${subject}.`
     }
 };

 
 class Students extends Person{
     constructor(attr){
         super(attr);
         this.newBackground = attr.previousBackground;
         this.newClassName = attr.className;
         this.newFaveSubjects = attr.faveSubjects;
     }
     listsSubjects(){
         console.log(this.newFaveSubjects);
     }
     PRAssignment(subject){
         console.log(`${this.newName} has submitted a PR for ${subject}.`)
     }
     sprintChallenge(subject){
         console.log(`${this.newName} has begun sprint challenge on ${subject}.`)
     }
 };

 class TeamLead extends Instructors{
     constructor(attr){
         super(attr);
         this.newGradClass = attr.gradClassName;
         this.newFaveInstructor = attr.faveInstructor;
     }
     standup(channel){
         return `${this.newName} announces to ${channel}, @channel standy times! `;
     }
     debugsCode(student, subject){
         return `${this.newName} debugs ${student.name}'s code on ${subject}`;
     }
 }