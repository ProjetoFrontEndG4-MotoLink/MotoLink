import { RounterMain } from "./Routes/RouterMain";
import { GlobalStyles } from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <RounterMain />
      <GlobalStyles />
    </div>
  );
};
