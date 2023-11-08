import { LightningElement } from 'lwc';

export default class QuerySelector extends LightningElement {
    userName=["manu","parshu","adarsh","preetham"]
    fetchdetailshandler(){
        const elem=this.template.querySelector('h1')
        elem.style.border="1px solid red";
        console.log(elem.innerText)
                
        const userelement=this.template.querySelectorAll('.name')
        Array.from(userelement).forEach(item=>{
            console.log(item.innerText)
            item.setAttribute("title",item.innerText)
        })
    }
}