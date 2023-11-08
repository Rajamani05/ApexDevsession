import { LightningElement } from 'lwc';
import getCons from '@salesforce/apex/imperativeApexDemo.getCons';

const columns=[
    {label:'FirstName', fieldName:'FirstName', type:'text'},
    {label:'LastName', fieldName:'LastName', type:'text'},
    {label:'Email', fieldName:'Email', type:'text'},
    {label:'Phone', fieldName:'MobilePhone', type:'phone'},
        ];

export default class ImperativeApexDemo extends LightningElement {
    data=[];
    columns=columns;

    constructor(){
        super();
        this.fetchCons();
    }

    fetchCons(){
        getCons()
        .then(cons=>{
            this.data=cons
            console.log(cons);
        })
    .catch(error=>{
        console.log(error.message);
        });  
    }
}