import { useState } from "react";

function TransactionList({ data, setData }) {
    const [selectedCategory, setSelectedCategory] = useState("");


    const handleFilter = (e) => {
        setSelectedCategory(e.target.value);
    };

    const filteredData = selectedCategory
        ? data.filter(item => item.category === selectedCategory)
        : data;

    const totalExpense = filteredData.reduce((sum, item) =>
        item.transaction === 'expense' ? sum + parseFloat(item.amount) : sum, 0);

    const handleClick = (id) => {
        let newData = data.filter((item) => item.id !== id)
        setData(newData);
    }

    const handleExportCSV = () => {
        const csvRows = [];

        
        const headers = Object.keys(data[0]);
        csvRows.push(headers.join(','));

        
        data.forEach(item => {
            const values = headers.map(header => item[header]);
            csvRows.push(values.join(','));
        });

        
        const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.setAttribute('hidden', '');
        a.setAttribute('href', url);
        a.setAttribute('download', 'transactions.csv');
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    return (
        <div className=" mt-4 p-2 ">
            <div className="flex space-x-4">
                {filteredData.length > 0 || selectedCategory? (
                    <select
                        value={filteredData.category}
                        name="category"
                        onChange={handleFilter}
                        className="border border-gray-300 w-32 p-2 mb-2 rounded bg-yellow-100"
                        disabled={filteredData.transaction === 'Income'}
                        required
                    >
                        <option value="">Apply Filter</option>
                        <option value="Recharge">Mobile Bill</option>
                        <option value="Groceries">Groceries</option>
                        <option value="Rent">Rent</option>
                        <option value="Utilities">Utilities</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Other">Other</option>
                    </select>) : ''}

                {selectedCategory ? <p className="border border-red-300 h-10 p-1 font-bold bg-red-100 rounded">{`${selectedCategory} Expense:₹${totalExpense}`}</p> : ''}
                {data.length > 0 ? <button onClick={handleExportCSV} className="bg-green-500  border-gray-400 h-10 p-1 text-white rounded">Export as CSV</button> :''}
            </div>
            {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                    <div key={item.id} className="border border-gray-400 flex justify-between items-center mb-1 rounded p-2 bg-white">
                        <div>
                            <p className={`${item.transaction ==='Income'? 'text-green-500' : 'text-red-400' }`}>{`${item.transaction ==='Income' ? item.transaction: item.category} : ₹${item.amount}`}</p>
                            <p className="text-sm"> Discription : {item.description}</p>
                            <p className="text-sm text-gray-500 mt-1">Date : {item.date}</p>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="bg-red-500 p-2 text-white rounded"
                                onClick={() => handleClick(item.id)}
                            >Remove</button>
                        </div>

                    </div>
                ))
            ) : ''}
        </div>
    );
}

export default TransactionList;