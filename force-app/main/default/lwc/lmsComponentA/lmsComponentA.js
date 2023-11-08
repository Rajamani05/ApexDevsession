import { LightningElement, wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c"
import { MessageContext, publish} from 'lightning/messageService';
export default class LmsComponentA extends LightningElement {
    @wire(MessageContext)
    context

    inputHandler(event){
        this.inputValue=event.target.value
    }

}