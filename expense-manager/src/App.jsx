import { useState } from "react"

import Header from "./components/Header"
import Summary from "./components/Summary"
import TransactionForm from "./components/TransactionForm"
import TransactionList from "./components/TransactionList"

function App() {
  const [transactions, setTransactions] = useState([])

  return (
    <div>
      <Header />

      <main>
        <Summary />

        <TransactionForm />

        <TransactionList />
      </main>
    </div>
  )
}

export default App