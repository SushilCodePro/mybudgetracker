import { useState } from "react";

function AddTransaction({ data, setData}) {
    const [formData, setFormData] = useState({});
    // const [tempData, setTempData] = useState([...data]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value})
        console.log(formData);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const transactionWithId = { ...formData, id: Date.now() };
        setData([...data, transactionWithId]);
        // setData([...data, formData])
        // setData(tempData);
        // console.log(formData);
        setFormData({});
        console.log(data);
        console.log('submit succsesfully')
    }
    return (
        <div className="p-2 w-full border border-gray-400 sm:col-span-3 rounded">

            <form className="" onSubmit={handleSubmit}>
                <div>
                    <div className="grid grid-cols-4 gap-2">

                        <select
                            value={formData.transaction || ""}
                            name="transaction"
                            onChange={handleChange}
                            className="border border-gray-300 w-full p-2 mb-2 rounded"
                            required
                        >
                            <option value="">Select Transaction</option>
                            <option value="Income">Income</option>
                            <option value="expense">Expense</option>

                        </select>
                        <select
                            value={formData.category || ""}
                            name="category"
                            onChange={handleChange}
                            className="border border-gray-300 w-full p-2 mb-2 rounded"
                            disabled={formData.transaction === 'Income'}
                            required
                        >
                            <option value="">Select Category</option>
                            <option value="Recharge">Mobile Bill</option>
                            <option value="Groceries">Groceries</option>
                            <option value="Rent">Rent</option>
                            <option value="Utilities">Utilities</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Other">Other</option>
                        </select>
                        <input
                            type="number"
                            name="amount"
                            value={formData.amount || ""}
                            onChange={handleChange}
                            placeholder="Amount ..."
                            className="border border-gray-300 w-full p-2 mb-2 rounded"
                            required
                        />
                        <input
                            type="date"
                            name="date"
                            value={formData.date || ""}
                            onChange={handleChange}
                            placeholder="Date ..."
                            className="border border-gray-300 w-full p-2 mb-2 rounded"
                            required
                        />

                    </div>
                    <input
                        type="text"
                        name="description"
                        value={formData.description || ""}
                        onChange={handleChange}
                        placeholder="Description ..."
                        className="border border-gray-300 w-full p-2 mb-2 rounded"
                        required
                    />
                </div>
                {/* <div className="grid grid-cols-2 gap-10"> */}
                    <button type="submit" className="bg-blue-500 w-36 p-2 text-white rounded">Add Transaction</button>
                    
                {/* </div> */}


            </form>

        </div>
    );
}

export default AddTransaction;