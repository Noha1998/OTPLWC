import {LightningElement, api } from 'lwc';

export default class Otp extends LightningElement {

    @api value1;
    @api value2;
    @api value3;
    @api value4;

    handleKeyDown(event) {

        const currentInput = event.target;
        const nextInput = currentInput.nextElementSibling;

            nextInput.focus();
            
    }

  handleInputChange1(event) {
    console.log('event.target.value' + event.target.value);
    this.value1 = event.target.value;

};
handleInputChange2(event) {
    console.log('event.target.value' + event.target.value);
    this.value2 = event.target.value;

};
handleInputChange3(event) {
    console.log('event.target.value' + event.target.value);
    this.value3 = event.target.value;

};
handleInputChange4(event) {
    console.log('event.target.value' + event.target.value);
    this.value4 = event.target.value;

};

}
