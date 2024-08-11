import AddTransaction from "./components/AddTransaction";
import BudgetSummary from "./components/BudgetSummary";
import TransactionList from "./components/TransactionList";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState(()=>{
    const savedData=localStorage.getItem('transactions');
    return savedData ? JSON.parse(savedData) : [] ;
  });

  useEffect(()=>{
    localStorage.setItem('transactions', JSON.stringify(data));
  },[data]);
  
  return (
    <div className="border border-black m-5 p-4">
      <BudgetSummary data={data}/>
      <AddTransaction data={data} setData={setData}/>
      <TransactionList data={data} setData={setData} />
    </div>
  );
}

export default App;
