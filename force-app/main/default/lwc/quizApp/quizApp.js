import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {
    
    selected={}
    correctAnswers = 0
    isSubmitted=false
    myQuestions=[
        {
            id:"Question1",
            question:"which one of the following is not a template loop",
            answers:{
                a:"for-each",
                b:"iterator",
                c:"map loop"
            },
            correctAnswer:"c"
        },
        {
            id:"Question2",
            question:"which one of the invalid in LWC component folder",
            answers:{
                a:".svg",
                b:".apex",
                c:".js"
            },
            correctAnswer:"b"
        },
        {
            id:"Question3",
            question:"which one of the following is not a directive",
            answers:{
                a:"for-each",
                b:"if:true",
                c:"@track"
            },
            correctAnswer:"c"
        },
        
    ]
    get allNotSelected(){
        return !(Object.keys(this.selected).length===this.myQuestions.length)
    }
    get isScoredFull(){
        return `slds-text-heading_large ${this.myQuestions.length===this.correctAnswers?
            'slds-text-color_success':'slds-text-color_error'}`
    }
    changehandler(event){
        console.log("name",event.target.name)
        console.log("value",event.target.value)
        const {name,value}=event.target
        this.selected={...this.selected, [name]:value}
    }

    submithandler(event){
        event.preventDefault()
        let correct=this.myQuestions.filter(item=>this.selected[item.id]===item.correctAnswer)
        this.correctAnswers=correct.length
        this.isSubmitted=true
        }
    resethandler(){
        this.selected={}
        this.correctAnswers=0
        this.isSubmitted=false
    }
}
