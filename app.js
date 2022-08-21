

let money = +prompt('Ваш месячный доход?')
let income = 'Фриланс'
let addExpenses = prompt('Перечислите ваши возможные расходы?', 'Интернет, такси, коммуналка')
let deposit = confirm('Есть ли у вас депозит в банке?')
let mission = 500000
let period = 12
let budgetDay = money / 30


let expenses1 = confirm('Введете ли вы обязательную статью расходов?')
let expenses2 = confirm('Введете ли вы обязательную статью расходов?')
let amount1 = +prompt('Во сколько вам это обходится?')
let amount2 = +prompt('Во сколько вам это обходится?')

let budgetMonth = money - amount1 - amount2
console.log(budgetMonth);

let goal = mission / budgetMonth
console.log(Math.ceil(goal));

budgetDay = budgetMonth / 30
console.log(budgetDay);

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);
console.log('Период равен' + period + 'месяцев');
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(','));
console.log(Math.floor(budgetDay));
console.log(money);
console.log(deposit);



if(budgetDay <= 600) {
    console.log('У вас маленький уровень дохода');
} else if(budgetDay <= 1200) {
    console.log('У вас средний уровень дохода');
} else if(budgetDay > 1200) {
    console.log('У вас высокий уровень дохода');
}