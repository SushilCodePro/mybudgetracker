import AddTransaction from "./components/AddTransaction";
import BudgetSummary from "./components/BudgetSummary";
import ExpenseChart from "./components/ExpenseChart";
import TransactionList from "./components/TransactionList";
import { useEffect, useState } from "react";

function App() {
  
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('transactions');
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(data));
  }, [data]);

 
  return (
    <div className="border border-black bg-gray-100 m-5 p-4">
      <BudgetSummary data={data} />
      <div className="grid w-full sm:grid-cols-4 m-2">
        <AddTransaction data={data} setData={setData} />
        <ExpenseChart data={data}/>
      </div>
      {/* <AddTransaction data={data} setData={setData} /> */}
      <TransactionList data={data} setData={setData} />
      {/* <ExpenseChart data={data}/> */}
    </div>
  );
}

export default App;
