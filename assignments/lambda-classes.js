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
        this.name = attr.name;
        this.newAge = attr.age;
        this.newLocation = attr.location;
    }
    speak(){
        return `Goodmorning. My name is ${this.name} and I am a ${this.newLocation}.`
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
         return `Today we are learning about ${subject}.`;
     }
     graded(student, subject){
         return `${student.name} receives a perfect score on ${subject}.`;
     }
     editGrade(student){
         var newGrade = Math.floor(Math.random() * 101) +- student.grade;
         return `${student.name} now has a grade of ${newGrade}.`
     }
 };

 
 class Student extends Person{
     constructor(attr){
         super(attr);
         this.previousBackground = attr.previousBackground;
         this.newClassName = attr.className;
         this.faveSubjects = attr.faveSubjects;
         this.grade = attr.grade;
     }
     listsSubjects(){
         return `${this.faveSubjects}`
     }
     PRAssignment(subject){
         return `${this.name} has submitted a PR for ${subject}.`
     }
     sprintChallenge(subject){
         return `${this.name} has begun sprint challenge on ${subject}.`
     }
 };

 class TeamLead extends Instructor{
     constructor(attr){
         super(attr);
         this.gradClassName = attr.gradClassName;
         this.faveInstructor = attr.faveInstructor;
     }
     standup(channel){
         return `${this.name} announces to ${channel}, @channel standy times!`;
     }
     debugsCode(student, subject){
         return `${this.name} debugs ${student.name}'s code on ${subject}.`;
     }
 }


 //Person, Instructor, Student, Teamlead

 const russ = new Person({
    name: 'Russell',
    age: 12,
    location: 'Wilderness Explorer from Tribe 54',
})
 
 const corben = new Instructor({
     name: 'Corben',
     age: 24,
     location: 'Oceanside',
     specialty: 'Communications',
     faveLanguage:'SQL',
     catchPhrase: 'I am b-e-a-utiful!',
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
    grade: 22,
})

const mufasa = new Student({
    name: 'Mufasa',
    age: 13,
    location: 'Sahara',
    previousBackground: 'King of the Shadows',
    className: 'Web411',
    faveSubjects: 'Web Development',
    grade: 85,
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


console.log(russ.speak());
console.log(corben.demo('html'));
console.log(mabel.graded(dipper, 'REACT'));


console.log(dipper.listsSubjects());
console.log(mufasa.PRAssignment('Python'));
console.log(dipper.sprintChallenge('SQL'));

console.log(rapunzel.standup('HackerDome'));
console.log(peter.debugsCode(mufasa, 'Java'));


console.log(mabel.editGrade(dipper));