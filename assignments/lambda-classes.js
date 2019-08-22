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

 class Instructor extends Person{
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

 
 class Student extends Person{
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


 //Person, Instructor, Student, Teamlead

 const russ = new Person({
    name: 'Russ',
    age: 72,
    location: 'Rancho Cucomunga',
})
 
 const corben = new Instructor({
     name: 'Corben',
     age: 24,
     location: 'Oceanside',
     specialty: 'Communications',
     faveLanguage:'SQL',
     catchPhrase: 'Okie Dokies',
 })

 const mabel = new Instructor({
    name: 'Mabel',
    age: 23,
    location: 'Gravity Falls',
    specialty: 'Web Design',
    faveLanguage:'CSS',
    catchPhrase: 'Llamas are nature\'s greatest warriors.',
})

const dipper = new Student({
    name: 'Dipper',
    age: 22,
    location: 'Gravity Falls',
    previousBackground: 'Camp Counselor',
    className:'Web303',
    faveSubjects: 'C#',
})

const simba = new Student({
    name: 'Simba',
    age: 5,
    location: 'Sahara',
    previousBackground: 'Prince',
    className: 'Web411',
    faveSubjects: 'Web Development',
})

const rapunzel = new TeamLead({
    name: 'Rapunzel',
    age: 25,
    location: 'Hidden Meadows',
    gradClassName: 'Web2',
    faveInstructor: 'Corben'
})

const peter = new TeamLead({
    name: 'Peter Parker',
    age: 19,
    location: 'New York',
    gradClassName: 'Web3',
    faveInstructor: 'Mabel'
})



