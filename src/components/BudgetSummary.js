function BudgetSummary({ data }) {
    const totalIncome = data.reduce((sum, item) =>
        item.transaction === 'Income' ? sum + parseFloat(item.amount) : sum, 0);
    const totalExpense = data.reduce((sum, item) =>
        item.transaction === 'expense' ? sum + parseFloat(item.amount) : sum, 0);
    const balance = (totalIncome - totalExpense).toFixed(2);

    return (
        <div>
            <h1 className="text-center text-green-400 font-bold text-3xl mb-2">SushilCodeProS</h1>
            <p className="text-center font-bol text-xl mb-2">Budget Tracker</p>
            <div className="0 mb-4 p-2 grid grid-cols-3 gap-2">
                <p className="border border-gray-400 p-2 text-green-600 font-bold  bg-white rounded">Income: ₹{totalIncome}</p>
                <p className="border border-gray-400 p-2 text-red-500 font-bold  bg-white rounded">Expense: ₹{totalExpense}</p>
                <p className={`border p-2  border-gray-400 bg-white rounded font-bold ${balance < 0 ? 'text-red-500' : ''}`}>Balance: ₹{balance}</p>
            </div>
        </div>

    )
}

export default BudgetSummary;
