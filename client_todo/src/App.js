import logo from "./logo.svg";
import "./App.css";
import TodoApp from "./TODO/TodoApp";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoApp />
      </div>
    </Provider>
  );
}

export default App;
