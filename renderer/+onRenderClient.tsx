// https://vike.dev/onRenderClient
import ReactDOM from "react-dom/client";
import type { Ctx } from "@reatom/core";
import { createCtx } from "@reatom/core";
import { reatomContext } from "@reatom/npm-react";
import type { OnRenderClientAsync } from "vike/types";

import { getPageTitle } from "./getPageTitle";
import { Layout } from "./Layout";

let root: ReactDOM.Root;
let store: Ctx | null = null;
export const onRenderClient: OnRenderClientAsync = async (
  pageContext,
): ReturnType<OnRenderClientAsync> => {
  const { Page } = pageContext;

  // This onRenderClient() hook only supports SSR, see https://vike.dev/render-modes for how to modify onRenderClient()
  // to support SPA
  if (!Page)
    throw new Error(
      "My onRenderClient() hook expects pageContext.Page to be defined",
    );

  const container = document.getElementById("react-root");
  if (!container) throw new Error("DOM element #react-root not found");

  if (!store) {
    store = createCtx();
  }

  const page = (
    <reatomContext.Provider value={store}>
      <Layout pageContext={pageContext}>
        <Page />
      </Layout>
    </reatomContext.Provider>
  );
  if (pageContext.isHydration) {
    root = ReactDOM.hydrateRoot(container, page);
  } else {
    if (!root) {
      root = ReactDOM.createRoot(container);
    }
    root.render(page);
  }
  document.title = getPageTitle(pageContext);
};
