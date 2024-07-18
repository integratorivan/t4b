import { atom } from "@reatom/core";
import { reatomComponent } from "@reatom/npm-react";

import { withSsr } from "../../renderer/reatom-ssr";
import { Counter } from "./counter";

export const filtersAtom = atom("123").pipe(withSsr("goods/filters"));

export const listAtom = atom(new Map()).pipe(
  withSsr({
    fromSnapshot: (ctx, snapshot) => new Map(snapshot as any),
    key: "goods/list",
    toSnapshot: (ctx, list) => [...list],
  }),
);

export const Page = reatomComponent(({ ctx }) => {
  console.log(ctx.spy(filtersAtom));

  return (
    <>
      <h1>Welcome: {ctx.spy(filtersAtom)}</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </>
  );
});
