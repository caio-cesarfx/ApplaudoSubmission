import { LightningElement, api, wire, track } from 'lwc'
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
import getExpenseList from '@salesforce/apex/ExpenseController.getExpenseList'
// import deleteRecords from '@salesforce/apex/expenseController.deleteRecords'

import EXPENSE from '@salesforce/schema/Expense__c'

const columns = [
    {label: 'Name', fieldName:'Name', type:'text'},
    {label: 'Date', fieldName:'Expense_Date__c', type:'date'},
    {label: 'Amount', fieldName:'Amount__c', type:'currency'},
    {label: 'Is it Weekly?', fieldName:'Weekly__c', type:'checkbox'},
    {label: 'Is it Monthly?', fieldName:'Monthly__c', type:'checkbox'}
]

export default class ExpenseCreator extends LightningElement {
    @track showModal = false;
    @track positiveButtonLabel = 'Close';
    error;
    columns = columns;
    // selectedLength;

    @wire(getExpenseList)
    expenses;

    closeModal() {
        this.showModal = false;
    }

    showModalPopup() {
        this.showModal = true;
    }
}
    // This was cancelled due to an environment bug
    // deleteRecords(event){
    //     this.getSelectedRec();
    //     const toastEvent = new ShowToastEvent({
    //         title:this.selectedLength + " record(s) has been deleted.",
    //         message: "",
    //         variant:"success"
    //     })
    //     this.dispatchEvent(toastEvent)
    // }

    // getSelectedRec(){
    //     var selectedRecords = this.template.querySelector("lightning-datatable").getSelectedRows();
    //     this.selectedLength = selectedRecords.length();
    //     if (selectedRecords > 0){
    //         deleteRecords(selectedRecords);
    //     }
    // }