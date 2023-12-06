import "./App.css";
import "./index.css";

import Rodape from "./components/rodape";
import Header from "./components/header/header";
import Toggler from "./components/toggler/toggler";
import PageUserLogin from "./pages/usuarioLogin";
function App() {
  return (
    <div className="App">
      <PageUserLogin />
    </div>
  );
}

export default App;
