import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {
    ischildvisible=false
    constructor (){
        super()
        console.log("parent constructor called")
    }

    connectedCallback(){
        console.log("parent connectedCallback called")
    }

    renderedCallback(){
        console.log("parent renderCallback called")

    }
    handleclick(){
        this.ischildvisible=!this.ischildvisible
    }

    errorCallback(error, stack){
        console.log(error.message)
        console.log(stack)
    }
}