import "./App.css";
import InputComponent from "./components/InputComponent";
import { ContextApi } from "./context/ContextApi";

function App() {
  return (
    <>
      <ContextApi>
        <InputComponent />
      </ContextApi>
    </>
  );
}

export default App;
