import { LightningElement } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
export default class ContactFormReadonly extends LightningElement {
        objectName= CONTACT_OBJECT;
        recordId='0035g00000j5SnrAAE';

        handleLoad(event){
            console.log(event.type);
            console.log(event.detail);
        }

        updateRecordId(event){
            this.recordId='0035g00000j5SnnAAE';
        }
}
