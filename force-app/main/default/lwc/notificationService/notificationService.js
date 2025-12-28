import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class NotificationService extends LightningElement {
    showSuccessNotification(title, message) {
        this.dispatchEvent(
            new ShowToastEvent({
                title: title || 'Success',
                message: message,
                variant: 'success',
                mode: 'dismissable'
            })
        );
    }

    showErrorNotification(title, message) {
        this.dispatchEvent(
            new ShowToastEvent({
                title: title || 'Error',
                message: message,
                variant: 'error',
                mode: 'dismissable'
            })
        );
    }

    showWarningNotification(title, message) {
        this.dispatchEvent(
            new ShowToastEvent({
                title: title || 'Warning',
                message: message,
                variant: 'warning',
                mode: 'dismissable'
            })
        );
    }

    showInfoNotification(title, message) {
        this.dispatchEvent(
            new ShowToastEvent({
                title: title || 'Info',
                message: message,
                variant: 'info',
                mode: 'pester'
            })
        );
    }
}
