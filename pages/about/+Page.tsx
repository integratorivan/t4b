import { atom } from "@reatom/core";
import { reatomComponent, useAtom } from "@reatom/npm-react";

import "./code.css";

const atoms = atom(0, "atomdefa");

export const Page = reatomComponent(({ ctx }) => {
  const [mut, up] = useAtom(atoms);

  return (
    <>
      <h1>About {ctx.spy(atoms)}</h1>
      <p>Example of using Vike.</p>
      <button onClick={() => up((a) => a + 1)} type="button">
        CLick
      </button>
    </>
  );
});
