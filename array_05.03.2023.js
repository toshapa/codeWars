const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
    let sum = 0;
    data.forEach(element => {
        if (element.amount >= 0 ) {
            sum += element.amount
        }
    });
    return sum
};

getPositiveIncomeAmount(funds);

const getTotalIncomeAmount = (data) => {
    return data.some(item => item.amount < 0) ? data.reduce((acc, curr) => acc + curr.amount, 0) : getPositiveIncomeAmount(data);
}

getTotalIncomeAmount(funds)