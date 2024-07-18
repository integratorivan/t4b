import { usePageContext } from "../../renderer/usePageContext";

export const Page = () => {
  const pageContext = usePageContext();
  let { abortReason } = pageContext;
  if (!abortReason) {
    abortReason = pageContext.is404
      ? "Page not found."
      : "Something went wrong.";
  }

  return <p style={{ fontSize: "1.3em" }}>{abortReason}</p>;
};

function Center({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        height: "calc(100vh - 100px)",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
}
