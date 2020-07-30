const inputReason = document.querySelector('#input-reason');
const inputAmount = document.querySelector('#input-amount');
const buttonCancel = document.querySelector('#button-cancel');
const buttonConfirm = document.querySelector('#button-confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpenses = document.querySelector('#total-expenses');
let totalExp = 0;

const clearFields = () => {
    inputReason.value = '';
    inputAmount.value = '';
};

const getTotal = (amount) => {
    totalExp += +amount;
    totalExpenses.textContent = '$ ' + totalExp; 
};

const createList = (reason, amount) => {
    const ionItem = document.createElement('ion-item');
    const ionLabel = document.createElement('ion-label');
    const span = document.createElement('span');
    ionLabel.textContent = reason;
    span.textContent = '$ ' + amount;
    ionItem.appendChild(ionLabel);
    ionItem.appendChild(span);
    expensesList.appendChild(ionItem);
    getTotal(amount);
    clearFields();
};

const alertModal = async () => {
    const alert = await alertController.create({
        header: 'Alert',
        subHeader: 'Error info',
        message: 'Please complet the fields.',
        buttons: ['Accept'],
    });
    return await alert.present();
};

const addEvt = () => {
    const enteredReason = inputReason.value;
    const enteredAmount = inputAmount.value;

    (enteredReason.trim().length > 0 ||
        enteredAmount > 0 ||
        enteredAmount.trim().length > 0)
        ? createList(enteredReason, enteredAmount)
        : alertModal();
};

buttonConfirm.addEventListener('click', addEvt);
buttonCancel.addEventListener('click', clearFields);