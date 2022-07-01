# ApplaudoSubmission

Caio César's submission to Applaudo's Salesforce test.

## Getting Started

Search for the "Expenses App" on App Launcher.

## Object setup

The "Expense__c" object were created, as instructed.
Two checkbox fields were added to ask the user if a expense is weekly recurrent or monthly recurrent, those are, respectively, Weekly__c and Monthly__c.
To sum weekly recurrency on monthly reports, a formula field were created to multiply the amount of each weekly expense by 4. This approach won't consider non-commercial months or 5 weeks months.

## Tabs
### Home Page

The home page is where both components were developed. The expenseList is the first one, showing all expenses created and their values.
By clicking on the "New" button, we open the expenseCreator component. There we can create a new Expense in a form with Label/Name, Date, Amount and checkboxes for recurrency by Week and Month.
* The recurrency still needs some improvements.

### Records and Dashboard

There is only one report and dashboard created for the purposes of this test.
The "Expenses per Category" report shows a report table with all expenses grouped by category. This report considers the WeeklyAmount field for Monthly dashboard purposes.
The "Expenses per month" dashboard shows a donut chart, split by category and filtered by month. Months were considered to change on every 15th day.

## Improvements

As told, the monthly recurrency is not being considered on every month. That requires some further research.
As for the weekly recurrency, it's also not robust enough for every scenario.
