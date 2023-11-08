import { LightningElement, api } from 'lwc';

export default class P2cSlider extends LightningElement {
    val=20
    changHandler(event){
        this.val=event.target.value
    }

    @api resetSlider(){
        this.val=50
    }
}