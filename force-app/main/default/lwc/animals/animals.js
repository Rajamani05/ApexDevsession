import { LightningElement } from 'lwc';

export default class Animals extends LightningElement {
    name='cat';
    originalAge=12;
    newAge=0;

    get age(){
        if(originalAge>20){
            return originalAge;
        }
        return this.originalAge;
    }

    set age(value){
        //if(value>20){
        //    throw new Error('Invalid age for a cat');
        //}
        this.originalAge=value;
    }

updateAge(event){
    this.newAge=event.target.value;
    console.log(this.newAge)
}
updateOriginalAge(){
    this.age=this.newAge;
}
}