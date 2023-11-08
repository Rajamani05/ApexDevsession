import { LightningElement } from 'lwc';

export default class PersonDetails extends LightningElement {

    name="manu";
    details="manu is the CEO and founder of loyaltrack";
    showDetails=true;
    actionButtonLabel='Show Details';

    toggleDetails(){
        this.showDetails=!this.showDetails;
        this.actionButtonLabel=this.showDetails ? 'Hide Details' : 'Show Details';
        console.log(this.showDetails);
    }
}