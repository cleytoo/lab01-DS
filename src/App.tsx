import { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-lg font-bold text-center text-cyan-500">
        Hello world
      </h1>

      <button className="bg-violet-500 font-md px-4 py-2 rounded text-white hover:bg-violet-600">
        Enviar
      </button>
    </>
  );
}
