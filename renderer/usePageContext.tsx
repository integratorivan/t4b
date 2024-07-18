// https://vike.dev/usePageContext
import React, { useContext } from "react";
import type { PageContext } from "vike/types";

const Context = React.createContext<PageContext>(
  undefined as unknown as PageContext,
);

export const PageContextProvider = ({
  pageContext,
  children,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) => <Context.Provider value={pageContext}>{children}</Context.Provider>;

/** https://vike.dev/usePageContext */
export const usePageContext = () => useContext(Context);
