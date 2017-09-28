import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {
  // class Person {
  //   constructor(name = 'Anonymous', age = 0) {
  //     this.name = name;
  //     this.age = age;
  //   }
  //
  //   getGreetings(){
  //     return `Hi! I'm ${this.name}`;
  //   }
  //
  //   getPersonDesc(){
  //     return `This is ${this.name}, with ${this.age} year(s) old.`
  //   }
  // }
  //
  // class Programmer extends Person {
  //   constructor(name, age, pLanguage = 'Assembly') {
  //     super(name, age);
  //     this.pLanguage = pLanguage;
  //   }
  //
  //   getGreetings(){
  //     if(this.pLanguage){
  //       return `Hi, I'm ${this.name}, and I'm a ${this.pLanguage} developer.`;
  //     } else {
  //       super.getGreetings();
  //     }
  //   }
  // }
  //
  // let me = new Programmer('Déda', 32);
  // console.log(me.getGreetings());
  // console.log(me.getPersonDesc());
});
