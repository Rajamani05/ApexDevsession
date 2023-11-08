// loginForm.js
import { LightningElement } from 'lwc';

export default class LoginForm extends LightningElement {
    username = '';
    password = '';
    logoUrl = 'https://revaeduin.s3.ap-south-1.amazonaws.com/uploads/images/1636545030_eb8e424b8c32ef9fc017.png'; // Replace with your logo URL
    backgroundimageright ='https://img.freepik.com/free-photo/kids-getting-back-school-together_23-2149507650.jpg?w=1480&t=st=1698500374~exp=1698500974~hmac=ba8f0f8545092aa222a680ce32b83638675ee994c43c5d29f578fa11ec6b9702';
    handleUsernameChange(event) {
        this.username = event.target.value;
    }

    handlePasswordChange(event) {
        this.password = event.target.value;
    }

    handleReset() {
        this.username = '';
        this.password = '';
    }

    handleLogin() {
       
    }
}
