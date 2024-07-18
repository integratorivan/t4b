// https://vike.dev/onRenderHtml

import ReactDOMServer from "react-dom/server";
import type { AtomMut, Rec } from "@reatom/core";
import { createCtx, Ctx } from "@reatom/core";
import { reatomContext } from "@reatom/npm-react";
import type { PersistRecord } from "@reatom/persist";
import { dangerouslySkipEscape, escapeInject } from "vike/server";
import type { OnRenderHtmlAsync } from "vike/types";

import { getPageTitle } from "./getPageTitle";
import { Layout } from "./Layout";
import logoUrl from "./logo.svg";
import { snapshotAtom } from "./reatom-ssr";

export const onRenderHtml: OnRenderHtmlAsync = async (
  pageContext,
): ReturnType<OnRenderHtmlAsync> => {
  const { Page } = pageContext;
  const ctx = createCtx();

  console.log(pageContext);

  snapshotAtom(ctx, pageContext.snapshot);

  // This onRenderHtml() hook only supports SSR, see https://vike.dev/render-modes for how to modify
  // onRenderHtml() to support SPA
  if (!Page)
    throw new Error(
      "My onRenderHtml() hook expects pageContext.Page to be defined",
    );

  // Alternativly, we can use an HTML stream, see https://vike.dev/streaming
  const pageHtml = ReactDOMServer.renderToString(
    <reatomContext.Provider value={ctx}>
      <Layout pageContext={pageContext}>
        <Page />
      </Layout>
    </reatomContext.Provider>,
  );

  // See https://vike.dev/head
  const title = getPageTitle(pageContext);
  const desc =
    pageContext.data?.description ||
    pageContext.config.description ||
    "Demo of using Vike";

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="${logoUrl}" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${desc}" />
        <title>${title}</title>
      </head>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can add custom pageContext properties here, see https://vike.dev/pageContext#custom
    },
  };
};
