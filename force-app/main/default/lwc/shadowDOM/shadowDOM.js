import { LightningElement } from 'lwc';

export default class ShadowDOM extends LightningElement {
    isLoaded=false
    renderedcallback(){
        if(this.isLoaded) return
        const style=document.createElement('style')
        style.innerText=`c-shadow-dom-styling .slds-button{
            background: red;
            color:white;
        }`
        this.template.querySelector('lightning-button').appendChild(style)
    }
}