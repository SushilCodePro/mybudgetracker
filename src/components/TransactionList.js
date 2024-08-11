

function TransactionList({ data ,setData}) {

    const handleClick=(id)=>{
        let newData=data.filter((item,index)=>index!==id)
        setData(newData);
    }
    return (
        <div className=" mt-4 p-2 ">
            {data.length > 0 ? (
                data.map((item, index) => (
                    <div key={index} className="border border-gray-400 flex justify-between items-center mb-1 rounded p-2">
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
                            onClick={()=>handleClick(index)}
                            >Remove</button>
                        </div>

                    </div>
                ))
            ) : ''}
        </div>
    );
}

export default TransactionList;