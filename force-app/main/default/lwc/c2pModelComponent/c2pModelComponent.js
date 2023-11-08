import { LightningElement } from 'lwc';

export default class C2pModelComponent extends LightningElement {
        closeHandler(){
         const myEvent=new CustomEvent('close',{
            detail:{
                msg:"modal closed successfully"
            }
         })
         this.dispatchEvent(myEvent)
        }
}