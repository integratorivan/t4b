// https://vike.dev/onBeforeRender
import { renderToString } from "react-dom/server";
import { createCtx } from "@reatom/core";
import { reatomContext } from "@reatom/npm-react";
import type { PageContext } from "vike/types";

import { Layout } from "./Layout";
import { snapshotAtom } from "./reatom-ssr";

export default onBeforeRender;

function onBeforeRender(pageContext: PageContext) {
  const ctx = createCtx();
  const snapshot = ctx.get(snapshotAtom);

  const { Page } = pageContext;

  const pageHtml = renderToString(
    <reatomContext.Provider value={ctx}>
      <Layout pageContext={pageContext}>
        <Page />
      </Layout>
    </reatomContext.Provider>,
  );

  return {
    pageContext: {
      pageHtml,
      snapshot,
    },
  };
}
