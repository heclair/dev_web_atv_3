
import { Provedor } from "./contexts/Contextibge";
import Principal from "./Pages/principal";

function App() {
  return (
      <Provedor>
        <Principal />
      </Provedor>
  );
}

export default App;