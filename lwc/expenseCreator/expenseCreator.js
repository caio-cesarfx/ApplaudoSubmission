import { LightningElement, api, track } from 'lwc';
import {NavigationMixin} from 'lightning/navigation'
import { ShowToastEvent } from 'lightning/platformShowToastEvent'

import EXPENSE from '@salesforce/schema/Expense__c'
import LABEL from '@salesforce/schema/Expense__c.Name'
import DATE from '@salesforce/schema/Expense__c.Expense_Date__c'
import AMOUNT from '@salesforce/schema/Expense__c.Amount__c'
import WEEKLY from '@salesforce/schema/Expense__c.Weekly__c'
import MONTHLY from '@salesforce/schema/Expense__c.Monthly__c'

export default class ExpenseCreator extends NavigationMixin(LightningElement) {
    @api positiveButtonLabel = 'Save';
    @api negativeButtonLabel = 'Cancel';
    @api showModal;
    objectName = EXPENSE
    fieldList = [LABEL, DATE, AMOUNT, WEEKLY, MONTHLY]

    constructor() {
        super();
        this.showModal = false;
      }
      
    closeModal(){
        this.showModal = false;
        window.location.reload();
    }
    
    saveHandler(event){
        const toastEvent = new ShowToastEvent({
            title:"Success!!!",
            message: "New expense was created.",
            variant:"success"
        })
        this.dispatchEvent(toastEvent)
        this.closeModal();
    }
}