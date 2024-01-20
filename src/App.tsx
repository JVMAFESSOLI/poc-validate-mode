import React from "react";
import { Button, Combobox, Input } from "./components";

function App() {
  return (
    <div className="App">
      <Input title="Name" placeholder="Insira seu nome aqui..." />
      <Button
        title="Form Validação onSubmit"
        onClick={() => console.log("clicou")}
      />
      <Combobox label="Tipo" placeholder="Selecione o tipo" />
    </div>
  );
}

export default App;
