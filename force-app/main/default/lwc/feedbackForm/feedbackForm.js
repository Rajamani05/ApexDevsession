import { LightningElement, track } from 'lwc';

export default class FeedbackForm extends LightningElement {
    @track showOtherService = false;
    @track showConcerns = false;
    @track showRecommendedServices = false;

    @track otherService = '';
    @track concerns = '';
    @track recommendedServices = '';

    handleChange(event) {
        const { name, value } = event.target;
        if (name === 'serviceType') {
            this.showOtherService = value === 'Other';
        }
        if (name === 'explanation') {
            this.showConcerns = value === 'No';
        }
        if (name === 'additionalServices') {
            this.showRecommendedServices = value === 'Yes';
        }
    }

    handleSubmit() {
        // Handle form submission and data collection here
    }
}