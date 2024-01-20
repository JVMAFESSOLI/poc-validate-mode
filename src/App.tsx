import React from "react";
import { Button, Input } from "./components";

function App() {
  return (
    <div className="App">
      <Input title="Name" placeholder="Insira seu nome aqui..." />
      <Button
        title="Form Validação onSubmit"
        onClick={() => console.log("clicou")}
      />
    </div>
  );
}

export default App;
