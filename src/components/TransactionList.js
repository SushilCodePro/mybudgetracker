import {useState } from "react";

function TransactionList({ data, setData }) {
    const [selectedCategory, setSelectedCategory] = useState("");
    const handleClick = (id) => {
        let newData = data.filter((item, index) => index !== id)
        setData(newData);
    }

    const handleFilter = (e) => {
        setSelectedCategory(e.target.value);
      };
    
      const filteredData = selectedCategory
        ? data.filter(item => item.category === selectedCategory)
        : data;
    return (
        <div className=" mt-4 p-2 ">
            <div>
                <select
                    value={filteredData.category }
                    name="category"
                    onChange={handleFilter}
                    className="border border-gray-300 w-32 p-2 mb-2 rounded bg-yellow-100"
                    disabled={filteredData.transaction === 'income'}
                    required
                >
                    <option value="">Apply Filter</option>
                    <option value="recharge">Mobile Bill</option>
                    <option value="groceries">Groceries</option>
                    <option value="rent">Rent</option>
                    <option value="utilities">Utilities</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="other">Other</option>
                </select>
            </div>
            {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                    <div key={index} className="border border-gray-400 flex justify-between items-center mb-1 rounded p-2 bg-white">
                        <div>
                            <p>Transaction : {item.transaction}</p>
                            {item.category ? <p> Category : {item.category}</p> : ''}
                            <p> Amount : ₹{item.amount}</p>
                            <p> Discription : {item.description}</p>
                            <p>Date : {item.date}</p>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="bg-red-500 p-2 text-white rounded"
                                onClick={() => handleClick(index)}
                            >Remove</button>
                        </div>

                    </div>
                ))
            ) : ''}
        </div>
    );
}

export default TransactionList;