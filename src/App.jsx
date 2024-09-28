import Header from "./components/Header";
import AddItem from "./components/AddItem";
import Task1 from "./components/Task1";
import Task2 from "./components/Task2";
import "./App.css";
function App() {
  return (
    <>
      <center className="todo-container">
        <Header/>
        <AddItem/>
        <Task1/>
        <Task2/>
      </center>
    </>
  );
}
export default App;
