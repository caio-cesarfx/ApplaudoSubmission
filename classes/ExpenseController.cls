public with sharing class ExpenseController {
    @AuraEnabled(cacheable=true)
    public static List<Expense__c> getExpenseList(){
        try {
            return [SELECT Id, Name, Expense_Date__c, Amount__c, Weekly__c, Monthly__c FROM Expense__c];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    public static void deleteRecords(List<Expense__c> selectedRecords){
        try {
            delete selectedRecords;
        } catch (Exception e) {
            System.debug(e);
        }
    }

    public static List<String> getExpenses(){
        String objectName = 'Expense__c';
        SObjectType objType = ((SObject) (Type.forName('Schema.'+ objectName).newInstance())).getSObjectType();
        Map<String, SObjectField> fieldsByName = objType.getDescribe().fields.getMap();
        List<String> customFields = new List<String>();

        for (SObjectField field : fieldsByName.values()){
            if (field.getDescribe().isCustom()){
                customFields.add(field.getDescribe().getName());
            }
        }
        return customFields;
    }
}