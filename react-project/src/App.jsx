import ExpenseTracker from "./components/ExpenseTracker";
import { TransactionProvider } from "./TransctionContext";

function App() {
  return (
    <TransactionProvider>
      <h1 style={{ textAlign: "center", fontFamily: "monospace" }}>
        Hooks Challenges
      </h1>
      <ExpenseTracker />
    </TransactionProvider>
  );
}

export default App;
