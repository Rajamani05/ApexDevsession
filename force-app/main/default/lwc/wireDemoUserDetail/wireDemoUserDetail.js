import { LightningElement, wire} from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id'
export default class WireDemoUserDetail extends LightningElement {
    userId=Id

    userDetail
    @wire(getRecord, {recordId:'0055g00000FzqWQAAZ', fields:['User.Name', 'User.Email']})
    userDetailHandler({data, error}){
        if(data){
            this.userDetail=data.fields
        }
        if(error){
            console.error(error)
        }

    }
    @wire(getRecord, {recordId:'0055g00000FzqWQAAZ', fields:['User.Name', 'User.Email']})
    userDEtailProperty

    
}