import "./App.css";
import MainComponent from "./components/MainComponent/MainComponent";
import { Provider } from "react-redux";
import store from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <MainComponent />
    </Provider>
  );
}

export default App;
