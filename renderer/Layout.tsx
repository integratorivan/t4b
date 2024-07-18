import React from "react";
import type { PageContext } from "vike/types";

import { Link } from "./Link";
import logoUrl from "./logo.svg";
import { PageContextProvider } from "./usePageContext";

import "./css/index.css";
import "./Layout.css";

export const Layout = ({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) => (
  <React.StrictMode>
    <PageContextProvider pageContext={pageContext}>
      <Frame>
        <Sidebar>
          <Logo />
          <Link href="/">Welcome</Link>
          <Link href="/about">About</Link>
          <Link href="/star-wars">Data Fetching</Link>
        </Sidebar>
        <Content>{children}</Content>
      </Frame>
    </PageContextProvider>
  </React.StrictMode>
);

const Frame = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      display: "flex",
      margin: "auto",
      maxWidth: 900,
    }}
  >
    {children}
  </div>
);

const Sidebar = ({ children }: { children: React.ReactNode }) => (
  <div
    id="sidebar"
    style={{
      borderRight: "2px solid #eee",
      display: "flex",
      flexDirection: "column",
      flexShrink: 0,
      lineHeight: "1.8em",
      padding: 20,
    }}
  >
    {children}
  </div>
);

const Content = ({ children }: { children: React.ReactNode }) => (
  <div id="page-container">
    <div
      id="page-content"
      style={{
        minHeight: "100vh",
        padding: 20,
        paddingBottom: 50,
      }}
    >
      {children}
    </div>
  </div>
);

const Logo = () => (
  <div
    style={{
      marginBottom: 10,
      marginTop: 20,
    }}
  >
    <a href="/">
      <img alt="logo" height={64} src={logoUrl} width={64} />
    </a>
  </div>
);
