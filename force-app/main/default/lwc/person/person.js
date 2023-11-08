import FirstName from '@salesforce/schema/Contact.FirstName';
import LastName from '@salesforce/schema/Contact.LastName';
import { LightningElement, api, track } from 'lwc';

export default class Person extends LightningElement {

    @api
    location;

   @track
   user={
    firstname:'raj',
    lastname:'kumar'
    };

    updateuser(){
        console.log("function called");
        //this.user={
         //   firstname:'manu',
           // lastname:'shaiva'
        //};
        this.user.firstname='shankar';

    }

}