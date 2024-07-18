/* eslint-disable @typescript-eslint/no-namespace */
// eslint-disable
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// https://vike.dev/pageContext#typescript
declare global {
  namespace Vike {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface PageContext {
      Page: () => React.ReactElement;
      config: {
        /** Value for <meta name="description"> defined statically */
        description?: string;
        /** Value for <title> defined statically by /pages/some-page/+title.js (or by `export default { title }` in /pages/some-page/+config.js) */
        title?: string;
      };
      /** https://vike.dev/render */
      abortReason?: string;
      data?: {
        /** Value for <meta name="description"> defined dynmically */
        description?: string;
        /** Value for <title> defined dynmically by by /pages/some-page/+data.js */
        title?: string;
      };
    }
  }
}
