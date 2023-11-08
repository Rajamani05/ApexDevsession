import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    constructor (){
        super()
        console.log("child constructor called")
    }

    connectedCallback(){
        console.log("child connectedCallback called")
    }

    renderedCallback(){
        console.log("child connectedCallback called")

    }
    disconnectedCallback(){
        alert("child disconnectedCallback called !!")
    }
}