import { FormEvent, useRef } from "react";

export const Refs: React.FC = () => {
  const inputNameRef = useRef<HTMLInputElement>(null); //{current: null}
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  function hanldeOnSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(inputNameRef.current?.value);
    console.log(inputEmailRef.current?.value);
    console.log(inputPasswordRef.current?.value);
  }

  return (
    <form
      style={{ padding: "2rem" }}
      onSubmit={(event) => hanldeOnSubmit(event)}
    >
      <h1>useRef</h1>

      <br />
      <input type="text" placeholder="Nome Completo" ref={inputNameRef} />

      <input type="email" placeholder="Email" ref={inputEmailRef} />

      <input type="password" placeholder="Senha" ref={inputPasswordRef} />

      <br />
      <button type="submit">Submeter</button>
    </form>
  );
};
