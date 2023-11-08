import { LightningElement } from 'lwc';
import signin from './signin.html'
import signup from './signup.html'
import renderTemplate from './renderMethod.html'
export default class RenderMethod extends LightningElement {

    render(){
        return renderTemplate
    }
}